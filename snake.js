const gameBoard = document.getElementById("game-board");
const snake = [];
let food;

// Create initial snake
for (let i = 0; i < 5; i++) {
  const snakePart = document.createElement("div");
  snakePart.style.width = "20px";
  snakePart.style.height = "20px";
  snakePart.style.backgroundColor = "green";
  snakePart.style.position = "absolute";
  snakePart.style.left = i * 20 + "px";
  snakePart.style.top = "0px";
  gameBoard.appendChild(snakePart);
  snake.push(snakePart);
}

// Create initial food
createFood();

function createFood() {
  food = document.createElement("div");
  food.style.width = "20px";
  food.style.height = "20px";
  food.style.backgroundColor = "red";
  food.style.position = "absolute";
  food.style.left = Math.floor(Math.random() * 25) * 20 + "px";
  food.style.top = Math.floor(Math.random() * 25) * 20 + "px";
  gameBoard.appendChild(food);
}

// Move the snake
setInterval(function() {
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i].style.left = snake[i - 1].offsetLeft + "px";
    snake[i].style.top = snake[i - 1].offsetTop + "px";
  }

  // Check for collision with food
  if (snake[0].offsetLeft === food.offsetLeft && snake[0].offsetTop === food.offsetTop) {
    gameBoard.removeChild(food);
    createFood();

    // Add a new snake part
    const snakePart = document.createElement("div");
    snakePart.style.width = "20px";
    snakePart.style.height = "20px";
    snakePart.style.backgroundColor = "green";
    snakePart.style.position = "absolute";
    snakePart.style.left = snake[snake.length - 1].offsetLeft + "px";
    snakePart.style.top = snake[snake.length - 1].offsetTop + "px";
    gameBoard.appendChild(snakePart);
    snake.push(snakePart);
}

}, 100);
document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37: // left arrow
        snake[0].style.left = snake[0].offsetLeft - 20 + "px";
        break;
      case 38: // up arrow
        snake[0].style.top = snake[0].offsetTop - 20 + "px";
        break;
      case 39: // right arrow
        snake[0].style.left = snake[0].offsetLeft + 20 + "px";
        break;
      case 40: // down arrow
        snake[0].style.top = snake[0].offsetTop + 20 + "px";
        break;
    }
  };
  
