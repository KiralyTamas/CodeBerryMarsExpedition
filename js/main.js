function uzemanyag() {
  let atlagFogyasztas = document.getElementById("atlagFogyasztas").value;
  let foldTavolsag = document.getElementById("foldTavolsag").value;
  let tartaly = document.getElementById("tartaly").value;
  let szuksegesUzemanyag = atlagFogyasztas / 100 * foldTavolsag;
  let folosUzemanyag = tartaly - szuksegesUzemanyag;
  if (document.getElementById("window").innerHTML === "Mars") {
    document.getElementById("window").innerHTML = folosUzemanyag;
  } else {
    document.getElementById("window").innerHTML = "Mars";
  }
}