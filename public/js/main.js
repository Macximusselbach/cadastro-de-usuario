document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    firstName: e.target.nome.value,
    lastName: e.target.sobrenome.value,
    email: e.target.email.value,
    birthDate: e.target.dataNascimento.value,
    gender: e.target.genero.value,
    address: {
      cep: e.target.cep.value,
      place: e.target.logradouro.value,
      district: e.target.bairro.value,
      city: e.target.cidade.value,
      state: e.target.estado.value,
      number: e.target.numero.value,
    }
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };
  
  fetch("/api/users", options)
    .then(() => {
      window.location.assign("/users");
    });  
});

function preencherEndereco(endereco) {
  document.querySelector('#logradouro').value = endereco.logradouro;
  document.querySelector('#bairro').value = endereco.bairro;
  document.querySelector('#cidade').value = endereco.localidade;
  document.querySelector('#estado').value = endereco.uf;
}

document.querySelector("#cep").addEventListener("blur", (e) => {
  console.log("cep", e.target.value);
  const cep = e.target.value.replace('-', '');

  fetch("http://viacep.com.br/ws/${cep}/json/")
    .then(response => response.json())
    .then(preencherEndereco);
});