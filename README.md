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

1. 对 [milk-v meles上部署yolov8n报错的Issue](https://github.com/revyos/revyos/issues/131) 在meles和LicheePi4a上分别进行复现并 [报告](report/report01.md)

2. 为比对不同内核下TH1520的性能表现，使用6.6内核的LicheePi4a对 [各项Benchmark进行测试](https://docs.revyos.dev/docs/benchmark/Chromium-Fish-Bowl-Test/) （跳过重启测试）并进行总结 [报告](report/report02.md) ，测试项如下（测试数据记录与[6.6.92 benchmark](test_data/6.6.92%20benchmark/)：
    - Chromium鱼缸测试
    - coremark
    - glmark2
    - LMbench
    - p7zip
    - Stream

