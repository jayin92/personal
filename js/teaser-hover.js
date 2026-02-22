document.addEventListener('DOMContentLoaded', function() {
  // Find all teaser containers
  const teaserContainers = document.querySelectorAll('.teaser-container');
  
  // Add hover event listeners to each container
  teaserContainers.forEach(container => {
    const video = container.querySelector('.teaser-video');
    
    if (video) {
      // Play video on hover
      container.addEventListener('mouseenter', function() {
        video.play();
      });
      
      // Pause video when not hovering
      container.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
});
