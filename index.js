function getPassword(){
    var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passowrdLength = parseInt(prompt("escolha quantas letras"));
    var passowrd = "";
    var verificacaoLetra = confirm("você deseja letras")

    var numeros = "01234567899876543210";
    //var passowrdLength2 = parseInt(prompt("escolha quantos numeros"));
    var verificacaoNumeros = confirm("deseja numeros?")

    var caracteresEspeciais = "!@#$%¨&*()'-_{}[]^~";
    //var passowrdLength3 = parseInt(prompt("escolha quantos caracteres especiais"));
    var verificacaoEspeciais = confirm("deseja especiais")
      
    var geral = letras + numeros + caracteresEspeciais; 
    var fletra = numeros + caracteresEspeciais;
    var fnumeros = letras + caracteresEspeciais;
    var fEspeciais = letras + numeros;

    if(passowrdLength >= 16){
    for (i = 0; i < passowrdLength; i++){

        if(verificacaoLetra === true && verificacaoNumeros === true && verificacaoEspeciais === true){
            var randomNumber = Math.floor(Math.random() * geral.length);
        passowrd += geral.substring(randomNumber, randomNumber + 1);  
        }
        if(verificacaoLetra === true && verificacaoNumeros === true && verificacaoEspeciais === false){
            var randomNumber = Math.floor(Math.random() * fEspeciais.length);
            passowrd += fEspeciais.substring(randomNumber, randomNumber + 1);  
        } 
        if(verificacaoLetra === true && verificacaoNumeros === false && verificacaoEspeciais === true){
            var randomNumber = Math.floor(Math.random() * fnumeros.length);
        passowrd += fnumeros.substring(randomNumber, randomNumber + 1);
        }
        if(verificacaoLetra === false && verificacaoNumeros === true && verificacaoEspeciais === true){
            var randomNumber = Math.floor(Math.random() * fletra.length);
        passowrd += fletra.substring(randomNumber, randomNumber + 1);  
        }
        if(verificacaoLetra === true && verificacaoNumeros === false && verificacaoEspeciais === false){
            var randomNumber = Math.floor(Math.random() * letras.length);
        passowrd += letras.substring(randomNumber, randomNumber + 1);
        }
        if(verificacaoLetra === false && verificacaoNumeros === true && verificacaoEspeciais === false){
            var randomNumber = Math.floor(Math.random() * numeros.length);
        passowrd += numeros.substring(randomNumber, randomNumber + 1);
        }
        if(verificacaoLetra === false && verificacaoNumeros === false && verificacaoEspeciais === true){
            var randomNumber = Math.floor(Math.random() * caracteresEspeciais.length);
        passowrd += caracteresEspeciais.substring(randomNumber, randomNumber + 1);
        }
        if(verificacaoLetra === false && verificacaoNumeros === false && verificacaoEspeciais === false){
            alert("vai tomar no olho do seu cu ")
        }
    }    }
    else{
        alert("você não atigiu o minimo")
    }
    
    document.getElementById('password').value = passowrd;}


    function copiarTexto() {
        let textoCopiado = document.getElementById("password");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("O texto é: " + textoCopiado.value);
    }
