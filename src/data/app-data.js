import { faker } from '@faker-js/faker';

export const data = [...Array(20)].map(() => (
  {
    id: faker.datatype.uuid(),
    product: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    imageURL: 'https://api.lorem.space/image/furniture?w=250&h=150&f=png&b=1&l=1', 
  }  
));