
import { Dish, FAQ } from './types';

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: '1',
    name: 'Old Delhi Butter Chicken',
    category: 'Main',
    description: 'A classic preparation involving tandoor-grilled chicken simmered in a velvet-smooth tomato and cashew nut gravy, finished with sun-dried fenugreek.',
    isVegetarian: false,
    flavorProfile: 'Creamy, Mild, Tangy',
    ingredients: ['Chicken Thighs', 'Tomato Puree', 'Cashew Paste', 'Kasuri Methi'],
    price: '$22',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    name: 'Awadhi Lamb Rogan Josh',
    category: 'Main',
    description: 'Slow-cooked lamb shoulder in a robust gravy infused with Ratanjot (alkanet root) and Kashmiri chilies.',
    isVegetarian: false,
    flavorProfile: 'Rich, Aromatic, Spicy',
    ingredients: ['Lamb Shoulder', 'Kashmiri Chili', 'Saffron', 'Yogurt'],
    price: '$26',
    image: 'https://images.unsplash.com/photo-1545243194-3b23c462dcd0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    name: 'Paneer Lababdar',
    category: 'Main',
    description: 'Cubes of fresh cottage cheese cooked in a chunky onion-tomato masala with hints of ginger and coriander.',
    isVegetarian: true,
    flavorProfile: 'Spiced, Chunky, Savory',
    ingredients: ['Paneer', 'Bell Peppers', 'Onion Masala', 'Fresh Cream'],
    price: '$19',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    name: 'Zaffrani Malai Soya Chaap',
    category: 'Starter',
    description: 'Soya protein marinated in a saffron-infused cream and cardamom mixture, grilled to perfection in the tandoor.',
    isVegetarian: true,
    flavorProfile: 'Aromatic, Creamy, Delicate',
    ingredients: ['Soya Chaap', 'Saffron', 'Green Cardamom', 'Heavy Cream'],
    price: '$16',
    image: 'https://images.unsplash.com/photo-1596797038530-2c396b57c41b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    name: 'Kolkata Dum Biryani',
    category: 'Rice',
    description: 'Fragrant Basmati rice and tender meat layered with spices, saffron, and traditional Kolkata-style potato, slow-cooked in a sealed vessel.',
    isVegetarian: false,
    flavorProfile: 'Fragrant, Complex, Subtle',
    ingredients: ['Long Grain Basmati Rice', 'Mutton', 'Saffron', 'Potato'],
    price: '$24',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '6',
    name: 'Tandoori Garlic Naan',
    category: 'Bread',
    description: 'Leavened clay-oven bread topped with minced garlic and fresh cilantro, brushed with clarified butter.',
    isVegetarian: true,
    flavorProfile: 'Buttery, Garlicy, Soft',
    ingredients: ['Refined Flour', 'Fresh Garlic', 'Cilantro', 'Ghee'],
    price: '$5',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb04791?auto=format&fit=crop&q=80&w=600'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Do you offer vegan-friendly options?",
    answer: "Yes, we have a curated selection of vegan dishes, including our signature Baingan Bharta and Dal Tadka. Please inform our staff about your dietary preferences."
  },
  {
    question: "How do you manage spice levels for children?",
    answer: "Most of our dishes can be customized. For children, we recommend our milder options like Malai Tikka or Butter Chicken, which focus on creamy textures rather than heat."
  },
  {
    question: "Are your ingredients sourced locally?",
    answer: "We source our fresh produce from local organic farms daily, while our authentic spices are imported directly from specialized spice markets in India to maintain flavor consistency."
  },
  {
    question: "Do I need to make a reservation for large groups?",
    answer: "We recommend booking at least 48 hours in advance for groups larger than 6 to ensure we can provide the optimal dining experience and seating arrangement."
  },
  {
    question: "Is your meat Halal certified?",
    answer: "Yes, all our meat suppliers are Halal certified. We maintain strict standards to ensure the integrity of our ingredients."
  }
];

