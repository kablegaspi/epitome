$(function() {
    $(".carousel").carousel( { interval: 3000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

});
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
    

    document.querySelector(".card-flip").classList.toggle("flip");

    /* 
     * Holder.js for demo image
     * Just for demo purpose
     */
    Holder.addTheme('gray', {
      bg: '#777',
      fg: 'rgba(255,255,255,.75)',
      font: 'Helvetica',
      fontweight: 'normal'
    });
    



