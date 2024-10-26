document.addEventListener('DOMContentLoaded', () => {
    // бургер
    const btnBurger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__list');

    btnBurger.addEventListener('click', () => {
        nav.classList.toggle('show');
        btnBurger.classList.toggle('open');
    });


    // select
    const selectBox = document.querySelector('.select-box');
    const optionsContainer = document.querySelector('.options');
    const options = document.querySelectorAll('.option');
    const hiddenInput = document.querySelector('#selectedOption');

    selectBox.addEventListener('click', () => {
        selectBox.classList.toggle('active');
    });

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedValue = e.target.textContent;
            selectBox.textContent = selectedValue;
            hiddenInput.value = selectedValue;
            selectBox.classList.remove('active');
        });
    });


    document.addEventListener('click', (e) => {
        if (!selectBox.contains(e.target)) {
            selectBox.classList.remove('active');
        }
    });

    const option1 = document.querySelector("#option1");

    option1.addEventListener("change", getOptionValue);

    function getOptionValue(e) {
    console.log(e.target.checked);
    }

    // text
});

function truncateText(element, maxHeight) {
    let text = element.innerText;
    let words = text.split(' ');

    
    element.innerText = text;

   
    if (element.scrollHeight <= maxHeight) return;


    while (element.scrollHeight > maxHeight && words.length > 0) {
        words.pop();
        element.innerText = words.join(' ') + '...';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.news__text').forEach(element => {
        const parent = element.closest('.news__inner');
        const title = parent.querySelector('.news__title');
        const link = parent.querySelector('.news__link');
        
        const titleHeight = title ? title.offsetHeight : 0;
        const linkHeight = link ? link.offsetHeight : 0;

        const maxHeight = 320 - titleHeight - linkHeight - 65;

        truncateText(element, maxHeight);
    });
});
