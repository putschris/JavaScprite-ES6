(() => {
    const test = 'Valor função';
    console.log(`Valor função dentro: ${test}`);

    if(true){
        const test = 'Valor if';
        console.log(`Valor dentro do If: ${test}`);
    }

    if(true){
        const test = 'valor do outro If';
        console.log(`valor do outro If: ${test}`)
    }

    console.log(`valor após a execução do If: ${test}`);
})();