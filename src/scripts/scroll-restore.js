const currentPage = window.location.pathname;

localStorage.setItem('previousPage', currentPage);

window.addEventListener('beforeunload', () => {
    const worksContent = document.querySelector('.projects-wrap');
    if (worksContent) {
        sessionStorage.setItem('worksContentScrollPosition', worksContent.scrollTop.toString());
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const worksContent = document.querySelector('.projects-wrap');
    const scrollPosition = sessionStorage.getItem('worksContentScrollPosition');
    
    if (worksContent && scrollPosition) {

        requestAnimationFrame(() => {
            worksContent.scrollTo({
                top: Number(scrollPosition),
                behavior: 'instant' 
            });
        });
    }
});