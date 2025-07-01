## 1. yolov8n.onnx从ultralytics包导出报错

在pc本地创建虚拟环境，在装了 ultralytics 包后直接使用 yolo 指令成功导出 onnx 文件：

``````
sudo apt update
sudo apt install python3 python3-venv python3-pip -y
python3 -m venv shls
source shl/bin/activate
pip ultralytics

yolo export model=yolov8n.pt format=onnx
``````

当前目录下成功导出yolov8n.onnx，日志如下
Ultralytics 8.3.153 🚀 Python-3.10.12 torch-2.7.1+cu126 CPU (12th Gen Intel Core(TM) i5-12400F)
YOLOv8n summary (fused): 72 layers, 3,151,904 parameters, 0 gradients, 8.7 GFLOPs

PyTorch: starting from 'yolov8n.pt' with input shape (1, 3, 640, 640) BCHW and output shape(s) (1, 84, 8400) (6.2 MB)

ONNX: starting export with onnx 1.17.0 opset 19...
ONNX: slimming with onnxslim 0.1.57...
ONNX: export success ✅ 0.6s, saved as 'yolov8n.onnx' (12.2 MB)

Export complete (0.8s)
Results saved to /home/lee/hhb_compile
Predict:         yolo predict task=detect model=yolov8n.onnx imgsz=640  
Validate:        yolo val task=detect model=yolov8n.onnx imgsz=640 data=coco.yaml  
Visualize:       https://netron.app
💡 Learn more at https://docs.ultralytics.com/modes/export
...操作成功，未复现错误，疑似导出指令不符合NPU架构 / 内存泄露 / 模型张量不匹配

## 2. hhb_runtime运行崩溃

使用hhb编译命令进行编译
hhb -C --model-file ./yolov8n.onnx --data-scale-div 255 --board th1520 --input-name "images" --output-name "output0" --input-shape "1 3 640 640" --calibrate-dataset bus.jpg  --quantization-scheme "int8_asym"
...成功构建文件，日志如下
[2025-06-11 17:41:58] (HHB LOG): Start import model.
[2025-06-11 17:41:59] (HHB LOG): Model import completed! 
[2025-06-11 17:41:59] (HHB LOG): Start quantization.
[2025-06-11 17:41:59] (HHB LOG): get calibrate dataset from bus.jpg
[2025-06-11 17:41:59] (HHB LOG): Start optimization.
[2025-06-11 17:42:00] (HHB LOG): Optimization completed!
Calibrating: 100%|████████████████████████████| 353/353 [00:19<00:00, 17.73it/s]
[2025-06-11 17:42:19] (HHB LOG): Start conversion to csinn.
[2025-06-11 17:42:20] (HHB LOG): Conversion completed!
[2025-06-11 17:42:20] (HHB LOG): Start operator fusion.
[2025-06-11 17:42:20] (HHB LOG): Operator fusion completed!
[2025-06-11 17:42:20] (HHB LOG): Start operator split.
[2025-06-11 17:42:20] (HHB LOG): Operator split completed!
[2025-06-11 17:42:20] (HHB LOG): Start layout convert.
[2025-06-11 17:42:20] (HHB LOG): Layout convert completed!
[2025-06-11 17:42:20] (HHB LOG): Quantization completed!
...将构建成功的文件copy到开发板后，进行复现步骤
sudo apt install python3-full
python3 -m venv ./shl
./shl/bin/pip install shl-python
LIB=$(./shl/bin/python3 -m shl --whereis th1520)/lib
export LD_LIBRARY_PATH=$LIB:$LD_LIBRARY_PATH
cd hhb_out
./hhb_runtime ./hhb.bm ../bus.jpg
...在运行后未发现 dmesg 后台日志有报错信息，分析崩溃报错，估计是 libshl_th1520.so.2 链接器发生的链接错误导致的崩溃，使用 lld 对 hhb_runtime 进行检查依赖
ldd ./hhb_runtime
...得到动态依赖库列表如下
linux-vdso.so.1 (0x0000003f9484e000)
  libshl_th1520.so.2 => /home/debian/hhb_out/shl/lib/python3.11/site-packages/shl/install_nn2/th1520/lib/libshl_th1520.so.2 (0x0000003f946eb000)
  libstdc++.so.6 => /lib/riscv64-linux-gnu/libstdc++.so.6 (0x0000003f94400000)
  libm.so.6 => /lib/riscv64-linux-gnu/libm.so.6 (0x0000003f9466e000)
  libc.so.6 => /lib/riscv64-linux-gnu/libc.so.6 (0x0000003f9427f000)
  libimgdnn.so => /lib/riscv64-linux-gnu/libimgdnn.so (0x0000003f93200000)
  libnnasession.so => /lib/riscv64-linux-gnu/libnnasession.so (0x0000003f93133000)
  libgomp.so.1 => /lib/riscv64-linux-gnu/libgomp.so.1 (0x0000003f9461e000)
  libpthread.so.0 => /lib/riscv64-linux-gnu/libpthread.so.0 (0x0000003f9461b000)
  libatomic.so.1 => /lib/riscv64-linux-gnu/libatomic.so.1 (0x0000003f94610000)
  libgcc_s.so.1 => /lib/riscv64-linux-gnu/libgcc_s.so.1 (0x0000003f93116000)
  /lib/ld-linux-riscv64xthead-lp64d.so.1 => /lib/ld-linux-riscv64-lp64d.so.1 (0x0000003f94850000)
  libdl.so.2 => /lib/riscv64-linux-gnu/libdl.so.2 (0x0000003f9427c000)
  libcrypto.so.3 => /lib/riscv64-linux-gnu/libcrypto.so.3 (0x0000003f92c00000)
  libz.so.1 => /lib/riscv64-linux-gnu/libz.so.1 (0x0000003f93101000)
  libzstd.so.1 => /lib/riscv64-linux-gnu/libzstd.so.1 (0x0000003f9303d000)


其中发现了 libshl_th1520.so.2 => /home/debian/hhb_out/shl/lib/python3.11/site-packages/shl/install_nn2/th1520/lib/libshl_th1520.so.2 (0x0000003f946eb000) ，操作成功，未复现错误，疑似开发板动态链接库配置问题或 hhb_runtime 文件构建问题