//creo l'array contenente gli oggetti "lavoratori"
    let lista_lavoratori=[
        {nome: "Wayne Barnett",ruolo:"founder & CEO", immagine:"wayne-barnett-founder-ceo.jpg"},
        {nome:"Angela Caroll",ruolo:"Chief Editor",immagine:"angela-caroll-chief-editor.jpg"},
        {nome:"Walter Gordon",ruolo:"Office Manager",immagine:"walter-gordon-office-manager.jpg"},
        {nome:"Angela Lopez",ruolo:"Social Media Manager",immagine:"angela-lopez-social-media-manager.jpg"},
        {nome:"Scott Estrada",ruolo:"Developer",immagine:"scott-estrada-developer.jpg"},
        {nome:"Barbara Ramos",ruolo:"Graphic Designer",immagine:"barbara-ramos-graphic-designer.jpg"}
    ];

    //milestone 2:richiamo in JS il div 
    let pagina_lavoratori=document.getElementById("team");
    //stampo in console il nome ed il ruolo dei lavoratori tramite ciclo 

    for (let i = 0; i < lista_lavoratori.length; i++) {
        const element = lista_lavoratori[i];
        for(let key in element){
            console.log(element["nome"],element["ruolo"]);
        } 
        function f_lavoratori(element){
            let testo=pagina_lavoratori.innerText="ciao";
            return testo;
        }   
    };
    