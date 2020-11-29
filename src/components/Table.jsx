import { Fragment } from 'react';

const Table = ({ wallTiles }) => {
  // console.log("player1.canDiscardTile:", player1.canDiscardTile);
  return (
    <Fragment>
      <div style={{ fontWeight: "bold" }}>
        {wallTiles.length} out of 144
      </div>

      {wallTiles.map(wallTile =>
        <div key={wallTile.index}>
          {wallTile.label}
        </div>
      )}
    </Fragment>
  );
}
 
export default Table;