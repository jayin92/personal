// Teaser playback, as on the original site: hover a teaser to play it with a mouse,
// tap to play or stop on touch. A .media element shows a still; .is-playing reveals
// its top layer (a looping video, or a second still such as LightsOut's output).
(() => {
  const start = (media) => {
    media.classList.add('is-playing');
    const video = media.querySelector('video');
    if (!video) return;
    const token = (media._token = (media._token || 0) + 1);
    const playing = video.play();
    if (playing) {
      playing.catch((err) => {
        // An AbortError means a later stop() or start() took over; leave its state alone.
        if (err.name !== 'AbortError' && media._token === token) media.classList.remove('is-playing');
      });
    }
  };

  const stop = (media) => {
    media._token = (media._token || 0) + 1;
    media.classList.remove('is-playing');
    const video = media.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; // the still is frame 0, so the next play starts from it
    }
  };

  const isMouse = (e) => e.pointerType === 'mouse' || e.pointerType === 'pen';

  for (const media of document.querySelectorAll('.media[data-media]')) {
    // Mouse and pen: hover the teaser itself, so scrolling past text never starts videos.
    media.addEventListener('pointerenter', (e) => { if (isMouse(e)) start(media); });
    media.addEventListener('pointerleave', (e) => { if (isMouse(e)) stop(media); });

    // Touch: tap to toggle (also covers touchscreen laptops). Safari reports a finger
    // tap's click as pointerType "mouse", so use the type of the press that began it.
    let pressType = '';
    media.addEventListener('pointerdown', (e) => { pressType = e.pointerType; });
    media.addEventListener('click', () => {
      if (pressType === 'mouse' || pressType === 'pen') return;
      if (media.classList.contains('is-playing')) stop(media);
      else start(media);
    });

    // Keyboard: play while focus is anywhere in the entry.
    const entry = media.closest('.entry');
    if (entry) {
      entry.addEventListener('focusin', (e) => {
        if (e.target.matches(':focus-visible')) start(media); // keyboard focus only, not taps
      });
      entry.addEventListener('focusout', (e) => {
        if (!entry.contains(e.relatedTarget)) stop(media);
      });
    }
  }
})();
