document.addEventListener("DOMContentLoaded", function () {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submitButton = document.getElementById("submit-btn");
    let currentQuestionIndex = 0;

    // Fetch quiz questions from the database
    fetch("../database/quizQuestions.json")
        .then((response) => response.json())
        .then((data) => {
            // Display the first question
            displayQuestion(data[currentQuestionIndex]);

            // Event listener for submit button
            submitButton.addEventListener("click", () => {
                // Process answer
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

                // Load next question
                currentQuestionIndex++;
                if (currentQuestionIndex < data.length) {
                    displayQuestion(data[currentQuestionIndex]);
                } else {
                    alert("Quiz beendet 🎉🎉");
                }
            });
        })
        .catch((error) => console.error("Error fetching quiz questions:", error));

    // Function to display question and choices
function displayQuestion(questionData) {
    questionElement.textContent = questionData.question;
    choicesElement.innerHTML = "";
    questionData.choices.forEach((choice) => {
        const choiceItem = document.createElement("li");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "choice";
        radioInput.value = choice;

        // Add a label element for each choice
        const label = document.createElement("label");
        label.textContent = choice;

        // Associate the label with the radio input
        label.htmlFor = radioInput.id;
        radioInput.id = `choice-${questionData.choices.indexOf(choice)}`;

        // Append the radio input to the label
        label.prepend(radioInput);
        choiceItem.appendChild(label);
        choicesElement.appendChild(choiceItem);
    });
}
    }
);