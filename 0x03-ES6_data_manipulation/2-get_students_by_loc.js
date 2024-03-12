export default function getStudentsByLocation(arrayObjects, city) {
  if (!Array.isArray(arrayObjects)) {
    return [];
  }
  return arrayObjects.filter(({ location }) => location === city);
}
