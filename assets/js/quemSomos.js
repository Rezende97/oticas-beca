const elementsAnimation = document.querySelectorAll('[data-eventos]');

if (elementsAnimation.length > 0) {

    window.addEventListener('scroll', () => {
        const page = window.pageYOffset+400;

        elementsAnimation.forEach(function(elements) {
            
            if (page > elements.offsetTop) {
                elements.classList.add('animationScroll')
            }else{
                elements.classList.remove('animationScroll')
            }

        })
    })

}
