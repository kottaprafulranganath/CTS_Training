document.getElementById("splitBtn").addEventListener("click", function () {
  const inputText = document.getElementById("inputParagraphs").value;
  let sentenceArray = [];
  let ptr = 0;

  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] === ".") {
      let sentence = inputText.slice(ptr, i + 1).trim();
      if (sentence.length > 0) {
        sentenceArray.push(sentence);
      }
      ptr = i + 1;
    }
  }

  const container = document.getElementById("paragraphList");
  container.innerHTML = "";

  sentenceArray.forEach((sentence, index) => {
    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${sentence}`;
    container.appendChild(p);
  });
});
