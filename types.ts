
export interface Dish {
  id: string;
  name: string;
  category: 'Starter' | 'Main' | 'Bread' | 'Rice' | 'Dessert';
  description: string;
  isVegetarian: boolean;
  flavorProfile: string;
  ingredients: string[];
  price: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BrandSection {
  title: string;
  content: string;
  id: string;
}
