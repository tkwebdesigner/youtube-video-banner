document.addEventListener('DOMContentLoaded', function () {
    const bannerSection = document.querySelector('.banner-sec');
    const videoLink = JSON.parse(bannerSection.getAttribute('data-settings')).background_video_link;

    if (videoLink) {
        const videoId = extractYouTubeID(videoLink);
        const iframe = document.createElement('iframe');

        iframe.className = "elementor-background-video-embed";
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframe.setAttribute("title", "YouTube video");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?controls=0&rel=0&playsinline=1&autoplay=1&mute=1`);

        const videoContainer = document.getElementById('video-container');
        videoContainer.appendChild(iframe);
        videoContainer.classList.add('active');
        bannerSection.style.background = 'none';
    }

    function extractYouTubeID(url) {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }
});




fknkdfd