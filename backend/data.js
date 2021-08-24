import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Salim",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Maroo",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike green T shirt",
      category: "T Shirts",
      image: "/images/p2.jpg",
      price: 45,
      countInStock: 10,
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Polo T shirt",
      category: "T Shirts",
      image: "/images/p3.jpg",
      price: 60,
      countInStock: 20,
      brand: "Polo",
      rating: 5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Polo bleu T shirt",
      category: "T Shirts",
      image: "/images/p4.jpg",
      price: 40,
      countInStock: 0,
      brand: "Adidas",
      rating: 4,
      numReviews: 12,
      description: "high quality product",
    },
    {
      name: "Adidas T shirt",
      category: "T Shirts",
      image: "/images/p5.jpg",
      price: 35,
      countInStock: 5,
      brand: "Adidas",
      rating: 2.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Nike T shirt",
      category: "T Shirts",
      image: "/images/p6.jpg",
      price: 50,
      countInStock: 12,
      brand: "Nike",
      rating: 4,
      numReviews: 13,
      description: "high quality product",
    },
    {
      name: "Lacost white T shirt",
      category: "T Shirts",
      image: "/images/p7.jpg",
      price: 55,
      countInStock: 7,
      brand: "Lacost",
      rating: 5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacost green T shirt",
      category: "T Shirts",
      image: "/images/p8.jpg",
      price: 55,
      countInStock: 18,
      brand: "Lacost",
      rating: 5,
      numReviews: 16,
      description: "high quality product",
    },
  ],
};

export default data;