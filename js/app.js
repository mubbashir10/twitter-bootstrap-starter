(function($) {
  "use strict"; // Start of use strict

  $("#submit-button").click(function(){
    var id = $("#room-id").val();
    if(id){
      window.location.href = "https://meet.voru.io/"+id;
    }
  })

})(jQuery); // End of use strict
