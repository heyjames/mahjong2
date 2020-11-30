import { Fragment } from 'react';

const PlayerControls = ({ player, turn, onDrawTile }) => {
  return (
    <Fragment>
      <button
        onClick={() => onDrawTile(player.id)}
        disabled={!player.drawTileController(turn)}
      >
        Draw Tile
      </button>
    </Fragment>
  );
}
 
export default PlayerControls;