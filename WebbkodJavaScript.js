function changeLink(){
    var idet = document.getElementsByTagName("div")[2];
    document.getElementById("bodyculture").style.visibility = "visible";
    document.getElementById("bodytradition").style.visibility = "hidden";
    document.getElementById("bodysights").style.visibility = "hidden";

}

function changeTradition(){
    var idet = document.getElementsByTagName("div")[2];
    document.getElementById("bodyculture").style.visibility = "hidden";
    document.getElementById("bodytradition").style.visibility = "visible";
    document.getElementById("bodysights").style.visibility = "hidden";
}

function changeSights(){
    var idet = document.getElementsByTagName("div")[2];
    document.getElementById("bodyculture").style.visibility = "hidden";
    document.getElementById("bodytradition").style.visibility = "hidden";
    document.getElementById("bodysights").style.visibility = "visible";
}