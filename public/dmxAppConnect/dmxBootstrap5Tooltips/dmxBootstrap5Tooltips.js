dmx.Attribute('bs-tooltip', 'mounted', function(node, attr) {
  let tooltip = bootstrap.Tooltip.getInstance(node);

  this.$addBinding(attr.value, function(value) {
    node.setAttribute('data-bs-title', value || '');
  });

  if (!tooltip) {
    tooltip = new bootstrap.Tooltip(node, {
      placement: () => node.getAttribute('data-bs-placement') || 'auto',
      title: () => node.getAttribute('data-bs-title') || '',
    });
  }

  this.addEventListener('destroy', () => {
    if (tooltip) {
      tooltip.dispose();
    }
  });
});
