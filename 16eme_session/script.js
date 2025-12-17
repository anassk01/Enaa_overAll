const winCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

let board = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;
let pathsX = [];
let pathsO = [];

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restart = document.getElementById('restart');

function handleClick(e) {
  const index = parseInt(e.target.dataset.index);
  
  if (board[index] || !gameActive) return;
  
  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add( currentPlayer.toLowerCase());
  
  const paths = currentPlayer === 'X' ? pathsX : pathsO;
  
  //  ce tour nouvelle succession 
  paths.push({
    played: [index],
    remaining: winCombos.filter(combo => combo.includes(index))
  });
  
  // mettre a jour les successions restante 
  for (let i = paths.length - 1; i >= 0; i--) {
    console.log("before filtering",paths[i].remaining)
    paths[i].remaining = paths[i].remaining.filter(combo => combo.includes(index));
    console.log("after filtering",paths[i].remaining)
    if (paths[i].remaining.length === 0) {
      paths.splice(i, 1);
      continue;
    }
    
    paths[i].played.push(index);
    
    //  victoire
    for (let combo of paths[i].remaining) {
      if (combo.every(pos => board[pos] === currentPlayer)) {
        message.textContent = `${currentPlayer} a gagne !!`;
        gameActive = false;
        return;
      }
    }
  }
  
  //  match nul
  if (board.every(cell => cell !== '')) {
    message.textContent = 'match null ';
    gameActive = false;
    return;
  }
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  message.textContent = `tour de : ${currentPlayer}`;
}

function restartGame() {
  board = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  pathsX = [];
  pathsO = [];
  
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove( 'x', 'o');
  });
  
  message.textContent = 'tour de : X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restart.addEventListener('click', restartGame);
