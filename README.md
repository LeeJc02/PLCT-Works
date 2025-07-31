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



