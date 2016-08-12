$(document).ready(function() {

  $("form#info").submit(function(event) {

  event.preventDefault();

  //collect variables

  var build = $("input:radio[name=build]:checked").val();


  if  (build === 'minecraft') {
    $("#java").show();
    } else if (build === 'airbnb') {
    $("#ruby").show();
    } else if (build === 'facebook') {
    $("#php").show();
    } else (build === 'stack-overflow') {
    $("#c-sharp").show();
    }
}

});
});
