setInterval(function() {
    $('.taglineTxt').fadeOut(200, function() {
        var $this = $(this);
        $this.text($this.text() == 'human typewriter' ? 'potato enthusiast' : 'human typewriter');        
        $this.toggleClass('textAnimatedOne textAnimatedTwo');        
        $this.fadeIn(200);
    });
}, 3000);