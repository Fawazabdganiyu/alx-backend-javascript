export default function cleanSet(set, startingString) {
  if (!startingString) { return ''; }

  const newString = [];
  set.forEach((ele) => {
    if (ele.startsWith(startingString)) {
      newString.push(ele.slice(startingString.length));
    }
  });

  return newString.join('-');
}
