function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();

document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = [
    ...document.querySelectorAll('section h2'),
    ...document.querySelectorAll('.card'),
    ...document.querySelectorAll('.product-card'),
    ...document.querySelectorAll('.testimonial-card'),
  ];

  animatedElements.forEach((element) => {
    element.classList.add('reveal');
  });
});
