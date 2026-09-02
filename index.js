function changePicture2() {
    document.querySelector("img").src = "1.gif";

}
function changePicture1() {
    document.querySelector("img").src = "2.gif";

}
function start() {
    document.querySelector("div").style.backgroundImage = "url('sun.jpg')";
    document.querySelector("#id-h1").style.color = "red";
    document.querySelector("#id-h1").style.background = "yellow";
    document.querySelector("img").src = "2.gif";
    document.querySelector("img").style.height = "100px";
    // document.querySelector("#id-h1").innerHTML = "hello shauli";
}
function check() {
    if (document.querySelector("#id-txt1").value >= 500) {
        document.querySelector("#userName").innerHTML = "shauli"
    }
    else if (document.querySelector("#id-txt1").value < 500) {
        document.querySelector("#userName").innerHTML = "user"
    }
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
let Name = "shauli"
const User = "usa"
console.log(Name)
console.log(User)