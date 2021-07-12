
$('.hide-content').toggle("slow");

var clicked=1;

$('#hide-button').click(function(){
    $('.hide-content').toggle("slow");

    clicked=clicked+1;

    if(clicked%2==0)
    {
        $(this).html('<a id="button-content">View  Less  Projects ⇡');
    }
    else
    {
        $(this).html('<a id="button-content">View  More  Projects ⇣');  
    }

    e.preventDefault();


})