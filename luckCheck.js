function luckCheck(ticket) {
  //your code here
  const regex = /^\d+$/;
  if (
    ticket.trim().length === 0 ||
    typeof ticket !== "string" ||
    !regex.test(ticket)
  )
    throw new Error("Invalid Input");

  const splitString = ticket.split("");
  const strLenMiddle = Math.floor(ticket.trim().length / 2);

  const lftSide = calculateArrElementsum(splitString.slice(0, strLenMiddle));
  const rgtSide = calculateArrElementsum(
    splitString.slice(
      ticket.trim().length % 2 !== 0 ? strLenMiddle + 1 : strLenMiddle
    )
  );

  return lftSide === rgtSide;
}

function calculateArrElementsum(arr) {
  return arr.reduce((acc, num) => (acc += parseInt(num)), 0);
}
console.log(luckCheck("003111"));
