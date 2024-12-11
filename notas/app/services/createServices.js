let grades = [
  { subject: "Matematicas", grade: 9.5 },
  { subject: "Fisica", grade: 9.2 },
];

export const saveGrade = (grade) => {
  grades.push(grade);
  //console.log( grades);
};

export const getGrades = () => {
  return grades;
};

/* export const updateGrade = (nota) => {
  let gradeRetrieve = find(nota.subject);

  if (gradeRetrieve != null) {
    gradeRetrieve.grade = nota.grade;
  } else {
    console.log(grades);
  }

  console.log(grades);
}; */

 export const updateGrade = (nota) => {
  let gradeRetrieve = find(nota.subject);
  if (gradeRetrieve != null) {
    const updatedGrade = { ...gradeRetrieve, grade: nota.grade };
    const index = grades.indexOf(gradeRetrieve);
    if (index !== -1) {
      grades[index] = updatedGrade;
    }
  }
  console.log(grades);
}; 

const find = (subject) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].subject === subject) {
      return grades[i];
    }
  }
  return null;
};
