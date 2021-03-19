const { generateText, checkAndGenerate } = require('./util')

test('should output name and age', () => {
    const text = generateText('Max', 29)
    expect(text).toBe('Max (29 years old)');
    const text2 = generateText('Anna', 20)
    expect(text2).toBe('Anna (20 years old)');
    const text3 = generateText('', null)
    expect(text3).toBe(' (null years old)');
    const text4 = generateText()
    expect(text4).toBe('undefined (undefined years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max',29)
    expect(text).toBe('Max (29 years old)')
});