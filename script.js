

for (let x = 0; x < 200; x++) {
    const b = document.querySelector('body');
    const star = document.createElement("div");
    const randTop = Math.random() * window.screen.height;
    const randLeft = Math.random() * window.screen.width;
    const randSize = Math.random() * 5;
    star.classList.add("stars");
    star.style.top = `${randTop}px`;
    star.style.left = `${randLeft}px`;
    star.style.width = `${randSize}px`;
    star.style.height = `${randSize}px`;
    b.appendChild(star);
}

console.log(window.screen.width, window.screen.height);