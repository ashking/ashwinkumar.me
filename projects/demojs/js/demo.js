var demo = function(){
	if(keymap != undefined){
        for(var key in keymap){
            var style = highlight.size + " " + highlight.style + " " + highlight.color,
            styletransparent = highlight.size + " " + highlight.style + " transparent";

            Mousetrap.bind(key , function(event) { 
                var keypressed = String.fromCharCode(event.keyCode).toLowerCase();
                $(keymap[keypressed]).css('outline', style);
                event.preventDefault();
                event.stopPropagation();
                return false;
            }, 'keydown');

            Mousetrap.bind(key, function(event) {
                var keypressed = String.fromCharCode(event.keyCode).toLowerCase();
                $(keymap[keypressed]).css('outline', styletransparent);
                event.preventDefault();
                event.stopPropagation();
                return false;
            }, 'keyup');
        }
    }
}