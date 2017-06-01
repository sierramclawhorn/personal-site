$(document).on('turbolinks:load', function(){

    //scrolling icon header
    $(window).scroll(function(){                          
      if ($(this).scrollTop() > 200) {
        $('.scrollingIcon').fadeIn(500);
      } else {
        $('.scrollingIcon').fadeOut(500);
      }
    });

    $('.scrollingIcon').click(function() {
      $("body").scrollTop(0);
    });


    //contact modal
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

    // code project modals
    var modalBtns = document.querySelectorAll('.codeProjBtn');
    modalBtns.forEach(function(btn){
      btn.onclick = function() {
        var projModal = btn.getAttribute('data-modal');
        document.getElementById(projModal).style.display =  "block";
      }
    });
    
    var closeBtns = document.querySelectorAll(".projClose");
    closeBtns.forEach(function(btn){
      btn.onclick = function() {
        var projModal = btn.closest('.codeProjectModal');
        projModal.style.display = "none";
      }
    });
    
    window.onclick = function(event) {
      if (event.target.className === 'codeProjectModal') {
        event.target.style.display = "none";
      }
    };


    //tooltips
    $('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
          .text(title)
          .appendTo('body')
          .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
          .css({ top: mousey, left: mousex })
    });


    //code project cards 
    $('.card').mouseleave(function() {
      $('.card').scrollTop(0);
    });

});






var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
$(document).ready(function($) {
    if(!isMobile) {
      //potato
      var tater = document.getElementsByClassName('potato')[0];
  
      $('.tagline').on('mouseover', function() {
        tater.style.display = "initial";
        console.log("hovered");
      });
      $('.tagline').on('mouseout', function() {
        tater.style.display = "none";
        console.log("hovered");
      });
    }
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
