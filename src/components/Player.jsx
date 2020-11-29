import { Fragment } from 'react';

const Player = ({ player, turn, onDiscardTile }) => {
  return (
    <Fragment>
      <hr />
      <div>
        <span style={{ fontWeight: "bold" }}>
          Player {player.id}, {player.name}, Tile Count: {player.hand.main.length}
        </span>

        {player.hand.main.map(tile =>
          <button
            key={tile.index}
            style={{ display: "block" }}
            disabled={player.disableDiscardTile(turn)}
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