const btns = document.querySelectorAll('.mentor__btn'),
      mentorModal = document.querySelector('.mentor-modals'),
      closeBtn = document.querySelector('.mentor-modals .close'),
      wrapper = document.querySelector('.mentor-modals .wrapper');

btns.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
        }

        mentorModal.classList.add('open-modal');
        
        
        $('.slider').slick('setPosition');
        $('.slider').slick('goTo', i);
        $('.slider').slick('slickSetOption', {
            speed: 500, 
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        speed: 500,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        }, true);
        document.body.style.overflow = 'hidden';
        wrapper.classList.add('open-anim');
        document.body.style.paddingRight= scroll + 'px';
    });
});

closeBtn.addEventListener('click', () => {
    mentorModal.classList.remove('open-modal');
    document.body.style.overflow = '';
    $('.slider').slick('slickSetOption', {
        speed: 0
    }, true);
    wrapper.classList.remove('open-anim');
    document.body.style.paddingRight= '0';
});

mentorModal.addEventListener('click', (e) => {
    if (e.target === mentorModal) {
        mentorModal.classList.remove('open-modal');
        document.body.style.overflow = '';
        $('.slider').slick('slickSetOption', {
            speed: 0
        }, true);
        wrapper.classList.remove('open-anim');
        document.body.style.paddingRight= '0';
    }
});

function bindModal(triggerSelector, modalSelector, closeSelector, blockSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          block = document.querySelector(blockSelector);

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.classList.add('open-modal');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight= scroll + 'px';
            setTimeout(function() {
                block.classList.add('open-anim');
            }, 100);
            
        });
    });

    close.addEventListener('click', () => {

        modal.classList.remove('open-modal');
        document.body.style.overflow = '';
        document.body.style.paddingRight= '0';
        block.classList.remove('open-anim');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {

            modal.classList.remove('open-modal');
            document.body.style.overflow = '';
            document.body.style.marginRight= '0';
            block.classList.remove('open-anim');
        }
    });
}

bindModal('.program__btn', '.popup--1', '.popup--1 .close', '.popup--1 .popup__block');
bindModal('.block__btn--1', '.popup--2', '.popup--2 .close', '.popup--2 .popup__block');
bindModal('.block__btn--2', '.popup--3', '.popup--3 .close', '.popup--3 .popup__block');