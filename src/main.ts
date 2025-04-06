// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
// import {runDev} from "./EX_TS";
// import {runPromises } from "./promises_EX";
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// // runDev();
//  runPromises();
// // // runDev();
// //  runPromises();
// main.ts

const wordInput = document.getElementById("wordInput") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn")!;
const randomBtn = document.getElementById("randomBtn")!;
const clearBtn = document.getElementById("clearBtn")!;
const resultsDiv = document.getElementById("results")!;

searchBtn.addEventListener("click", () => {
  const keyword = wordInput.value.trim();
  if (!keyword) {
    showMessage("Please enter a keyword to search.");
    return;
  }
  searchUsersByKeyword(keyword);
});

randomBtn.addEventListener("click", () => {
  fetchRandomNumber();
});

clearBtn.addEventListener("click", () => {
  clearAll();
});

function showMessage(msg: string) {
  resultsDiv.innerHTML = `<p>${msg}</p>`;
}

function clearAll() {
  wordInput.value = "";
  resultsDiv.innerHTML = "";
}

async function searchUsersByKeyword(keyword: string) {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const users = data.data;

    const matched = users.filter((user: any) =>
      JSON.stringify(user).toLowerCase().includes(keyword.toLowerCase())
    );

    if (matched.length === 0) {
      showMessage("No users found with that keyword.");
    } else {
      resultsDiv.innerHTML = matched.map((user: any) =>
        `<div><strong>${user.first_name} ${user.last_name}</strong><br/>${user.email}</div>`
      ).join("<hr>");
    }
  } catch (error) {
    showMessage("An error occurred while fetching users.");
  }
}

async function fetchRandomNumber() {
  try {
    const response = await fetch("https://random-data-api.com/api/number/random_number");
    const data = await response.json();
    const randomId = data.digit || data.non_zero_number || data.number;

    showMessage(`Searching for user with ID: ${randomId}`);
    fetchUserById(randomId);
  } catch (error) {
    showMessage("Failed to fetch random number.");
  }
}

async function fetchUserById(id: number) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    if (!response.ok) throw new Error();

    const data = await response.json();
    const user = data.data;

    resultsDiv.innerHTML = `
      <div>
        <strong>${user.first_name} ${user.last_name}</strong><br/>
        Email: ${user.email}<br/>
        <img src="${user.avatar}" alt="avatar"/>
      </div>`;
  } catch {
    showMessage(`User with ID ${id} not found.`);
  }
}
