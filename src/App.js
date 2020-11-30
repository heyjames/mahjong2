import './App.css';
import React, { Component, Fragment } from 'react';
import Wall from './wall/Wall';
import Table from './components/Table';
import Player from './player/Player';
import PlayerHand from './components/Player';
import _ from 'lodash';
import { pause, renderLoading } from './utils';
import DiscardPile from './DiscardPile';
import DiscardPileArea from './components/DiscardPileArea';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallTiles: [],
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
  }
  

  async componentDidMount() {
    const wall = new Wall();
    const wallTiles = wall.tiles;

    const discardPile = new DiscardPile();
    // const discardedTiles = discardPile.tiles;

    const player1 = new Player("James_1", 1);
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
    player1.addTileToMain(wall.withdrawTile(3, 1, "front")); // P1 jump tile
    player2.addTileToMain(wall.withdrawTile(0, 1, "front"));
    player3.addTileToMain(wall.withdrawTile(0, 1, "front"));
    player4.addTileToMain(wall.withdrawTile(0, 1, "front"));
    // Expected tile count: 91 out of 144 tiles
    
    await pause(0.2);

    this.setState({
      wallTiles,
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

  discardTile(tileCode, id) {
    const state = { ...this.state };
    const player = state["player" + id];
    const { discardPile } = state;
    
    const discardingTile = player.getDiscardingTile(tileCode);
    player.setLastDiscardTile(tileCode);
    player.discardTile(tileCode);
    discardPile.addTile(discardingTile);
    state.turn = this.incrementTurn();

    this.setState(state);
  }

  drawTile() {
    // const { wallTiles } = this.state;


  }

  renderTable() {
    const {
      wallTiles,
      player1,
      player2,
      player3,
      player4,
      turn,
      discardPile
    } = this.state;

    return (
      <Fragment>
        <Table wallTiles={wallTiles} />
        <PlayerHand player={player1} turn={turn} onDiscardTile={this.discardTile} onDrawTile={this.drawTile} />
        <PlayerHand player={player2} turn={turn} onDiscardTile={this.discardTile} onDrawTile={this.drawTile} />
        <PlayerHand player={player3} turn={turn} onDiscardTile={this.discardTile} onDrawTile={this.drawTile} />
        <PlayerHand player={player4} turn={turn} onDiscardTile={this.discardTile} onDrawTile={this.drawTile} />
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
