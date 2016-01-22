function UpdateTableHeaders() {
   $(".wrapper").each(function() {

       var el             = $(this),
           offset         = el.offset(),
           scrollTop      = $(window).scrollTop(),
           floatingHeader = $(".footer-float", this)
       
       if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
           floatingHeader.addClass('show');
       } else {
           floatingHeader.removeClass('show');
       };
   });
}

$(function() {

   $(window).scroll(UpdateTableHeaders).trigger("scroll");

});