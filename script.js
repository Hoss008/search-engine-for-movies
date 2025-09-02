const searchBtn = document.querySelector("#searchBtn");
const inpt = document.querySelector("#inpt");
const moviesList = document.querySelector("#moviesList");

searchBtn.addEventListener("click", function () {
  if (inpt.value.trim() === "") return;

  fetch(`https://api.imdbapi.dev/search/titles?query=${inpt.value}`)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // console.log(data);
      const results = data.titles || [];
      moviesList.innerText = " ";
      results.forEach((element) => {
        const newLi = document.createElement("li");
        newLi.innerText = element.primaryTitle;
        const newPic = document.createElement("img");
        newPic.src = element.primaryImage.url;
        newPic.classList.add("movie-poster");
        newLi.append(newPic);
        moviesList.append(newLi);
      });
    }) // Process the data
    .catch((error) => console.error("Error:", error));
});
