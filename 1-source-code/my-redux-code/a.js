const go = (s) => {
  let sum = 0;
  for (const c of s) {
    sum += c - "0";
  }
  return sum + "";
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  const str = s.split("");
  const nb = [];
  let res;
  for (i = 0; i < str.length; i++) {
    nb[i] = s.charCodeAt(i) - 96;
  }

  res =w= nb.join("");
  sum = 0;
 
  while (k--) {
    for (i = 0; i < res.length; i++) {
      sum +=+ res[i];
    }
    res=""+sum;
    sum=0;
  }
  return +res;

  // return res;
};

b = "dbvmfhnttvr";
k = 5;
//8
console.log("1= ",getLucky(b, k));

const getLucky2 = (ss, k) => {
  let s = "";
  for (const c of ss) s += c.charCodeAt() - 96;
  e=s
  while (k--) {
    s = go(s);
  }
  return s - "0";
};



console.log("2= ",getLucky2(b, k));
console.log(w===e,w,e);

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky22 = function(s, k) {
  let num = ''
  for (let i = 0; i < s.length; i++) {
    num += s.charCodeAt(i) - 96
  }

  let tmp = 0
  for (let i = 0; i < k; i++) {
    for (let j = num.length - 1; 0 <= j; j-- ) {
      tmp += +num[j]
    }

    num = '' + tmp
    tmp = 0
  }

  return +num
}

console.log("22= ",getLucky22(b, k));
