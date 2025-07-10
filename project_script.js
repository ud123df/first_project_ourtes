alert('welcome to OURTES');
let a=('i am a coder and the best full stck developer');
const b = 1500;
console.log(a, b);
//select the element with class
const headerTitle= document.querySelector('.header-title');


//responding user action
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', function() {
    headerTitle.style.color = '#ffd700'; // Corrected line: use .style instead of .computedStyleMap
})
