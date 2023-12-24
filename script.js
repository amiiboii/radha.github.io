

const story = [
    "On the auspicious day of March 18, 2022, fate conspired to intertwine our destinies within the tapestry of University life, unfolding during the inaugural semester of the second year.",
    "These days proved challenging as the University grappled with closures due to COVID and various societal issues.",
    // Add more story elements here
    "Our eyes locked in an instant, and her charm captivated me. This pivotal moment marked the beginning of a journey to win her heart, a journey punctuated by selfless acts such as cleaning the canteen table after everyone's meals.",
    "Despite initial rejections and messages through intermediaries advising restraint, I sensed a deeper undercurrent—her apprehension not towards me, but towards societal judgment. Our conversations deepened, and I embarked on a months-long odyssey to become her ideal companion, crafting a mosaic of beautiful memories.",
    "Bus rides from SLIIT, hours lost in vacation calls, and love expressed through mutual friends like Udula became the backdrop for nerve-racking nights when she asked, 'Do you like me, Amithnal?'",
    "A reunion during the basketball day and a close encounter at a swimming meet with her friend Dasuni as a witness ignited a three-hour conversation exploring hypothetical romantic scenarios.",
    "The pivotal moment arrived when she confessed her feelings, grappling with concerns of an age gap and parental approval. Uncertainty lingered, prompting her to seek time for introspection—a period spanning over five months until February.",
    "Navigating challenges, from maintaining the clandestine nature of our relationship to confronting them head-on post her mother's revelation, our transition was swift. Dates, public outings, and significant milestones, including our first kiss in the OGF car park, followed.",
    "Yet, amidst the joy, shadows of possessiveness and anger issues surfaced. However, time emerged as an alchemist, transmuting these flaws into opportunities for growth.",
    "Presently, our relationship faces a formidable adversary—a chronic illness besieging her. Each day, she grapples with excruciating pain, rendering her immobile. My heart aches for her, and my love deepens as I steadfastly stand by her side through these arduous times."
  ];
  

  const questions = [
    {
        question: "What year did we meet in the University?",
        choices: ["2021", "2022", "2023"],
        correctAnswer: "2022"
    },
    {
        question: "What was the date when our paths first crossed at the University?",
        choices: [
            "March 18, 2022",
            "April 15, 2022",
            "February 27, 2022",
            "May 10, 2022"
        ],
        correctAnswer: "March 18, 2022"
    },
    {
        question: "How did fate lead us to meet at the University?",
        choices: [
            "Through a class assignment",
            "Through a mutual friend and teammate",
            "Through a random encounter in the library",
            "Through a campus event"
        ],
        correctAnswer: "Through a mutual friend and teammate"
    },
    {
        question: "What moment engraved in my mind made me realize she was more than a mere friend?",
        choices: [
            "Her academic achievements",
            "Her selfless act of cleaning the canteen table",
            "Her love for basketball",
            "Her sense of humor"
        ],
        correctAnswer: "Her selfless act of cleaning the canteen table"
    },
    {
        question: "What quality of hers lingered in my thoughts during our initial days?",
        choices: [
            "Confidence",
            "Kindness",
            "Intelligence",
            "Ambition"
        ],
        correctAnswer: "Kindness"
    },
    {
        question: "In the initial three months, what did mutual friends advise me to do?",
        choices: [
            "Keep pursuing her",
            "Give up and move on",
            "Ask her out directly",
            "Seek the help of a love expert"
        ],
        correctAnswer: "Give up and move on"
    },
    {
        question: "What did I sense as the reason for her initial resistance to my advances?",
        choices: [
            "Personal aversion to me",
            "Fear of societal judgment",
            "Lack of interest in relationships",
            "Busy schedule"
        ],
        correctAnswer: "Fear of societal judgment"
    },
    {
        question: "What paved the way for our deepening connection during vacations?",
        choices: [
            "Exchanging gifts",
            "Countless hours spent on calls",
            "Attending social events together",
            "Participating in university clubs"
        ],
        correctAnswer: "Countless hours spent on calls"
    },
    {
        question: "On the basketball day, what marked our first physical contact as 'friends'?",
        choices: [
            "High-five",
            "Fist bump",
            "Hug",
            "Handshake"
        ],
        correctAnswer: "Hug"
    },
    {
        question: "Where did our flirtation during the swimming meet catch the attention of her friend Dasuni?",
        choices: [
            "At the university cafeteria",
            "In the OGF car park",
            "At a local restaurant",
            "At another university"
        ],
        correctAnswer: "At another university"
    },
    {
        question: "How long did our dialogue about hypothetical scenarios of a romantic relationship last?",
        choices: [
            "One hour",
            "Two hours",
            "Three hours",
            "Four hours"
        ],
        correctAnswer: "Three hours"
    },
    {
        question: "What prompted her to confess her feelings during our pivotal conversation?",
        choices: [
            "Concerns about her academic performance",
            "Concerns about our age gap and parental approval",
            "Fear of commitment",
            "Fear of societal judgment"
        ],
        correctAnswer: "Concerns about our age gap and parental approval"
    },
    {
        question: "How long did the period of uncertainty last before she confessed her feelings?",
        choices: [
            "Two months",
            "Five months",
            "Eight months",
            "Ten months"
        ],
        correctAnswer: "Five months"
    },
    {
        question: "What obstacle did our relationship face after her mom learned the truth?",
        choices: [
            "Public scrutiny",
            "Her mom's disapproval",
            "Keeping the relationship private",
            "Financial challenges"
        ],
        correctAnswer: "Keeping the relationship private"
    },
    {
        question: "Where did our first kiss take place?",
        choices: [
            "SLIIT campus",
            "University library",
            "OGF car park",
            "Basketball court"
        ],
        correctAnswer: "OGF car park"
    },
    {
        question: "What did challenges in our relationship reveal about me?",
        choices: [
            "Lack of commitment",
            "Possessiveness and anger issues",
            "Poor communication skills",
            "Indifference"
        ],
        correctAnswer: "Possessiveness and anger issues"
    },
    {
        question: "What brought growth in our relationship despite the challenges?",
        choices: [
            "Time",
            "Expensive gifts",
            "Constant apologies",
            "Attending relationship counseling"
        ],
        correctAnswer: "Time"
    },
    {
        question: "What is the current formidable adversary in our relationship?",
        choices: [
            "Long-distance",
            "Work-related stress",
            "Her chronic illness",
            "Family interference"
        ],
        correctAnswer: "Her chronic illness"
    },
    {
        question: "How do I describe her endurance in the face of her chronic illness?",
        choices: [
            "Admirable",
            "Inspiring",
            "Heartbreaking",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "What is my emotional response as she endures excruciating pain each day?",
        choices: [
            "Joy",
            "Empathy",
            "Ache for her",
            "Frustration"
        ],
        correctAnswer: "Ache for her"
    },
    {
        question: "What deepens my love for her as we face her chronic illness together?",
        choices: [
            "Shared hobbies",
            "Mutual friends",
            "Standing by her side through trying times",
            "Expensive gifts"
        ],
        correctAnswer: "Standing by her side through trying times"
    },
    {
        question: "What significant milestone did we share in the OGF car park?",
        choices: [
            "Our first date",
            "Our first kiss",
            "Our first argument",
            "Our first meeting with her parents"
        ],
        correctAnswer: "Our first meeting with her parents"
    },
    {
        question: "How did our connection deepen unexpectedly after the basketball day?",
        choices: [
            "Through a shared project",
            "Through long heartfelt letters",
            "Through shared experiences",
            "Through a surprise gift"
        ],
        correctAnswer: "Through shared experiences"
    },
    {
        question: "What marked the turning point in my pursuit of her during the initial three months?",
        choices: [
            "A romantic gesture",
            "A heartfelt letter",
            "Her cleaning the canteen table",
            "A public declaration of love"
        ],
        correctAnswer: "Her cleaning the canteen table"
    },
    {
        question: "What did she nervously ask me on the nights that marked a significant step in our relationship?",
        choices: [
            "Do you like basketball?",
            "Do you like me, Amithnal?",
            "Do you want to break up?",
            "Do you believe in destiny?"
        ],
        correctAnswer: "Do you like me, Amithnal?"
    },
    {
        question: "What did I invest months in to become her ideal companion?",
        choices: [
            "Planning surprise dates",
            "Creating beautiful memories",
            "Buying expensive gifts",
            "Writing love poems"
        ],
        correctAnswer: "Creating beautiful memories"
    },
];
let currentIndex = 0;

// ... (existing code) ...

function displayStorySection() {
    const loveStory = document.getElementById('love-story');
    loveStory.textContent = story[currentIndex];

    const storySection = document.getElementById('story-section');
    const questionSection = document.getElementById('question-section');

    // Display the love story section with fadeInZoom animation
    storySection.style.animation = 'fadeInZoom 2s forwards';
    storySection.style.display = 'block';

    // Hide the question section
    questionSection.style.display = 'none';

    // Clear question index to start from the beginning when transitioning back to questions
    currentIndex = 0;

    // Unique animation after each line of the love story
    if (currentIndex > 0) {
        switch (currentIndex % 4) {
            case 1:
                loveStory.style.animation = 'slideInRight 1.5s forwards';
                break;
            case 2:
                loveStory.style.animation = 'rotateIn 1.5s forwards';
                break;
            case 3:
                loveStory.style.animation = 'bounceIn 1.5s forwards';
                break;
            // Add more cases for additional animations
            default:
                break;
        }
    }
}

// ... (existing code) ...

// ... (existing code) ...

function askQuestion() {
    const questionText = document.getElementById('question');
    const choicesList = document.getElementById('choices');
    const questionInfo = document.getElementById('question-info');
    const answerFeedback = document.getElementById('answer-feedback');

    choicesList.style.counterReset = 'choiceCounter';
    questionText.textContent = questions[currentIndex].question;
    questionInfo.textContent = `Question ${currentIndex + 1}/${questions.length}`;
    answerFeedback.textContent = ''; // Clear previous feedback

    choicesList.innerHTML = '';
    questions[currentIndex].choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.onclick = () => checkAnswer(index);
        choicesList.appendChild(li);
    });

    const questionSection = document.getElementById('question-section');
    const storySection = document.getElementById('story-section');

    // Display the question section with fadeIn animation
    questionSection.style.animation = 'fadeIn 2s forwards';
    questionSection.style.display = 'block';

    // Hide the love story section
    storySection.style.display = 'none';
}

