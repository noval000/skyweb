    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
            $('.navbar').addClass("dis");         
        }
            else{
            $('.navbar').removeClass("dis");         
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
            $('.nav-a-individ').addClass("dis");         
        }
            else{
            $('.nav-a-individ').removeClass("dis");         
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
            $('.btn-focus').addClass("dis");         
        }
            else{
            $('.btn-focus').removeClass("dis");         
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
            $('.ind-js-897').addClass("dis");         
        }
            else{
            $('.ind-js-897').removeClass("dis");         
        }
    });










/*   Бегущий текст главный фон   */ 





/*   О нас   */







/*   Блок с работами   */


let activeIndex = 0
let limit = 0
let disabled = false
let $stage
let $controls
let canvas = false
const SPIN_FORWARD_CLASS = 'js-spin-fwd'
const SPIN_BACKWARD_CLASS = 'js-spin-bwd'
const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled'
const SPIN_DUR = 1000
const appendControls = () => {
    $controls = $('.tabs3d-control').children()
    $controls.eq(activeIndex).addClass('active')
}
const setIndexes = () => {
    $('.spinner').children().each((i, el) => {
        if (i == 0) {
            $(el).addClass('js-active');
        }
        $(el).attr('data-index', i)
        $('.tabs3d-control').append('<a style="background-color: ' + $(el).attr('data-bg') + '" href="#tab" data-index="' +i+ '">' + $(el).attr('data-menu') + '</a>');
        limit++
    })
}
const duplicateSpinner = () => {
    const $el = $('.spinner').parent()
    const html = $('.spinner').parent().html()
    $el.append(html)
    $('.spinner').last().addClass('spinner-right')
    $('.spinner-right').removeClass('spinner-left')
}
const paintFaces = () => {
    $('.spinner-face').each((i, el) => {
        $(el).children().css('background', $(el).attr('data-bg'))
    })
}
const prepareDom = () => {
    setIndexes()
    paintFaces()
    duplicateSpinner()
    appendControls()
}
const spin = (inc = 1) => {
    if (disabled) return
    if (!inc) return
    activeIndex += inc
    disabled = true
    if (activeIndex >= limit) {
        activeIndex = 0
    }
    if (activeIndex < 0) {
        activeIndex = (limit - 1)
    }
    const $activeEls = $('.spinner-face.js-active')
    const $nextEls = $('.spinner-face[data-index=' + activeIndex + ']')
    $nextEls.addClass('js-next')
    if (inc > 0) {
        $stage.addClass(SPIN_FORWARD_CLASS)
        } else {
        $stage.addClass(SPIN_BACKWARD_CLASS)
    }
    $controls.removeClass('active')
    $controls.eq(activeIndex).addClass('active')
    setTimeout(() => {
        spinCallback(inc)
    }, SPIN_DUR, inc)
}
const spinCallback = (inc) => {
    $('.js-active').removeClass('js-active')
    $('.js-next').removeClass('js-next').addClass('js-active')
    $stage
    .addClass(DISABLE_TRANSITIONS_CLASS)
    .removeClass(SPIN_FORWARD_CLASS)
    .removeClass(SPIN_BACKWARD_CLASS)
    $('.js-active').each((i, el) => {
        const $el = $(el)
        $el.prependTo($el.parent())
    })
    setTimeout(() => {
        $stage.removeClass(DISABLE_TRANSITIONS_CLASS)
        disabled = false
    }, 100)
}
const attachListeners = () => {
    document.onkeyup = (e) => {
        switch (e.keyCode) {
            case 38:
            spin(-1)
            break
            case 40:
            spin(1)
            break
        }
    }
    $controls.on('click', (e) => {
        e.preventDefault()
        if (disabled) return
        const $el = $(e.target)
        const toIndex = parseInt($el.attr('data-index'), 10)
        spin(toIndex - activeIndex)
    })
}
const assignEls = () => {
    $stage = $('.tabs3d-stage')
}
const init = () => {
    assignEls()
    prepareDom()
    attachListeners()
}
$(() => {
    init();
});    



/*   Наши преимущества   */


$(function() {
    $('.rotating-slider').rotatingSlider({
        slideHeight : 360,
        slideWidth : Math.min(250, document.querySelector('.rotating-slider-container' ).offsetWidth)
    });
});











