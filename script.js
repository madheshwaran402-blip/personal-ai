// YOUR PERSONAL KNOWLEDGE BASE
// This is your AI's brain for now
const knowledge = {
  skills: "I know HTML, CSS, JavaScript and Python. Currently learning React and building a Personal AI project.",
  projects: "My main project is a Personal AI Chatbot that knows everything about me. Built using React and Claude API.",
  education: "I studied [Your Degree] at [Your College], graduating in [Year].",
  courses: "I've completed courses in [add your courses here].",
  goal: "My goal is to become a full stack developer and land my first tech job within 9 months.",
  contact: "You can reach me at madheshwaran402@gmail.com or on GitHub at madheshwaran402-blip.",
  name: "I'm Madheshwaran, an aspiring developer from India.",
  github: "Check out my GitHub: github.com/madheshwaran402-blip"
}

// FIND THE BEST ANSWER based on what user typed
function getAnswer(input) {
  const text = input.toLowerCase()

  if (text.includes("skill") || text.includes("know") || text.includes("tech")) {
    return knowledge.skills
  }
  else if (text.includes("project") || text.includes("build") || text.includes("made")) {
    return knowledge.projects
  }
  else if (text.includes("education") || text.includes("study") || text.includes("college") || text.includes("degree")) {
    return knowledge.education
  }
  else if (text.includes("course") || text.includes("certif")) {
    return knowledge.courses
  }
  else if (text.includes("goal") || text.includes("future") || text.includes("plan")) {
    return knowledge.goal
  }
  else if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return knowledge.contact
  }
  else if (text.includes("github")) {
    return knowledge.github
  }
  else if (text.includes("who") || text.includes("name") || text.includes("about")) {
    return knowledge.name
  }
  else {
    return "I'm not sure about that yet! Try asking about skills, projects, education, courses or goals."
  }
}

// ADD A MESSAGE to the chat window
function addMessage(text, sender) {
  const messages = document.getElementById("chat-messages")

  const div = document.createElement("div")
  div.classList.add("message", sender)
  div.textContent = text

  messages.appendChild(div)

  // Auto scroll to latest message
  messages.scrollTop = messages.scrollHeight
}

// MAIN FUNCTION — runs when Send is clicked
function sendMessage() {
  const input = document.getElementById("user-input")
  const userText = input.value.trim()

  // Don't send empty messages
  if (userText === "") return

  // Show user message
  addMessage(userText, "user")

  // Clear input box
  input.value = ""

  // Get and show bot answer
  const answer = getAnswer(userText)

  // Small delay so it feels like typing
  setTimeout(() => {
    addMessage(answer, "bot")
  }, 500)
}

// Allow pressing ENTER to send
document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage()
  }
})

// FADE IN ANIMATION on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el)
})