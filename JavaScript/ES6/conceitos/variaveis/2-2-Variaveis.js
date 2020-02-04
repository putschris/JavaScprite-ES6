(() => {
    let test = 'Valor função';
    console.log(`Valor função dentro: ${test}`);

    if(true){
        let test = 'Valor if';
        console.log(`Valor dentro do If: ${test}`);
    }

    if(true){
        let test = 'valor do outro If';
        console.log(`valor do outro If: ${test}`)
    }

    console.log(`valor após a execução do If: ${test}`);
})();