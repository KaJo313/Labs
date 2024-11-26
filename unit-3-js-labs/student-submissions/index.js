const submissions = [
	{ name: "Jane", score: 95, passed: true },
	{ name: "Joe", score: 77, passed: true },
	{ name: "Jack", score: 59, passed: false },
	{ name: "Jill", score: 88, passed: true }
]

const addSubmission = (array, newName, newScore) => {
	const newArray = {
		name: newName,
		score: newScore,
		passed: newScore >= 60 ? true : false
	}
	array.push(newArray)
	console.log(`Submissions array at the end of func addSubmission:`)
	console.log(array)
}

const deleteSubmissionByIndex = (array, index) => {
	if (index < array.length && index >= 0) {
		array.splice(index, 1)
	}
	console.log(
		`Submissions array at the end of func deleteSub...ByIndex:`
	)
	console.log(array)
}

const deleteSubmissionByName = (array, name) => {
	array.splice(
		array.findIndex(array => array.name === name),
		1
	)
	console.log(
		`Submissions array at the end of func deleteSub...ByName:`
	)
	console.log(array)
}

const editSubmission = (array, index, score) => {
	array[index].score = score
	array[index].passed = score >= 60
	console.log(`Submissions array at the end of func editSubmission:`)
	console.log(array)
}

const findSubmissionByName = (array, name) => {
	return array.find(array => array.name === name)
}

const findLowestScore = array => {
	let lowest = array[0]
	for (let i = 0; i < array.length; i++) {
		if (array[i].score < lowest.score) {
			lowest = array[i]
		}
	}
	return lowest
}

const findAverageScore = array => {
	let sumScore = 0
	for (let i = 0; i < array.length; i++) {
		sumScore = sumScore + array[i].score
	}
	return sumScore / array.length
}

const filterPassing = array => {
	return array.filter(student => student.passed === true)
}

const filter90AndAbove = array => {
	return array.filter(student => student.score >= 90)
}

/* Function Test Calls */

const newPerson = addSubmission(submissions, "Emerson", 67)

deleteSubmissionByIndex(submissions, 3)

deleteSubmissionByIndex(submissions, [2, 2])

deleteSubmissionByName(submissions, "Jill")

editSubmission(submissions, 1, 51)

console.log("Return value from func findSubm...ByName: ")
console.log(findSubmissionByName(submissions, "Jane"))

console.log("Return value from func findLowestScore: ")
console.log(findLowestScore(submissions))

console.log(
	`Return value from func findAverageScore: ${findAverageScore(
		submissions
	)}`
)

console.log("Return value from func filterPassing: ")
console.log(filterPassing(submissions))

console.log("Return value from func 90AndAbove: ")
console.log(filter90AndAbove(submissions))
