function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    setTimeout(function(){
        document.getElementById("mySidenav").style.width = "0"
    }, 3000);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
        var dropElement = dropdowns[0];
        if (dropElement.classList.contains('show')) {
            dropElement.classList.remove('show');
        }
    }
  } 

function toAbout() {
    let x = confirm("You will be sent to about pag, are you sure?");
    if(x) {
        window.location.href = "aboutus.html";
    }
}