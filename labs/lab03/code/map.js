
let mcat1 = new Map([
    ['Sub1' , '200'],
    ['Sub2' , '130']
  ]);
let mcat2 = new Map([
    ['Sub1' , '180'],
    ['Sub2' , '120'],
    ['Sub3' , '150']]);
let categories = new Map( [
  ['Category1', mcat1],
  ['Category2', mcat2]
]);

console.log(categories.size);
console.log(categories.get('Category2').size);

let m = 0;
for(let s of categories.values()){
  mtemp = Math.max(...s.values())
  m = (mtemp > m)?mtemp:m;
}

console.log(m);
console.log(categories.get('Category1').get("Sub1"));

