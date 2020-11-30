import { Fragment } from 'react';

const DiscardPileArea = ({ tiles }) => {
  return (
    <Fragment>
      <hr />
      <div>
        <span style={{ fontWeight: "bold" }}>
          Discard Pile
        </span>

        {tiles.tiles.map(tile =>
          <div key={tile.index} style={tiles.getStyle(tile.code)}>
            {tile.label}
          </div>
        )}
      </div>
    </Fragment>
  );
}
 
export default DiscardPileArea;