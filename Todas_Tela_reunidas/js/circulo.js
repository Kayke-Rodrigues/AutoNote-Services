let currentSet = 1; 

function changeCircles(direction) {
  document.getElementById(`circuloSet${currentSet}`).style.display = "none";

  currentSet += direction;

  if (currentSet > 2) {
    currentSet = 1;
  } else if (currentSet < 1) {
    currentSet = 2;
  }

  document.getElementById(`circuloSet${currentSet}`).style.display = "flex";
}