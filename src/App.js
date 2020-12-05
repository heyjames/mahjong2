import './App.css';
import React, { Component, Fragment } from 'react';
import Wall from './wall/Wall';
import WallTiles from './components/WallTiles';
import Player from './player/Player';
import PlayerHand from './components/Player';
import _ from 'lodash';
import { pause, renderLoading } from './utils';
import DiscardPile from './DiscardPile';
import DiscardPileArea from './components/DiscardPileArea';
import { wall2, player12, player22, player32, player42 } from './pungState';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wall: {},
      discardPile: {},
      player1: {},
      player2: {},
      player3: {},
      player4: {},
      isLoading: true,
      turn: 1,
    };

    this.discardTile = this.discardTile.bind(this);
    this.drawTile = this.drawTile.bind(this);
    this.pung = this.pung.bind(this);
  }
  
  async componentDidMount() {
    const wall = new Wall();

    const discardPile = new DiscardPile();

    const player1 = new Player("James_1", 1, true);
    const player2 = new Player("James_2", 2);
    const player3 = new Player("James_3", 3);
    const player4 = new Player("James_4", 4);

    player1.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player2.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player3.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player4.addTileToMain(wall.withdrawTile(0, 4, "front"));

    player1.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player2.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player3.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player4.addTileToMain(wall.withdrawTile(0, 4, "front"));

    player1.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player2.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player3.addTileToMain(wall.withdrawTile(0, 4, "front"));
    player4.addTileToMain(wall.withdrawTile(0, 4, "front"));

    player1.addTileToMain(wall.withdrawTile(0, 1, "front"));
    const player1NewestTile = wall.withdrawTile(3, 1, "front");
    player1.setNewestTile(player1NewestTile[0].code);
    player1.addTileToMain(player1NewestTile); // P1 jump tile
    
    player2.addTileToMain(wall.withdrawTile(0, 1, "front"));
    player3.addTileToMain(wall.withdrawTile(0, 1, "front"));
    player4.addTileToMain(wall.withdrawTile(0, 1, "front"));
    // Expected tile count: 91 out of 144 tiles

    player1.sortTiles();
    player2.sortTiles();
    player3.sortTiles();
    player4.sortTiles();
    
    await pause(0.2);

    player1.setCanDrawTile(false);
    player1.setCanDiscardTile(true);

    // Use pungState
    wall.tiles = wall2.tiles;
    player1.hand.main = player12.hand.main;
    player1.hand.newestTile = player12.hand.newestTile;
    player2.hand.main = player22.hand.main;
    player3.hand.main = player32.hand.main;
    player4.hand.main = player42.hand.main;

    // Get state to use for pungState.js
    // console.log(wall.tiles);
    // console.log(player1.hand.main);
    // console.log(player2.hand.main);
    // console.log(player3.hand.main);
    // console.log(player4.hand.main);

    this.setState({
      wall,
      discardPile,
      player1,
      player2,
      player3,
      player4,
      isLoading: false
    });
  }

  incrementTurn = () => {
    const { turn } = this.state;
    return (turn === 4) ? 1 : turn + 1;
  }

  discardTile(tileCode, playerId) {
    let { turn, discardPile, player1, player2, player3, player4 } = this.state;
    const player = this.state[`player${playerId}`];

    player1.setCanPung(true);
    player2.setCanPung(true);
    player3.setCanPung(true);
    player4.setCanPung(true);
    
    const discardingTile = player.getDiscardingTile(tileCode);
    player.setLastDiscardTile(tileCode);
    player.discardTile(tileCode);
    if (player.isFirst === true) player.setIsFirst(false);
    player.setHasDrawnTile(false);
    discardPile.addTile(discardingTile);
    player.setCanDrawTile(false);
    player.setCanDiscardTile(false);
    player.setCanPung(false);
    turn = this.incrementTurn();

    this.setState({ discardPile, turn }, () => this.onNextPlayerTurn());
  }

  onNextPlayerTurn() {
    const { turn } = this.state;
    const player = this.state[`player${turn}`];
    player.setCanDrawTile(true);
    player.setCanDiscardTile(false);
    
    // console.log(this.state.discardPile.tiles);
    this.setState({ [`player${turn}`]:player });
  }

  drawTile(playerId) {
    const { wall, player1, player2, player3, player4 } = this.state;
    const player = this.state[`player${playerId}`];
    
    // If player 2 discards a tile that player 1 can pung, but player 3 draws, then disable player 1's Draw Tile button.
    player1.setCanPung(false);
    player2.setCanPung(false);
    player3.setCanPung(false);
    player4.setCanPung(false);

    const drawnTile = wall.drawSingleTile("front");
    player.addTileToMain(drawnTile);
    player.setNewestTile(drawnTile.code);
    player.setHasDrawnTile(true);
    player.setCanDrawTile(false);
    player.setCanDiscardTile(true);
    player.setCanPung(false);

    this.setState({ [`player${playerId}`]: player, wall });
  }

  pung(id) {
    const { discardPile, player1, player2, player3, player4 } = this.state;
    const player = this.state[`player${id}`];
    
    // If player 1 discards a tile that player 4 pungs, then disable player 2's Draw Tile button.
    player1.setCanDrawTile(false);
    player2.setCanDrawTile(false);
    player3.setCanDrawTile(false);
    player4.setCanDrawTile(false);

    // Get 1 of 3 pung tile from the discarded area.
    const removedTile = discardPile.removeRecentTile();
    player.addTileToChowPungKong(removedTile);
    
    // Remove the remaining 2 associated pung tiles from the main hand.
    const tilesToDiscardFromMain = player.pungController(removedTile.code);
    player.discardTile(tilesToDiscardFromMain[0].code);
    player.discardTile(tilesToDiscardFromMain[1].code);
    
    // Place the 2 associated pung tiles into the player's non-main array.
    player.addTileToChowPungKong(tilesToDiscardFromMain[0]);
    player.addTileToChowPungKong(tilesToDiscardFromMain[1]);

    // Set player state when done.
    player.setCanDrawTile(false);
    player.setCanDiscardTile(true);

    this.setState({ discardPile, turn: id });
  }

  renderTable() {
    const {
      wall,
      player1,
      player2,
      player3,
      player4,
      turn,
      discardPile
    } = this.state;

    const players = [player1, player2, player3, player4];

    return (
      <Fragment>
        <WallTiles tiles={wall.tiles} />

        {players.map((player, index) => {
          return (
            <PlayerHand
              key={index}
              player={player}
              recentDiscardTile={discardPile.getRecentDiscardTile()}
              turn={turn}
              onDiscardTile={this.discardTile}
              onDrawTile={this.drawTile}
              onPung={this.pung}
            />
          );
        })}

        <DiscardPileArea tiles={discardPile} />
      </Fragment>
    );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Fragment>
        {isLoading ? renderLoading() : this.renderTable()}
      </Fragment>
    );
  }
}
 
export default App;
