function adicionar() {
    let inputTarefa = document.getElementById("addTarefa").value;
    let cate = document.getElementById("categoria").value;

        document.getElementById("lista").innerHTML += 
        //criando titulo com h3 msm
        //criando estrutura da lista
        ` <h3>${cate}  
        <ul>
        <li>${inputTarefa}</li>
        </ul>
    `
    //limpando os inpts dps do uso
    document.getElementById("addTarefa").value= " ";
    document.getElementById("categoria").value= " ";

}

//erros:
/*
1. tentar colocar ol dentro do ol do html para fazer titulo da lista (n é essa sua função).
2. tentar guardar algo dentro do input, ex: document.getElementById --->("addTarefa").innerHTML += ...
3. confusão na estrutura.
*/