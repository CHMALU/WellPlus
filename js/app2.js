const links = document.querySelectorAll(".nav-link");
const header = document.querySelector('header');

const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelectorAll(".overlay");

const form = document.querySelector('[form]');

// ---------------- Open&Close Navbar Menu ----------------

hamburger.addEventListener('click', () => {
    document.body.classList.toggle("open");
    closeModal(document.querySelector('.modal.active'));
})

links.forEach((link) => link.addEventListener('click', () => {
    document.body.classList.remove('open');
    document.body.classList.remove('stopScrolling');
}))

overlay.forEach(overlay => overlay.addEventListener('click', () => {
    console.log("test")
    document.body.classList.remove("open");
    // closeModal(document.querySelector('.modal.active'));
}));

// ---------------- Sticky Navbar ----------------

function stickyNavbar(){
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);

// ---------------- Reveal Animation ----------------

let sr = ScrollReveal({
    duration: 2500,
    distance: '60px',
});

sr.reveal(".box-heading", {origin: 'top', delay: 700});
sr.reveal(".table-form", {delay: 600});
sr.reveal(".catalog-picture", {origin: 'top', delay: 700});
sr.reveal(".srv-header", {origin: 'top', delay: 400});

sr.reveal(".contact-form", {delay: 600});
sr.reveal(".contact-info", {origin: 'top', delay: 700});

// ---------------- Change Active Link ----------------

function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        };
    })
    .filter((sct) => sct.y <=0);
    let currSectionID = passedSections.at(-1).id;

    links.forEach(l => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
}

activeLink();

window.addEventListener("scroll", () => {
    activeLink();
});

// ---------------- Email sender ----------------

form.addEventListener('submit', () => {
    emailjs.send("service_qo7pjlt","template_emzpff2", {
        from_name: document.getElementById("contact-name").value,
        email_id: document.getElementById("contact-email").value,
        message: document.getElementById("contact-message").value,
    })
    .then(() => {
        console.log(document.getElementById("contact-name").value);
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-email").value = '';
        document.getElementById("contact-message").value = '';
        console.log('start');
        setTimeout(() => {
            console.log("koniec");
        }, 5000);
    }
    );
})