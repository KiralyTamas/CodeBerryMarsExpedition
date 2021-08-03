function uzemanyag(atlagFogyasztas, foldTavolsag, tartaly) {
  let szuksegesUzemanyag = atlagFogyasztas / 100 * foldTavolsag;
  let folosUzemanyag= tartaly-szuksegesUzemanyag;
  console.log(folosUzemanyag);
}