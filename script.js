// SUGGESTED QUESTIONS — array of objects
const suggestions = [
  { label: "🔷 What is Determinex?",       question: "What is Determinex?" },
  { label: "👟 Tell me about your patent",  question: "Tell me about the smart shoe" },
  { label: "🧠 Research interests?",        question: "What are your research interests?" },
  { label: "🎯 What are your goals?",       question: "What are your goals?" },
  { label: "💻 What are your skills?",      question: "What are your skills?" },
  { label: "🏆 Any achievements?",          question: "What are your achievements?" },
  { label: "🚀 What projects have you built?", question: "Tell me about your projects" },
  { label: "📚 What are you learning now?", question: "What are you currently learning?" }
]

// BUILD SUGGESTION CHIPS using .map()
function buildSuggestions() {
  const container = document.getElementById("suggestions")

  // .map() turns each suggestion object into an HTML button string
  const buttonsHTML = suggestions.map(item => {
    return `<button class="suggestion-chip" onclick="askSuggestion('${item.question}')">${item.label}</button>`
  })

  // .join() merges the array of strings into one big string
  container.innerHTML = buttonsHTML.join("")
}

// WHEN A CHIP IS CLICKED — fill input and send
function askSuggestion(question) {
  const input = document.getElementById("user-input")
  input.value = question
  sendMessage()
}
// MADHESHWARAN'S PERSONAL KNOWLEDGE BASE
const knowledge = {
  name: "I'm Madheshwaran Maruthamuthu, a VLSI Design & Technology engineering student from Tamil Nadu, India. I'm focused on hardware-first engineering — building systems that are reliable, safe, and real-world ready.",

  education: "I'm currently a 2nd year B.E./B.Tech student specializing in VLSI Design & Technology in Tamil Nadu, India. I'm progressing toward core VLSI specialization with a strong focus on digital design and FPGA systems.",

  skills: "My hardware skills include Verilog, SystemVerilog, FPGA Design, Digital Design (FSM, FIFO, Counters), and event-driven architectures. On the programming side I work with Python (Brian2, Nengo), MATLAB/Simulink, Java, JavaScript, and Node.js. Tools: MQTT, Turbotic, Linux (RH104), Git.",

  projects: "I have 4 key projects: (1) Determinex — FPGA-based deterministic data stream reordering hardware, submitted for Tamil Nadu Innovation Challenge. (2) Smart Shoe Prototype — patented ESP32-based shoe with air-bladder sole and health sensors. (3) Smart Water Tank Automation — MQTT + Node.js dual-mode control system. (4) Personal AI Assistant — currently building this over 9 months using React and Claude API.",

  determinex: "Determinex is my flagship project — an FPGA-based hardware system that handles missing, duplicate, and out-of-order data streams with deterministic fault-tolerant architecture. It's at TRL 1–3 (prototype stage) and was submitted for the Tamil Nadu Innovation and Quantum Challenge. It's also the name of my startup concept focused on data integrity hardware.",

  smartshoe: "The Smart Shoe Prototype is a patented innovation — an ESP32-based shoe with an air-bladder sole that switches between Sport Mode (curved, air empty) and Casual Mode (flat, air filled) via a mobile app. It includes MPU6050 and MAX30102 sensors, pump control, and battery management.",

  watertank: "The Smart Water Tank Automation uses MQTT protocol with Node.js and Turbotic workflows. It has two modes: live mode connected to real hardware, and simulation mode for demos. It was one of my earlier full-stack hardware-software integration projects.",

  research: "My research interests are in Neuromorphic Computing, Spiking Neural Networks (SNN), Edge AI for medical systems, safety-aware AI systems, and event-driven hardware. My long-term goal is to publish Scopus-indexed research in neuromorphic hardware.",

  goals: "My primary goal is a core VLSI/hardware engineering role. Long-term I want to build neuromorphic hardware systems, publish Scopus-indexed research, and develop safety-critical real-world systems. I also have two startup visions: Determinex (data integrity hardware) and Safety Watch Platform (offline wearable alert system).",

  achievements: "I won IDEATHON 1.0 at PSNA College of Engineering & Technology, organized by the IT Department. My team Determinex competed in the Industry Innovation & Infrastructure domain and won a medal and cash prize.",

  startup: "I have two startup concepts: Determinex — focused on high-speed data integrity and event-driven hardware systems; and Safety Watch Platform — an offline wearable-to-wearable alert system with four products: Hospital Monitoring, Elder Safety, Child Safety, and Couple Safety Watch.",

  contact: "You can reach Madheshwaran at madheshwaran402@gmail.com. His GitHub is github.com/madheshwaran402-blip. He's based in Tamil Nadu, India.",

  learning: "Currently I'm advancing in Verilog and SystemVerilog, learning Java with Data Structures for placements, completing Linux RH104, and deepening FPGA-based design skills.",

  personality: "Madheshwaran is methodical and structured, focused on real-world impact. He prefers low-cost demonstrable solutions, values clarity over hype, and has a strong hardware-first mindset with competition-oriented thinking and system-level problem solving."
}

