// Task: groupArrayByParity
// Write a function groupArrayByParity(arr) that takes an array of numbers
// and returns an object with two properties:
//
// even: an array of all even numbers from arr.
// odd: an array of all odd numbers from arr.
// If the input is not an array, the function should throw an error with message: "Input must be an array"
export function groupArrayByParity(arr) {
  if (!Array.isArray(arr)) {
    console.log("The input is not an array.");
  }
  const result = {
    even: [],
    odd: [],
  };
  for (let number of arr) {
    if (number % 2 === 0) {
      result.even.push(number);
    } else {
      result.odd.push(number);
    }
  }
  return result;
}

//Task: averageWordCount
//Write a function averageWordCount(sentences, minLength) that takes an array of strings sentences and an integer minLength.
//The function should return the average number of words (with a length greater than minLength) for each sentence.
//If sentences is empty, the function should return 0.
export function averageWordCount(sentences, minLength) {
  if (sentences.length === 0) {
    return 0;
  }

  let totalWords = 0;

  sentences.forEach((sentence) => {
    const words = sentence.split(/\s+/);
    const count = words.filter((word) => word.length > minLength).length;
    totalWords += count;
  });
  return totalWords / sentences.length;
}

// Task: findHighestScore
// Write a function findHighestScore(students, subject)
// that takes an array of objects students and a string subject.
// Each object in the students array contains the name of a student
// and their scores in different subjects. The function should
// return the name of the student with the highest score in the specified subject.
//
// If no student has a score for the specified subject,
// or if students is empty, the function should return null.
// If the students array contains elements that aren't objects
// or if subject isn't a string, the function should throw an error.
//
// Examples:
// findHighestScore([ { name: 'Alice', math: 90, science: 85 }, { name: 'Bob', math: 95, science: 80 } ], 'math') should return 'Bob'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'math') should return 'Alice'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'history') should return null.
export function findHighestScore(students, subject) {
  if (!Array.isArray(students) || typeof subject !== "string") {
    throw new Error("Invalid input!");
  }
  if (students.some((item) => typeof item !== "object" || item === null)) {
    throw new Error("Empty object or not an object!");
  }
// I found out about -Infinity on chat gpt, but I understands it's role and way of working
// here it represents a numeric value that is less than any other value, so to use this is probably the most secure way to get the smallest numeric possibility
// appearently it is a pretty useful component in comparisons, for instance in this case
  let highestScore = -Infinity;
  let highestScorer = null;

  for (const student of students) {
    if (student.hasOwnProperty(subject)) {
      if (student[subject] > highestScore) {
        highestScore = student[subject];
        highestScorer = student.name;
      }
    }
  }
  return highestScorer;
}
// Igazabol csak ezert akartam bele irni ezt a jegyzetet, mert ugye elmeleti sikon nem baj az ha utana nezunk 
//dolgoknak kulso forrasokbol, de viszont fontos hogy ertsuk is amit hasznalunk, szoval ezzel igazabol ezt akartam jelezni :D!
// remelem ez a kod megformazasanal nem minusz pont xD
