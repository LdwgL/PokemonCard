$("#submit-button").on("click", function (event) {
  //fonction jQuery pour vider le container
  $("#card-container").empty();
  event.preventDefault();
  var pokemon = $("#search").val().trim();

  //Requête Ajax pour récupérer l'API Pokemon

  $.ajax({
    method: "GET",
    url: "https://api.pokemontcg.io/v1/cards?name=" + pokemon,

    //Promesse
  }).then(function (response) {
    //Promesse

    //Boucle for pour afficher les cartes Pokemon
    for (var i = 0; i < response.cards.length; i++) {
      var pokemonCard = $("<img class='pkmn-card'>");
      pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
      // console.log(response.cards[i].imageUrlHiRes);

      //fonction qui affiche les cartes

      $("#card-container").append(pokemonCard);
    }
    console.log(response.cards);
  });
});
