$(document).on('turbolinks:load', function(){

    //modals
    var klinkModal = document.getElementById('klinkModal');
    var closeSpan = document.getElementsByClassName("projClose")[0];
    
    $('#klinkBtn').on('click', function() {
        klinkModal.style.display = "block";
    });
    closeSpan.onclick = function() {
        klinkModal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == klinkModal) {
            klinkModal.style.display = "none";
        }
    };


    var clinicfinderModal = document.getElementById('clinicfinderModal');
    var closeSpan = document.getElementsByClassName("projClose")[1];
    
    $('#clinicfinderBtn').on('click', function() {
        clinicfinderModal.style.display = "block";
    });
    closeSpan.onclick = function() {
        clinicfinderModal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == clinicfinderModal) {
            clinicfinderModal.style.display = "none";
        }
    };


    var kathyandsierraModal = document.getElementById('kathyandsierraModal');
    var closeSpan = document.getElementsByClassName("projClose")[2];
    
    $('#kathyandsierraBtn').on('click', function() {
        kathyandsierraModal.style.display = "block";
    });
    closeSpan.onclick = function() {
        kathyandsierraModal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == kathyandsierraModal) {
            kathyandsierraModal.style.display = "none";
        }
    };


    var kwantreeModal = document.getElementById('kwantreeModal');
    var closeSpan = document.getElementsByClassName("projClose")[3];
    
    $('#kwantreeBtn').on('click', function() {
        kwantreeModal.style.display = "block";
    });
    closeSpan.onclick = function() {
        kwantreeModal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == kwantreeModal) {
            kwantreeModal.style.display = "none";
        }
    };


    var americanparadiseModal = document.getElementById('americanparadiseModal');
    var closeSpan = document.getElementsByClassName("projClose")[4];
    
    $('#americanparadiseBtn').on('click', function() {
        americanparadiseModal.style.display = "block";
    });
    closeSpan.onclick = function() {
        americanparadiseModal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == americanparadiseModal) {
            americanparadiseModal.style.display = "none";
        }
    };

});