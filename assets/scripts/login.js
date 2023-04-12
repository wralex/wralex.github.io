var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = "./base.html";
}

$("#loginForm").submit(
    function(event) {
        
        // Stop form from submitting normally
        event.preventDefault();
        
        // Get some values from elements on the page:
        var $form = $(this),
        uName = $form.find("input[id='username']").val(),
        uPwd = $form.find("input[id='password']").val(),
        url = $form.attr("action");
   
    // Send the data using post
    var posting = $.post(url,{ user: uName, pwd: uPwd });
   
    // Put the results in a div
    posting.done(function(data) {
        var content = $(data).find("#content" );
      $( "#result" ).empty().append( content );
    });
  });


function login() {
    var username = $('#username').val();
    var password = $("#password").val();

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.mecallapi.com/api/login");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
      JSON.stringify({
        username: username,
        password: password,
      })
    );
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        const objects = JSON.parse(this.responseText);
        console.log(objects);
        if (objects["status"] == "ok") {
          localStorage.setItem("jwt", objects["accessToken"]);
          Swal.fire({
            text: objects["message"],
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "./index.html";
            }
          });
        } else {
          Swal.fire({
            text: objects["message"],
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    };
    return false;
  }