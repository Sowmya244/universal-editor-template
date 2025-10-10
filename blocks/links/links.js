/**
 * Wraps <picture> images followed by links within a matching <a> tag.
 * Works on all blocks with class 'img-link-block'
 */
export default function decorate(block) {
  const container = block || document;
  const pictures = container.querySelectorAll('picture');

  pictures.forEach((pic) => {
    const link = pic.nextElementSibling;
    if (link && link.tagName === 'A' && link.href) {
      link.innerHTML = pic.outerHTML;
      pic.replaceWith(link);
    }
  });
}

// Automatically decorate all blocks with 'img-link-block' class
document.querySelectorAll('.img-link-block').forEach(decorate);
