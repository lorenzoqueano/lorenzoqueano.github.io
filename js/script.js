// Can also be included with a regular script tag
$(document).ready(function () {
    $('#menu-icon').click(function () {
        $('nav').toggleClass("navexpanded");
        return false;
    });
    // Add smooth scrolling to the navigation links
    $("nav a, #introduction a").on("click", function(event) {
        event.preventDefault();
        var hash = this.hash;
        console.log(this.hash);
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800
        );
      });
});