const header = document.querySelector('header');

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

const links = document.querySelectorAll(".nav-link");


const tyres = document.querySelectorAll(".switch-link");
const img = document.querySelectorAll(".tyre");
const txt = document.querySelector(".description");
const hswap = document.querySelector(".swap-header");
const switchdot = document.querySelectorAll(".switch-dot");
const next = document.querySelector('[next-btn]');
const prev = document.querySelector('[prev-btn]');
const modalheading = document.querySelector("[modal-heading]");
const modalphoto = document.querySelectorAll("[modal-photo]");
const overlay = document.querySelectorAll(".overlay");

let choose = document.querySelector(".switch-link.choose");


const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');

const form = document.querySelector('[form]');

var tyrestxt = ['<li class="text">Niskie opory toczenia, dobra przyczepność na mokrej nawierzchni i wysokie przebiegi dzięki zmodernizowanej mieszance.</li><li class="text">Wielokątowe rowki dla lepszej sztywności bieżnika i niższego hałasu</li><li class="text">Unikalne lamele na bieżniku zapewniają lepszą przyczepność na mokrej nawierzchni i skuteczność hamowania na śniegu</li><li class="text">Zoptymalizowana szerokość żeber dla równomiernego zużycia</li>', '<li class="text">Ulepszone lamele 3D zapewniają lepszą przyczepność na mokrej nawierzchni i większą sztywność bieżnika</li><li class="text">Równomierne zużycie i niski hałas  dzięki starannie wykonanym rowkom bocznym</li><li class="text">Lepsza przyczepność na mokrej nawierzchni, wysokie przebiegi dzięki nowej mieszance</li><li class="text">Zoptymalizowana kierunkowa rzeźba bieżnika ze specjalnie zaprojektowanymi lamelami zapewnia niezawodną trakcję na mokrym podłożu i śniegu</li>', '<li class="text">Opona przeznaczona do transportu drogowego</li><li class="text">Konstrukcja osnowy z super stalowego pasa zwiększa wytrzymałość karkasu i maksymalizuje nośność opony</li><li class="text">Wysoce odporna na zużycie mieszanka bieżnika znacznie poprawia jego trwałość</li><li class="text">Specjalnie wzmocnione barki zwiększają trwałość  opony</li><li class="text">Unikalne rowkowanie dla lepszego rozpraszania ciepła</li>', '<li class="text">Unikalna konstrukcja bieżnika poprawiająca trakcję i zużycie bieżnika</li><li class="text">Oszczędność paliwa dzięki niższym oporom toczenia</li><li class="text">Ulepszona struktura karkasu dla lepszego prowadzenia w trudnych warunkach</li><li class="text">Zaawansowana mieszanka odporna na ścieranie i niski współczynnik pustej przestrzeni dla większego przebiegu</li><li class="text">Zygzakowaty wzór bieżnika poprawia trakcję</li>',"<li class='text'>Poprawiona nośność dzięki wzmocnionej konstrukcji stopki</li><li class='text'>Mocna budowa dzięki karkasowi  o dużej wytrzymałości </li><li class='text'>Długie przebiegi, doskonała wytrzymałość dzięki gumie o wysokiej odporności na zużycie, odpryski i przecięcia</li><li class='text'>Dobra odporność na kamienie i przecięcia dzięki masywnym blokom bieżnika i unikalnym blokadom</li><li class='text'>Niezawodna przyczepność dzięki poszerzonemu bieżnikowi i specjalnie zaprojektowanemu wzorowi bieżnika.</li>"]



// ---------------- Open&Close Navbar Menu ----------------
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    document.body.classList.toggle("open");
    closeModal(document.querySelector('.modal.active'));
})

links.forEach((link) => link.addEventListener('click', () => {
    document.body.classList.remove('open');
    document.body.classList.remove('stopScrolling');
}))

// ----------------Modal ----------------

function ChangeTyre(id) {

    id = id%5
    if (id == -1) id = 4

    if (id == "0") letter = "S"
    if (id == "1") letter = "D"
    if (id == "2") letter = "T"
    if (id == "3") letter = "A"
    if (id == "4") letter = "D+"

    hswap.innerHTML = '<h1 class="heading">Bieżnik POWER '+ letter +'</h1>';
    txt.innerHTML = tyrestxt[id];
    modalheading.innerHTML = 'Rozmiary POWER '+letter;

    img.forEach(img => img.classList.remove('choose'));
    tyres.forEach(tyre => tyre.classList.remove('choose'));
    modalphoto.forEach(photo => photo.classList.remove('choose'));
    switchdot.forEach(switchdot => switchdot.classList.remove('choose'));

    modalphoto[id].classList.add("choose");
    img[id].classList.add("choose");
    tyres[id].classList.add("choose");
    switchdot[id].classList.add("choose");

    choose = document.querySelector(".switch-link.choose");
}


tyres.forEach(element => {
    element.addEventListener("click", () => {
        ChangeTyre(element.id);
    })
});

next.addEventListener("click", () => {
    ChangeTyre(Number(choose.id)+1)
})

prev.addEventListener("click", () => {
    ChangeTyre(Number(choose.id)-1);
})


// ---------------- Counter Animation ----------------

window.addEventListener("scroll", () => {
    activeLink();
    // if(!skillsPlayed) skillsCounter();
    // if (!mlPlayed) mlCounter();
});

function updateCount(num, maxNum){
    let currentNum = +num.innerText;
    let add = Math.round(maxNum/100)
    if (add==0) add=1
    if (add/10 == Math.round(add/10)) add+=1

    if (currentNum < maxNum) {
        num.innerText = currentNum + add;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 16);
    }
}

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

// sr.reveal("nav", {origin: 'top', delay: 300});

sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-pictures", {origin: 'top', delay: 700});

sr.reveal(".about-grid", {delay: 600});
sr.reveal(".about-info", {origin: 'top', delay: 500});

sr.reveal(".map-border", {delay: 600});
sr.reveal(".box-heading", {origin: 'top', delay: 500});

sr.reveal(".srv-card", {delay: 600});
sr.reveal(".services-info", {origin: 'top', delay: 500});
sr.reveal(".srv-header", {origin: 'top', delay: 300});

sr.reveal(".contact-form", {delay: 600});
sr.reveal(".contact-heading", {delay: 300});
sr.reveal(".address-info", {origin: 'top', delay: 500});


// ---------------- Open Modal ----------------
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.forEach(o => o.classList.add('active'));
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.forEach(o => o.classList.remove('active'));
}

overlay.forEach(overlay => overlay.addEventListener('click', () => {
    console.log("test")
    document.body.classList.remove("open");
    closeModal(document.querySelector('.modal.active'));
}));

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

    let currSectionID = passedSections.at(-1).id-1;

    links.forEach(l => l.classList.remove("active"));
    if (currSectionID>=0) links[currSectionID].classList.add("active");
}

activeLink();
// ---------------- Email sender ----------------

form.addEventListener('submit', () => {
    emailjs.send("service_qo7pjlt","template_emzpff2",{
        from_name: document.getElementById("contact-name").value,
        email_id: document.getElementById("contact-email").value,
        message: document.getElementById("contact-message").value,
    })
    .then(() => {
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-email").value = '';
        document.getElementById("contact-message").value = '';
        console.log('start');
        setTimeout(() => {
            console.log("koniec");
        }, 5000);
    }
    );
});

