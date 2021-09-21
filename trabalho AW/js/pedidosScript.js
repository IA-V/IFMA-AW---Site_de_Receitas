document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    let quantidade = document.querySelector('#quant').value;
    let item = document.querySelector('#codItem').value;
    let total;
    let table = document.querySelector("#total");
    let tBody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let tdTotal = document.createElement("td");
    let tdQuant = document.createElement("td");
    let tdCod = document.createElement("td");
    tdQuant.textContent = quantidade;
    tdCod.textContent = item;
    tdTotal.textContent = "R$";
    if(item == 100){
        tdTotal.textContent += quantidade * 1.2;
    }else if(item == 101){
        tdTotal.textContent += quantidade * 1.3;
    }else if(item == 102){
        tdTotal.textContent += quantidade * 1.5;
    }else if(item == 103){
        tdTotal.textContent += quantidade * 1.2;
    }else if(item == 104){
        tdTotal.textContent += quantidade * 1.3;
    }else if(item == 105){
        tdTotal.textContent += quantidade * 1;
    }
    tr.appendChild(tdQuant);
    tr.appendChild(tdCod);
    tr.appendChild(tdTotal);
    tBody.appendChild(tr);
    table.appendChild(tBody);
    /*document.getElementById("total").value = total;*/
})
