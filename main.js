$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();

        let novaTarefa = $('#tarefa').val();

        if(novaTarefa !== ''){
            $('#lista').append('<li>' + novaTarefa + '</li>');
            $('#tarefa').val('');
        }
    });

    // Função para limpar a lista
    $('#limpar-lista').click(function(){
        $('#lista').empty();
    });

    $('#lista').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    });
});