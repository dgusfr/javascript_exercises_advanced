function filterUsersByCountry(users, country) {
  return users.filter((user) => user.address.country === country);
}

const users = [
  { id: 1, name: "John Doe", address: { country: "USA" } },
  { id: 2, name: "Jane Smith", address: { country: "Canada" } },
  { id: 3, name: "Pedro Alvarez", address: { country: "Brazil" } },
];
console.log(filterUsersByCountry(users, "Brazil"));
