function myOver(obj) {
    obj.style.backgroundColor = "#e78326";
    obj.style.color = "#fff";
}

function myLeave(obj) {
    obj.style.backgroundColor = "#fff";
    obj.style.color = "#e78326";
}

function getColor() {
    var colorElements = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    var colorArray = colorElements.split(",");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBoxcolor() {
    for (var i = 3; i > 0; i--) {
        var a = Math.ceil(Math.random() * 10);
        var boxid = "box" + a
        document.getElementById(boxid).style.backgroundColor = getColor();
    }
}
//闪
var fl;

function startFlash() {
    fl = setInterval(changeBoxcolor, 300);
}

function stopFlash() {
    clearInterval(fl)
    var a = 9;
    for (var i = 9; i > 0; i--) {
        var boxid = "box" + a
        document.getElementById(boxid).style.backgroundColor = "#e78326";
        a=a-1;
    }
}
