function WallTiles({ tiles }) {
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>
        {tiles.length} out of 144
      </div>

      {tiles.map((tile, index) => {
        if (index > 6) return;

        return (
          <div key={index}>
            {tile.label}
          </div>
        );
      })}

      <div>...</div>
    </div>
  );
}
 
export default WallTiles;