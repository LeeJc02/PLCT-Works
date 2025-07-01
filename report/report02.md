# TH1520 RevyOS 6.6.92 Benchmark测试

---

- 内核版本：Linux revyos-lpi4a 6.6.92-th1520 #2025.05.26.14.02+c9a17b235 SMP Mon May 26 14:22:33 UTC 2025 riscv64 GNU/Linux

## 1. Chromium鱼缸测试

![image-20250620050337902](/Users/lee/Library/Application Support/typora-user-images/image-20250620050337902.png)

**注**：本测试使用x11vnc实现，并非物理层面HDMI连接测试



## 2. coremark

- make

```make
git clone https://github.com/eembc/coremark.git
cd coremark
make
```

- 结果

```\
2K performance run parameters for coremark.
CoreMark Size    : 666
Total ticks      : 13808
Total time (secs): 13.808000
Iterations/Sec   : 7966.396292
Iterations       : 110000
Compiler version : GCC14.2.0
Compiler flags   : -O2 -DPERFORMANCE_RUN=1  -lrt
Memory location  : Please put data memory location here
			(e.g. code in flash, data on heap etc)
seedcrc          : 0xe9f5
[0]crclist       : 0xe714
[0]crcmatrix     : 0x1fd7
[0]crcstate      : 0x8e3a
[0]crcfinal      : 0x33ff
Correct operation validated. See README.md for run and reporting rules.
CoreMark 1.0 : 7966.396292 / GCC14.2.0 -O2 -DPERFORMANCE_RUN=1  -lrt / Heap
```



- GCC + xtheadc

```
make clean
make XCFLAGS="-march=rv64gv0p7_zfh_xtheadc -O3 -funroll-all-loops -finline-limit=500 -fgcse-sm -fno-schedule-insns  -msignedness-cmpiv -fno-code-hoisting -mno-thread-jumps1 -mno-iv-adjust-addr-cost -mno-expand-split-imm"
```

- 结果

```
2K performance run parameters for coremark.
CoreMark Size    : 666
Total ticks      : 14060
Total time (secs): 14.060000
Iterations/Sec   : 7823.613087
Iterations       : 110000
Compiler version : GCC14.2.0
Compiler flags   : -O2   -lrt
Memory location  : Please put data memory location here
                        (e.g. code in flash, data on heap etc)
seedcrc          : 0xe9f5
[0]crclist       : 0xe714
[0]crcmatrix     : 0x1fd7
[0]crcstate      : 0x8e3a
[0]crcfinal      : 0x33ff
Correct operation validated. See README.md for run and reporting rules.
CoreMark 1.0 : 7823.613087 / GCC14.2.0 -O2   -lrt / Heap
```



- GCC  + xthead matrix

```
make clean
make XCFLAGS="-march=rv64imafd_xtheadba_xtheadbb_xtheadbs_xtheadcmo_xtheadcondmov_xtheadfmemidx_xtheadfmv_xtheadint_xtheadmac_xtheadmemidx_xtheadmempair_xtheadsync -O3 -funroll-all-loops -finline-limit=500 -fgcse-sm -fno-schedule-insns -fno-code-hoisting -mno-thread-jumps"
```

- 结果

```
2K performance run parameters for coremark.
CoreMark Size    : 666
Total ticks      : 14075
Total time (secs): 14.075000
Iterations/Sec   : 7815.275311
Iterations       : 110000
Compiler version : GCC14.2.0
Compiler flags   : -O2   -lrt
Memory location  : Please put data memory location here
                        (e.g. code in flash, data on heap etc)
seedcrc          : 0xe9f5
[0]crclist       : 0xe714
[0]crcmatrix     : 0x1fd7
[0]crcstate      : 0x8e3a
[0]crcfinal      : 0x33ff
Correct operation validated. See README.md for run and reporting rules.
CoreMark 1.0 : 7815.275311 / GCC14.2.0 -O2   -lrt / Heap
```

**注**：仅展示一次，三种方案的10次测试结果见文件



## 3.  glmark2

- 命令

```
sudo sh -c 'echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor'
sudo cat /sys/devices/system/cpu/cpufreq/policy0/cpuinfo_cur_freq
glmark2-es2
```

- 结果

