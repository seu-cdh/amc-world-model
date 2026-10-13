// Respect reduced-motion preferences while keeping the lead demo playable.
const leadVideo = document.querySelector('.hero-video');
if (leadVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  leadVideo.pause();
  leadVideo.removeAttribute('autoplay');
}
