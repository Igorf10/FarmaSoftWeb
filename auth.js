let lastActivity = Date.now();
const maxInactivity = 20 * 60 * 1000; 

function resetTimer() {
  lastActivity = Date.now();
}

function checkInactivity() {
  const now = Date.now();
  if (now - lastActivity >= maxInactivity) {
    logout();
  }
}

function logout() {
  alert("Você foi desconectado por inatividade!");

  window.location.href = "index.html";
}


["mousemove", "keydown", "scroll", "click"].forEach(evt =>
  document.addEventListener(evt, resetTimer)
);

setInterval(checkInactivity, 10000); 
