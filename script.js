// ============================================
// MADHESHWARAN'S STRUCTURED KNOWLEDGE BASE
// This is your AI's brain — properly structured
// ============================================

const profile = {
  personal: {
    name: "Madheshwaran Maruthamuthu",
    email: "madheshwaran402@gmail.com",
    location: "Tamil Nadu, India",
    status: "Engineering Student",
    github: "github.com/madheshwaran402-blip",
    bio: "VLSI Design student and hardware-focused innovator building FPGA-based deterministic systems and neuromorphic-inspired architectures."
  },

  education: {
    degree: "B.E. / B.Tech",
    specialization: "VLSI Design and Technology",
    year: "2nd Year",
    location: "Tamil Nadu, India",
    focus: "Currently progressing toward core VLSI specialization"
  },

  skills: {
    programming: ["Python (Brian2, Nengo)", "MATLAB / Simulink", "Java + DSA", "JavaScript", "Node.js"],
    hardware: ["Verilog", "SystemVerilog", "FPGA Design", "Digital Design", "FSM / FIFO / Counters", "Event-driven Architecture"],
    tools: ["MQTT", "Turbotic", "Linux RH104", "Git", "GitHub"]
  },

  projects: [
    {
      name: "Determinex",
      type: "Hardware",
      status: "TRL 1-3 Prototype",
      description: "FPGA-based system that handles missing, duplicate, and out-of-order data streams with deterministic fault-tolerant architecture.",
      tech: ["FPGA", "Verilog", "Deterministic Systems"],
      achievement: "Submitted for Tamil Nadu Innovation and Quantum Challenge"
    },
    {
      name: "Smart Shoe Prototype",
      type: "IoT + Embedded",
      status: "Patented",
      description: "ESP32-based shoe with air-bladder sole — Sport Mode (curved) and Casual Mode (flat) via mobile app. Includes MPU6050, MAX30102 sensors, pump control and battery management.",
      tech: ["ESP32", "IoT", "Embedded Systems", "Mobile App"]
    },
    {
      name: "Smart Water Tank Automation",
      type: "IoT",
      status: "Completed",
      description: "MQTT-based dual-mode control system — live hardware mode and simulation demo mode. Built with Node.js and Turbotic workflows.",
      tech: ["MQTT", "Node.js", "Turbotic"]
    },
    {
      name: "Personal AI Assistant",
      type: "AI + Web",
      status: "In Progress",
      description: "AI chatbot that knows everything about Madheshwaran. Built over a 9-month roadmap using React and Claude API.",
      tech: ["React", "Claude API", "Python", "JavaScript"]
    }
  ],

  research: {
    interests: [
      "Neuromorphic Computing",
      "Spiking Neural Networks (SNN)",
      "Edge AI for Medical Systems",
      "Safety-aware AI Systems",
      "Event-driven Hardware"
    ],
    longTermGoal: "Publish Scopus-indexed research in neuromorphic hardware"
  },

  goals: {
    primary: "Core VLSI / Hardware Engineering role",
    secondary: "Software / Programming role",
    longTerm: [
      "Build neuromorphic hardware systems",
      "Publish Scopus-indexed research",
      "Develop real-world safety-critical systems"
    ]
  },

  achievements: [
    {
      title: "IDEATHON 1.0 Winner",
      organizer: "PSNA College of Engineering and Technology — IT Dept",
      team: "Determinex",
      domain: "Industry Innovation & Infrastructure",
      prize: "Medal + Cash Prize"
    }
  ],

  startups: [
    {
      name: "Determinex",
      focus: "Data integrity and event-driven hardware systems",
      idea: "High-speed reliable data processing with a hardware-first approach"
    },
    {
      name: "Safety Watch Platform",
      focus: "Offline wearable-to-wearable alert system",
      products: [
        "Hospital Monitoring Watch",
        "Elder Safety Watch",
        "Child Safety Watch",
        "Couple Safety Watch"
      ]
    }
  ],

  currentlyLearning: [
    "Verilog + SystemVerilog (Advanced)",
    "Java + Data Structures",
    "Linux RH104",
    "FPGA-based Design"
  ],

  personality: [
    "Hardware-first mindset",
    "Practical and implementation-focused",
    "Competition-oriented thinking",
    "System-level problem solving",
    "Detail-oriented engineering approach"
  ]
}

// ============================================
// GITHUB API — fetch real live data
// ============================================

async function fetchGitHubData() {
  const username = "madheshwaran402-blip"

  try {
    // FETCH 1 — get profile info
    const profileRes = await fetch(`https://api.github.com/users/${username}`)
    const githubData = await profileRes.json()

    // FETCH 2 — get repositories
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    const repos = await reposRes.json()

    // Display profile
    displayGitHubProfile(githubData)

    // Display repos
    displayRepos(repos)

  } catch (error) {
    // Handle error gracefully
    document.getElementById("github-loading").innerHTML =
      `<p style="color:#ff4444">Could not load GitHub data. Check your connection.</p>`
  }
}

