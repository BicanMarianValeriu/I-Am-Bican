import { shuffleArray } from './helpers';
import TiltFx from './TiltFX';
import Splitting from 'splitting';
import { TweenMax, Power2, TimelineMax } from "gsap/all";

/**
 * Slide Image
 */
class Figure {
    constructor(el, options) {
        this.DOM = { el: el };
        this.DOM.img = this.DOM.el.querySelector('.entry__media-figure__src');
        this.DOM.slideEl = this.DOM.img;
        this.options = {
            amount: 2
        };
        Object.assign(this.options, options);

        // with the main image when the user moves the mouse. 
        if (this.DOM.el.classList.contains('entry__media--main')) {
            this.isMain = true;

            // Number of total images (main image + clones). 
            this.totalTiltImgs = this.options.amount;
            this.DOM.inner = document.createElement('div');
            this.DOM.slideEl = this.DOM.inner;
            this.DOM.inner.className = 'entry__media-inner';
            this.DOM.el.appendChild(this.DOM.inner);
            this.DOM.inner.appendChild(this.DOM.img);
            if (this.totalTiltImgs !== 0)
                for (let i = 0; i <= this.totalTiltImgs; ++i)
                    this.DOM.inner.appendChild(this.DOM.img.cloneNode(true));

            // Initialize the tilt effect. 
            this.tilt = new TiltFx(this.DOM.inner, {
                valuesFromTo: [20, -20],
                lerpFactorOuter: 0.2,
                lerpFactor: pos => 0.02 * pos + 0.02
            });
        }
    }
}

/**
 * A single slide
 */
class Slide {
    constructor(el) {
        this.DOM = { el: el };
        this.DOM.title = this.DOM.el.querySelector('.entry__title');
        this.DOM.text = this.DOM.el.querySelector('.entry__content');

        // Figures
        this.figures = [];
        [...this.DOM.el.querySelectorAll('.entry__media')].forEach(figure => this.figures.push(new Figure(figure, {
            amount: 0
        })));
        this.figuresTotal = this.figures.length;

        // Number of total title elements; 
        this.totalTiltText = 3;
        this.DOM.innerTitleTmp = document.createElement('span');
        this.DOM.innerTitleTmp.className = 'entry__title-inner';
        this.DOM.innerTitleTmp.innerHTML = this.DOM.title.innerHTML;
        this.DOM.title.innerHTML = ''; 
        
        for (let i = 0; i <= this.totalTiltText - 1; ++i) this.DOM.title.appendChild(this.DOM.innerTitleTmp.cloneNode(true));
        this.DOM.innerTitle = [...this.DOM.title.querySelectorAll('.entry__title-inner a')];

        // Split the title inner elements into spans 
        this.DOM.innerTitle.forEach(inner => Splitting({ target: inner }));
        this.innerTitleTotal = this.DOM.innerTitle.length;

        // Letters of the main one (the top most inner title). 
        this.innerTitleMainLetters = [...this.DOM.innerTitle[this.DOM.innerTitle.length - 1].querySelectorAll('.char')];
        this.titleLettersTotal = this.innerTitleMainLetters.length;

        // Initialize the tilt effect for the title. 
        this.textTilt = new TiltFx(this.DOM.title);
    }

    setCurrent() {
        this.toggleCurrent(true);
    }

    unsetCurrent() {
        this.toggleCurrent(false);
    }

    toggleCurrent(isCurrent) {
        // Add Slide Classes
        this.DOM.el.classList[isCurrent ? 'add' : 'remove']('portfolio--current');
        // Start/Stop the images tilt effect (initialized on the main figure). 
        this.figures.find(figure => figure.isMain).tilt[isCurrent ? 'start' : 'stop']();
        // Start/Stop the title tilt effect. 
        this.textTilt[isCurrent ? 'start' : 'stop']();
    }
}

/**
 * SlideShow Nav
 */
