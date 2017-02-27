$(document).ready(function(){

    //nav links
    $('.nameHeader').on('click', function() {
        $(this).parent().parent().find('.navLinks').slideToggle();
    });


    //modal
    var modal = document.getElementById('contactInfo');
    var span = document.getElementsByClassName("close")[0];
    
    $('#contactBtn').on('click', function() {
        modal.style.display = "block";
    });
    span.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

});


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
