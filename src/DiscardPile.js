class DiscardPile {
  constructor() {
    this.tiles = [];
    this.recentDiscard = "";
  }

  addTile(tile) {
    this.setRecentDiscard(tile.code);
    this.tiles.push(tile);
  }

  setRecentDiscard(tileCode) {
    this.recentDiscard = tileCode;
  }

  getStyle(tileCode) {
    const lastTile = this.tiles[this.tiles.length - 1];
    if (lastTile.code === tileCode) {
      return { backgroundColor: "lightseagreen", color: "white" };
    }
    
    return {};
  }
}

export default DiscardPile;