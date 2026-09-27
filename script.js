document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("track");
    const cards = [...track.children];

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const counter = document.getElementById("counter");

    let index = 1;

    function update() {
        const card = cards[index];
        const container = track.parentElement;

        cards.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });

        const x =
            container.offsetWidth / 2 -
            card.offsetLeft -
            card.offsetWidth / 2;

        track.style.transform = `translateX(${x}px)`;
        counter.textContent = `${index + 1} / ${cards.length}`;
    }

    function nextSlide() {
        index = (index + 1) % cards.length;
        update();
    }

    function prevSlide() {
        index = (index - 1 + cards.length) % cards.length;
        update();
    }

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
    });

    window.addEventListener("resize", update);

    update();
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

reveals.forEach((element) => {
    observer.observe(element);
});