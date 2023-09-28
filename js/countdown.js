// カウントダウンを開始する関数
function startCountdown() {
    var countdownElement = document.getElementById('countdown');
    var count = 5; // カウントダウンの初期値

    // カウントダウンを実行するタイマー
    var countdownTimer = setInterval(function () {
        count--;
        countdownElement.textContent = count;

        // カウントダウンが0になったらタイマーを停止
        if (count === 0) {
            clearInterval(countdownTimer);
        }
    }, 1000); // 1秒ごとにカウントダウン

    // 初期表示
    countdownElement.textContent = count;
}

// ページが読み込まれたらカウントダウンを開始
window.onload = startCountdown;
