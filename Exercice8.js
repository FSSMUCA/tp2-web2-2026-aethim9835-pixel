// Déclaration des variables (ne pas corriger ici)
let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomFinal = nom.trim() || "Inconnu";


let ageConverti = parseInt(age);
let ageRapport = (Number.isNaN(ageConverti) || ageConverti <= 0) 
    ? "valeur invalide" 
    : ageConverti + " (valide)";


let indexAt = email.indexOf("@");
let indexPointApresAt = email.indexOf(".", indexAt);
let emailRapport = (indexAt !== -1 && indexPointApresAt !== -1)
    ? `"${email}" (valide)`
    : `"${email}" (invalide : pas de point après @)`;


let scoreFinal = parseInt(scoreJeu);
if (Number.isNaN(scoreFinal))scoreFinal = 0;


let estAdminBooleen = (estAdmin === "true");


let connexionRapport = derniereConnexion ?? "Jamais connecté";


let nbConnexionsNum = Number(nombreConnexions);
let nbConnexionsRapport = (nbConnexionsNum === 0) 
    ? "Aucune connexion" 
    : nbConnexionsNum;


console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomFinal}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageRapport}`);
console.log(`email            : ${emailRapport}`);
console.log(`scoreJeu         : ${scoreFinal} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${estAdminBooleen} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexionRapport}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nbConnexionsRapport}" (${nbConnexionsNum} après conversion)`);
console.log("================================");