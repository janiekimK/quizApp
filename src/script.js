document.addEventListener("DOMContentLoaded", function () {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submitButton = document.getElementById("submit-btn");
    let currentQuestionIndex = 0;

    fetch("../database/quizQuestions.json")
        .then((response) => response.json())
        .then((data) => {
            displayQuestion(data[currentQuestionIndex]);

            submitButton.addEventListener("click", () => {
                const selectedChoice = document.querySelector(
                    'input[type="radio"]:checked'
                );

                if (selectedChoice) {
                    const isCorrect =
                        selectedChoice.value ===
                        data[currentQuestionIndex].answer;

                    if (isCorrect) {
                        alert("Richtig 🎉!");
                    } else {
                        alert("Falsche Antwort☹️ Die korrekte Antwort ist: " + data[currentQuestionIndex].answer);
                    }
                } else {
                    alert("Bitte wähle eine Antwort 😊");
                }

                currentQuestionIndex++;
                if (currentQuestionIndex < data.length) {
                    displayQuestion(data[currentQuestionIndex]);
                } else {
                    alert("Quiz beendet 🎉🎉");
                }
            });
        })
        .catch((error) => console.error("Error fetching quiz questions:", error));

function displayQuestion(questionData) {
    questionElement.textContent = questionData.question;
    choicesElement.innerHTML = "";
    questionData.choices.forEach((choice) => {
        const choiceItem = document.createElement("li");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "choice";
        radioInput.value = choice;

        const label = document.createElement("label");
        label.textContent = choice;

        label.htmlFor = radioInput.id;
        radioInput.id = `choice-${questionData.choices.indexOf(choice)}`;

    
        label.prepend(radioInput);
        choiceItem.appendChild(label);
        choicesElement.appendChild(choiceItem);
    });
}
    }
);