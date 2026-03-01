// NAVBAR RESPONSIVE 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('open');
};



// EmailJS Initialize
(function() {
    emailjs.init("Q0kLrTWdu_F9cniWg"); //  FOR PUBLIC KEY EMAIL JS
})();

const subscribeForm = document.getElementById('subscribeFormTron');
const subBtn = document.getElementById('subBtnTron');
const successMsg = document.getElementById('tron-success-message');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Loading State
        subBtn.classList.add('loading');
        const mainText = subBtn.querySelector('.btn-main-text');
        const successText = subBtn.querySelector('.btn-success-text');
        
        mainText.innerText = "AUTHENTICATING...";

        // FOR SERVICE AND TEMPLATE KEY 
        emailjs.sendForm('service_3acwmnm', 'template_ajgf5x9', this)
            .then(() => {
                // SUCCESS! 
                subBtn.classList.remove('loading');
                mainText.classList.add('hidden');
                successText.classList.remove('hidden');
                
                subBtn.style.background = "#39ff14"; 
                subBtn.style.boxShadow = "0 0 20px #39ff14";

                successMsg.classList.remove('hidden');
                
                subscribeForm.reset();
            }, (error) => {
                console.log('FAILED...', error);
                mainText.innerText = "SEQUENCE FAILED";
                subBtn.style.background = "red";
            });
    });
}
// SIDEBAR JS SCRIPT 
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

sidebarLinks.forEach(link => {
    link.onclick = () => {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    };
});
// NUERAL STATS 
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
        observer.unobserve(entries[0].target);
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.neural-stats'));
// NUERAL STATS END 

 