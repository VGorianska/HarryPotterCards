import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

function CardCollection({favouriteOnly}) {
  const [students, setStudents] = useState([]);
  console.log(students);
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((studentsFromApi) => {
        console.log(studentsFromApi)
        const allStudents = studentsFromApi.map((student) => {
          return {
            name: student.name,
            house: student.house,
            patronus: student.patronus,
            eyeColour: student.eyeColour,
            image: student.image,
            actor: student.actor,
            flipped: false,
            favourite: false, 
          };
        });
        setStudents(allStudents);
      });
  }, []);

  function toggleFlipped(name) {
    const theStudents = students.map((student) => {
      if (student.name === name) {
        student.flipped = !student.flipped
      }
      return student
    })
    setStudents(theStudents)
  }

  function toggleFavourite(name) {
    const theStudents = students.map((student) => {
      if (student.name === name) {
        student.favourite = !student.favourite
      }
      return student
    })
    setStudents(theStudents)
  }

  return (
    <div className="App">
      {students.filter((student) => {
        if (favouriteOnly && !student.favourite) {
          return false
        }
        return true
      })
      .map((student, index) => <CharacterCard key={index} student={student} toggleFlipped={toggleFlipped} toggleFavourite={toggleFavourite} /> )}  
    </div>
  );
}

export default CardCollection;
