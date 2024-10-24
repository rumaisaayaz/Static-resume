"use strict";
const toggleEducationBtn = document.getElementById('toggleEducationBtn');
const educationSection = document.getElementById('educationSection');
toggleEducationBtn.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleEducationBtn.textContent = 'Hide Education Section';
    }
    else {
        educationSection.style.display = 'none';
        toggleEducationBtn.textContent = 'Show Education Section';
    }
});
