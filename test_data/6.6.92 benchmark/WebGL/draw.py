import pandas as pd
import matplotlib.pyplot as plt

# === 1. 读取 CSV 文件 ===
file_path = 'data.csv'
data = pd.read_csv(file_path, header=None, names=['value'])

# === 2. 检查数据条数是否为 60 ===
if len(data) != 60:
    raise ValueError(f"数据点数量为 {len(data)}，应为 60 点！")

# === 3. 构造 x 轴（次数 1~60） ===
x = range(1, 61)
y = data['value']

# === 4. 绘图 ===
plt.figure(figsize=(10, 5))
plt.plot(x, y, label='FPS Line', color='blue', linestyle='-', linewidth=2)
plt.scatter(x, y, label='FPS Points', color='red', s=25)

# 图标题和坐标轴标注
plt.title('Aquarium FPS Result', fontsize=14)
plt.xlabel('seconds', fontsize=12)
plt.ylabel('FPS', fontsize=12)

plt.grid(True)
plt.legend()
plt.tight_layout()

# === 5. 保存图像 + 显示 ===
plt.savefig('aquarium_fps_result.png', dpi=300)
plt.show()