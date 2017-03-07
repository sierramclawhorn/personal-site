$(document).on('turbolinks:load', function(){

    //modals
    var modalBtns = [...document.querySelectorAll('.codeProjBtn')];
    modalBtns.forEach(function(btn){
      btn.onclick = function() {
        var projModal = btn.getAttribute('data-modal');
        document.getElementById(projModal).style.display =  "block";
      }
    });
    
    var closeBtns = [...document.querySelectorAll(" .projClose")];
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
    }

});