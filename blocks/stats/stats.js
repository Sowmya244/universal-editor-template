export default function decorate(block) {
  block.classList.add('stats');
  [...block.children].forEach((item) => {
    item.classList.add('stat-item');
  });
}
