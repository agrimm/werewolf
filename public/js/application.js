(function($){
    $(function(){

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

        flourish.mouseenter(function(){
            nSleepsMsg.css('opacity', start.opacity);
            nSleeps.animate({paddingTop: end.paddingTop}, animDur);
            nSleepsMsg.show().animate({opacity: end.opacity}, animDur);
        }).mouseleave(function(){
            nSleeps.animate({paddingTop: start.paddingTop}, animDur);
            nSleepsMsg.animate({opacity: start.opacity}, animDur, function(){ nSleepsMsg.hide();});
        });

        var flickr = $('#flickr');

        $.getJSON('http://api.flickr.com/services/feeds/groups_pool.gne? id=1225246@N22&lang=en-us&format=json&jsoncallback=?', function(data){
            flickr.children('.loading').fadeOut();
            $.each(data.items, function(i,item){
                if (i >= 5) { return };

                var link = $('<a></a>').attr('href', item.link)
                                       .attr('title', item.title)
                                       .addClass('flickr_image'),
                    img = $('<img/>').attr('src', item.media.m.replace(/_m.jpg$/,'_s.jpg'))
                                     .attr('alt', item.title)
                                     .appendTo(flickr)
                                     .wrap(link);
            });
        });

    });
})(jQuery);
