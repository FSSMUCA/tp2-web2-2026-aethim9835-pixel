const  nom = null;
const age = 0;
const ville = "";
const score = undefined;
const actif = false;
// partie A 
console.log(`nom   ?? " valeur par défaut"    -> ${nom ?? " valeur par défaut"}`);
console.log(`age   ?? "valeur par défaut"     -> ${age ?? "valeur par défaut"}`);
console.log(`ville ?? "valeur par défaut"     -> ${ville ?? "valeur  par défaut"}`);
console.log(`score ?? "valeur par défaut"     -> ${score ?? " valeur par défaut"}`);
console.log(`actif ?? "valeur par défaut"     -> ${actif ?? "valeur par défaut"}`);
// partie B
console.log(`nom   || " valeur par défaut"    || ${nom ?? " valeur par défaut"}`);
console.log(`age   || " valeur par défaut"    || ${age ?? " valeur par défaut"}`);
console.log(`ville || " valeur par défaut"    || ${ville ?? "valeur  par défaut"}`);
console.log(`score || "valeur par défaut"     || ${score ?? " valeur par défaut"}`);
console.log(`actif || " valeur par défaut"    || ${actif ?? "valeur par défaut"}`);
// partie C
console.log("nom    :  ?? et ||   ->   " + (((nom??"valeur par defaut") && (nom       ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("age    :  ?? et ||   ->   " + (((age??"valeur par defaut") && (age       ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("ville  :  ?? et ||   ->   " + (((ville??"valeur par defaut") && (ville   ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("score  :  ?? et ||   ->   " + (((score??"valeur par defaut") && (score   ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("actif  :  ?? et ||   ->   " + (((actif??"valeur par defaut") && (actif   ||"valeur par defaut"))? "meme resultat" : "resultats differents"));

