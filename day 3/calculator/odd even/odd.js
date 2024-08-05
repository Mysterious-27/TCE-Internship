function odd(){
    let number1=document.getElementById("n1").value;
    let even;
    even=number1%2;
    if(even==0){
        document.getElementById("odd").innerHTML="The number "+number1+" is even";
    }
    else{
        document.getElementById("odd").innerHTML="The number "+number1+" is odd";
    }
}