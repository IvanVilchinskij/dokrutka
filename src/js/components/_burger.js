const burger = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      scroll = calcScroll(),
      links = document.querySelectorAll('.nav__link');

const toggleOverflow = () => {
    if (menu.classList.contains('active')) {
        document.body.classList.add('fixed-body');
        document.body.style.paddingRight= scroll + 'px';
    } else {
        document.body.classList.remove('fixed-body');
        document.body.style.paddingRight= '0px';
    }
};
function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidht = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidht;
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

    toggleOverflow();
});

links.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');

        toggleOverflow();
    });
});


