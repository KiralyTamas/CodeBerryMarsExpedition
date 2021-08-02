function uzemanyag(atlagFogyasztas, foldTávolsag) {
  let egysegTavolsag = 100;
  let szuksegesUzemanyag = atlagFogyasztas / egysegTavolsag * foldTávolsag;
}
function feleslegesUzemanyag(szuksegesUzemanyag, tartaly) {
  let folosUzemanyag= tartaly - szuksegesUzemanyag;
}