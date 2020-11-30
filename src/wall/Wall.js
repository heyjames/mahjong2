import tiles from './tiles';

class Wall {
  constructor() {
    this.tiles = tiles;
  }

  getTiles() {
    return this.tiles;
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