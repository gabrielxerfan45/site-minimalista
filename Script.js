document.getElementById('saibaMaisBtn').addEventListener('click', function() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
});
