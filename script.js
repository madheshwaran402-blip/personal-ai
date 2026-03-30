// This is your personal data
// Later this becomes the AI's brain!
const facts = {
  education: "I studied [Your Degree] at [Your College]. I graduated in [Year].",
  skills: "I know HTML, CSS, JavaScript and Python. Currently learning React.",
  projects: "I'm building a Personal AI Chatbot that knows everything about me!",
  goal: "My goal is to become a full stack developer and land my first job in 9 months."
}

// This function runs when a button is clicked
function showFact(topic) {

  // Get the box on the page
  const factBox = document.getElementById("fact-box")
  const factText = document.getElementById("fact-text")

  // Put the answer inside it
  factText.textContent = facts[topic]

  // Make it visible with animation
  factBox.classList.add("visible")
}