import { Fragment } from 'react';
import PlayerControls from './PlayerControls';
import ChowPungKong from './ChowPungKong';

function Player({ player, recentDiscardTile, turn, onDiscardTile, onDrawTile, onPung, onChow }) {
  const highlightNameOnTurn = (player.id === turn) ? "yellow" : "";
  const getNewestTileBgColor = function (tile) {
    if (player.id !== turn) return "";
    if (tile.code !== player.hand.newestTile) return "";
    if (player.hasDrawnTile === false) return "";
    if (tile.code === player.hand.newestTile) return "green";
  }
  const showPung = function (tileCode) {
    // if (player.id !== turn) return "none";
    if (player.canPung === false) return "none";
    if (recentDiscardTile === undefined) return "none";
    if (tileCode.includes(player.getTrimmedTileCode(recentDiscardTile.code)) === false) return "none";
    if (recentDiscardTile !== undefined && player.pungController(recentDiscardTile.code).length !== 2) return "none";
    return "inline-block";
  }
  const showChow = function (tileCode) {
    if (player.canChow === false) return "none";
    if (recentDiscardTile === undefined) return "none";
    if (recentDiscardTile !== undefined && player.chowControllerL(recentDiscardTile.code).length !== 2) return "none";
    if ( tileCode.includes(player.chowControllerL(recentDiscardTile.code)[0].code) === false
        && tileCode.includes(player.chowControllerL(recentDiscardTile.code)[1].code) === false ) return "none";
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
              disabled={!player.canDiscardTile}
              onClick={() => onDiscardTile(tile.code, player.id)}
            >
              {tile.label}
            </button>

            <button
              style={{ backgroundColor: "red", color: "white", display: showPung(tile.code) }}
              onClick={() => onPung(player.id)}
            >
              Pung
            </button>

            <button
              style={{ backgroundColor: "orange", color: "white", display: showChow(tile.code) }}
              onClick={() => onChow(player.id)}
            >
              Left Chow
            </button>
          </div>
        )}
        
        <ChowPungKong chowPungKong={player.hand.chowPungKong} />
      </div>
    </Fragment>
  );
}
 
export default Player;