function displayGitHubProfile(data) {
  const container = document.getElementById("github-profile")

  container.innerHTML = `
    <div class="gh-profile-card">
      <img src="${data.avatar_url}" alt="GitHub Avatar" class="gh-avatar" />
      <div class="gh-info">
        <h3>${data.name || data.login}</h3>
        <p>${data.bio || "VLSI Design Student & Hardware Innovator"}</p>
        <div class="gh-stats">
          <span>📁 ${data.public_repos} Repos</span>
          <span>👥 ${data.followers} Followers</span>
          <span>📍 ${data.location || "Tamil Nadu, India"}</span>
        </div>
        <a href="${data.html_url}" target="_blank" class="gh-link">View GitHub Profile ↗️</a>
      </div>
    </div>
  `
}

function displayRepos(repos) {
  const container = document.getElementById("repo-grid")

  // Filter out forked repos, show only original ones
  const originalRepos = repos.filter(repo => !repo.fork)

  if (originalRepos.length === 0) {
    container.innerHTML = `<p style="color:#555">No public repositories yet.</p>`
    return
  }

  // Map each repo to a card
  const repoCards = originalRepos.map(repo => `
    <div class="repo-card">
      <div class="repo-header">
        <h4>${repo.name}</h4>
        <span class="repo-language">${repo.language || "—"}</span>
      </div>
      <p>${repo.description || "No description added yet."}</p>
      <div class="repo-footer">
        <span>⭐ ${repo.stargazers_count}</span>
        <span>🍴 ${repo.forks_count}</span>
        <a href="${repo.html_url}" target="_blank">View ↗️</a>
      </div>
    </div>
  `)

  container.innerHTML = repoCards.join("")
}

// ============================================
// ANSWER ENGINE
// Reads from the structured profile object
// ============================================

function getAnswer(input) {
  const text = input.toLowerCase()

  if (text.includes("who") || text.includes("introduce") || text.includes("about") || text.includes("yourself")) {
    return `${profile.personal.name} — ${profile.personal.bio} Based in ${profile.personal.location}.`
  }

  else if (text.includes("education") || text.includes("college") || text.includes("degree") || text.includes("study")) {
    const edu = profile.education
    return `${edu.degree} in ${edu.specialization}, currently in ${edu.year} at ${edu.location}. ${edu.focus}.`
  }

  else if (text.includes("programming") || text.includes("language") || text.includes("code")) {
    return `Programming skills: ${profile.skills.programming.join(", ")}.`
  }

  else if (text.includes("hardware") || text.includes("vlsi") || text.includes("fpga") || text.includes("verilog")) {
    return `Hardware & VLSI skills: ${profile.skills.hardware.join(", ")}.`
  }

  else if (text.includes("skill") || text.includes("tech") || text.includes("know")) {
    const s = profile.skills
    return `Programming: ${s.programming.join(", ")}. Hardware: ${s.hardware.join(", ")}. Tools: ${s.tools.join(", ")}.`
  }

  else if (text.includes("determinex") || text.includes("data stream") || text.includes("reorder")) {
    const p = profile.projects[0]
    return `${p.name} (${p.status}): ${p.description} ${p.achievement}.`
  }

  else if (text.includes("shoe") || text.includes("patent") || text.includes("esp32")) {
    const p = profile.projects[1]
    return `${p.name} (${p.status}): ${p.description}`
  }

  else if (text.includes("water") || text.includes("tank") || text.includes("mqtt")) {
    const p = profile.projects[2]
    return `${p.name} (${p.status}): ${p.description}`
  }

  else if (text.includes("project") || text.includes("built") || text.includes("made")) {
    const names = profile.projects.map(p => `${p.name} (${p.status})`)
    return `Key projects: ${names.join(", ")}. Ask me about any specific one for details!`
  }

  else if (text.includes("research") || text.includes("neuromorphic") || text.includes("snn") || text.includes("spiking")) {
    return `Research interests: ${profile.research.interests.join(", ")}. Long-term goal: ${profile.research.longTermGoal}.`
  }

  else if (text.includes("goal") || text.includes("future") || text.includes("plan") || text.includes("dream")) {
    return `Primary goal: ${profile.goals.primary}. Long-term: ${profile.goals.longTerm.join(", ")}.`
  }

  else if (text.includes("achievement") || text.includes("win") || text.includes("award") || text.includes("ideathon")) {
    const a = profile.achievements[0]
    return `${a.title} — Team ${a.team} at ${a.organizer}. Domain: ${a.domain}. Prize: ${a.prize}.`
  }

  else if (text.includes("startup") || text.includes("company") || text.includes("safety watch")) {
    const names = profile.startups.map(s => `${s.name}: ${s.focus}`)
    return `Startup visions — ${names.join(". ")}.`
  }

  else if (text.includes("learning") || text.includes("currently")) {
    return `Currently learning: ${profile.currentlyLearning.join(", ")}.`
  }

  else if (text.includes("contact") || text.includes("email") || text.includes("reach") || text.includes("github")) {
    return `Email: ${profile.personal.email} | GitHub: ${profile.personal.github} | Location: ${profile.personal.location}`
  }

  else if (text.includes("strength") || text.includes("personality") || text.includes("trait")) {
    return `Key strengths: ${profile.personality.join(", ")}.`
  }

  else {
    return "Try asking about skills, projects (Determinex, Smart Shoe, Water Tank), research, education, goals, achievements, or startups!"
  }
}

