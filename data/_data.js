import { faker } from "@faker-js/faker";

const languages = ["English", "Turkish", "French"];

function createRandomApplication() {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.words(3),
    price: faker.finance.amount(100, 4000, 2),
    university: faker.company.name(),
    country: faker.location.country(),
    duration: Math.floor(Math.random() * 8 + 1) + " years",
    applicationDeadline: faker.date.future(0.1).toLocaleDateString(),
    language: languages[Math.floor(Math.random() * languages.length)],
  };
}

export const products = Array.from({ length: 50 }, createRandomApplication);

const countries = products.reduce((acc, product) => {
  if (!acc.includes(product.country)) {
    acc.push(product.country);
  }
  return acc;
}, []);

const prices = products.reduce((acc, product) => {
  if (!acc.includes(product.price)) {
    acc.push(product.price);
  }
  return acc.sort();
}, []);

export const countryFilter = {
  defaultValue: [],
  options: countries.map((country) => ({
    label: country,
    value: country,
  })),
};

export const languageFilter = {
  defaultValue: [],
  options: languages.map((language) => ({
    label: language,
    value: language,
  })),
};

const universities = products.reduce((acc, product) => {
  if (!acc.includes(product.university) && acc.length < 20) {
    acc.push(product.university);
  }
  return acc;
}, []);

export const universityFilter = {
  defaultValue: [],
  options: universities.map((university) => ({
    label: university,
    value: university,
  })),
};

const durations = products.reduce((acc, product) => {
  if (!acc.includes(product.duration)) {
    acc.push(product.duration);
  }
  return acc.sort();
}, []);

export const durationFilter = {
  defaultValue: [],
  options: durations.map((duration) => ({
    label: duration,
    value: duration,
  })),
};
export const priceFilter = {
  formatOptions: {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  },
  defaultValue: [100, 4000],
  min: 100,
  max: 4000,
};
// export const filterTags = ["Mens", "40mm", "$0-$200", "Black"];
// export const blueFilters = {
//   defaultValue: [],
//   options: [
//     {
//       label: "Casio",
//       value: "casio",
//       count: 18,
//     },
//     {
//       label: "Fossil",
//       value: "fossil",
//       count: 6,
//     },
//     {
//       label: "Tommy Hilfiger",
//       value: "tommy-hilfiger",
//       count: 9,
//     },
//     {
//       label: "Puma",
//       value: "puma",
//       count: 3,
//     },
//     {
//       label: "Reebok",
//       value: "reebok",
//       count: 2,
//     },
//     {
//       label: "Nike",
//       value: "nike",
//       count: 1,
//     },
//   ],
// };
