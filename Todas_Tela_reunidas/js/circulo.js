let currentSet = 1; 

function changeCircles(direction) {
  document.getElementById(`circleSet${currentSet}`).style.display = "none";

  currentSet += direction;

  if (currentSet > 2) {
    currentSet = 1;
  } else if (currentSet < 1) {
    currentSet = 2;
  }

  document.getElementById(`circleSet${currentSet}`).style.display = "flex";
}