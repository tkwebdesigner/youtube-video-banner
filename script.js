document.addEventListener('DOMContentLoaded', function () {
    const bannerSection = document.querySelector('.banner-sec');
    const videoId = 'jhb9Eh5lfB8';
    const iframe = document.createElement('iframe');

    iframe.className = "elementor-background-video-embed";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("title", "YouTube video");

    // Updated src with correct parameter order
    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&modestbranding=1&showinfo=0&iv_load_policy=3`);

    const videoContainer = document.getElementById('video-container');
    videoContainer.appendChild(iframe);
    videoContainer.classList.add('active');
    bannerSection.style.background = 'none';
});