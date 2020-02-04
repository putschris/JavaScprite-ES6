var test = 'exemple';

(() => {
    console.log(`Valor dentro da função: ${test}`);

    if(true){
        var test = 'exemple';
        console.log(`Valor dentro do If: ${test}`);
    }

    console.log(`Valor após execução do If: ${test}`);
})();