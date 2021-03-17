document.addEventListener('DOMContentLoaded', function() {
    let url = "https://rickandmortyapi.com/api/character"
    getCharacters();
    document.querySelector("#next_page").addEventListener("click", function(e){
        e.preventDefault();
        $('#info__character').html("");
        getCharacters();
    })
    
    function getCharacters() {
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(response){
        url = response.info.next
        response.results.forEach(function(character) {
            let showChar = `<div class="card m-3 col-sm-3" style="width: 18rem;">
            <img src="${character.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
          document.querySelector("#info__character").insertAdjacentHTML('beforeend', showChar);
        })
    })
  }  
})















