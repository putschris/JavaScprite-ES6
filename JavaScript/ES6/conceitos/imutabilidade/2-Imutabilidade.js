const students = [
    {
        name: "Igor",
        grade: 5
    },
    {
        name: "Juliana",
        grade: 9
    },
    {
        name: "Chris",
        grade: 7
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: ')
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);