db.products.insertMany([
  {
    code: 1,
    name: 'Product 1',
    price: 100000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 1.jpg',
    quantity: 10
  },
  {
    code: 2,
    name: 'Product 2',
    price: 200000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 2.jpg',
    quantity: 5
  },
  {
    code: 3,
    name: 'Product 3',
    price: 300000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 3.jpg',
    quantity: 3
  },
  {
    code: 4,
    name: 'Product 4',
    price: 400000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 4.jpg',
    quantity: 15
  },
  {
    code: 5,
    name: 'Product 5',
    price: 500000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 5.jpg',
    quantity: 7
  },
  {
    code: 6,
    name: 'Product 6',
    price: 600000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 6.jpg',
    quantity: 12
  },
  {
    code: 7,
    name: 'Product 7',
    price: 700000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 7.jpg',
    quantity: 8
  },
  {
    code: 8,
    name: 'Product 8',
    price: 800000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 8.jpg',
    quantity: 13
  },
  {
    code: 9,
    name: 'Product 9',
    price: 900000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 9.jpg',
    quantity: 6
  },
  {
    code: 10,
    name: 'Product 10',
    price: 1000000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 10.jpg',
    quantity: 4
  },
  {
    code: 11,
    name: 'Product 11',
    price: 1100000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 11.jpg',
    quantity: 9
  },
  {
    code: 12,
    name: 'Product 12',
    price: 1200000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 12.jpg',
    quantity: 11
  },
  {
    code: 13,
    name: 'Product 13',
    price: 1300000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 13.jpg',
    quantity: 14
  },
  {
    code: 14,
    name: 'Product 14',
    price: 1400000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 14.jpg',
    quantity: 16
  },
  {
    code: 15,
    name: 'Product 15',
    price: 1500000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 15.jpg',
    quantity: 20
  },
  {
    code: 16,
    name: 'Product 16',
    price: 1600000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 16.jpg',
    quantity: 18
  },
  {
    code: 17,
    name: 'Product 17',
    price: 1700000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 17.jpg',
    quantity: 19
  },
  {
    code: 18,
    name: 'Product 18',
    price: 1800000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 18.jpg',
    quantity: 2
  },
  {
    code: 19,
    name: 'Product 19',
    price: 1900000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 19.jpg',
    quantity: 17
  },
  {
    code: 20,
    name: 'Product 20',
    price: 2000000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: 'img/Photo 20.jpg',
    quantity: 10
  }
]);

db.orders.insertOne({
  "user_id" = 1,
  "cart_items" = [
    "1",
    "2",
    "3"
  ]
})
