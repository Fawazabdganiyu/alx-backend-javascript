export default function getStudentIdsSum(arrayObjects) {
  if (!Array.isArray(arrayObjects)) {
    return 0;
  }
  return arrayObjects.reduce((sum, { id }) => sum + id, 0);
}
