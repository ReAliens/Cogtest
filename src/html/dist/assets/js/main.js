$(document).ready(function(){
    // Answer Select
    $(".answer-choice").click(function(){
        $(".answer-choice").css("border","2px dotted #c5c5c6");
        $(this).css("border","2px dotted #003374");
    });

    // Square In Click
    $('.square').click(function(){
        var SELF = $(this);
        SELF.find('.icon').slideToggle("500");
        //alert(SELF.data('value'));
    })

    // Number Changed
    $('#start').click(function(){
        $('#num1').append("1");
    });

});