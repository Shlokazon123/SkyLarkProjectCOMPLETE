function SkyLark() {
    User=document.getElementById("in1").value

    localStorage.setItem("UserName",User);
    window.location="index2.html";
}