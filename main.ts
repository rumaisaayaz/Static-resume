

const toggleEducationBtn = document.getElementById('toggleEducationBtn') as HTMLButtonElement;
const educationSection = document.getElementById('educationSection') as HTMLDivElement;

toggleEducationBtn.addEventListener('click', () => {
  if (educationSection.style.display === 'none') {
    educationSection.style.display = 'block';
    toggleEducationBtn.textContent = 'Hide Education Section';
  } else {
    educationSection.style.display = 'none';
    toggleEducationBtn.textContent = 'Show Education Section';
  }
});
