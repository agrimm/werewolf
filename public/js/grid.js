(function($){
    $.fn.grid = function() {
        return this.each(function(){
            var self = $(this),
                hGrid = $('<div></div>'),
                vGrid = $('<div></div>');

            self.css('position','relative');

            $.each([hGrid, vGrid], function(){
                this.css({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    opacity: 0.5,
                    zIndex: 100
                });
                this.hide();
                self.prepend(this);
            })

            hGrid.css('backgroundImage','url(/images/h_grid.gif)');
            vGrid.css('backgroundImage','url(/images/v_grid.gif)')

            $(document).keydown(function(e){
                var hKey = 72, vKey = 86;
                if (e.shiftKey) switch(e.keyCode) {
                    case hKey: hGrid.toggle(); break;
                    case vKey: vGrid.toggle(); break;
                }
            });
        });
    }
})(jQuery);
