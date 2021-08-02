function uzemanyag(atlagFogyasztas, foldTávolsag) {
  let szuksegesUzemanyag = atlagFogyasztas / 100 * foldTávolsag;
}
function feleslegesUzemanyag(tartaly) {
  let folosUzemanyag= tartaly - uzemanyag(80, 100000);
  console.log(folosUzemanyag);
}