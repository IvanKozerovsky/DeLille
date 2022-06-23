$(document).ready(function() {

    $('.list__burger').click(function(event)) {
        $('.list__burger,.list').toggleClass('active');
        $('body').toggleClass('lock')
    };

};