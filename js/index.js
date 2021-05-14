
const cargarPersonajes = async function(){
    //Llamar a la API
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    let personajes = res.data.results;
    personajes.forEach(p=>{ 
        console.log(p.name);    
    });


};

document.addEventListener("DOMContentLoaded", ()=>{
    //todo lo que se ponga aqui se va a ejecutar cuando se cargue la pagina
    cargarPersonajes();
});