class Navigation {
    constructor(el, slideshow) {
        this.DOM = { el: el };
        this.DOM.navPrevCtrl = this.DOM.el.querySelector('.projects-nav__arrow--prev');
        this.DOM.navNextCtrl = this.DOM.el.querySelector('.projects-nav__arrow--next');

        this.slideshow = slideshow;
        this.initEvents();
    }

    initEvents() {
        this.navigate = dir => this.slideshow.navigate(dir);
        this.onNavPrevClickHandler = () => this.navigate('left');
        this.onNavNextClickHandler = () => this.navigate('right');
        this.DOM.navPrevCtrl.addEventListener('click', this.onNavPrevClickHandler);
        this.DOM.navNextCtrl.addEventListener('click', this.onNavNextClickHandler);
    }

    hideNavigationCtrls() {
        this.toggleNavigationCtrls('hide');
    }

    showNavigationCtrls() {
        this.toggleNavigationCtrls('show');
    }

    toggleNavigationCtrls(action) {
        this.DOM.navPrevCtrl.style.opacity = action === 'show' ? 1 : 0;
        this.DOM.navNextCtrl.style.opacity = action === 'show' ? 1 : 0;
    }
}

/**
 * The SlideShow
 */
class Slideshow {
    constructor(el) {
        this.DOM = { el: el };
        this.slides = [];
        [...this.DOM.el.querySelectorAll('.portfolio')].forEach(slide => this.slides.push(new Slide(slide)));
        this.slidesTotal = this.slides.length;
        this.current = 0;
        this.slides[this.current].setCurrent();
        this.nav = new Navigation(document.querySelector('.projects-nav'), this);
        this.animationSettings = {
            duration: 0.8,
            ease: Power2.easeOut,
            staggerFactor: 0.13
        };
    }

