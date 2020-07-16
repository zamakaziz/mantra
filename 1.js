let jsonArray = [
  { id: 1, type: "external" },
  { id: 2 },
  { id: 3, type: "internal" },
];

const filterJ = jsonArray.filter((jArray) => jArray.type === "external");
console.log(filterJ);
