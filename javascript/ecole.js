 window.addEventListener('DOMContentLoaded', function () {
        const slidesTrack = document.querySelector('.slides');
        if (!slidesTrack) return;

        const slides = slidesTrack.querySelectorAll('.slide');
        if (slides.length < 2) return;


        slidesTrack.innerHTML += slidesTrack.innerHTML;
        const allSlides = slidesTrack.querySelectorAll('.slide');
        const slideWidth = allSlides[0].offsetWidth;
        const slidesCount = slides.length;
        const totalWidth = slideWidth * allSlides.length;
        slidesTrack.style.width = totalWidth + 'px';


        const duration = slidesCount * 15;

        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
    @keyframes defilementBoucle {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${slideWidth * slidesCount}px); }
    }
    .slides {
        animation: defilementBoucle ${duration}s linear infinite;
        display: flex;
    }
    `;
        document.head.appendChild(styleSheet);


        slidesTrack.addEventListener('animationiteration', function () {
            slidesTrack.style.animation = 'none';
            void slidesTrack.offsetWidth;
            slidesTrack.style.animation = '';
        });
    });