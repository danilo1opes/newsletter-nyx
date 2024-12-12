function copiarLink() {
  const link = 'https://www.google.com';
  navigator.clipboard.writeText(link).then(() => {
    alert('Link copiado para a área de transferência!');
  });
}
