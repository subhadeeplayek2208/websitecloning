
const down = document.querySelector(".down");
const up = document.querySelector(".up");
const down1 = document.querySelector(".down1");
const up1 = document.querySelector(".up1");
const down2 = document.querySelector(".down2");
const up2 = document.querySelector(".up2");
const down3 = document.querySelector(".down3");
const up3 = document.querySelector(".up3");
const down4 = document.querySelector(".down4");
const up4 = document.querySelector(".up4");


const contentDiv = document.getElementById("content");
const contentDiv1 = document.getElementById("content1");
const contentDiv2 = document.getElementById("content2");
const contentDiv3= document.getElementById("content3");
const contentDiv4 = document.getElementById("content4");


down.addEventListener("click", () => {
    contentDiv.classList.remove("hidden");
});

up.addEventListener("click", () => {
    contentDiv.classList.add("hidden");
});

down1.addEventListener("click", () => {
    contentDiv1.classList.remove("hidden");
});

up1.addEventListener("click", () => {
    contentDiv1.classList.add("hidden");
});

down2.addEventListener("click", () => {
    contentDiv2.classList.remove("hidden");
});

up2.addEventListener("click", () => {
    contentDiv2.classList.add("hidden");
});

down3.addEventListener("click", () => {
    contentDiv3.classList.remove("hidden");
});

up3.addEventListener("click", () => {
    contentDiv3.classList.add("hidden");
});

down4.addEventListener("click", () => {
    contentDiv4.classList.remove("hidden");
});

up4.addEventListener("click", () => {
    contentDiv4.classList.add("hidden");
});

// *************************    Made By : Gaurav Jain      **********************