function checkAnswer(index) {
    const correctAnswer = questions[currentIndex].correctAnswer;
    const answerFeedback = document.getElementById('answer-feedback');

    if (questions[currentIndex].choices[index] === correctAnswer) {
        answerFeedback.textContent = "Correct!";
    } else {
        answerFeedback.textContent = "Incorrect. Try again!";
        return; // Do not proceed to the next question if the answer is incorrect
    }

    currentIndex++;
    if (currentIndex < questions.length) {
        askQuestion();
    } else {
        const questionSection = document.getElementById('question-section');
        const storySection = document.getElementById('story-section');

        // Display the love story section with fadeInZoom animation
        storySection.style.animation = 'fadeInZoom 2s forwards';
        storySection.style.display = 'block';

        // Hide the question section
        questionSection.style.display = 'none';
    }
}

// ... (existing code) ...

function skipQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        askQuestion();
    } else {
        const questionSection = document.getElementById('question-section');
        const storySection = document.getElementById('story-section');

        // Display the love story section with fadeInZoom animation
        storySection.style.animation = 'fadeInZoom 2s forwards';
        storySection.style.display = 'block';

        // Hide the question section
        questionSection.style.display = 'none';
    }
}

const storyHeadings = [
    "Fateful Beginnings",
    "Love in the Face of Challenges",
    "Enchanted Glances",
    "Journey to Her Heart",
    "Romantic Bus Rides and Nerve-Racking Nights",
    "Three-Hour Conversations and Hypothetical Scenarios",
    "Confessions and Concerns",
    "Swift Transitions to Significant Milestones",
    "Alchemy of Time",
    "Love in the Face of Adversity"
];

