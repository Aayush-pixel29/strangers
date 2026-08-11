document.addEventListener('DOMContentLoaded', () => {

    // 1. Gift Box Logic
    const giftWrap = document.getElementById('musicGift');
    if (giftWrap) {
        giftWrap.addEventListener('click', (e) => {
            // Prevent triggering if clicking on the actual music tracks inside
            if (!e.target.closest('.music-track')) {
                giftWrap.classList.add('opened');
            }
        });
    }

    // 2. Music Player Logic
    const musicTracks = document.querySelectorAll('.music-track');
    musicTracks.forEach(track => {
        track.addEventListener('click', (e) => {
            e.stopPropagation(); // don't bubble up to gift box
            
            const audio = track.querySelector('.audio-element');
            const isPlaying = track.classList.contains('playing');

            // Pause all
            document.querySelectorAll('.audio-element').forEach(a => a.pause());
            document.querySelectorAll('.music-track').forEach(t => t.classList.remove('playing'));

            if (!isPlaying) {
                audio.volume = 0.4;
                audio.play();
                track.classList.add('playing');
            }
        });
    });

    // 3. Sparkles Generation
    const sparklesContainer = document.getElementById('sparkles');
    if (sparklesContainer) {
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Random position around the cake area
            const top = Math.random() * 80 + 10; 
            const left = Math.random() * 80 + 10;
            const delay = Math.random() * 2;
            
            sparkle.style.top = `${top}%`;
            sparkle.style.left = `${left}%`;
            sparkle.style.animationDelay = `${delay}s`;
            
            sparklesContainer.appendChild(sparkle);
        }
    }

    // 4. Candle & Wish Form Logic
    const magicCandle = document.getElementById('magicCandle');
    const wishFormContainer = document.getElementById('wishFormContainer');
    const subText = document.querySelector('#cake .sub');

    if (magicCandle) {
        magicCandle.addEventListener('click', () => {
            if (!magicCandle.classList.contains('out')) {
                magicCandle.classList.add('out');
                
                // Hide sparkles
                if (sparklesContainer) sparklesContainer.style.display = 'none';
                
                // Change instruction text
                if (subText) subText.textContent = "Make your wish below...";

                // Reveal form
                if (wishFormContainer) {
                    wishFormContainer.style.display = 'block';
                    setTimeout(() => {
                        wishFormContainer.classList.add('show');
                    }, 50);
                }
            }
        });
    }

});
