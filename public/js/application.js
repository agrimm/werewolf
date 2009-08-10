(function($){
    $(function(){

        $('.centify').grid();

        var flourish = $('#flourish'),
            nSleeps = $('#flourish time'),
            nSleepsMsg = $('#flourish time .units');

        var start = {
                opacity: 0,
                paddingTop: nSleeps.css('paddingTop')
            },
            end = {
                opacity: nSleepsMsg.css('opacity'),
                paddingTop: '10px' // start.paddingTop - 5
            },
            animDur = 300;

        console.log(start);
        console.log(end);

        flourish.mouseenter(function(){
            nSleepsMsg.css('opacity', start.opacity);
            nSleeps.animate({paddingTop: end.paddingTop}, animDur);
            nSleepsMsg.show().animate({opacity: end.opacity}, animDur);
        }).mouseleave(function(){
            nSleeps.animate({paddingTop: start.paddingTop}, animDur);
            nSleepsMsg.animate({opacity: start.opacity}, animDur, function(){ nSleepsMsg.hide();});
        });
    });
})(jQuery);
