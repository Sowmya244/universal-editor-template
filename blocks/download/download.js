export default function decorate(block) {
  const items = block.querySelectorAll('.download-item');

  items.forEach((item) => {
    const link = item.querySelector('a');

    if (link) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}
