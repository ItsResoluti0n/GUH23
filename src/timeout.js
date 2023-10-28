let timeout;
let loggedIn;
if(window.location.href.includes("index.html")) {
    loggedIn = false;
} else {
    loggedIn = true;
}

function updateLoggedIn() {
    loggedIn = true;
}

document.onmousemove = function(){
  clearTimeout(timeout);
  if(loggedIn == true) {
    timeout = setTimeout(function(){
        alert("You have been inactive for too long. Please log in again.");
        window.location.replace("index.html");    
    }, 10000);
  }
}