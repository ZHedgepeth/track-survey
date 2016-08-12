$(document).ready(function() {

  $("form#info").submit(function(event) {

  event.preventDefault();

  //collect variables

  var = $("input:radio[name=build]:checked").val();
