document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    const link = button.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});
