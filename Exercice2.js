const val = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for(let i = 0; i < val.length; i++){
    const element = val[i];
    let affichage = String(element);
    if (element === ""){
        affichage ="(chaine vide)";
    }
    let res;
    if (element){
        res = "truthy";
    }
    else {
        res = "falsy";
    }
console.log(affichage + "->" + res);
}

