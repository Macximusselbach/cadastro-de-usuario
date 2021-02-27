fetch("/api/users")
  .then(response => response.json())
  .then(response => {
    const users = response.users;

    const usersList = users.map(user => {
      return `<tr>
        <td>${user.firstName}</td>
        <td>${user.email}</td>
        <td>${user.birthDate}</td>
        <td>${user.gender}</td>
      </tr>`;
    })
    .join("");

    const table = document.createElement("table");
    table.className = "table";
    table.innerHTML = `<thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Idade</th>
        <th>Gênero</th>
      </tr>
    </thead>
    <tbody>${usersList}</tbody>
    `;

    document.querySelector("#users-container")
      .appendChild(table);
  });


  