export const MENU_FAQS = {
  intro: "This Menu FAQ provides detailed insights into our culinary offerings, dietary accommodations, and preparation standards to ensure an informed dining experience at House of Curry.",
  sections: [
    {
      title: "Menu & Food-Related FAQs",
      items: [
        {
          question: "What are the signature dishes at House of Curry?",
          answer: "Our most acclaimed dishes include the Old Delhi Butter Chicken, Awadhi Lamb Rogan Josh, and Kolkata Dum Biryani. These are prepared using proprietary family recipes and traditional techniques."
        },
        {
          question: "How do you categorize your menu items?",
          answer: "Our menu is structured into Starters (Tandoor & Fritters), Main Courses (Gravies & Semi-dry), Breads (Naan & Paratha), Rice (Biryani & Pulao), and Desserts (Traditional Sweets)."
        },
        {
          question: "Are the portions suitable for sharing?",
          answer: "Our main course dishes are served in family-style portions, typically suitable for 1-2 individuals. We recommend ordering a variety of dishes for group dining."
        },
        {
          question: "Do you use authentic Indian spices?",
          answer: "Yes, all our base spices are sourced directly from established spice markets in India and are ground in-house to preserve their essential oils and potency."
        },
        {
          question: "What is the flavor profile of the 'Awadhi' style dishes?",
          answer: "Awadhi cuisine is known for its subtle, aromatic flavors achieved through slow-cooking (Dum) and the use of ingredients like saffron, cardamom, and mace."
        },
        {
          question: "Are your tandoori items prepared in traditional ovens?",
          answer: "All our tandoori breads and meats are cooked in high-heat clay tandoors using charcoal to provide the signature smoky flavor characteristic of authentic Indian barbecue."
        },
        {
          question: "Which main course is recommended for a first-time guest?",
          answer: "The Old Delhi Butter Chicken is our most accessible and popular dish, featuring a mild, creamy tomato-based gravy that appeals to all palates."
        },
        {
          question: "Do you serve seafood options?",
          answer: "Yes, we offer seasonal seafood specialties including Goan Fish Curry and Tandoori Prawns, subject to the availability of the freshest catch."
        },
        {
          question: "Are there gluten-free bread options?",
          answer: "While traditional Naan contains gluten, we offer Tandoori Roti made with whole wheat flour and gluten-free alternatives like plain Basmati rice."
        },
        {
          question: "How long does it take to prepare a signature Biryani?",
          answer: "Our Biryanis are slow-cooked in sealed vessels. We maintain a continuous supply, but specific large orders may require 20-30 minutes for fresh 'Dum' finishing."
        }
      ]
    },
    {
      title: "Dietary Preference FAQs",
      items: [
        {
          question: "Do you have a separate vegetarian section?",
          answer: "Yes, a significant portion of our menu is dedicated to vegetarian cuisine, including various Paneer, Lentil (Dal), and vegetable-based dishes."
        },
        {
          question: "Which menu items are explicitly vegan?",
          answer: "Dishes such as our Chana Masala, Baingan Bharta, and Dal Tadka (prepared with oil instead of ghee upon request) are vegan-friendly."
        },
        {
          question: "Can you accommodate Jain dietary requirements?",
          answer: "We offer several dishes prepared without onion, garlic, or root vegetables. Please consult our staff for the current Jain-compatible selections."
        },
        {
          question: "How do you manage food allergies?",
          answer: "We maintain strict cross-contamination protocols. Please inform your server of any allergies so the kitchen can take necessary precautions during preparation."
        }
      ]
    },
    {
      title: "Customization & Preparation FAQs",
      items: [
        {
          question: "Can the spice level be adjusted for any dish?",
          answer: "Most our gravies can be adjusted to Mild, Medium, or Hot. However, certain traditional recipes have a fixed spice base to maintain authenticity."
        },
        {
          question: "Do you accommodate special dietary requests?",
          answer: "Within the limits of our preparation methods, we strive to accommodate reasonable modifications to ingredients or cooking styles."
        },
        {
          question: "Is all food prepared fresh to order?",
          answer: "All our appetizers and breads are prepared fresh to order. Our mother gravies are simmered daily in small batches to ensure optimal flavor development."
        }
      ]
    },
    {
      title: "Ordering & Menu Usage FAQs",
      items: [
        {
          question: "Is the menu different for dine-in and takeaway?",
          answer: "The core menu remains the same, though certain delicate tandoori items are recommended primarily for dine-in to maintain texture."
        },
        {
          question: "Do you offer seasonal menu updates?",
          answer: "We introduce seasonal specials four times a year to highlight regional ingredients available during specific months."
        },
        {
          question: "How often is the standard menu updated?",
          answer: "Our standard menu is reviewed annually to incorporate guest feedback while retaining our most popular signature staples."
        }
      ]
    }
  ]
};
