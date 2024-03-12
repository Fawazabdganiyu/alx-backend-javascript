export default function createInt8TypedArray(lenght, position, value) {
  if (position >= lenght) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(lenght);
  const int8 = new Int8Array(buffer);
  int8[position] = value;

  return new DataView(buffer);
}
