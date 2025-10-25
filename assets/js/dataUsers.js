async function listUsers() {
  const endpoint = '/data-api/rest/Users';
  const response = await fetch(endpoint);
  const data = await response.json();
  console.table(data.value);
}

async function getUser(id) {
  const endpoint = `/data-api/rest/Users/Id`;
  const response = await fetch(`${endpoint}/${id}`);
  const result = await response.json();
  console.table(result.value);
}

async function updateUser(id, firstName,
  lastName,email,phone,
  street1,street2,city,state,postalCode,country,
  web,notes) {

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    street1: street1,
    street2: street2,
    city: city,
    state: state,
    postalCode: postalCode,
    country: country,
    web: web,
    notes: notes
  };

  const endpoint = '/data-api/rest/Users/Id';
  const response = await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.table(result.value);
}
