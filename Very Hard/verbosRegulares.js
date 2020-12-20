function espVerb(verb) {
  const pronouns = ["Yo", "tú", "él", "nosotros", "vosotros", "ellos"];
  const suffAr = ["o", "as", "a", "amos", "áis", "an"];
  const suffIr = ["o", "es", "e", "imos", "ís", "en"];
  const suffEr = ["o", "es", "e", "emos", "éis", "en"];

  return pronouns.map((p, i) => {
    return /ar$/.test(verb) ? `${p} ${verb.replace(/ar$/,suffAr[i])}`
         : /ir$/.test(verb) ? `${p} ${verb.replace(/ir$/,suffIr[i])}` 
         : `${p} ${verb.replace(/er$/,suffEr[i])}`;
  }).join(", ") + ".";
}

console.log(espVerb("comer"));
console.log(espVerb("abrir"));
console.log(espVerb("hablar"));