
let users =[

    {

        identite : {nom: "Adili", prenom:"Tarik", genre :"Homme"},

        profil : "Stagiaire",

        specialite :"Développement Digital",

        classe : "DD102",

        notes :{M101 : 12, M102: 14, M103: 17}
}]



let specialites = ["Développement Digital", "UI/UX", "Infrastructure Digital", "Intéligence Artificielle"]



function Formulaire (){
    document.getElementById('form').style.display = 'block'
    document.getElementById('cards').style.display = 'none'

}

function displayStudents() {
    const cardsContainer = document.getElementById("cards"); 
    let card =""

    users.forEach((user, index) => {
        card += `
        <div class="card col-2 blue" style="background-color:${user.identite.genre === 'Homme' ? 'rgb(144, 182, 254)' : 'rgb(242, 214, 180)'}">
        <div class="edit">
           <button onclick="deleteStudent(${index})"><img src="delet.png" alt=""></button> 
           <button onclick="modifie(${index})"><img src="add.png" alt=""></button> 
        </div>
        <div>
           <img src="${user.identite.genre === 'Homme' ? 'boy.png' : 'girl.png'}" class="boy">
           <h2 style="color:${user.identite.genre === 'Homme' ? 'rgb(106, 106, 232)' : 'chocolate'}">${user.identite.prenom} ${user.identite.nom}</h2>
           <h3>Stagiaire - ${user.classe}</h3>
           <h4 style="background-color:${user.identite.genre === 'Homme' ? 'rgb(216, 230, 255)' : 'rgb(254, 236, 214)'}">
               <span style="background-color:${user.identite.genre === 'Homme' ? 'rgb(106, 106, 232)' : 'chocolate'}">#1</span> 
               Moyenne:${calculateAverage(user.notes)}
           </h4>
        </div>
     </div>
        `;
        cardsContainer.innerHTML=card;
    });
}
displayStudents()

function calculateAverage(notes) {
    const total = notes.M101 + notes.M102 + notes.M103;
    return (total / 3).toFixed(2);
}

function addStudent() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('cards').style.display = 'flex';

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const genre = document.getElementById("genre").value;
    const specialite = document.getElementById("specialite").value;
    const classe = document.getElementById("classee").value;
    const note1 = parseInt(document.getElementById("note1").value);
    const note2 = parseInt(document.getElementById("note2").value);
    const note3 = parseInt(document.getElementById("note3").value);


    const newUser = {
        identite: { nom: nom, prenom: prenom, genre: genre },
        profil: "Stagiaire",
        specialite: specialite,
        classe: classe,
        notes: { M101: note1, M102: note2, M103: note3 }
    };

    users.push(newUser);

    displayStudents();

    
}


function deleteStudent(index) {
    if (confirm(`Voulez-vous vraiment supprimer ${users[index].identite.prenom} ${users[index].identite.nom}?`)) {
        users.splice(index, 1);
        displayStudents();
    }
}

displayStudents()

function modifie(index) {
    document.getElementById("form").style.display = "block";
    document.getElementById("cards").style.display = "none";
    document.getElementById("ajouter").style.display = "none";
    document.getElementById("changer").style.display = "block";

    const user = users[index];
    document.getElementById("nom").value = user.identite.nom;
    document.getElementById("prenom").value = user.identite.prenom;
    document.getElementById("genre").value = user.identite.genre;
    document.getElementById("specialite").value = user.specialite;
    document.getElementById("classee").value = user.classe;
    document.getElementById("note1").value = user.notes.M101;
    document.getElementById("note2").value = user.notes.M102;
    document.getElementById("note3").value = user.notes.M103;

    document.getElementById("modifying-index").value = index;
}

function modi() {
    const index = parseInt(document.getElementById("modifying-index").value);
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const genre = document.getElementById("genre").value;
    const specialite = document.getElementById("specialite").value;
    const classe = document.getElementById("classee").value;
    const note1 = parseInt(document.getElementById("note1").value);
    const note2 = parseInt(document.getElementById("note2").value);
    const note3 = parseInt(document.getElementById("note3").value);

    
    users[index].identite.nom = nom;
    users[index].identite.prenom = prenom;
    users[index].identite.genre = genre;
    users[index].specialite = specialite;
    users[index].classe = classe;
    users[index].notes.M101 = note1;
    users[index].notes.M102 = note2;
    users[index].notes.M103 = note3;

    displayStudents();

    document.getElementById("form").style.display = "none";
    document.getElementById("cards").style.display = "flex";
}

