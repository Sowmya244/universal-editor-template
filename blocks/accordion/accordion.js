export default function decorate(block) {
  const items = block.querySelectorAll('.accordion-item');
  const singleExpand = block.dataset.singleExpand === 'true';

  items.forEach((item) => {
    const header = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    const expanded = item.dataset.expanded === 'true';

    if (expanded) {
      item.classList.add('expanded');
      content.style.maxHeight = `${content.scrollHeight}px`;
    }

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('expanded');

      if (isOpen) {
        item.classList.remove('expanded');
        content.style.maxHeight = null;
      } else {
        if (singleExpand) {
          items.forEach((i) => {
            i.classList.remove('expanded');
            i.querySelector('.accordion-content').style.maxHeight = null;
          });
        }
        item.classList.add('expanded');
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });
}
