document.querySelector('form').addEventListener('submit', function (event){
    event.preventDefault();
    let valor1 = document.querySelector('#primeiroValor').value;
    let valor2 = document.querySelector('#segundoValor').value;

    let table = document.querySelector('#resultados');
    let tBody= document.createElement("tbody");
    for(let i = 0; i < 4; i++){
        let tdValor1 = document.createElement('td');
        let tdValor2 = document.createElement('td');
        let tdOperador = document.createElement('td');
        let tdResultado = document.createElement('td');
        let tr = document.createElement('tr');
        if(i == 0){
            tdValor1.textContent = valor1;
            tdOperador.textContent = "+"
            tdValor2.textContent = valor2;
            tdResultado.textContent = parseInt(valor1) + parseInt(valor2);
        }else if(i == 1){
            tdValor1.textContent = valor1;
            tdOperador.textContent = "*"
            tdValor2.textContent = valor2;
            tdResultado.textContent = valor1 * valor2;
        }else if(i == 2){
            tdValor1.textContent = valor1;
            tdOperador.textContent = "/"
            tdValor2.textContent = valor2;
            tdResultado.textContent = valor1 / valor2;
        }else if(i == 3){
            tdValor1.textContent = valor1;
            tdOperador.textContent = "%"
            tdValor2.textContent = valor2;
            tdResultado.textContent = valor1 % valor2;
        }
        tr.appendChild(tdValor1);
        tr.appendChild(tdOperador);
        tr.appendChild(tdValor2);
        tr.appendChild(tdResultado);
        tBody.appendChild(tr);
    }
    table.appendChild(tBody);
});