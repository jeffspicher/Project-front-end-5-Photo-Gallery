$('#search').keyup(function() {  
    var value = $(this).val(); 
    var exp = new RegExp(value, "i");

    $('a').each(function() {
        var match = exp.test($(this).data('title'));
        $(this).toggle(match);
    });
});