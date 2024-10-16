document.addEventListener('DOMContentLoaded', () => {
    const btnBurger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__list');

    btnBurger.addEventListener('click', () => {
        nav.classList.toggle('show');
        btnBurger.classList.toggle('open');
    });


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
            hiddenInput.value = selectedValue; // Передаем выбранное значение в скрытое поле
            selectBox.classList.remove('active');
        });
    });

    // Закрытие списка при клике вне его
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

});