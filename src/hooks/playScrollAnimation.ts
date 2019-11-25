import anime from "animejs";

function playScrollAnimation(position: number) {
    let scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    return anime({
        targets: scrollElement,
        scrollTop: position,
        duration: 400,
        easing: 'easeInOutQuad',
    })
}

export default playScrollAnimation;