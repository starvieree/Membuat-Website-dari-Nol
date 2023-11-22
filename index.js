const text = document.querySelector(".text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Backend Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
