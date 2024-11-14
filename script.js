function allumetteAEnlever() {
  let totalAllumettes = 50;
  let joueurs = [];
  let nombreJoueurs = Number(prompt("Combien de joueurs vont participer ?"));

  // Vérifie si le nombre de joueurs est valide
  if (isNaN(nombreJoueurs) || nombreJoueurs <= 0) {
    console.log("Veuillez entrer un nombre valide de joueurs.");
    return;
  }

  // Demande le nom de chaque joueur
  for (let i = 0; i < nombreJoueurs; i++) {
    let nomJoueur = prompt(`Entrez le nom du joueur ${i + 1}:`);
    if (nomJoueur) {
      joueurs.push(nomJoueur); // Ajoute le joueur au tableau
    }
  }
  console.log(nombreJoueurs);

  // Vérifie qu'il y a bien des joueurs
  if (joueurs.length === 0) {
    console.log("Aucun joueur n'a été ajouté.");
    return;
  }

  // Variable pour suivre le joueur actuel
  let joueurActuelIndex = 0;

  // Boucle du jeu qui dit tant que il y a des allumette le joueur actuelle doit choisire
  while (totalAllumettes > 0) {
    let joueurActuel = joueurs[joueurActuelIndex];

    let priseAllumettes = Number(
      prompt(
        `Combien d'allumettes veux-tu retirer, ${joueurActuel} ? Il reste ${totalAllumettes} allumettes.`
      )
    );

    // faire en sorte que le joueur prend bien entre 1 et 6 allumete et pas plus
    if (isNaN(priseAllumettes) || priseAllumettes <= 0 || priseAllumettes > 6) {
      console.log("Veuillez prendre entre 1 et 6 allumettes.");
      continue;
    }

    // faire en sorte que le joueur choisi bien le nombre restant et pas plus
    if (priseAllumettes > totalAllumettes) {
      console.log("Tu dois prendre ce qu'il reste.");
      continue;
    }

    // effasser les allumettes choisies par le joueur
    totalAllumettes -= priseAllumettes;
    console.log(`Il reste ${totalAllumettes} allumettes.`);

    // Vérifier si le  joueur actuel a gagné
    if (totalAllumettes === 0) {
      console.log(`${joueurActuel} a gagné !`);
      break;
    }

    // aller au joueur suivant aprés chaque joueur passé
    joueurActuelIndex = (joueurActuelIndex + 1) % joueurs.length;
  }
}

allumetteAEnlever();
