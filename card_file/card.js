
let allmoviesData=[]
const moviecontainer=document.getElementById("movies-container")

async function getmoviesdata(){
    try{
        const res=await fetch("http://localhost:3000/movies");
        allmoviesData=await res.json();
        console.log(allmoviesData)
        displaymovies()
    }catch(err){
        console.log(err)
    }
}


function displaymovies(){
    if(!moviescontainer){
        console.log("movies container is missing")
        return
    }
    // console.log(allmoviesData)
    if(!allmoviesData || allmoviesData.length==0){
        moviecontainer.innerHTML='<p>no moives available</p>'
        return
    }
}



async function handlCart(movie){

 try{
   await fetch("http://localhost:3000/cart",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(movie)

   });
  alert("Movies Added to cart")
 
   }catch(err){
    console.log(err)
   }
}


allmoviesData.forEach(movie=>{

    const card=document.createElement("div");
    
    card.innerHTML= `
    <div class="movies-poster">
    <img src=${movie.poster} alt=${movie.title} class="movie-poster-img">
    </div>

    <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-year">${movie.year}</div>
        <div class="movie-genre">${movie.category}</div>
        <div class="movie-rating">${movie.rating}</div>

        <div class="movie-buttons">
            <button class="btn btn-cart">🛒Cart</button>
            <button class="btn btn-favorite">❤️Favourite</button>
        </div>
    </div>
    `
    let cartbtn=card.querySelector(".btn-cart");
    cartbtn.addEventListener("click",()=>{
        handleCart(movie)
    })
    moviecontainer.appendChild(card);

})

getmoviesdata()