/*
 * Accordion Block
 * Implements advanced accordion functionality with single/multiple expand options
 */

export default function decorate(block) {
  // Get accordion settings
  const singleExpand = block.dataset.singleExpand === 'true';

  // Create wrapper for all accordion items
  const accordionWrapper = document.createElement('div');
  accordionWrapper.className = 'accordion-wrapper';

  [...block.children].forEach((row) => {
    // Create accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);

    // Create accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';

    // Create accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';

    // Set expanded state if specified
    if (row.dataset.expanded === 'true') {
      details.setAttribute('open', '');
    }

    details.append(summary, body);
    accordionWrapper.appendChild(details);

    // Add click handler for single expand mode
    if (singleExpand) {
      summary.addEventListener('click', (e) => {
        e.preventDefault();
        const wasOpen = details.hasAttribute('open');

        // Close all other accordion items
        accordionWrapper.querySelectorAll('details[open]').forEach((openItem) => {
          if (openItem !== details) {
            openItem.removeAttribute('open');
          }
        });

        // Toggle current item
        if (!wasOpen) {
          details.setAttribute('open', '');
        } else {
          details.removeAttribute('open');
        }
      });
    }
  });

  // Replace original content with new accordion
  block.textContent = '';
  block.appendChild(accordionWrapper);
}
