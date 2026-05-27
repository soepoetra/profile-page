const images = document.querySelectorAll(".page3 img")
const dialog = document.getElementById("dialog")
const dialogImg = document.getElementById("dialogImg")

images.forEach(img => {
    img.addEventListener("click", () => {
        dialogImg.src = img.src
        dialog.showModal()
    })

}
);
dialog.addEventListener("click", () => dialog.close())



const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Hapus active class dari semua links
            navLinks.forEach(l => l.classList.remove('active'));
            // Tambahkan active class ke link yang diklik
            link.classList.add('active');
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active link saat halaman di-scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('div[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});


const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const observerOptions = {
    threshold: 0.2, 
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

scrollRevealElements.forEach(element => {
    observer.observe(element);
});
