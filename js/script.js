//  onclick="window.location.href='/paginas/bitcoin.html'"

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    const link = button.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});

const button = document.getElementById('open-link');

button.addEventListener('click', function () {
  const url = button.getAttribute('data-link');

  window.open(url, '_blank');
});
