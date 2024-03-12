export default function updateStudentGradeByCity(arrayObjects, city, arrayNewGrades) {
  return arrayObjects
    .filter(({ location }) => city === location)
    .map((student) => {
      const update = arrayNewGrades.find(({ studentId }) => studentId === student.id);
      return {
        ...student,
        grade: update ? update.grade : 'N/A',
      };
    });
}
