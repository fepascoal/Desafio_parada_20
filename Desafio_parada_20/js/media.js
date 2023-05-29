var resp = document.getElementById("resp");

function gera_media(){
    let nome = document.getElementById("nome").value;
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;

    if(nome !== "" && n1 !== "" && n2 !== "" && n3 !== ""){
       
         
        const media = ((parseInt(n1) + parseInt(n2) + parseInt(n3)) /3).toFixed(1);

        let situacao = "";

        if(media < 6){
            situacao = "reprovado(a)!";
        }else{
            situacao = "aprovado(a)!";
        }

        resp.textContent = `${nome} sua média é ${media} e você está ${situacao}`;
        

    }else{
        resp.textContent = "Preencha todos os Campos!"
    }

}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("nome").focus();

    document.getElementById("n1").value = "";
    

    document.getElementById("n2").value = "";

    document.getElementById("n3").value = "";

    resp.textContent = "";
    
}
