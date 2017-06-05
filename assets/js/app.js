$(document).ready(function (){
    $('#slider div:gt(0)').hide();
    var interval= setInterval(changeDiv, 5000);
    function changeDiv(){
      $('#slider div:first-child').fadeOut(3000)
        .next('div').fadeIn(1000)
        .end().appendTo('#slider');
      };
    $("#after").click(function(){
      changeDiv();
      clearInterval(interval);
      interval= setInterval(changeDiv,5000);
    });
    $("#before").click(function(){
      $('#slider div:first-child').fadeOut(3000);
      $('#slider div:last-child').fadeIn(3000).prependTo('#slider');
      clearInterval(interval);
      interval= setInterval(changeDiv,5000);
    });

});
