// =====================================
// URBOMILES WEBSITE SCRIPT
// =====================================

// Sticky Navbar
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "#000";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";
    }

});

// =====================================
// Scroll To Top Button
// =====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =====================================
// Smooth Scrolling
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =====================================
// Active Navigation Link
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =====================================
// Fade In Animation
// =====================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
`
.service-card,
.fleet-card,
.why-card,
.testimonial-card,
.faq-item,
.about-image,
.about-content,
.booking-form,
.contact-form
`
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =====================================
// Booking Form
// =====================================

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

const name =
this.querySelector('input[type="text"]').value;

alert(

"Thank you " +
name +
"! Your booking request has been received. Our team will contact you shortly."

);

this.reset();

});

}

// =====================================
// Contact Form
// =====================================

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for contacting Urbomiles. We'll get back to you soon.");

this.reset();

});

}

// =====================================
// Current Year
// =====================================

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if(copy){

copy.innerHTML = "© " + year + " Urbomiles. All Rights Reserved.";

}

// =====================================
// Hero Counter Animation
// =====================================

const counters = document.querySelectorAll(".hero-stats h2");

const speed = 60;

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText.replace(/\D/g,''));

let count=+counter.getAttribute("data-count") || 0;

const increment=Math.ceil(target/speed);

if(count<target){

count+=increment;

counter.setAttribute("data-count",count);

if(counter.innerText.includes("+"))
counter.innerText=count+"+";

else if(counter.innerText.includes("×"))
counter.innerText="24×7";

else
counter.innerText=count;

setTimeout(update,25);

}

}

update();

});

// =====================================
// Console Message
// =====================================

console.log(
"%c🚖 Welcome to Urbomiles",
"color:#D4AF37;font-size:20px;font-weight:bold;"
);