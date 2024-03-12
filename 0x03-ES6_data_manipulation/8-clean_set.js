export default function cleanSet(set, startingString) {
  if (!startingString || !set || !(set instanceof Set) || typeof startingString !== 'string') {
    return '';
  }

  const newString = [];
  set.forEach((ele) => {
    if (ele.startsWith(startingString)) {
      newString.push(ele.slice(startingString.length));
    }
  });

  return newString.join('-');
}
