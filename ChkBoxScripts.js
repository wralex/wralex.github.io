$(document).ready( function(){
    // read the current/previous setting
     $("input.box[type=checkbox]").each(function() {
         var name = $(this).attr('name');
         if ($.cookie(name) && $.cookie(name) == "true") {
             $(this).prop('checked', $.cookie(name));
         }
     });
    // event management
     $("input.box[type=checkbox]").change(function() {
         var name = $(this).attr("name");
         $.cookie(name, $(this).prop('checked'), {
             path: '/',
             expires: 365*30
         });
     });
 });