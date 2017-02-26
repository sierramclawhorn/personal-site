$(function() {
    counter = 0;
    txtArray = ['human typewriter', 'potato enthusiast', 'creature appellomancer', 'salad propagator', 'benjamin franklin believer'];
    setInterval(function() {
    	counter++;
    	$(".taglineTxt").fadeOut(200, function() {
        	$(this)
        		.text(txtArray[counter % txtArray.length])
        		.fadeIn(200);
    	});
    }, 3000);
});