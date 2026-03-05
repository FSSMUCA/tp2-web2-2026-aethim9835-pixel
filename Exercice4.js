const paires = [[0, ""], [0, "0"], [0, false], ["", false], [null, undefined], [null, false], [NaN, NaN], [1, "1"], [" \t\n ", 0]];
let compteurdifferences = 0;
for (let i = 0; i < paires.length; i++){
    const v1 = paires[i][0];
    const v2 = paires[i][1];
    const resEgale = (v1 == v2);
    const resStricte = (v1 === v2);

    if (resEgale &&  !resStricte){
        compteurdifferences++;
    }
    let label1 = v1;
    let label2 = v2;
     if (v1 === "") label1 = '""';
     if (v2 === "") label2 = '""';
     if (typeof v1 === "string" && v1.includes("\t")) label1 = '"\\t\\n"';
     console.log (`${label1} == ${label2} \t -> ${resEgale} | ${label1} === ${label2} \t -> ${resStricte}`);
  }
console.log("---");
console.log(`${compteurdifferences} paire(s) où == et === donner des résultats différents`);  
