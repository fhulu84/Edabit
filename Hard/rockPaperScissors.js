/* https://edabit.com/challenge/jtvCv6cjHorKpmyFc

Abigail and Benson are playing Rock, Paper, Scissors.

Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

R stands for Rock
P stands for Paper
S stands for Scissors */

// short but hard to read solution
function calculateScore(games) {
  const win = {"R": "S", "S": "P", "P": "R"};
  const scores = games.reduce((s, g) => {
    if(g[0] !== g[1]) s[1 - (win[g[0]] === g[1])]++;
    return s;
  }, [0, 0]);

  return scores[0] > scores[1] ? "Abigail" 
        :scores[1] > scores[0] ? "Benson"
        : "Tie";
}

// long but easy to read solution
function calculateScore2(games) {
	const scores = games.reduce((s, g) => {
    switch(g[0]) {
      case "R":
        if(g[1] === "S") s[0]++;
        else if(g[1] === "P") s[1]++;
        break;
      case "S":
        if(g[1] === "R") s[1]++;
        else if(g[1] === "P") s[0]++;
        break;
      case "P":
        if(g[1] === "R") s[0]++;
        else if(g[1] === "S") s[1]++;
        break;
    }
    return s;
    
  }, [0, 0]);
  return scores[0] > scores[1] ? "Abigail" 
        :scores[1] > scores[0] ? "Benson"
        : "Tie";

}

console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]));
console.log(calculateScore([["R", "R"], ["S", "S"]]));
console.log(calculateScore([["S", "R"], ["R", "P"], ["R", "R"]]));