# LeeJc02 @ Work in PLCT
本人现实习于：[PLCT实验室RevyOS小队实习生](https://github.com/lazyparser/weloveinterns/blob/master/open-internships.md)


>PLCT全称是程序语言与编译技术实验室，隶属于中国科学院软件研究所（ISCAS）智能软件研究中心（ISRC）。PLCT实验室致力于成为编译技术领域的开源领导者，推进工具链及运行时系统等软件基础设施的技术革新，具备主导开发和维护重要基础设施的技术及管理能力。与此同时，致力于培养一万名编译领域尖端人才，推动先进编译技术在国内的普及和发展。

实习开源地址：[RevyOS仓库](https://github.com/revyos)

相关技术文档：[RevyOS参考手册](https://docs.revyos.dev)



欢迎加入我们小队，参与RevyOS开源开发和维护🥰🥰

期待你的加入！🥳🥳

---

## 工作日志

### 2025年6月

1. 对 [milk-v meles 上部署 yolov8n 报错的 Issue ](https://github.com/revyos/revyos/issues/131) 在 meles 和LicheePi4a上分别进行复现并 [报告](report/report01.md)

2. 为比对不同内核下 TH1520 的性能表现，使用6.6内核的 LicheePi4a 对 [各项 Benchmark 进行测试](https://docs.revyos.dev/docs/benchmark/Chromium-Fish-Bowl-Test/) （跳过重启测试）并进行总结 [报告](report/report02.md) ，测试项如下（测试数据记录与[6.6.92 benchmark](test_data/6.6.92%20benchmark/))：
    - Chromium鱼缸测试
    - coremark
    - glmark2
    - LMbench
    - p7zip
    - Stream

### 2025年7月

1. 对 [milk-v meles 最新内核（6.6.82）中 Wi-Fi 信号弱的 Issue ](https://github.com/revyos/revyos/issues/118)整理到docs中并提交[PR](https://github.com/revyos/docs/pull/51)

2. 对 [语雀 RevyOS 模型推理文档 ](https://www.yuque.com/za4k4z/yp3bry)进行复现、整理、并对 docs 中提交[PR](https://github.com/revyos/docs/pull/53)，相关内容如下：

| 类别       | 模型名称      | 复现方式 | 移植文档 |
|------------|--------------|----------|----------------|
| 图像分类   | [Resnet50](https://www.yuque.com/za4k4z/yp3bry/ovk8a3n28who4g70)      | CPU & NPU | 英文文档 |
| 图像分类   | [MobilenetV2](https://www.yuque.com/za4k4z/yp3bry/bydoimgbukpbgzvk)   | CPU & NPU | 中文 & 英文档 |
| 图像分类   | [EfficientNet](https://www.yuque.com/za4k4z/yp3bry/ru54kmi873iy5hhc)  | CPU    | 中文 & 英文档 |
| 图像分类   | [ShuffleNet](https://www.yuque.com/za4k4z/yp3bry/cig55977bedg8xsv)    | CPU       | 中文 & 英文档 |
| 图像分类   | [AlexNet](https://www.yuque.com/za4k4z/yp3bry/burx7hbtry0wnldg)       | CPU & NPU | 中文 & 英文档 |
| 图像分类   | [MobilenetV1](https://www.yuque.com/za4k4z/yp3bry/lxwtygkglgorhext)   | CPU & NPU | 中文 & 英文档 |
| 图像分类   | [VGG16](https://www.yuque.com/za4k4z/yp3bry/iat0ws79huhs2u0d)         | CPU & NPU | 中文 & 英文档 |
| 图像分类   | [SqueezeNet](https://www.yuque.com/za4k4z/yp3bry/hul8ehriofr79pyr)    | CPU & NPU | 中文 & 英文档 |
| 图像分类   | [InceptionV1](https://www.yuque.com/za4k4z/yp3bry/wwtiklpxzhabwxpa)   | CPU & NPU | 中文 & 英文档 |
| 图像分类   | [InceptionV3](https://www.yuque.com/za4k4z/yp3bry/gzgoxqo4s3utbl7a)   | CPU & NPU | 中文 & 英文档 |
| 图像分类   | [InceptionV4](https://www.yuque.com/za4k4z/yp3bry/cs6zzqf9xi3a7ldc)   | CPU & NPU | 中文 & 英文档 |
| 阅读理解   | [BERT](https://www.yuque.com/za4k4z/yp3bry/fuawl24f9t3wl7zp)          | CPU & NPU | 中文 & 英文档 |
| 姿态估计   | [RTMPose-基础执行](https://www.yuque.com/za4k4z/yp3bry/mf7r6yvas72ig3rq) | 基础执行   | 中文 & 英文档 |
| 姿态估计   | [RTMPose-性能优化](https://www.yuque.com/za4k4z/yp3bry/oz7gcq0r5z318fpw) | 性能优化   | 中文 & 英文档 |
| 姿态估计   | [RTMPose-实时演示](https://www.yuque.com/za4k4z/yp3bry/yoyx0ngg0hra9k7x) | 实时演示   | 中文 & 英文档 |

3. 对 docs 文档进行修复冲突和锚点链接问题


### 2025年8月

### 2025年9月

1. 对 [docs 文档](https://docs.revyos.dev/docs/intro/)中 meles、pioneer、console-4a 更新最新镜像
2. 在 revyos-c910v 删除后，对相关文档进行更新，并使用 revyos-base 代替
3. 新增编译器相关说明中 GCC14.2 版本数据
4. 将 [pull36](https://github.com/revyos/docs/pull/36) 中的内容整理至 docs 中并提交
5. 将 [p7zip](https://docs.revyos.dev/docs/benchmark/p7zip/) 相关文档替换为 7zip
6. 对文档规范性进行了审查修改，包括但不限于文档中英格式、语言逻辑、语法、翻译等

### 2025年10月

1. 对 [语雀 RevyOS 模型推理文档 ](https://www.yuque.com/za4k4z/yp3bry)进行复现、整理、并对 docs 中提交[PR](https://github.com/revyos/docs/pull/71)，相关内容如下：

| 类别       | 模型名称      | 复现方式 | 移植文档 |
|------------|--------------|----------|----------------|
| 图像分类   | [YOLOv5](https://www.yuque.com/za4k4z/)      | CPU & NPU | 英文文档 |
| 图像分类   | [YOLOX](https://www.yuque.com/za4k4z/yp3bry/)   | CPU & NPU | 中文 & 英文档 |

2. 整合典型应用部分的 BERT 模型部署、YOLOX 模型部署、MobilenetV2 模型部署到 [使用 RevyOS 推理模型](https://docs.revyos.dev/docs/npu/) 总目录下，并提交 PR

3. 对部分英文文档进行校验优化