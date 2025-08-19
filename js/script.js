document.addEventListener('DOMContentLoaded', function () {
  const bookBtns = document.querySelectorAll('.book-btn');
  bookBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      alert('Thank you for choosing Hotel Paradise! Our team will reach out for your booking.');
    });
  });
});
