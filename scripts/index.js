let player = 'X';

document.querySelectorAll('.squares').forEach(square => {
  square.addEventListener('click', () => {
    if (square.innerHTML === '') {
      console.log('Click');
      square.innerHTML = player;
      if (player === 'X') {
        player = 'O';
      } else {
        player = 'X';
      }
    }
  });
});

function reset() {
  document.querySelectorAll('.squares').forEach(square => {
    square.innerHTML = '';
  });
  player = 'X';
}
