//creo l'array contenente gli oggetti "lavoratori"
    let lista_lavoratori=[ 
        {nome: " Wayne Barnett ",ruolo:"founder & CEO ", immagine:"wayne-barnett-founder-ceo.jpg "},
        {nome:" Angela Caroll ",ruolo:"Chief Editor ",immagine:"angela-caroll-chief-editor.jpg "},
        {nome:" Walter Gordon ",ruolo:"Office Manager ",immagine:"walter-gordon-office-manager.jpg "},
        {nome:" Angela Lopez ",ruolo:"Social Media Manager ",immagine:"angela-lopez-social-media-manager.jpg "},
        {nome:" Scott Estrada ",ruolo:"Developer ",immagine:"scott-estrada-developer.jpg "},
        {nome:" Barbara Ramos ",ruolo:"Graphic Designer ",immagine:"barbara-ramos-graphic-designer.jpg "}
    ];

    //milestone 2:richiamo in JS le liste per i nomi, ruoli e immagine 
    let nomi_lavoratori=document.getElementById("team-nomi");
    let ruoli_lavoratori=document.getElementById("team-ruolo");
    let immagini_lavoratori=document.getElementById("team-immagine");




    //stampo in console il nome ed il ruolo dei lavoratori tramite ciclo  
    for (let i = 0; i < lista_lavoratori.length; i++) {
        const element = lista_lavoratori[i];
        for(let key in element){
            console.log(element["nome"],element["ruolo"]);
        }
        f_lavoratori(element);
        f_immagini(element);
       
    };
    