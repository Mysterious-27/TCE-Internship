function calc(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    let opr=document.getElementById("opr").value;
    let result;
    if(opr=="+"){
        let result=parseFloat(num1)+parseFloat(num2)
        document.getElementById("res").innerHTML="Your Answer is  "+result;
    }
    if(opr=="-"){
        let result=parseFloat(num1)-parseFloat(num2)
        document.getElementById("res").innerHTML="Your Answer is  "+result;
    }
    if(opr=="*"){
        let result=parseFloat(num1)*parseFloat(num2)
        document.getElementById("res").innerHTML="Your Answer is  "+result;
    }
    if(opr=="/"){
        if(parseFloat(num2)>0)
        {
        result=parseFloat(num1)/parseFloat(num2)
        document.getElementById("res").innerHTML="Your Answer is  "+result;
        }
        else
        {
            alert("Not defined");
        }
    }
}
