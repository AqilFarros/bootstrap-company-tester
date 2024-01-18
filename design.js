let logo = document.getElementById("logo")

let navbar = document.getElementById("nav")
let navLinks = document.querySelectorAll(".navbar .nav-link")

if (window.scrollY > 0) {
    logo.src = "images/logoGreen.png";
    navbar.classList.add("bg-body-tertiary");
    navbar.classList.remove("bg-transparent");
    navLinks.forEach((e) => {
        e.classList.add("text-success");
        e.classList.remove("text-white");
    });
} else {
    logo.src = "images/logoWhite.png";
    navbar.classList.remove("bg-body-tertiary");
    navbar.classList.add("bg-transparent");
    navLinks.forEach((e) => {
        e.classList.remove("text-success");
        e.classList.add("text-white");
    });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        logo.src = "images/logoGreen.png";
        navbar.classList.add("bg-body-tertiary");
        navbar.classList.remove("bg-transparent");
        navLinks.forEach((e) => {
            e.classList.add("text-success");
            e.classList.remove("text-white");
        });
    } else {
        logo.src = "images/logoWhite.png";
        navbar.classList.remove("bg-body-tertiary");
        navbar.classList.add("bg-transparent");
        navLinks.forEach((e) => {
            e.classList.remove("text-success");
            e.classList.add("text-white");
        });
    }
})

// // // // // // // // // // // // // //
let kartuShop = document.querySelectorAll(".kartu")
let tombolShop = document.querySelectorAll(".kartu .btnShop")
let iconShop = document.querySelectorAll(".kartu i")
let buyNow = document.querySelectorAll(".buy-now")
let deskShop = document.querySelectorAll(".kartu .desk")
let hargaShop = document.querySelectorAll(".kartu .harga")

tombolShop.forEach((tombol, index) => {
    tombol.addEventListener("mouseover", () => {
        tombol.classList.add("ganti")
        iconShop[index].classList.remove("fa-circle-plus");
        iconShop[index].classList.add("fa-cart-shopping");
        buyNow[index].innerHTML = " Buy now";
        buyNow[index].style.opacity = 1;
        console.log(tombol);
    });

    tombol.addEventListener("mouseout", () => {
        tombol.classList.remove("ganti")
        iconShop[index].classList.remove("fa-cart-shopping");
        iconShop[index].classList.add("fa-circle-plus");
        buyNow[index].innerHTML = "";
        buyNow[index].style.opacity = 0;
    });
});

kartuShop.forEach((kartu, index) => {
    kartu.addEventListener("mouseover", () => {
        kartu.classList.add("bg-success")
        kartu.classList.add("bg-gradient")
        tombolShop[index].classList.add("btn-outline-light")
        tombolShop[index].classList.add("bg-transparent")
        deskShop[index].classList.add("text-white")
        hargaShop[index].classList.add("text-white")
        tombolShop[index].classList.remove("btn-outline-success")
        tombolShop[index].classList.remove("bg-white")
        if (tombolShop[index].classList.contains("ganti")) {
            tombolShop[index].classList.add("bg-white")
            tombolShop[index].classList.remove("bg-transparent")
        }
    })

    kartu.addEventListener("mouseout", () => {
        kartu.classList.remove("bg-success")
        kartu.classList.remove("bg-gradient")
        tombolShop[index].classList.remove("btn-outline-light")
        tombolShop[index].classList.remove("bg-transparent")
        deskShop[index].classList.remove("text-white")
        hargaShop[index].classList.remove("text-white")
        tombolShop[index].classList.add("btn-outline-success")
        tombolShop[index].classList.add("bg-white")
    })
})

// // // // // // // // // // // // //
