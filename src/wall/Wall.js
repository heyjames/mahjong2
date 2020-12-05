import tiles from './tiles';

class Wall {
  constructor() {
    // this.tiles = tiles;
    this.tiles = this.shuffle(tiles);
  }

  getTiles() {
    return this.tiles;
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    return array;
  }

  withdrawTile(index=0, amount=1, side="front") {
    if (side === "back") {
      const tile = this.tiles.splice(this.tiles.length - 1, 1);
      return tile;
    }

    const tile = this.tiles.splice(index, amount);
    return tile;
  }

  drawSingleTile(side="front") {
    if (side === "back") return this.tiles.pop();
    return this.tiles.shift();
  }
}

export default Wall;