// ============================================
// HELPER — Get current time as HH:MM
// ============================================
function getTime() {
  const now = new Date()
  const h = now.getHours().toString().padStart(2, "0")
  const m = now.getMinutes().toString().padStart(2, "0")
  return `${h}:${m}`
}

// ============================================
// ADD MESSAGE to chat
// ============================================
function addMessage(text, sender) {
  const messages = document.getElementById("chat-messages")

  // Create message wrapper
  const div = document.createElement("div")
  div.classList.add("message", sender)

  // Create text span
  const textSpan = document.createElement("span")
  textSpan.classList.add("message-text")
  textSpan.textContent = text

  // Create time span
  const timeSpan = document.createElement("span")
  timeSpan.classList.add("message-time")
  timeSpan.textContent = getTime()

  // Put them together
  div.appendChild(textSpan)
  div.appendChild(timeSpan)

  messages.appendChild(div)
  messages.scrollTop = messages.scrollHeight
}

// ============================================
// TYPING INDICATOR
// ============================================
function showTyping() {
  const messages = document.getElementById("chat-messages")

  const div = document.createElement("div")
  div.classList.add("message", "bot", "typing-indicator")
  div.id = "typing"
  div.innerHTML = `
    <span class="message-text">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </span>
  `
  messages.appendChild(div)
  messages.scrollTop = messages.scrollHeight
}

function hideTyping() {
  const typing = document.getElementById("typing")
  if (typing) typing.remove()
}

// ============================================
// CLEAR CHAT
// ============================================
function clearChat() {
  const messages = document.getElementById("chat-messages")

  // Remove all messages
  messages.innerHTML = ""

  // Add the welcome message back
  const div = document.createElement("div")
  div.classList.add("message", "bot")
  div.innerHTML = `
    <span class="message-text">👋 Chat cleared! Ask me anything about Madheshwaran.</span>
    <span class="message-time">${getTime()}</span>
  `
  messages.appendChild(div)
}

// ============================================
// SEND MESSAGE — updated with typing indicator
// ============================================
function sendMessage() {
  const input = document.getElementById("user-input")
  const userText = input.value.trim()
  if (userText === "") return

  // Show user message
  addMessage(userText, "user")
  input.value = ""

  // Show typing indicator
  showTyping()

  // Hide typing + show answer after delay
  setTimeout(() => {
    hideTyping()
    const answer = getAnswer(userText)
    addMessage(answer, "bot")
  }, 1000)
}

// ============================================
// SUGGESTED QUESTIONS
// ============================================

const suggestions = [
  { label: "🔷 What is Determinex?",          question: "What is Determinex?" },
  { label: "👟 Tell me about your patent",     question: "Tell me about the smart shoe" },
  { label: "🧠 Research interests?",           question: "What are your research interests?" },
  { label: "🎯 What are your goals?",          question: "What are your goals?" },
  { label: "💻 What are your skills?",         question: "What are your skills?" },
  { label: "🏆 Any achievements?",             question: "What are your achievements?" },
  { label: "🚀 What projects have you built?", question: "Tell me about your projects" },
  { label: "📚 What are you learning now?",    question: "What are you currently learning?" },
  { label: "🏢 Startup vision?",              question: "Tell me about your startups" },
  { label: "📬 How to contact you?",           question: "How can I contact you?" }
]

function buildSuggestions() {
  const container = document.getElementById("suggestions")
  const buttonsHTML = suggestions.map(item =>
    `<button class="suggestion-chip" onclick="askSuggestion('${item.question}')">${item.label}</button>`
  )
  container.innerHTML = buttonsHTML.join("")
}

function askSuggestion(question) {
  const input = document.getElementById("user-input")
  input.value = question
  sendMessage()
}

// ============================================
// PAGE LOAD
// ============================================

buildSuggestions()
document.getElementById("init-time").textContent = getTime()
fetchGitHubData()

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))