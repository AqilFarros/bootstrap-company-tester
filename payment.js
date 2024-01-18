let i = 0


// // // // // // // // //
let nominalHarga = document.querySelectorAll(".nominalHarga")

let itemSell = document.querySelectorAll("#itemSell")
let itemName = document.querySelectorAll(".itemName")

let pembayaran = document.querySelector(".pembayaran")
let konten = document.querySelector(".konten")
let btnClose = document.getElementById("btnClose")
let imgBuy = document.querySelector("#imgBuy")
let titleItem = document.querySelector("#titleItem")
let deskItem = document.querySelector("#deskItem")
let dcrItem = document.querySelector("#dcrItem")
let amountItem = document.querySelector("#amountItem")
let incItem = document.querySelector("#incItem")
let allItem = document.querySelector("#allItem")
let nameAmount = document.querySelector("#nameAmount")
let allAmount = document.querySelector("#allAmount")
let priceAmont = document.querySelector("#priceAmont")
let itemPrice = document.querySelector("#itemPrice")
let allAmountItem = document.querySelector("#allAmountItem")
let allPrice = document.querySelector("#allPrice")
let priceChange = document.querySelector("#priceChange")
let buyBtn = document.querySelector(".buyBtn")
let thankYou = document.querySelector(".thank-you")

amountItem.innerHTML = 0
allAmount.innerHTML = 0

let currentAmount = parseInt(amountItem.innerHTML)
let currentAllAmount = parseInt(allAmount.innerText)
let currentNominalHarga = Array.from(nominalHarga).map((elem) => parseInt(elem.innerText))

tombolShop.forEach((tombolShop, index) => {
    tombolShop.addEventListener("click", () => {
        selectedIndex = index

        let itemSellSrc = itemSell[index].src
        let itemNameText = itemName[index].innerText

        pembayaran.classList.toggle("none")
        pembayaran.classList.toggle("noneF")
        imgBuy.src = itemSellSrc
        titleItem.innerText = itemNameText
        nameAmount.innerText = itemNameText
        priceChange.innerText = 0
        itemPrice.innerText = nominalHarga[index].innerText

        currentItemPrice = parseInt(itemPrice.innerText)

        itemPrice.innerText = 0
    })
})

incItem.addEventListener("click", () => {
    buyBtn.classList.remove("disabled")

    currentAmount++
    i++

    amountItem.innerHTML = currentAmount

    currentAllAmount += currentAmount

    allAmount.innerText = currentAllAmount

    currentAllAmount = 0

    currentItemPrice = currentItemPrice * (i * 1)

    itemPrice.innerText = currentItemPrice
    priceChange.innerText = currentItemPrice
    console.log(currentItemPrice);

    currentItemPrice = currentItemPrice / (i * 1)
})

dcrItem.addEventListener("click", () => {
    let index = selectedIndex

    currentAmount--
    i--

    currentAmount = Math.max(currentAmount, 0)
    i = Math.max(currentAmount, 0)
    currentItemPrice = Math.max(currentItemPrice, 0)

    amountItem.innerHTML = currentAmount

    currentAllAmount += currentAmount

    allAmount.innerText = currentAllAmount

    currentAllAmount = 0

    currentItemPrice = currentItemPrice * (i * 1)
    console.log(currentItemPrice);

    itemPrice.innerText = currentItemPrice
    priceChange.innerText = currentItemPrice

    console.log(i);

    currentItemPrice = currentItemPrice / (i * 1)
    if (isNaN(currentItemPrice)) {
        currentItemPrice = nominalHarga[index].innerText
        buyBtn.classList.add("disabled")
    }
})

pembayaran.addEventListener("click", (event) => {
    // Menghitung posisi relatif terhadap elemen pembayaran
    const rect = pembayaran.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Memeriksa apakah klik terjadi di bagian yang tidak diisi oleh konten
    if (x < konten.offsetLeft || x > konten.offsetLeft + konten.offsetWidth ||
        y < konten.offsetTop || y > konten.offsetTop + konten.offsetHeight) {
        // Bagian yang tidak terisi oleh konten mendapatkan event
        i = 0;
        buyBtn.classList.add("disabled")
        pembayaran.classList.remove("noneF");
        pembayaran.classList.add("none")
        currentAmount = 0;
        amountItem.innerHTML = 0;
        allAmount.innerText = 0;
    }
});

btnClose.addEventListener("click", () => {
    i = 0

    pembayaran.classList.add("none")
    pembayaran.classList.remove("noneF")
    buyBtn.classList.add("disabled")

    currentAmount = 0
    amountItem.innerHTML = 0
    allAmount.innerText = 0
})

buyBtn.addEventListener("click", () => {
    thankYou.classList.toggle("none")
    thankYou.classList.toggle("block")
    buyBtn.classList.add("none")
    buyBtn.classList.remove("block")
    buyBtn.classList.add("disabled")
    incItem.classList.add("disabled")
    dcrItem.classList.add("disabled")

    let time = setTimeout(() => {
        thankYou.classList.toggle("none")
        thankYou.classList.toggle("block")

        buyBtn.classList.remove("none")
        buyBtn.classList.add("block")

        i = 0

        pembayaran.classList.toggle("none")
        pembayaran.classList.toggle("noneF")

        incItem.classList.remove("disabled")
        dcrItem.classList.remove("disabled")

        currentAmount = 0
        amountItem.innerHTML = 0
        allAmount.innerText = 0
    }, 1500)
})