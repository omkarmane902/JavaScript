const container = document.getElementById("container");

async function api() {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    data.forEach(user => {
      const card = document.createElement("div");

      card.className =
        "bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition";

      card.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}"class="w-24 h-24 rounded-full mb-3"/>

        <h2 class="text-lg font-semibold">${user.login}</h2>

        <a href="${user.html_url}" target="_blank" class="text-blue-600 text-sm mt-2 hover:underline">View Profile</a>`;
      container.appendChild(card);
    });

  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

api();
