const container = document.getElementById("container");

async function api() {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    data.forEach(user => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

      col.innerHTML = `
        <div class="card text-center h-100 shadow-sm">
          <img 
            src="${user.avatar_url}" 
            class="card-img-top p-3 rounded-circle"
            style="height:150px; object-fit:contain;"
            alt="${user.login}"
          />

          <div class="card-body">
            <h5 class="card-title">${user.login}</h5>
            <a 
              href="${user.html_url}" 
              target="_blank" 
              class="btn btn-primary btn-sm"
            >
              View Profile
            </a>
          </div>
        </div>
      `;

      container.appendChild(col);
    });

  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

api();
