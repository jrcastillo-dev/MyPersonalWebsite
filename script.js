//MyData
const student = {
  name: "Jimmy Castillo",
  program: "BS Computer Science",
  yearLevel: "3rd Year",
  University: "Nueva Vizcaya State University"
};

//Learn More
document.getElementById("greetBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Console section: student info, date & time
const infoBtn = document.getElementById("infoBtn");
const clockBtn = document.getElementById("clockBtn");
const consoleOutput = document.getElementById("consoleOutput");

// Display student info
let infoOpen = false
infoBtn.addEventListener("click", () => {
  if (infoOpen) {
    infoOpen = false;
    consoleOutput.textContent = "closed!";
    return;
  }
  infoOpen = true;
  consoleOutput.textContent =
    `{\n` +
    `  name: ${student.name},\n` +
    `  program: ${student.program},\n` +
    `  yearLevel: ${student.yearLevel},\n` +
    `  school: ${student.University}\n` +
    `}`;
});

// Show current date & time
let clockInterval = null;
clockBtn.addEventListener("click", () => {
  if (clockInterval) {
    clearInterval(clockInterval);
    clockInterval = null;
    consoleOutput.textContent = "closed!";
    return;
  }
  const updateClock = () => {
    const now = new Date();
    consoleOutput.textContent = `local date & time: ${now.toLocaleString()}`;
  };
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
});

// Theme toggle 
const themeToggleBtn = document.getElementById("themeToggle");
function toggleTheme() {
  document.body.classList.toggle("theme-light");
  const mode = document.body.classList.contains("theme-light") ? "light" : "dark";
  consoleOutput.textContent = `theme set to "${mode}"`;
}
themeToggleBtn.addEventListener("click", toggleTheme);

// Footer 
document.getElementById("year").textContent = new Date().getFullYear();