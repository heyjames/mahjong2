export function pause(seconds) {
  return new Promise(resolve => {
      setTimeout(() => { resolve() }, seconds * 1000);
  });
}

export function renderLoading() {
  return (
    <span>Loading...</span>
  );
}