(() => {
    const fpsRecords = [];
    let lastTime = performance.now();
    let frameCount = 0;

    function downloadCSV(data) {
        const csvContent = "data:text/csv;charset=utf-8," + data.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "fps_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("📥 已触发下载 fps_data.csv");
    }

    function loop() {
        frameCount++;
        const now = performance.now();
        const elapsed = now - lastTime;

        if (elapsed >= 1000) {
            const fps = frameCount / (elapsed / 1000);
            fpsRecords.push(fps.toFixed(2));

            lastTime = now;
            frameCount = 0;

            console.log(秒 ${fpsRecords.length}: FPS = ${fps.toFixed(2)});

            if (fpsRecords.length >= 60) {
                console.log("✅ FPS 记录完成，共 60 秒");
                downloadCSV(fpsRecords);
                return;
            }
        }

        requestAnimationFrame(loop);
    }

    console.log("⏱️ 开始记录 60 秒 FPS 并导出为 CSV...");
    requestAnimationFrame(loop);
})();