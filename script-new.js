document.addEventListener('DOMContentLoaded', () =>{
    const flashcards = [
        { question: "On April 18, 1958, The Dodgers played their first game. What venue served as the site for the opening day game?", answer: "Los Angeles Coliseum"},
        { question: "Who was the manager of the 1963 and 1965 Los Angeles Dodgers championship teams?", answer: "Walter Alston"},
        { question: "Where did the Dodgers play before Los Angeles?", answer: "Brooklyn, New York"},
        { question: "Which NFL player did Clayton Kershaw grow up with?", answer: "Rams QB Matthew Stafford"},
        { question: "Who is the only player in MLB history to lead off with a home run and strike out the first 3 batters?", answer: "Shohei Ohtani"}

    ]

    let currentCard = 0;
    const flashcardElement = document.getElementById("flashcard");
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");

    function displayCard() {
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');
    }

    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
        console.log("clicked")
    });

    document.getElementById('next-card').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashcards.length;
        displayCard();
    });
    displayCard();
})