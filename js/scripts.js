$(document).ready(function() {

  $("form#info").submit(function(event) {

  event.preventDefault();

  //collect variables

  var experience = parseInt($("input:radio[name=experience]:checked").val());

  if (experience >= 7) {
      $("#php").show();
  }
});
