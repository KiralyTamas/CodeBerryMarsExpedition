function uzemanyag(atlagFogyasztas, foldTavolsag) {
  var szuksegesUzemanyag = atlagFogyasztas / 100 * foldTavolsag;
  console.log(szuksegesUzemanyag);
};
function feleslegesUzemanyag(atlagFogyasztas, foldTavolsag, tartaly) {
  var folosUzemanyag= tartaly-uzemanyag(atlagFogyasztas, foldTavolsag);
  console.log(folosUzemanyag);
};