// Carousel for reviews section
(function () {
    const track = document.getElementById("reviewsTrack");
    const prev = document.getElementById("reviewsPrev");
    const next = document.getElementById("reviewsNext");
    const dots = Array.from(document.querySelectorAll(".reviewsDot"));

    if (!track || !prev || !next || dots.length === 0) return;

    const slidesCount = dots.length;
    let index = 0;

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle("bg-zinc-900", i === index);
        d.classList.toggle("bg-zinc-300", i !== index);
      });
    }

    function goTo(i) {
      index = (i + slidesCount) % slidesCount;
      render();
    }

    prev.addEventListener("click", () => goTo(index - 1));
    next.addEventListener("click", () => goTo(index + 1));
    dots.forEach((d, i) => d.addEventListener("click", () => goTo(i)));

    // Keyboard support (left/right when the carousel is focused)
    track.setAttribute("tabindex", "0");
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    });

    // Optional: swipe support (mobile)
    let startX = 0;
    let isDown = false;

    track.addEventListener("pointerdown", (e) => {
      isDown = true;
      startX = e.clientX;
      track.setPointerCapture(e.pointerId);
    });

    track.addEventListener("pointerup", (e) => {
      if (!isDown) return;
      isDown = false;
      const dx = e.clientX - startX;
      const threshold = 40;
      if (dx > threshold) goTo(index - 1);
      if (dx < -threshold) goTo(index + 1);
    });

    // initial render
    render();
  })();