```
=======================================================
    glmark2 2021.12
=======================================================
    OpenGL Information
    GL_VENDOR:      Imagination Technologies
    GL_RENDERER:    PowerVR B-Series BXM-4-64
    GL_VERSION:     OpenGL ES 3.2 build 1.17@6210866
    Surface Config: buf=32 r=8 g=8 b=8 a=8 depth=24 stencil=8
    Surface Size:   800x600 windowed
=======================================================
[build] use-vbo=false: FPS: 480 FrameTime: 2.083 ms
[build] use-vbo=true: FPS: 796 FrameTime: 1.256 ms
[texture] texture-filter=nearest: FPS: 826 FrameTime: 1.211 ms
[texture] texture-filter=linear: FPS: 825 FrameTime: 1.212 ms
[texture] texture-filter=mipmap: FPS: 820 FrameTime: 1.220 ms
[shading] shading=gouraud: FPS: 807 FrameTime: 1.239 ms
[shading] shading=blinn-phong-inf: FPS: 799 FrameTime: 1.252 ms
[shading] shading=phong: FPS: 775 FrameTime: 1.290 ms
[shading] shading=cel: FPS: 757 FrameTime: 1.321 ms
[bump] bump-render=high-poly: FPS: 605 FrameTime: 1.653 ms
[bump] bump-render=normals: FPS: 827 FrameTime: 1.209 ms
[bump] bump-render=height: FPS: 837 FrameTime: 1.195 ms
[effect2d] kernel=0,1,0;1,-4,1;0,1,0;: FPS: 792 FrameTime: 1.263 ms
[effect2d] kernel=1,1,1,1,1;1,1,1,1,1;1,1,1,1,1;: FPS: 379 FrameTime: 2.639 ms
[pulsar] light=false:quads=5:texture=false: FPS: 740 FrameTime: 1.351 ms
[desktop] blur-radius=5:effect=blur:passes=1:separable=true:windows=4: FPS: 273 FrameTime: 3.663 ms
[desktop] effect=shadow:windows=4: FPS: 562 FrameTime: 1.779 ms
[buffer] columns=200:interleave=false:update-dispersion=0.9:update-fraction=0.5:update-method=map: FPS: 151 FrameTime: 6.623 ms
[buffer] columns=200:interleave=false:update-dispersion=0.9:update-fraction=0.5:update-method=subdata: FPS: 159 FrameTime: 6.289 ms
[buffer] columns=200:interleave=true:update-dispersion=0.9:update-fraction=0.5:update-method=map: FPS: 207 FrameTime: 4.831 ms
[ideas] speed=duration: FPS: 463 FrameTime: 2.160 ms
[jellyfish] <default>: FPS: 530 FrameTime: 1.887 ms
[terrain] <default>: FPS: 42 FrameTime: 23.810 ms
[shadow] <default>: FPS: 555 FrameTime: 1.802 ms
[refract] <default>: FPS: 83 FrameTime: 12.048 ms
[conditionals] fragment-steps=0:vertex-steps=0: FPS: 864 FrameTime: 1.157 ms
[conditionals] fragment-steps=5:vertex-steps=0: FPS: 836 FrameTime: 1.196 ms
[conditionals] fragment-steps=0:vertex-steps=5: FPS: 863 FrameTime: 1.159 ms
[function] fragment-complexity=low:fragment-steps=5: FPS: 845 FrameTime: 1.183 ms
[function] fragment-complexity=medium:fragment-steps=5: FPS: 807 FrameTime: 1.239 ms
[loop] fragment-loop=false:fragment-steps=5:vertex-steps=5: FPS: 831 FrameTime: 1.203 ms
[loop] fragment-steps=5:fragment-uniform=false:vertex-steps=5: FPS: 833 FrameTime: 1.200 ms
[loop] fragment-steps=5:fragment-uniform=true:vertex-steps=5: FPS: 842 FrameTime: 1.188 ms
=======================================================
                                  glmark2 Score: 630
=======================================================
```

**注**：本测试使用x11vnc实现，并非物理层面HDMI连接测试



## 4. LMbench

- 命令

```
git clone https://github.com/revyos/lmbench3.git
sudo apt install gcc make libntirpc-dev -y
cd lmbench3
cd src
make results
```

- 结果

  详情见LMbench.log日志

  

## 5. p7zip

- 命令

```
sudo apt update
sudo apt install p7zip-full
7z b
```

- 结果

```
7-Zip 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=en_US.UTF-8,Utf16=on,HugeFiles=on,64 bits,4 CPUs LE)

LE
CPU Freq: - - - - - 256000000 512000000 - -

RAM size:   15814 MB,  # CPU hardware threads:   4
RAM usage:    882 MB,  # Benchmark threads:      4

                       Compressing  |                  Decompressing
Dict     Speed Usage    R/U Rating  |      Speed Usage    R/U Rating
         KiB/s     %   MIPS   MIPS  |      KiB/s     %   MIPS   MIPS

22:       2991   289   1007   2910  |      73112   387   1610   6238
23:       2986   291   1047   3043  |      71981   390   1598   6228
24:       2927   290   1084   3148  |      71101   392   1590   6242
25:       2830   291   1111   3232  |      70544   395   1590   6278
----------------------------------  | ------------------------------
Avr:             290   1062   3083  |              391   1597   6246
Tot:             341   1330   4665
```



## 6. Stream

- 命令

```
git clone https://github.com/jeffhammond/STREAM.git
cd STREAM
gcc -O3 -fopenmp -DSTREAM_ARRAY_SIZE=2000000 -DNTIMES=10 stream.c -o stream
export OMP_NUM_THREADS=8
./stream
```

- 结果

```
-------------------------------------------------------------
STREAM version $Revision: 5.10 $
-------------------------------------------------------------
This system uses 8 bytes per array element.
-------------------------------------------------------------
Array size = 2000000 (elements), Offset = 0 (elements)
Memory per array = 15.3 MiB (= 0.0 GiB).
Total memory required = 45.8 MiB (= 0.0 GiB).
Each kernel will be executed 10 times.
 The *best* time for each kernel (excluding the first iteration)
 will be used to compute the reported bandwidth.
-------------------------------------------------------------
Number of Threads requested = 8
Number of Threads counted = 8
-------------------------------------------------------------
Your clock granularity/precision appears to be 1 microseconds.
Each test below will take on the order of 6821 microseconds.
   (= 6821 clock ticks)
Increase the size of the arrays if this shows that
you are not getting at least 20 clock ticks per test.
-------------------------------------------------------------
WARNING -- The above is only a rough guideline.
For best results, please be sure you know the
precision of your system timer.
-------------------------------------------------------------
Function    Best Rate MB/s  Avg time     Min time     Max time
Copy:            6775.3     0.007046     0.004723     0.013104
Scale:           6749.7     0.006871     0.004741     0.011053
Add:             5316.3     0.011626     0.009029     0.013662
Triad:           4819.2     0.011529     0.009960     0.013447
-------------------------------------------------------------
Solution Validates: avg error less than 1.000000e-13 on all three arrays
-------------------------------------------------------------
```

**注**：1. 下载地址更换为`https://github.com/jeffhammond/STREAM.git`

​	2. 将`-DN`参数修改为`-DSTREAM_ARRAY_SIZE`解决版本警告