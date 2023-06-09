import { question } from "readline-sync";
import { readFile } from "fs";


export const textReverse = () => {
  const input = question("Gib das Wort ein das du umdrehen möchtest: # ");
  const reverseText = input.split("").reverse().join("");
  console.log(`Dein Wort lautet umgedreht: ${reverseText}`);
};

export const textUppercase = () => {
  const input = question(
    "Gib das Wort ein das groß geschrieben werden soll: # "
  );
  const uppercase = input.toUpperCase();
  console.log(uppercase);
};

export const textLowercase = () => {
  const input = question(
    "Gib das Wort ein das klein geschrieben werden soll: # "
  );
  const lowercase = input.toLowerCase();
  console.log(lowercase);
};

export const textCount = () => {
  const input = question(
    "Gib das Wort ein bei dem die Buchstaben gezählt werden sollen: # "
  );
};

export const textSwitch = () => {
  const input = question(
    "Gib das Wort ein, bei dem die Buchstaben getauscht werden sollen: # "
  );
  const letterFrom = question(
    `Dein Wort lautet: ${input}. Welcher Buchstabe soll getauscht werden? # `
  );
  const letterTo = question(
    `Gegen welchen Buchstaben soll "${letterFrom}" getauscht werden? # `
  );

  const modifiedWord = swapLetters(input, letterFrom, letterTo);
  console.log(`Das modifizierte Wort lautet: ${modifiedWord}`);
};

const swapLetters = (word, from, to) => {
  const letters = word.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === from) {
      letters[i] = to;
    }
  }
  return letters.join("");
};

export function textRude(input) {
    readFile("./words.txt", function (err, data) {
      if (err) {
        response.end();
        return;
      }
  
      let string = data.toString("utf-8").toLowerCase();
      // let lowString = string.toLowerCase();
      let SchimpfArray = string.split(/\r?\n/);
  
      let inputArr = input.split(" ");
  
      for (let i = 0; i < inputArr.length; i++) {
        if (SchimpfArray.includes(inputArr[i].toLowerCase())) {
          inputArr[i] = "\u001B[1m\u001B[31mCENSORED\u001B[39m\u001B[22m";
        }
      }
      console.log(inputArr.join(" "));
    });
  }

  

export const textSoup = () => {
  const input = question(
    "Aus welchem Wort soll ich eine Buchstabensuppe machen? # "
  );

  const shuffledWord = shuffleLetters(input);
  console.log(`Hier kommt deine Buchstabensuppe: ${shuffledWord}`);
};

const shuffleLetters = (word) => {
  const letters = word.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join("");
};
