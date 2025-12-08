document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = 0;
    const changeActiveCase = () => {
      cases[currentIndex].classList.remove('rotator__case_active');
      currentIndex = (currentIndex + 1) % cases.length;
      cases[currentIndex].classList.add('rotator__case_active');
    };
    setInterval(changeActiveCase, 1000);
  });
});