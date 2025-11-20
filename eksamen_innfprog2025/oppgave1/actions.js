//Funksjon 1 - returnerer html strukturen til en ansatt.

function printAnsatt(indeks){
    const valgtAnsatt = ansatte[indeks]
   
        return `<ul><li>${valgtAnsatt.fornavn} ${valgtAnsatt.etternavn}</li><li>Stilling: ${valgtAnsatt.stilling}</li><li>Kontor: ${valgtAnsatt.kontor}</li><li>E-post: ${valgtAnsatt.epost}</li><li>${valgtAnsatt.kursansvar}</li></ul>`
    }

//Funksjon 2 - 

function printAll(){
        
        console.log("Viser alle ansatte")
        liste.innerHTML = ""
        for(let teller = 0; teller < ansatte.length; teller++){
            liste.innerHTML += printAnsatt(teller)
        }
        return
    }