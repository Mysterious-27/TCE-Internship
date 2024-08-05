function vol(){
    let radius=document.getElementById("r").value;
    let volume;
    if(volume===NaN){
        alert("Please enter the valid number")
    }
    volume=(4/3)*(3.14)*(parseFloat(radius));
    document.getElementById("vol").innerHTML="Volume="+volume.toFixed(2);
}