function nextLine() {
    const loveStory = document.getElementById('love-story');
    const storyHeading = document.getElementById('story-heading');
    
    currentIndex++;
    if (currentIndex < story.length) {
        loveStory.textContent = story[currentIndex];
        loveStory.style.animation = 'none';
        void loveStory.offsetWidth; // Trigger reflow
        loveStory.style.animation = 'fadeIn 2s forwards'; // Adjusted to a longer fade-in time
        
        // Display the story heading
        storyHeading.textContent = storyHeadings[currentIndex];
    } else {
        const storySection = document.getElementById('story-section');
        const questionSection = document.getElementById('question-section');

        // Display the question section with fadeIn animation
        questionSection.style.animation = 'fadeIn 2s forwards';
        questionSection.style.display = 'block';

        // Hide the love story section
        storySection.style.display = 'none';
    }
}

// Listen for the "Enter" key to trigger the next line in the love story
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        nextLine();
    }
});


// console.clear();

// class musicPlayer {
//   constructor() {
//     this.play = this.play.bind(this);
//     this.playBtn = document.getElementById('play');
//     this.playBtn.addEventListener('click', this.play);
//     this.controlPanel = document.getElementById('control-panel');
//     this.infoBar = document.getElementById('info');
//     this.audio = document.getElementById('audio');
//   }

//   play() {
//     // Toggle the "active" class on control-panel
//     this.controlPanel.classList.toggle('active');

//     // Toggle the "active" class on info
//     this.infoBar.classList.toggle('active');

//     // Toggle play/pause for the audio element
//     if (this.audio.paused) {
//       this.audio.play();
//     } else {
//       this.audio.pause();
//     }
//   }
// }

// // Create an instance of the musicPlayer class
// const newMusicplayer = new musicPlayer();



// Start the story
displayStorySection();