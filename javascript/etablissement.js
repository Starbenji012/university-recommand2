  (function () {
            const track = document.getElementById('carouselTrack1');
            document.getElementById('leftBtn1').onclick = () => {
                track.scrollBy({ left: -250, behavior: 'smooth' });
            };
            document.getElementById('rightBtn1').onclick = () => {
                track.scrollBy({ left: 250, behavior: 'smooth' });
            };
        })();