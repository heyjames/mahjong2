// import DiscardPile from '../DiscardPile';

class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;

    this.hasDrawnTile = false;
    this.canDrawTile = false;
    this.canDiscardTile = true;
    this.canChow = false;
    this.canPung = false;
    this.canKong = false;

    this.hand = {};
    this.hand.main = [];
    this.hand.flowers = [];
    this.hand.chowPungKong = [];
    this.hand.newTile = "";
    this.hand.lastDiscardTile = "";
  }

  addTileToMain(tiles) {
    if (Array.isArray(tiles) === true) {
      this.hand.main.push(...tiles);
    } else {
      this.hand.main.push(tiles);
    }
  }

  getDiscardingTile(tileCode) {
    return this.hand.main.filter(tile => {
      return tile.code === tileCode
    })[0];
  }

  setLastDiscardTile(tileCode) {
    this.hand.lastDiscardTile = tileCode;
  }

  discardTile(tileCode) {
    this.hand.main = this.hand.main.filter(tile => {
      return tile.code !== tileCode
    });

    // return discardingTile;
    // Add to discard pile.

    // Disable buttons (canDrawTile, canDiscardTile)

    // End turn. Add to counter.
    // this.endTurn();
    // console.log(`Player ${this.id} discarded ${tileCode}`);
  }

  endTurn(type="normal") {
    if (type === "normal") {
      this.canDrawTile = false;
      this.canDiscardTile = false;
    }
  }

  disableDiscardTile(turn) {
    let disable = true;
    if (turn === this.id) disable = false;
    return disable;
  }
}
 
export default Player;