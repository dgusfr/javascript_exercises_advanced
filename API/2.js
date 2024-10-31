function parseUserData(rawUserData) {
  return {
    id: rawUserData.id,
    name: `${rawUserData.first_name} ${rawUserData.last_name}`,
    email: rawUserData.email,
    address: `${rawUserData.address.street}, ${rawUserData.address.city}, ${rawUserData.address.country}`,
    phone: rawUserData.phone,
  };
}

const rawUserData = {
  id: 1,
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  phone: "555-1234",
};
console.log(parseUserData(rawUserData));
