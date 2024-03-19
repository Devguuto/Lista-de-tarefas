$(document).ready(function(){
    $('#botao').click(function(){
        $('form').slideDown();
        $('ul').slideDown()
    })

    $('#botaoRemovida').click(function(){
        $('form').slideUp();
        $('ul').slideUp()
    })
    
    $('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#novatarefa').val()
    const novalinha = $('<li> </li>');
    $("#novatarefa").val('')
    $(`<p><input type="checkbox">${novaTarefa} </p>`).appendTo(novalinha);
    $(novalinha).appendTo('ul')
    
    $("ul").on('click', 'li', function(){
        $(this).toggleClass("linha-meio");
    })

})


})

