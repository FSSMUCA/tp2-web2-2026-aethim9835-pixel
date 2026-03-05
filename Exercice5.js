const nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for(let i = 0; i < nombres.length; i++){
    if (nombres[i] === 0){
       console.log(nombres[0] +"--> ENTRE SUR" + '\n');
    }
    else if (Number.isNaN(nombres[i])){
       console.log(nombres[i] + "--> INVALIDE \n");
    }
    else if (nombres[i] === Infinity || nombres[i] === -Infinity){
        console.log(nombres[i] + "--> INFINI \n");
    }
    else if (nombres[i] === Number.MAX_SAFE_INTEGER + 1){
        console.log(nombres[i] + "--> ENTRE SUR \n");
    }
    else if (nombres[i] === 3.14){
       console.log(nombres[i] + "--> DECIMAL \n");
    }
    else if (nombres[i] === Number.MAX_SAFE_INTEGER + 1){
        console.log(nombres[i] + "--> ENTRE HORS LIMITES \n");
    }
    else if (1 / nombres[i] === -Infinity){
        console.log(nombres[i] + "--> ZERO NEGATIF \n");

}
}