    navigate(dir) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.dir = dir;
        const oldcurrent = this.current;
        // Update current.
        this.current = this.dir === 'right' ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 :
            this.current > 0 ? this.current - 1 : this.slidesTotal - 1;
        const currentSlide = this.slides[oldcurrent];
        const upcomingSlide = this.slides[this.current];
        this.toggleSlides(currentSlide, upcomingSlide);
    }

    animateCurrentSlide(currentSlide) {
        // Animate Current Elements
        const currentSlideFigures = this.dir === 'right' ?
            currentSlide.figures.sort((a, b) => a.DOM.el.dataset.sort - b.DOM.el.dataset.sort) :
            currentSlide.figures.slice().sort((a, b) => a.DOM.el.dataset.sort - b.DOM.el.dataset.sort).reverse();

        // Images
        currentSlideFigures.forEach((figure, pos) => {
            this.tl
                .to(figure.DOM.el, this.animationSettings.duration, {
                    ease: this.animationSettings.ease,
                    x: this.dir === 'right' ? '-101%' : '101%'
                }, 'begin+=' + pos * this.animationSettings.staggerFactor)
                .to(figure.DOM.slideEl, this.animationSettings.duration, {
                    ease: this.animationSettings.ease,
                    startAt: { transformOrigin: '0% 50%' },
                    x: this.dir === 'right' ? '101%' : '-101%'
                }, 'begin+=' + pos * this.animationSettings.staggerFactor);
        });

        // Description
        this.tl.to(currentSlide.DOM.text, this.animationSettings.duration, {
            ease: this.animationSettings.ease,
            opacity: 0
        }, 'begin+=' + this.animationSettings.duration * this.animationSettings.staggerFactor);

        // Title
        this.tl.staggerTo(shuffleArray(currentSlide.innerTitleMainLetters), 0.05, {
            ease: this.animationSettings.ease,
            opacity: 0
        }, 0.04, 'begin+=' + this.animationSettings.duration * this.animationSettings.staggerFactor);

        currentSlide.DOM.innerTitle.filter((_, pos) => pos < currentSlide.innerTitleTotal - 1).forEach(inner => {
            this.tl.to(inner, 0.1, {
                ease: this.animationSettings.ease,
                opacity: 0
            }, 'begin+=' + this.animationSettings.duration * this.animationSettings.staggerFactor);
        });
    }

    animateUpcomingSlide(upcomingSlide, currentSlide) {
        // Animate Next Slide Elements
        const upcomingSlideFigures = this.dir === 'right' ?
            upcomingSlide.figures.sort((a, b) => a.DOM.el.dataset.sort - b.DOM.el.dataset.sort) :
            upcomingSlide.figures.slice().sort((a, b) => a.DOM.el.dataset.sort - b.DOM.el.dataset.sort).reverse();

        console.log( upcomingSlideFigures );
        // Images
        upcomingSlideFigures.forEach((figure, pos) => {
            this.tl
                .to(figure.DOM.el, this.animationSettings.duration, {
                    ease: this.animationSettings.ease,
                    startAt: { x: this.dir === 'right' ? '101%' : '-101%' },
                    x: '0%'
                }, 'begin+=' + Number(this.animationSettings.staggerFactor * (currentSlide.figuresTotal - 1) + pos * this.animationSettings.staggerFactor))
                .to(figure.DOM.slideEl, this.animationSettings.duration, {
                    ease: this.animationSettings.ease,
                    x: '0%'
                }, 'begin+=' + Number(this.animationSettings.staggerFactor * (currentSlide.figuresTotal - 1) + pos * this.animationSettings.staggerFactor));
        });

        // Description
        this.tl.to(upcomingSlide.DOM.text, this.animationSettings.duration, {
            ease: this.animationSettings.ease,
            opacity: 1
        }, 'begin+=' + this.animationSettings.staggerFactor * (currentSlide.figuresTotal - 1));

        // Title
        this.tl.staggerTo(shuffleArray(upcomingSlide.innerTitleMainLetters), 0.05, {
            ease: this.animationSettings.ease,
            opacity: 1
        }, 0.04, 'begin+=' + this.animationSettings.staggerFactor * (currentSlide.figuresTotal - 1));

        upcomingSlide.DOM.innerTitle.filter((_, pos) => pos < upcomingSlide.innerTitleTotal - 1).forEach(inner => {
            this.tl.to(inner, 0.5, {
                ease: this.animationSettings.ease,
                opacity: 1
            }, 'begin+=' + Number(0.05 + 0.04 * (upcomingSlide.titleLettersTotal - 1) + this.animationSettings.staggerFactor * (currentSlide.figuresTotal - 1)));
        });
    }

    toggleSlides(currentSlide, upcomingSlide) {
        // Create The Timeline
        this.tl = new TimelineMax({
            onStart: () => {
                currentSlide.DOM.el.style.zIndex = 100;
                upcomingSlide.DOM.el.style.zIndex = 101;
            },
            onComplete: () => this.isAnimating = false
        }).add('begin');

        // On Complete Callback
        const onCompleteCurrentCallback = () => currentSlide.unsetCurrent();
        this.tl.addCallback(onCompleteCurrentCallback, this.animationSettings.duration + this.animationSettings.staggerFactor * (this.slidesTotal - 1));

        // On Start New Callback
        const onStartUpcomingCallback = () => {
            upcomingSlide.figures.forEach((figure) => {
                TweenMax.set(figure.DOM.slideEl, { x: this.dir === 'right' ? '-101%' : '101%' });
            });
            TweenMax.set(upcomingSlide.DOM.text, { opacity: 0 });
            upcomingSlide.DOM.innerTitle.forEach((inner, pos) => {
                if (pos === upcomingSlide.innerTitleTotal - 1) {
                    TweenMax.set([...inner.querySelectorAll('.char')], { opacity: 0 });
                } else {
                    TweenMax.set(inner, { opacity: 0 });
                }
            });
            upcomingSlide.setCurrent();
        };
        this.tl.addCallback(onStartUpcomingCallback, this.animationSettings.staggerFactor * (currentSlide.figuresTotal - 1));

        // Animate Current Slide Elements
        this.animateCurrentSlide(currentSlide);

        // Animate Next Slide Elements
        this.animateUpcomingSlide(upcomingSlide, currentSlide);
    }
}

export { Figure };
export default Slideshow; 