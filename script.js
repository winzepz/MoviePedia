
const apikey = "b4cdfba7";
title='Avatar'
  const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("title").innerHTML = data.Title;
      document.getElementById("director").innerHTML = "Director: "+ data.Director;
      document.getElementById("rating").innerHTML = "Rating: "+ data.imdbRating;
      document.getElementById("year").innerHTML = "Release Year: "+ data.Year;
      document.getElementById("type").innerHTML = data.Plot;
      document.getElementById("poster").src = data.Poster;
    });

function search() {
  var title = document.getElementById("searchInput").value;
console.log(title);
const apikey = "b4cdfba7";
  const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True"){
        document.getElementById("title").innerHTML = data.Title;
        document.getElementById("director").innerHTML = "Director: "+data.Director;
        document.getElementById("rating").innerHTML = "Rating: "+data.imdbRating;
        document.getElementById("year").innerHTML = "Release Year: "+data.Year;
        document.getElementById("type").innerHTML = data.Plot;
        document.getElementById("poster").src = data.Poster;
        document.getElementById("searchInput").value = "";
        console.log(" NOT NULL")
      }
      else{
        console.log("NULL")
        document.getElementById("title").innerHTML = "Movie Not Found!";
        document.getElementById("director").innerHTML = "";
        document.getElementById("rating").innerHTML = "";
        document.getElementById("year").innerHTML = "";
        document.getElementById("type").innerHTML = "";
        document.getElementById("poster").src = "notfound.jpg";
        document.getElementById("searchInput").value = "";
      }
      
    });


}
document.getElementById("searchInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    search();
  }

})
