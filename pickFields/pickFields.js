//solution

function pickFields(data, fields) {
  const dataKeys = Object.keys(data);
  let results = {};

  const commonData = dataKeys.filter((element) => fields.includes(element));
  for (let similarity of commonData) results[similarity] = data[similarity];

  return results;
}

const data = { year: 1995, name: "JavaScript", inventor: "Brendan Eich" };
const fields = ["job", "age", "name"];

console.log(pickFields(data, fields));