/* our works  */


function init01() {
    const slider = document.querySelector(".slider");
    const nextBtn = slider.querySelector(".slider .nav .next");
    const prevBtn = slider.querySelector(".slider .nav .prev");
    const items = slider.querySelectorAll(".slider .item");
    let current = 0;
    items.forEach((item) => {
        const textWrapper1 = item.querySelector(".item-title");
        textWrapper1.innerHTML = textWrapper1.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );
        const textWrapper2 = item.querySelector(".item-text");
        textWrapper2.innerHTML = textWrapper2.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );        
    });
    function anim(current, next, callback) {
        const currentImgs = current.querySelectorAll(".img");
        const currentText = current.querySelectorAll(".content .letter");
        const nextImgs = next.querySelectorAll(".img");
        const nextText = next.querySelectorAll(".content .letter");
        const duration = 400;
        const offset = "-=" + 300;
        const imgOffset = duration*.8;
        const tl = anime.timeline({
            easing: "easeInOutQuint",
            duration: duration,
            complete: callback
        });
        // Add children
        tl.add({
            targets: currentText,
            translateY: [0, '-150px'],
            opacity: [1, 0],
            easing: "easeInQuint",
            duration: 600,
            delay: 0
        })
        .add({
            targets: currentImgs[0],
            translateY: -600,
            rotate: [0, '-15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
        }, offset )
        .add({
            targets: currentImgs[1],
            translateY: -600,
            rotate: [0, '15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
        }, "-=" + imgOffset )
        .add({
            targets: currentImgs[2],
            translateY: -600,
            rotate: [0, '-15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
        }, "-=" + imgOffset )
        .add({
            targets: currentImgs[3],
            translateY: -600,
            rotate: [0, '15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
        }, "-=" + imgOffset )
        .add({
            targets: current,
            opacity: 0,
            duration: 10,
            easing: "easeInCubic"
        })
        .add({
            targets: next,
            opacity: 1,
            duration: 10
        }, offset )
        .add({
            targets: nextImgs[0],
            translateY: [600, 0],
            rotate: ['15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
        }, offset )
        .add({
            targets: nextImgs[1],
            translateY: [600, 0],
            rotate: ['-15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
        }, "-=" + imgOffset )
        .add({
            targets: nextImgs[2],
            translateY: [600, 0],
            rotate: ['15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
        }, "-=" + imgOffset )
        .add({
            targets: nextImgs[3],
            translateY: [600, 0],
            rotate: ['-15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
        }, "-=" + imgOffset )
        .add({
            targets: nextText,
            translateY: ['150px', 0],
            opacity: [0, 1],
            easing: "easeOutCubic",
            duration: 600,
            delay: (el, i) => 10 * (i + 1)
        }, offset );
    }
    let isPlaying = false;
    function updateSlider(newIndex) {
        const currentItem = items[current];
        const newItem = items[newIndex];
        function callback() {
            currentItem.classList.remove("is-active");
            newItem.classList.add("is-active");
            current = newIndex;
            isPlaying = false;
        }
        anim(currentItem, newItem, callback);
    }
    function next() {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === items.length - 1 ? 0 : current + 1;
        updateSlider(newIndex);
    }
    function prev() {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === 0 ? items.length - 1 : current - 1;
        updateSlider(newIndex);
    }
    nextBtn.onclick = next;
    prevBtn.onclick = prev;
}
document.addEventListener("DOMContentLoaded", init01);


/*  Наши работы мобилка   */


window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel-3d");
    for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
    }
});
function carousel(root) {
    var figure = root.querySelector("figure"),
    nav = root.querySelector("nav"),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = 2 * Math.PI / n,
    currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
    setupNavigation();
    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;
        for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
        for (i = 0; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
        rotateCarousel(currImage);
    }
    function setupNavigation() {
        nav.addEventListener("click", onClick, true);
        function onClick(e) {
            e.stopPropagation();
            var t = e.target;
            if (t.tagName.toUpperCase() != "BUTTON") return;
            if (t.classList.contains("next")) {
                currImage++;
                } else {
                currImage--;
            }
            rotateCarousel(currImage);
        }
    }
    function rotateCarousel(imageIndex) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
}





/*     Button up       */ 






