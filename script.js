let url = document.querySelector("#url");
let size = document.querySelector("#size");
let qr = document.querySelector(".qr");
let genbtn = document.querySelector("#genbtn");
let downbtn = document.querySelector("#downbtn");
let clr = document.querySelector("#clr");


genbtn.addEventListener("click", (e) => {
    e.preventDefault();//not reload
    generateQR();
})

size.addEventListener("change", (e) => {

    empty();

})

function generateQR() {
    qr.innerHTML = "";
    new QRCode(qr, {
        text: url.value,
        height: size.value,
        width: size.value,
        colorDark: "#000",
        colorLight: "#fff",
    });
}

// Add event listener to download button
downbtn.addEventListener("click", () => {
    const qrCode = qr.querySelector('img');
    const link = document.createElement('a');
    link.href = qrCode.src;
    link.download = `qrcode.${url   }.png`;
    link.click();
})

clr.addEventListener("click", () => {
    url.value = " ";
    qr.innerHTML=" ";
})

function empty() {
    if (url.value.length > 0) {
        generateQR();
        size.value = e.target.value;
    }
    else{
         alert(" url/ text is not defined");
    }
}