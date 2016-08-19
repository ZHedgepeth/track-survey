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
      if (industry === 'web-dev') {
      //industry
        if (interaction === 'moderate') {
        //user interaction
          if (companyType === 'enterprise') {
          //enterprise
            if (application === 'android') {
            //app type
            $('#java').show();
            } else if (application === 'web') {
              $('#php').show();
            } else {
              $('#csharp').show();
            }
          } else {
            // experience: alot, industry: web dev, interaction: moderate, companyType: startup
            if (application === 'web') {
              $('#ruby').show();
            } else if (application === 'windows') {
              $('#csharp').show();
            } else {
              $('#java').show();
            }
          }

        } else {
          //alot, web dev, heavy
            if (companyType === 'enterprise' || companyType === 'startup') {
            // alot, webdev, heavy, enterprise or startup'
              if (application === 'android') {
              $('#java').show();
            } else if (application === 'windows') {
              $('#csharp').show();
            } else {
              $('#ruby').show();
            }
          }
        }

      } else {
        // alot, software
          if (interaction === 'moderate' || interaction === 'heavy') {
          // alot, software, moderate or heavy
            if (companyType === 'enterprise' || companyType === 'startup') {
            // alot, software, moderate or heavy, and enterprise
              if (application === 'windows') {
              $('#csharp').show();
            } else {
              $('#php').show();
            }
            }
          }
        }

    } else {
        // no experience,
        if (industry === 'web-dev' || industry === 'software') {
        //no experience and web-dev or software engineering
          if (interaction === 'heavy') {
          //no experience and web-dev or software engineering, and heavy interaction
            if (companyType === 'enterprise' || companyType === 'startup') {
            //no experience/web-dev or software engineering/heavy interaction/ enterprise or startup
              if (application === 'windows' || application ==='android') {
              $('#csharp').show();
            } else {
              $('#ruby').show();
            }
            }
          } else {
             //no experience and web-dev or software engineering, moderate interaction
              if (companyType === 'enterprise' || companyType === 'startup') {
              // no experience, web-dev/software, moderate, enterprise/startup
                if (application === 'windows' || application ==='android') {
                $('#php').show();
              } else {
                $('#ruby').show();
              }
              }
            }
          }
        }
  });
});
