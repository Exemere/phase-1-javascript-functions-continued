function saturdayFun(todo = 'roller-skate') {
  return `This Saturday, I want to ${todo}!`;
}
function mondayWork(work = 'go to the office') {
  return `This Monday, I will ${work}.`;
}
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}