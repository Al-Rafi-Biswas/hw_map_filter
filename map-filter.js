// 1. problem solve..............................

let func = (name, assing = "hello") => {
  return `Md.${name} ${assing}`;
};

console.log(func(" Al Rafi", "Biswas"));

// 2. problem solve................................

const messsage = (name, city) => {
  return `He is the  president of us. his name is ${name}. he went to ${city} city`;
};
console.log(messsage("Donal Tramp", "new york"));

// 3. problem solve..............................................

// let arry1 = [3, 5, 7, 9];
// let arry2 = [55, 66, 88, 99];

// let allarry = [...arry1, ...arry2];

// let arryfun = (allarry) => {
//   let sum = Math.max(...allarry);
//   return `this is highest value ${sum}`;
// };
// console.log(arryfun(allarry));

// another way..............................

let arryfun = (...allarry) => {
  let sum = Math.max(...allarry);
  return `this is highest value ${sum}`;
};
console.log(arryfun(3, 4, 5, 6, 77, 88, 9, 100));

// 4. problem solve..........................................

let obj = {
  name: " Rafi",
  age: 20,
  city: "Barishal",
};

const { names, age, city } = obj;
console.log(city);

let numb = [33, 45, 67, 88];

const [first, second] = numb;
console.log(second);

// 5. problem solve..................................

let object = {
  bangla: 43,
  english: 50,
  math: 60,
  others: {
    islam: 90,
    hadis: 30,
  },
};

const { bangla, english, math, others } = object;
const { islam, hadis } = object.others;

console.log(others);
console.log(islam);

// 6. problem solve...................................

let students = [
  { name: "rafi", mark: 40 },
  { name: "sara", mark: 50 },
  { name: "mina", mark: 60 },
  { name: "Rahim", mark: 70 },
];

const nameStudent = students.map((nam) => nam.name);
const mark = students.map((point) => point.mark);

console.log(nameStudent, mark);

// 7. problem solve...................................

let studentMark = [50, 67, 88, 90, 98, 87, 79];

let filtered = studentMark.filter((mark) => mark > 80);

console.log(filtered);

// 8. probmlem solve..................................

let arry = ["RAfi", "Rahim", "sabbir", "Bayzid"];

let arryMap = arry.map((name) => `hello ${name}`);

console.log(arryMap);

// 9. problem solve..................................

let productArry = [
  { p_name: "laptop", price: 1000 },
  { p_name: "tab", price: 700 },
  { p_name: "phone", price: 500 },
];

let filterProduct = productArry.filter((product) => product.price > 600);

console.log(filterProduct);

// 10.problem solve..................................

let productMap = [
  { p_name: "laptop", price: 1000 },
  { p_name: "tab", price: 700 },
  { p_name: "phone", price: 500 },
];

let filterMap = productMap.map(
  (product) => `product:${product.p_name} cost:${product.price}`
);

console.log(filterMap);
