const findFirstVowel = word => {
  const vowels = ["a", "e", "i", "o", "u"]

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return i
    }
  }
  return -1
}

const translate = word => {
  word = word.toLowerCase()
  const firstVowelIndex = findFirstVowel(word)

  if (firstVowelIndex === 0) {
    return word + "way"
  } else if (firstVowelIndex > 0) {
    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay"
  } else {
    return word + "ay"
  }
}

module.exports = { translate, findFirstVowel }
