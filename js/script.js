// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var requested_url="https://api.giphy.com/v1/gifs/search?q=" +$("input").val()+ "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
  url: requested_url,
  method:"GET",
  success:function (response){

      var pic=response.data[0].images.downsized.url;
    $("body").append("<img src=" +pic+ "/>");
  }
    });


});

