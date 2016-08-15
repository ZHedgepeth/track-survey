$(document).ready(function() {

  $("form#info").submit(function(event) {

    event.preventDefault();

    var experience = $("input:radio[name=experience]:checked").val();
    var industry = $("input:radio[name=industry]:checked").val();
    var interaction = $("input:radio[name=interaction]:checked").val();
    var companyType = $("input:radio[name=companyType]:checked").val();
    var application = $("input:radio[name=application]:checked").val();
    // var company = $("input:radio[name=company]:checked").val();

    if (experience === 'a-lot') {
    //experience level
      alert("alot");
      if (industry === 'web-dev') {
      //industry

        if (interaction === 'heavy') {
        //user interaction

          if (companyType === 'enterprise') {
          //enterprise/startup

            if (application === 'android') {
            //app type
              $('#java').show();
            }  else if (application === 'web') {
              $('#ruby').show();
            } else {
              $('#csharp').show();
            }
          }
        }
      }
    } else {
      alert("none");
    }

    //
    // if (experience === 'none')
    // if (industry === 'web-dev')
    // if (interaction === 'little')
    // if (companyType === 'startup')
    // { $('#php').show(); }
    //  if (application === 'web')
    //   { $('#php').show(); }
    //  else if (application === 'windows')
    //   { $('#csharp').show();}


  });

});






// })
//     if (experience === 'none')
//     if (industry === 'software')
//     if (interaction === 'heavy' || interaction === 'little')
//     if (companyType === 'startup')
//     if (application === 'web') {
//       $('#php').show();
// }


//    if (industry === 'software') {
//
//     if (interaction === 'heavy') {
//
//       if (company-type === 'large') {
//
//         if (company === 'stack')
//           //  $("#csharp").show();
//         alert("csharp");
// }
// }
// }
// }
//     } else {
//
//       if (experience === 'a-lot') {
//
//       if (industry === 'software') {
//
//         if (interaction === 'heavy') {
//
//           if (company-type === 'enterprise') {
//
//             if (company === 'facebook')
//             $('$php').show();
//           }
//         }
//       }
//
// }
// }
// };
// };
  // } else if (company-type === "startup") {
  //   $("#ruby").show();
  //
  // } else if (company-type === "large") {
  //   $("#php").show();
  //
  // } else  {
  //   $("#java").show();
  // }
