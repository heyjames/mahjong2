import { Fragment } from 'react';
import PlayerControls from './PlayerControls';

const Player = ({ player, turn, onDiscardTile, onDrawTile }) => {
  return (
    <Fragment>
      <hr />
      <div>
        <span style={{ fontWeight: "bold" }}>
          Player {player.id}, {player.name}, Tile Count: {player.hand.main.length}
        </span>

        <PlayerControls player={player} turn={turn} onDrawTile={onDrawTile} />

        {/* {Click to discard tile} */}
        {player.hand.main.map(tile =>
          <button
            key={tile.index}
            style={{ display: "block" }}
            disabled={!player.discardTileController(turn)}
            onClick={() => onDiscardTile(tile.code, player.id)}
          >
            {tile.label}
          </button>
        )}
      </div>
    </Fragment>
  );
}
 
export default Player;