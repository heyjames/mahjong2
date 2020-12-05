class DiscardPile {
  constructor() {
    this.tiles = [];
    this.recentDiscard = "";
  }

  addTile(tile) {
    this.tiles.push(tile);
  }

  recentDiscard() {
    return this.recentDiscard;
  }

  getRecentDiscardTile() {
    return this.tiles[this.tiles.length - 1];
  }

  removeRecentTile() {
    return this.tiles.pop();
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