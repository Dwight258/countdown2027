        const videoElement = document.querySelector('.background-video');
        const countdownElement = document.getElementById('countdown');
        const audioElement = document.getElementById('new-year-audio');
        const audioLoop = new Audio('Countdown06-5.mp3');
        const finalAudio = new Audio('Wind-Synthetic02-5.mp3');
        const preEndAudio = new Audio('hotaru-shine.mp3');
        const bgAudio = new Audio('MoonNight.mp3');
        videoElement.volume = 0.8;
        
        audioLoop.volume = 0.3;
        finalAudio.volume = 0.5;
        preEndAudio.volume = 0.5;
        bgAudio.volume = 0.2;

        bgAudio.loop = true;
        bgAudio.play();

        function updateCountdown() {
            const targetDate = new Date('2027-01-01T00:00:00');
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                triggerEndSequence();
                return;
            }

             if (timeDifference <= 113000) { // 1分53秒前
                if (!preEndAudio.playing) {
                    bgAudio.pause();
                    preEndAudio.play();
                }
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('countdown').textContent =
                `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;

            if (timeDifference <= 300000) { // 残り5分未満
                countdownElement.classList.add('red');
                audioLoop.play();
            }
            
        }

        function triggerEndSequence() {
            const fadeOut = document.getElementById('fade-out');
            const countdownContainer = document.getElementById('countdown-container');
            fadeOut.style.opacity = 1;

            fadeOut.addEventListener('transitionend', () => {
                setTimeout(() => {
                    // タイトルとカウントダウンを非表示
                    countdownContainer.style.opacity = 0;

                    const message1 = document.getElementById('message-1');
                    const message2 = document.getElementById('message-2');

                    // 別動画への切り替え
                    videoElement.style.opacity = 0; // 現在の動画をフェードアウト
                    videoElement.addEventListener('transitionend', () => {
                        videoElement.src = '202982-919365848_small.mp4';
                        videoElement.load();
                        videoElement.play();
                        setTimeout(() => {
                            fadeOut.style.opacity = 0; // 白画面をフェードイン

                            videoElement.style.opacity = 1; // 新しい動画をフェードイン

                            // メッセージ表示
                            setTimeout(() => {
                                message1.style.opacity = 1;
                                setTimeout(() => {
                                    message1.style.transform = 'translate(-50%, -150%)'; // 少し上に移動
                                        setTimeout(() => {
                                    message2.style.opacity = 1;
                                    setTimeout(() => {
                                        audioElement.play(); // 音声再生開始
                                    }, 2000);
                                  }, 4000);
                                }, 4000); // 次のメッセージを4秒後に表示
                            }, 2000); // フェードアウトが完了した後
                        }, 2000); // 白い画面で2秒間待機
                    }, { once: true });
                }, 2000); // 白い画面を保持する時間
            }, { once: true });
        }

const countdownInterval = setInterval(updateCountdown, 1000);
            updateCountdown(); // 初回実行
        
       function showNewYearScreen() {
            const countdownContainer = document.getElementById('countdown-container');
            const fadeOut = document.getElementById('fade-out');
            const message1 = document.getElementById('message-1');
            const message2 = document.getElementById('message-2');

            // タイトルとカウントダウンを非表示
            countdownContainer.style.display = 'none';

            // 別動画のセット
            videoElement.src = '202982-919365848_small.mp4';
            videoElement.load();
            videoElement.play();
            bgAudio.pause();

            // 白画面をフェードアウト
            fadeOut.style.opacity = 0;

            // メッセージ表示
            setTimeout(() => {
                message1.style.opacity = 1;
                setTimeout(() => {
                    message1.style.transform = 'translate(-50%, -150%)'; // 少し上に移動       
                        setTimeout(() => {
                    message2.style.opacity = 1;
                    setTimeout(() => {
                        audioElement.play(); // 音声再生開始
                    }, 2000); // メッセージが表示されてから2秒後
                  }, 4000);
                }, 4000);
            }, 2000);
        }

        const now = new Date();
        const targetDate = new Date('2027-01-01T00:00:00');

        if (now >= targetDate) {
            showNewYearScreen();
        }
