    //creo funzione per stampare in pagina  
    function f_lavoratori(element){
        let nome =document.createElement("li");
        let ruolo =document.createElement("li");
        let immagine=document.createElement("li");

        
        nome.innerText+=element.nome;
        ruolo.innerText+=element.ruolo;
        immagine.innerText+=element.immagine;      
        nomi_lavoratori.append(nome);
        ruoli_lavoratori.append(ruolo);
        immagini_lavoratori.append(immagine);
        
    } 

    //creo funzione che crea immagine 

    /*nome funzione 
    (inserisco argomento , cioè variabile che verrà usata
    per processare la funzione)
    */
    function f_immagini(element){
        //creo un elemento virtuale HTML 
        let immagine=document.createElement("div");

        //al quale creo  l'HTML per l'immagine
        immagine.innerHTML=`<img src="./img/img/${element["immagine"]}" alt="${element["immagine"]}">`
        
        //infine innesto l'immagine nella lista immagini esistente 
        immagini_lavoratori.append(immagine)

    }