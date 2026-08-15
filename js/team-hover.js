document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.box, .box-no-stretch').forEach((box) => {
    const caption = box.closest('.item')?.querySelector('a.hover-text');

    if (!caption) return;

    const setHovered = (isHovered) => {
      box.classList.toggle('is-hovered', isHovered);
      caption.classList.toggle('is-hovered', isHovered);
    };

    [box, caption].forEach((element) => {
      element.addEventListener('pointerenter', () => setHovered(true));
      element.addEventListener('pointerleave', () => setHovered(false));
    });
  });
});
