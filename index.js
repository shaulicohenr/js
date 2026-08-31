function changePicture2() {
    document.querySelector("img").src = "1.gif";

}
function changePicture1() {
    document.querySelector("img").src = "2.gif";

}
function start() {
    document.querySelector("#id-h1").style.color = "red";
    document.querySelector("#id-h1").style.background = "yellow";
    document.querySelector("img").src = "2.gif";
    document.querySelector("img").style.height = "100px";
    // document.querySelector("#id-h1").innerHTML = "hello shauli";
}
function resetSize() {
    start()
}
function changeSize() {
    document.querySelector("img").style.height = "50px";
}
function changeSizeFromText() {
    document.querySelector("img").style.height = document.querySelector("#id-txt").value + "px"
}