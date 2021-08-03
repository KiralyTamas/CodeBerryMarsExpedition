function uzemanyag(atlagFogyasztas, foldTavolsag, tartaly) {
  let szuksegesUzemanyag = atlagFogyasztas / 100 * foldTavolsag;
  let folosUzemanyag = tartaly - szuksegesUzemanyag;
  if (document.getElementById("window").innerHTML === "Mars") {
    document.getElementById("window").innerHTML = folosUzemanyag;
  }
  else {
    document.getElementById("window").innerHTML = "Mars";
  }
}