import { faker } from "@faker-js/faker";

export const fakeSuggestion = [...Array(20)].map((_, i) => ({
  userId: faker.datatype.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
  companyName: faker.company.name(),
  id: i,
}));