function getAnswer(input) {
  const text = input.toLowerCase()

  if (text.includes("who") || text.includes("introduce") || text.includes("about you") || text.includes("yourself")) {
    return knowledge.name
  }
  else if (text.includes("education") || text.includes("college") || text.includes("degree") || text.includes("study") || text.includes("student")) {
    return knowledge.education
  }
  else if (text.includes("skill") || text.includes("know") || text.includes("tech") || text.includes("language") || text.includes("tool")) {
    return knowledge.skills
  }
  else if (text.includes("determinex") || text.includes("fpga") || text.includes("data stream") || text.includes("reorder")) {
    return knowledge.determinex
  }
  else if (text.includes("shoe") || text.includes("smart shoe") || text.includes("patent") || text.includes("esp32")) {
    return knowledge.smartshoe
  }
  else if (text.includes("water") || text.includes("tank") || text.includes("mqtt")) {
    return knowledge.watertank
  }
  else if (text.includes("project") || text.includes("built") || text.includes("made") || text.includes("work")) {
    return knowledge.projects
  }
  else if (text.includes("research") || text.includes("neuromorphic") || text.includes("spiking") || text.includes("snn")) {
    return knowledge.research
  }
  else if (text.includes("goal") || text.includes("future") || text.includes("plan") || text.includes("vision") || text.includes("dream")) {
    return knowledge.goals
  }
  else if (text.includes("win") || text.includes("award") || text.includes("achievement") || text.includes("ideathon")) {
    return knowledge.achievements
  }
  else if (text.includes("startup") || text.includes("company") || text.includes("safety watch") || text.includes("business")) {
    return knowledge.startup
  }
  else if (text.includes("contact") || text.includes("email") || text.includes("reach") || text.includes("github")) {
    return knowledge.contact
  }
  else if (text.includes("learning") || text.includes("currently") || text.includes("studying now")) {
    return knowledge.learning
  }
  else if (text.includes("personality") || text.includes("strength") || text.includes("trait") || text.includes("character")) {
    return knowledge.personality
  }
  else {
    return "I can answer questions about Madheshwaran's skills, projects (Determinex, Smart Shoe, Water Tank), research interests, education, achievements, startup vision, or goals. Try asking something specific!"
  }
}

function addMessage(text, sender) {
  const messages = document.getElementById("chat-messages")
  const div = document.createElement("div")
  div.classList.add("message", sender)
  div.textContent = text
  messages.appendChild(div)
  messages.scrollTop = messages.scrollHeight
}

function sendMessage() {
  const input = document.getElementById("user-input")
  const userText = input.value.trim()
  if (userText === "") return
  addMessage(userText, "user")
  input.value = ""
  const answer = getAnswer(userText)
  setTimeout(() => {
    addMessage(answer, "bot")
  }, 500)
}

document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage()
})

// Fade in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
// Call this when page loads
buildSuggestions()