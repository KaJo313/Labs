const { translate } = require("./funcs.js")

test('translates word starting with "a"', () => {
  expect(translate("apple")).toBe("appleway")
})

test('translates word starting with "e"', () => {
  expect(translate("else")).toBe("elseway")
})

test('translates word starting with "i"', () => {
  expect(translate("igloo")).toBe("iglooway")
})

test('translates word starting with "o"', () => {
  expect(translate("orange")).toBe("orangeway")
})

test('translates word starting with "u"', () => {
  expect(translate("under")).toBe("underway")
})

test("translates word starting with one consonant", () => {
  expect(translate("giraffe")).toBe("iraffegay")
})

test("translates another word starting with one consonant", () => {
  expect(translate("zebra")).toBe("ebrazay")
})

test("translates word starting with two consonants", () => {
  expect(translate("mnemonic")).toBe("emonicmnay")
})

test("translates word starting with more than two consonants", () => {
  expect(translate("splash")).toBe("ashsplay")
})

test("translates another word starting with more than two consonants", () => {
  expect(translate("schnitzel")).toBe("itzelschnay")
})

test("translates word with all consonants", () => {
  expect(translate("rhythm")).toBe("rhythmay")
})
