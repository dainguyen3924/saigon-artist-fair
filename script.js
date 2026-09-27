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

        // Xác định card active
        cards.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });

        // =========================
        // MOBILE
        // =========================
        if (window.innerWidth <= 480) {
            const x =
                container.offsetWidth / 2 -
                card.offsetLeft -
                card.offsetWidth / 2;

            track.style.transform = `translateX(${x}px)`;
        }

        // =========================
        // DESKTOP
        // =========================
        else {
            const x =
                container.offsetWidth / 2 -
                card.offsetLeft -
                card.offsetWidth / 2;

            track.style.transform = `translateX(${x}px)`;
        }

        // Cập nhật số thứ tự
        counter.textContent = `${index + 1} / ${cards.length}`;
    }

    // Next
    function nextSlide() {
        index = (index + 1) % cards.length;
        update();
    }

    // Previous
    function prevSlide() {
        index = (index - 1 + cards.length) % cards.length;
        update();
    }

    // Button
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    // Keyboard
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            nextSlide();
        }

        if (e.key === "ArrowLeft") {
            prevSlide();
        }
    });

    // Resize
    window.addEventListener("resize", update);

    // Chạy lần đầu
    update();
});


// ===============================
// SCROLL REVEAL
// ===============================

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