$(document).ready(function (){
    $('#slider div:gt(0)').hide();
    var interval= setInterval(changeDiv, 5000);
    function changeDiv(){
      $('#slider div:first-child').fadeOut(3000)
        .next('div').fadeIn(1000)
        .end().appendTo('#slider');
      };

// controles de botones de flechas
    $("#before").click(function(){
      changeDiv();
      clearInterval(interval);
      interval= setInterval(changeDiv,5000);
    });
    $("#after").click(function(){
      $('#slider div:first-child').fadeOut(3000);
      $('#slider div:last-child').fadeIn(1000).prependTo('#slider');
      clearInterval(interval);
      interval= setInterval(changeDiv,5000);
    });

// controles de botones circulares
    $("#1b").click(function(){
      $("#slider div:first-child").fadeOut(1000);
        $('#1img').fadeIn(1000);
       clearInterval(interval);
      interval= setInterval(changeDiv,5000);
    });
    $("#2b").click(function(){
      $("#slider div:first-child").fadeOut(1000);
        $('#2img').fadeIn(1000);
       clearInterval(interval);
    });
    $("#3b").click(function(){
      $("#slider div:first-child").fadeOut(1000);
        $('#3img').fadeIn(1000);
    });
    $("#4b").click(function(){
      $("#slider div:first-child").fadeOut(1000);
        $('#4img').fadeIn(1000);
    });
    $("#5b").click(function(){
      $("#slider div:first-child").fadeOut(1000);
        $('#5img').fadeIn(1000);
    });
});
