// Déclaration des variables
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;


let sous_Total = prix * quantite;
let reduction = 0;
    if (!codePromo && estMembre){
        reduction = sous_Total * (reductionPourcentage / 100);
    }
    else 
    reduction = 0 ;   

let total_final = sous_Total - reduction;

let Statut ;
    if( soldeCompte >= total_final){
    Statut = "paiement Accepte";
    }
    else {
    Statut = "paiement refuseé";
    }
let nouveau_solde;
    if (Statut === "paiement Accepte"){
    nouveau_solde = soldeCompte - total_final
    }
        console.log(`\n====RÉCAPITULATIF====`);
        console.log(`Produit   : ` + nomProduit);
        console.log(`Quantité  : ` + quantite);
        console.log(`Prix unit.: ` + prix + " MAD");
        console.log(`Sous-total: ` + sous_Total.toFixed(2)+ " MAD");
        console.log(`Réduction : ` + reduction.toFixed(2)+ " MAD");
        console.log(`Total     : ` + total_final.toFixed(2)+ " MAD");
        console.log(`Statut    : ` + Statut);
        console.log(`Solde     : ` + nouveau_solde.toFixed(2)+ " MAD");
        console.log("=========================");

