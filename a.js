fetch("http://localhost:3000/users")
// We get the API response and receive data in JSON format
  .then((response) => response.json())
  .then((data) => console.log(data.a))
  .catch ((error) => console.error(error))
