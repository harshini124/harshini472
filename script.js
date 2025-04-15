// Adds alert when "Buy Now" is clicked
document.addEventListener('DOMContentLoaded', function () {
  const buyButtons = document.querySelectorAll('.btn-buy-now');

  buyButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevents page reload
      alert('Thank you for your interest! This is a demo site by Harshini Thakur.');
    });
  });
});