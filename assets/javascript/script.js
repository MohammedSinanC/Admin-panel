function onclickSign(){
     var email = document.getElementById("form3Example3").value
     var password = document.getElementById("form3Example4").value


     if (email != "abcd@gmail.com"){
          alert('Please enter valid email id')
          return 0;
     }
     else if ( password != 123123 ){
          alert('Please enter valid password')
     }
     else{
          alert("Hello, Welcome")
          window.location.href = 'home.html'
     }
     window.onbeforeunload = function() { return "Your work will be lost."; };
}
function logoutFunction() {
     alert('Logout Successfully')
     window.location.href = 'index.html'
}