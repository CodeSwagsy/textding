import { keyInSelect, keyInYN, question, questionInt } from "readline-sync";

// textReverse,
// textUppercase,
// textLowercase,
// textCount,
// textSwitch,
// textRude,


export const textReverse = () => {
    const input = question("Gib das Wort ein das du umdrehen möchtest: # ");
    const reverseText = input.split("").reverse().join("");
    console.log(`Dein Wort lautet umgedreht: ${reverseText}`);
}

export const textUppercase = () => {
    const input = question("Gib das Wort ein das groß geschrieben werden soll: # ");
    const uppercase = input.toUpperCase();
    console.log(uppercase);
}

export const textLowercase = () => {
    const input = question("Gib das Wort ein das klein geschrieben werden soll: # ");
    const lowercase = input.toLowerCase();
    console.log(lowercase);
}

export const textCount = () => {
    const input = question("Gib das Wort ein bei dem die Buchstaben gezählt werden sollen: # ");
}

export const textSwitch = () => {
    const input = question("Gib das Wort ein bei dem die Buchstaben getauscht werden sollen: # ");
    const letterFrom = question(`Dein Wort lautet: ${input}. Welcher Buchstabe soll getauscht werden? # `);
    const letterTo = question(`Gegen welchen Buchstaben soll "${letterFrom}" getauscht werden? # `);
}

export const textRude = () => {
    const input = question("Gib dein Wort ein um zu prüfen ob es ein Schimpfwort ist: # ");
}