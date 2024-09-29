document.addEventListener("DOMContentLoaded", function() {
    const videoOverlay = document.getElementById('video-overlay');
    const introVideo = document.getElementById('intro-video');
    const mainContent = document.getElementById('main-content');

    // Listen for the video to end
    introVideo.addEventListener('ended', function() {
        // Hide the video overlay
        videoOverlay.style.opacity = '0';
        videoOverlay.style.transition = 'opacity 1s ease';

        // After the fade-out transition, remove the overlay
        setTimeout(() => {
            videoOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scroll
        }, 1000); // Match the transition duration

        // Show the main content with transition
        mainContent.classList.remove('hidden');
        // Trigger reflow to ensure the transition happens
        void mainContent.offsetWidth;
        mainContent.classList.add('active');
    });

    // Optional: Handle video errors
    introVideo.addEventListener('error', function(e) {
        console.error('Error playing the intro video:', e);
        // Fallback: directly show the main content
        videoOverlay.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('active');
    });
});
