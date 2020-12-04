import { Fragment } from 'react';
import PlayerControls from './PlayerControls';

const Player = ({ player, turn, onDiscardTile, onDrawTile, onPung }) => {
  const highlightNameOnTurn = (player.id === turn) ? "yellow" : "";
  const getNewestTileBgColor = function (tile) {
    if (player.id !== turn) return "";
    if (tile.code !== player.hand.newestTile) return "";
    if (tile.code === player.hand.newestTile) return "green";
  }
  const showPung = function (tileCode) {
    if (player.id !== turn) return "none";
    if (tileCode.includes(player.getTrimmedTileCode("cha1-5")) === false) return "none";
    if (player.pungController(turn, "cha1-5").length !== 2) return "none";
    return "inline-block";
  }
  
  return (
    <Fragment>
      <hr />
      <div style={{ backgroundColor: highlightNameOnTurn }}>
        <span style={{ fontWeight: "bold" }}>
          Player {player.id}, {player.name}, Tile Count: {player.hand.main.length}
        </span>

        <PlayerControls player={player} turn={turn} onDrawTile={onDrawTile} />

        {/* {Click to discard tile} */}
        {player.hand.main.map(tile =>
          <div key={tile.index} style={{ backgroundColor: getNewestTileBgColor(tile) }}>
            <button
              disabled={!player.discardTileController(turn)}
              onClick={() => onDiscardTile(tile.code, player.id)}
            >
              {tile.label}
            </button>

            <button
              style={{ display: showPung(tile.code) }}
              onClick={() => onPung(tile.code)}
            >
              Pung
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
 
export default Player;