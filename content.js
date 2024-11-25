// content.js
// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "togglePiP") {
    const videos = document.getElementsByTagName('video');
    if (videos.length > 0) {
      togglePiP(videos[0]);
    }
  }
});

function togglePiP(video) {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}

function addPiPButton() {
  const videos = document.getElementsByTagName('video');
  
  Array.from(videos).forEach(video => {
    if (!video.hasAttribute('data-pip-button-added')) {
      // Create button
      const pipButton = document.createElement('button');
      pipButton.textContent = 'PiP';
      pipButton.style.cssText = `
        position: absolute;
        z-index: 9999999;
        bottom: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 14px;
      `;

      // Add click handler
      pipButton.onclick = (e) => {
        e.stopPropagation();
        togglePiP(video);
      };

      // Make sure video container is positioned relatively
      const wrapper = video.parentElement;
      if (wrapper) {
        wrapper.style.position = 'relative';
      }

      // Add button to wrapper
      wrapper.appendChild(pipButton);

      // Mark video as processed
      video.setAttribute('data-pip-button-added', 'true');
    }
  });
}

// Run initially
addPiPButton();

// Watch for new videos
const observer = new MutationObserver(() => {
  addPiPButton();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
