function verificaMes(valorMes){
    if(valorMes > 12 || valorMes < 1){
        return false;
    }
    return true;
}

document.querySelector('form').addEventListener('submit', function (event){
    event.preventDefault();
    let data = document.querySelector('#data').value;
    let pedacosData = data.split("/");
    let mes = pedacosData[1];
    let dia = pedacosData[0];
    let ano = pedacosData[2];
    let table = document.querySelector('#dataPorExtenso');
    let tBody = document.createElement("tbody");

    if(verificaMes(mes)){
        for(let i = 1, j = 8; i <= 7 || j <= 12; i += 2, j += 2){
            if(mes == i || mes == j){
                if(dia > 31 || dia < 1){
                    alert("Dia inválido!");
                    return;
                }
            }
        }
        for(let i = 2, j = 9; i <=6 || j <= 11; i += 2, j += 2){
            if(mes == i || mes == j){
                if(dia > 30 || dia < 1){
                    alert("Dia inválido!");
                    return;
                }
            }
        }
        if(dia != "" && mes != "" && ano != ""){   
            let tdNomeMes;
            let tdDataPorExtenso = document.createElement("td");
            let tr = document.createElement("tr");
            if(mes == 1){
                tdNomeMes = "Janeiro";
            }else if(mes == 2){
                tdNomeMes = "Fevereiro";
            }else if(mes == 3){
                tdNomeMes = "Março";
            }else if(mes == 4){
                tdNomeMes = "Abril";
            }else if(mes == 5){
                tdNomeMes = "Maio";
            }else if(mes == 6){
                tdNomeMes = "Junho";
            }else if(mes == 7){
                tdNomeMes = "Julho";
            }else if(mes == 8){
                tdNomeMes = "Agosto";
            }else if(mes == 9){
                tdNomeMes = "Setembro";
            }else if(mes == 10){
                tdNomeMes = "Outubro";
            }else if(mes == 11){
                tdNomeMes = "Novembro";
            }else if(mes == 12){
                tdNomeMes = "Dezembro";
            }
            tdDataPorExtenso.textContent = dia + " de " + tdNomeMes + " de " + ano;
            tr.appendChild(tdDataPorExtenso);
            tBody.appendChild(tr);
            table.appendChild(tBody); 
        }
    }else{
        alert("Mês inválido!");
    }
});