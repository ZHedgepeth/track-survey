$(document).ready(function() {

  $("form#info").submit(function(event) {

    event.preventDefault();

    var experience = $("input:radio[name=experience]:checked").val();
    var industry = $("input:radio[name=industry]:checked").val();
    var interaction = $("input:radio[name=interaction]:checked").val();
    var companyType = $("input:radio[name=companyType]:checked").val();
    var application = $("input:radio[name=application]:checked").val();


    if (experience === 'a-lot') {
    //experience level
    alert("alot");
      if (industry === 'web-dev') {
      //industry
      alert('webdev');
        if (interaction === 'moderate') {
        //user interaction
        alert('moderate');
          if (companyType === 'enterprise') {
          //enterprise/startup
          alert('enterprise')
            if (application === 'android') {
            //app type
            $('#java').show();

            } else if (application === 'web') {
              $('#ruby').show();
            } else {
              $('#csharp').show();
            }
          } else {
            alert('startup')
            if (application === 'web') {
              $('#ruby').show();
            } else if (application === 'windows') {
              $('#csharp').show();
            } else {
              $('#java').show();
            }
          }
        }

      } else {
        alert('software');
          if (interaction === 'moderate' || interaction === 'heavy') {
          alert('moderate')
            if (companyType === 'enterprise') {
            alert('s m e')
              if (application === 'windows') {
              $('#csharp').show();
            } else {
              $('#php').show();
            }
            }
          }
        }


    } else {
        alert("none");
        if (industry === 'web-dev' || industry === 'software') {
        alert("none and web")
          if (interaction === 'heavy') {
          alert('almost php')
            if (companyType === 'enterprise') {
            alert('php php')
              if (application === 'web' || application === 'windows' || application ==='android') {
              $('#php').show();
              }
              }
            }
          }
        }



  });

});
