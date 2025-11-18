import type { Cake } from '../types/cake'

export const cakes: Cake[] = [
  {
    id: 1,
    name: "Classic Chocolate Fudge",
    description: "Rich, decadent, and utterly irresistible.",
    price: "$45.00",
    image: "/src/assets/images/chocolate-fudge.jpg",
    category: "Celebration Cakes"
  },
  {
    id: 2,
    name: "Strawberry Shortcake",
    description: "Light, airy sponge with fresh cream and berries.",
    price: "$50.00",
    image: "/src/assets/images/strawberry-shortcake.jpg",
    category: "Celebration Cakes"
  },
  {
    id: 3,
    name: "New York Cheesecake",
    description: "A timeless classic, smooth and creamy.",
    price: "$40.00",
    image: "/src/assets/images/new-york-cheesecake.jpg",
    category: "Cheesecakes"
  },
  {
    id: 4,
    name: "Red Velvet Cupcake",
    description: "Velvety smooth with a tangy cream cheese frosting.",
    price: "$4.50",
    image: "/src/assets/images/red-velvet-cupcake.jpg",
    category: "Cupcakes"
  },
  {
    id: 5,
    name: "Lemon Drizzle Cake",
    description: "A bright and tangy treat for any occasion.",
    price: "$35.00",
    image: "/src/assets/images/lemon-drizzle-cake.jpg",
    category: "Celebration Cakes"
  },
  {
    id: 6,
    name: "Pumpkin Spice Cake",
    description: "The perfect taste of autumn, warm and spiced.",
    price: "$48.00",
    image: "/src/assets/images/pumpkin-spice-cake.jpg",
    category: "Seasonal Specials"
  },
  {
    id: 7,
    name: "Carrot Cake",
    description: "Moist, spiced, and topped with rich cream cheese.",
    price: "$42.00",
    image: "/src/assets/images/carrot-cake.jpg",
    category: "Celebration Cakes"
  },
  {
    id: 8,
    name: "Assorted Cupcakes",
    description: "A perfect dozen for parties and special events.",
    price: "$55.00",
    image: "/src/assets/images/assorted-cupcakes.jpg",
    category: "Cupcakes"
  }
]

export const categories = ["All", "Celebration Cakes", "Cupcakes", "Cheesecakes", "Seasonal Specials"]