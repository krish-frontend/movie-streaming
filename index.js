
let allmoviesData=[]
const moviecontainer=document.getElementById("movies-container")
async function getmoviesdata(){
    try{
        const res=await fetch("http://localhost:3000/movies");
        allmoviesData=await response.json();
        console.log(allmoviesData)
        displaymovies()
    }catch(err){
        console.log(err)
    }
}

function displaymovies(){
    if(!moviescontainer){
        console.log("movies container is missing")
    }
    // console.log(allmoviesData)
    if(!allmoviesData || allmoviesData.length==0){
        moviecontainer.innerHTML='<p>no moives available</p>'
        return
    }
}

allmoviesData.forEach(movie=>{
    const card=document.createElement("div");
    card.innerHTML='
    <div class=" movies-poster">
    <img src=${movie.poster} alt=$
    '
})