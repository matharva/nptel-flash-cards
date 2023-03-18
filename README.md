# NPTEL Flash Cards

```javascript
const arr = [];
for (const key in questionData) {
  const options = questionData[key]["choices"];
  if (options) {
    const questionText = $x(`//div[@id="${key}"]/div[2]`)[0].innerHTML;
    const finalOptions = options.map((x, index) => {
      return { index: index + 1, text: x.text, isAnswer: x.score };
    });

    const question = { questionId: key, questionText, options: finalOptions };
    arr.push(question);
  }
}
console.log(arr);
```
