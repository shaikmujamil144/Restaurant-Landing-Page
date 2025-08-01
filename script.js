const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = document.querySelector('.menu-items');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuItems.classList.toggle('active');
});

document.querySelectorAll('.menu-items a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuItems.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Table reservation request sent! We'll confirm shortly.');
        this.reset();
    });
}

const feedbackForm = document.querySelector('.subscribe-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for subscribing!');
        this.reset();
    });
}

const galleryPhotos = document.querySelectorAll('.gallery-photo');
galleryPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('zoomed');
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});
