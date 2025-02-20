const submit = document.querySelector("#submit");

submit.addEventListener("click", displayInfo);

function displayInfo(e) {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const birthday = document.querySelector("#birthday").value;
    const telephone = document.querySelector("#telephone").value.trim();
    const motivation = document.querySelector("#motivation").value.trim();

    // Vérification des champs vides
    if (!firstName || !lastName || !birthday || !telephone || !motivation) {
        alert("Tous les champs sont obligatoires.");
        return;
    }

    // Obtenir l'année de naissance
    const birthYear = parseInt(birthday.slice(0, 4));

    // Obtenir les deux premiers chiffres du numéro de téléphone
    const numTelStartBy = telephone.slice(0, 2);

    // Obtenir l'année actuelle
    const currentYear = new Date().getFullYear();

    // Calculer l'âge
    const age = currentYear - birthYear;

    if (age < 18) {
        alert("Désolé, vous devez avoir au moins 18 ans pour vous inscrire.");
        return;
    }

    if (motivation.length < 1000) {
        alert("La motivation doit faire 1000 caractères minimum.");
        return;
    }

    if (motivation.length > 2500) {
        alert("La motivation doit faire 2500 caractères maximum.");
        return;
    }

    if (numTelStartBy !== '01') {
        alert('Le nouveau format des numéros du Bénin est 01XXXXXXXX');
        return;
    }

    if (telephone.length !== 10) {
        alert("Le numéro de téléphone doit contenir 10 chiffres.");
        return;
    }

    // Si toutes les validations sont passées, afficher les informations
    document.getElementById("displayLastName").textContent = lastName;
    document.getElementById("displayFirstName").textContent = firstName;
    document.getElementById("displayBirthday").textContent = birthday;
    document.getElementById("displayTelephone").textContent = telephone;
    document.getElementById("displayMotivation").textContent = motivation;

    // document.body.style.backgroundImage = "url('')"
    document.body.style.color = "white"

    // Afficher la section des informations utilisateur
    document.getElementById("userInfo").style.display = "block";

    // Faire défiler jusqu'aux informations affichées
    document.getElementById("userInfo").scrollIntoView({ behavior: "smooth" });

    // Masquer le formulaire
    document.getElementById("inscriptionForm").style.display = "none";
}