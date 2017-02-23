function Board() {
  grid = new Array(8)
  for(let i=0; i<grid.length; i++) {
    grid[i] = new Array(8);
  };
  this.grid = grid;
}


function Piece(color) {
  this.color = color;
}

function Game() {

}

b = new Board();
console.log(b.grid);
