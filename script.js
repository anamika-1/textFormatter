const textArea = document.getElementById('input-field');

const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const capitalize = document.querySelector('.capitalize');
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const underline = document.querySelector('.underline');

const copyButton = document.getElementById('copy-button');



uppercase.addEventListener('click', function() {
    toggleStyle(textArea, 'text-transform', 'uppercase');
});

lowercase.addEventListener('click', function() {
    toggleStyle(textArea, 'text-transform', 'lowercase');
});

capitalize.addEventListener('click', function() {
    toggleStyle(textArea, 'text-transform', 'capitalize');
});

bold.addEventListener('click', function() {
    toggleStyle(textArea, 'font-weight', '700');
});

italic.addEventListener('click', function() {
    toggleStyle(textArea, 'font-style', 'italic');
});

underline.addEventListener('click', function() {
    toggleStyle(textArea, 'text-decoration', 'underline');
});


function toggleStyle(element, styleProperty, styleValue) {
    const currentStyle = window.getComputedStyle(element)[styleProperty];
    if (currentStyle === styleValue || currentStyle.includes(styleValue)) {
        element.style[styleProperty] = '';
    } else {
        element.style[styleProperty] = styleValue;
    }
}


copyButton.addEventListener('click', function() {
    textArea.select();
    document.execCommand('copy');
    copyButton.textContent = "COPIED";
});

