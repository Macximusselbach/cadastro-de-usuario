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

  console.log(JSON.stringify(user, null, 2));
});