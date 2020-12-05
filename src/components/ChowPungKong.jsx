function ChowPungKong({ chowPungKong }) {
  if (chowPungKong.length < 1) return null;

  return (
    <div>
      <div>Chow Pung Kong</div>
      {chowPungKong.map((tile, index) =>
        <button
          key={index}
          disabled={true}
        >
          {tile.label}
        </button>
      )}
    </div>
  );
}
 
export default ChowPungKong;