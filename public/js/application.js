(function($){
    $(function(){

        var flourish = $('#flourish'),
            nSleeps = $('#flourish time'),
            nSleepsMsg = $('#flourish time .units'),
            
            startPaddingTop = nSleeps.css('paddingTop'),
            animDur = 300;
        
        flourish.mouseenter(function(){
            nSleepsMsg.fadeIn(animDur);
            nSleeps.animate({paddingTop: '10px'}, animDur);
        }).mouseleave(function(){
            nSleeps.animate({paddingTop: startPaddingTop}, animDur);
            nSleepsMsg.fadeOut(animDur);
        });

        var flickr = $('#flickr');

        $.getJSON('http://api.flickr.com/services/feeds/groups_pool.gne? id=1225246@N22&lang=en-us&format=json&jsoncallback=?', function(data){
            flickr.children('.loading').hide();
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
        
        
        $.fn.scroll = function(width, speed) {
            var startX = this.css('backgroundPositionX');
            this.animate({'backgroundPositionX': width}, speed, 'linear', function(){
                $(this).css('backgroundPositionX', 0);
                $(this).scroll(width, speed);
            });
        }

        $('#parallax_background').scroll(512, 120000);
        $('#parallax_midground').scroll(512,  60000);
        $('#parallax_foreground').scroll(512, 30000);
        
        $('header').mousemove(function(e){
           var self = $(this),
               nPhases = 9,
               phase = Math.ceil(nPhases * (e.clientX / self.width())),
               posX = 200 * phase;
           $('#moonphases').css('backgroundPositionX', posX);
           
           console.log(posX);
        });
        
    });
})(jQuery);
