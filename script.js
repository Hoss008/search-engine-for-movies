let searchTimeout;

inpt.addEventListener("keydown", function () {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (inpt.value.trim() === "") return;

    fetch(`https://api.imdbapi.dev/search/titles?query=${inpt.value}`)
      .then((response) => response.json())
      .then((data) => {
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
      })
      .catch((error) => console.error("Error:", error));
  }, 500);
});
