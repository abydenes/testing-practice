export default function caesarCipher(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode === 122) arr.push("a");
    if (charCode === 90) arr.push("A");

    if (charCode < 65 || charCode > 122) arr.push(str[i]);
    else if (charCode >= 97 && charCode < 122) {
      arr.push(String.fromCharCode(charCode + 1));
    }

    else if (charCode >= 65 && charCode < 90) {
      arr.push(String.fromCharCode(charCode + 1));
    }
  }
  return arr.join("");
}
