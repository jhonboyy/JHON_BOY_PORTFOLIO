export const applyAnimation = (from, to) => {
    function updateCSSVariables() {
        const root = document.documentElement;
        const viewportHeight = window.innerHeight;

        root.style.setProperty('--slide-up-works-to', `${198 - viewportHeight}px`);
        root.style.setProperty('--slide-up-works-repeat-to', `${148 - viewportHeight}px`);
        root.style.setProperty('--slide-up-about-to', `${198 - viewportHeight}px`);
        root.style.setProperty('--slide-down-about-from', `${250 - viewportHeight}px`);
    }

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    const debouncedUpdateCSSVariables = debounce(updateCSSVariables, 200);

    const isMobile = () => window.innerWidth <= 768;
    let currentDeviceState = isMobile() ? 'mobile' : 'desktop';

    const handleResize = () => {
        const newDeviceState = isMobile() ? 'mobile' : 'desktop';
        if (newDeviceState !== currentDeviceState) {
            currentDeviceState = newDeviceState;
            const action = actions[`${from}->${to}`];
            if (action) {
                action();
            }
        }
        debouncedUpdateCSSVariables();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', () => {
        updateCSSVariables();
        handleResize();
    });

    updateCSSVariables();

    const desktopActions = {
        'index->about': () => {
            disablePointerEvents('aboutButton');
            animateAboutButton();
            showAboutMenuImage();
            animateAboutSection();
        },
        'index->works': () => {
            moveElement('aboutButton', '-50px');
            setBorderTop('aboutButton', '1px solid black');
            disablePointerEvents('worksButton');
            animateWorksButton();
            showMenuImage();
            animateProjectsSection();
        },
        'about->works': () => {
            moveElement('worksButton', 'var(--slide-up-works-repeat-to)');
            moveElement('aboutButton', 'var(--slide-down-about-from)');
            setBorderTop('aboutButton', '1px solid black');
            disablePointerEvents('worksButton');
            animateWorksButtonFromAbout();
            showMenuImage();
            animateProjectsSection();
        },
        'works->about': () => {
            disablePointerEvents('aboutButton');
            moveElement('worksButton', 'var(--slide-up-works-repeat-to)');
            animateAboutButtonFromWorks();
            showAboutMenuImage();
            animateAboutSection();
        },
        'works->index': resetWorksPage,
        'about->index': resetAboutPage,
        'direct->works': () => {
            setBorderTop('aboutButton', '1px solid black');
            disablePointerEvents('worksButton');
            animateWorksButton();
            showMenuImage();
            animateProjectsSection();
        },
        'direct->about': () => {
            disablePointerEvents('aboutButton');
            animateAboutButton();
            showAboutMenuImage();
            animateAboutSection();
        },
        'works->works': () => {
            moveElement('aboutButton', '-50px');
            disablePointerEvents('worksButton');
            setBorderTop('aboutButton', '1px solid black');
            animateWorksButton();
            showMenuImage();
            animateProjectsSection();
        },
        'about->about': () => {
            disablePointerEvents('aboutButton');
            animateAboutButton();
            showAboutMenuImage();
            animateAboutSection();
        }
    };

    const mobileActions = {
        'index->about': animateAboutSection,
        'index->works': animateProjectsSection,
        'about->works': animateProjectsSection,
        'works->about': animateAboutSection,
        'works->index': () => { },
        'about->index': () => { },
        'direct->works': animateProjectsSection,
        'direct->about': animateAboutSection,
        'works->works': animateProjectsSection,
        'about->about': animateAboutSection
    };

    const reapplyActions = () => {
        const actions = currentDeviceState === 'mobile' ? mobileActions : desktopActions;
        const action = actions[`${from}->${to}`];
        if (action) {
            action();
        }
    };

    window.addEventListener('resize', debounce(reapplyActions, 200));

    const actions = currentDeviceState === 'mobile' ? mobileActions : desktopActions;
    const action = actions[`${from}->${to}`];
    if (action) {
        action();
    }
};

// Auxiliary functions
const disablePointerEvents = (elementId) => {
    document.getElementById(elementId).classList.add('no-pointer-events');
};

const moveElement = (elementId, topValue) => {
    document.getElementById(elementId).style.top = topValue;
};

const setBorderTop = (elementId, value) => {
    document.getElementById(elementId).style.borderTop = value;
};

// Animation functions without promises or callbacks
function animateWorksButton() {
    const worksButton = document.getElementById('worksButton');
    worksButton.classList.remove('animate-slide-up-works');
    worksButton.classList.add('animate-slide-up-works-repeat');
}

function showMenuImage() {
    const projectsSection = document.getElementById('menuImage');
    projectsSection.classList.add('animate-fade-in');
}

function animateAboutButton() {
    const aboutButton = document.getElementById('aboutButton');
    const worksButton = document.getElementById('worksButton');
    aboutButton.classList.add('animate-slide-up-about');
    worksButton.classList.add('animate-slide-up-works-repeat');
}

function showAboutMenuImage() {
    const aboutImage = document.getElementById('menuImage');
    aboutImage.classList.add('animate-fade-in');
}

function animateProjectsSection() {
    const projectsSection = document.getElementById('works-content');
    projectsSection.classList.add('animate-fade-in');
}

function animateAboutSection() {
    const aboutSection = document.getElementById('about-content');
    aboutSection.classList.add('animate-fade-in');
}

function animateWorksButtonFromAbout() {
    const aboutButton = document.getElementById('aboutButton');
    aboutButton.classList.remove('animate-slide-up');
    aboutButton.classList.add('animate-slide-down-about');
}

function animateAboutButtonFromWorks() {
    const aboutButton = document.getElementById('aboutButton');
    aboutButton.classList.add('animate-slide-up-about');
}

function resetWorksPage() {
    const worksButton = document.getElementById('worksButton');
    worksButton.classList.remove('animate-slide-up-works');
}

function resetAboutPage() {
    const aboutButton = document.getElementById('aboutButton');
    aboutButton.classList.remove('animate-slide-up-about');
}
