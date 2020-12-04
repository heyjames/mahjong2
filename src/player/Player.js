// import DiscardPile from '../DiscardPile';

class Player {
  constructor(name, id, isFirst=false) {
    this.name = name;
    this.id = id;
    this.isFirst = isFirst;

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
    this.hand.newestTile = "";
    this.hand.lastDiscardTile = "";

    this.init(isFirst);
  }

  init(isFirst) {
    if (isFirst === true) {
      this.setControlState(0);
    }
  }

  getTileCodePrefix(tileCode) {
    return tileCode.substring(0, 3);
  }

  getTileCodeNumber(tileCode) {
    return tileCode.substring(3, 4);
  }

  getTrimmedTileCode(tileCode) {
    return this.getTileCodePrefix(tileCode) + this.getTileCodeNumber(tileCode);
  }

  // Takes the tile code and compares it to see if there are any of similar tiles in hand
  // 
  pungController(turn, tileCode) {
    if (this.id !== turn) return;
    // let canPung = false;

    const arr = [];

    // console.log("this.hand.main:", this.hand.main);
    // console.log("tileCode:", tileCode);

    // console.log(this.getTileCodePrefix(this.hand.main[0].code));
    // console.log(this.getTileCodeNumber(this.hand.main[0].code));

    // Check if there are same tiles in hand and pushes it to an array named "arr".
    const tilesToPung = this.hand.main.filter(tile => {
      return tile.code.includes(this.getTileCodePrefix(tileCode) + this.getTileCodeNumber(tileCode))
    });

    if (tilesToPung.length >= 2) arr.push(tilesToPung[0], tilesToPung[1]);

    return arr;
  }

  // Scenario 0 - current player's turn and hasn't drawn tile, is first player
  // this.hasDrawnTile = true;
  // this.canDrawTile = false;
  // this.canDiscardTile = true;

  // Scenario 1 - current player's turn and hasn't drawn tile, not first player
  // this.hasDrawnTile = false;
  // this.canDrawTile = true;
  // this.canDiscardTile = false;

  // Scenario 2 - current player's turn and has drawn tile
  // this.hasDrawnTile = true;
  // this.canDrawTile = false;
  // this.canDiscardTile = true;

  // Scenario 3 - just discarded and not player's turn
  // this.hasDrawnTile = false;
  // this.canDrawTile = false;
  // this.canDiscardTile = false;
  setControlState(state) {
    switch (state) {
      case 0: // Scenario 0 - current player's turn and hasn't drawn tile, is first player
        this.hasDrawnTile = true;
        this.canDrawTile = false;
        this.canDiscardTile = true;
        break;
      case 1: // Scenario 1 - current player's turn and hasn't drawn tile, not first player
        this.hasDrawnTile = false;
        this.canDrawTile = true;
        this.canDiscardTile = false;
        break;
      case 2: // Scenario 2 - current player's turn and has drawn tile
        this.hasDrawnTile = true;
        this.canDrawTile = false;
        this.canDiscardTile = true;
        break;
      case 3: // Scenario 3 - just discarded and not player's turn
        this.hasDrawnTile = false;
        this.canDrawTile = false;
        this.canDiscardTile = false;
        break;
      default:
        this.hasDrawnTile = false;
        this.canDrawTile = false;
        this.canDiscardTile = false;
    }
  }

  discardTileController(turn) {
    let canDiscardTile = false;
    if (turn === this.id && this.hasDrawnTile === true) {
      canDiscardTile = true;
    }
    return canDiscardTile;
  }

  setHasDrawnTile(arg=true) {
    this.hasDrawnTile = arg;
  }

  drawTileController(turn) {
    let canDrawTile = false;
    if (turn === this.id) canDrawTile = true;
    if (this.isFirstPlayer()) canDrawTile = false;
    return canDrawTile;
  }

  isFirstPlayer() {
    return (this.hand.main.length > 13);
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

  setNewestTile(tileCode) {
    this.hand.newestTile = tileCode;
  }

  setIsFirst(arg=false) {
    this.isFirst = arg;
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

  // Replaced by discardTileController()
  disableDiscardTile(turn) {
    let disable = true;
    if (turn === this.id) disable = false;
    // if (this.isFirstPlayer()) disable = false;
    return disable;
  }

  // Replaced by drawTileController()
  disableDrawTile(turn) {
    let disable = true;
    if (turn === this.id) disable = false;
    // if (this.isFirstPlayer()) disable = true;
    return disable;
  }
}
 
export default Player;