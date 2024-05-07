function on()
{
    if((document.getElementById("nome").value.length != 0) && (validateEmail(document.getElementById("email"))) && (document.getElementById("assunto").value.length != 0) && (document.getElementById("mensagem").value.length != 0)){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }
}

function onEmail()
{
    document.getElementById("email").reportValidity();
    if((document.getElementById("nome").value.length != 0) && (validateEmail(document.getElementById("email"))) && (document.getElementById("assunto").value.length != 0) && (document.getElementById("mensagem").value.length != 0)){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }
}

function validateEmail(input) {

    var validRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
    if (input.value.match(validRegex)) {
        return true;
    } 
    else {
        return false;
        
    }
  
}