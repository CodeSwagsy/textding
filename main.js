// ESM syntax is supported.
// https://i.imgur.com/GUVFLj1.png
import { keyInSelect } from "readline-sync";
import {
  textReverse,
  textUppercase,
  textLowercase,
  textCount,
  textSwitch,
  textRude,
  textSoup,
} from "./function";

console.log("\nWillkommen beim Worteditor 0.815");

const method = keyInSelect(
  [
    "Text umdrehen",
    "Alles groß schreiben",
    "Alles klein schreiben",
    "Buchstaben zählen",
    "Buchstaben tauschen",
    "Prüfen auf Schimpfwort",
    "Buchstabensuppe!",
  ],
  "Was möchtest du mit deinem Wort machen? # "
);

switch (method) {
  case 0:
    textReverse();
    break;

  case 1:
    textUppercase();
    break;

  case 2:
    textLowercase();
    break;

  case 3:
    textCount();
    break;

  case 4:
    textSwitch();
    break;

  case 5:
    textRude();
    break;

  case 6:
    textSoup();
    break;

  case -1:
    break;

  default:
    console.log("Err");
    break;
}
