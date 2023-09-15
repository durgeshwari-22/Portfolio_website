let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter; // Corrected from span.textContext=letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1"; // Corrected from words[currentWordIndex].computedStyleMap.opacity="1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Call the changeText function to start the text animation
setInterval(changeText, 2000); // You can adjust the interval as needed

// Function to animate the skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach((bar) => {
        const skillName = bar.querySelector(".info p:first-child").textContent;
        const skillPercentage = parseInt(bar.querySelector(".info p:last-child").textContent);
        const skillProgressBar = bar.querySelector(".bar span");

        // Set the width of the skill bar based on the percentage
        skillProgressBar.style.width = skillPercentage + "%";

        // Add a tooltip with the skill name and percentage on hover
        skillProgressBar.addEventListener("mouseenter", () => {
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = skillName + " - " + skillPercentage + "%";
            bar.appendChild(tooltip);
        });

        skillProgressBar.addEventListener("mouseleave", () => {
            const tooltip = bar.querySelector(".tooltip");
            if (tooltip) {
                bar.removeChild(tooltip);
            }
        });
    });
}

// Call the function to animate the skill bars when the page loads


const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);
});
