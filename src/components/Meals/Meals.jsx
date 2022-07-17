import PromoText from './PromoText';
import MealList from './MealList';
import Search from '../Search/Search';

import { useState } from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Roll "Naomi"',
    description: 'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Spice in salmon',
    description: 'Рис, лосось, соус спайс',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Sushi with eel',
    description: 'Угорь копченый, соус унаги, кунжут',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Salad "Poke with salmon"',
    description: 'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
    price: 7.99,
  },
  {
    id: 'm5',
    name: 'Salmon Roll',
    description: 'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
    price: 17.99,
  },
];

export default function Meals() {
  const [sortedCatalog, setSortedCatalog] = useState(DUMMY_MEALS);

  const handleSearch = (str) => {
    setSortedCatalog(
      DUMMY_MEALS.filter((item) => item.name.toLowerCase().includes(str.toLowerCase())),
    );
  };

  return (
    <>
      <PromoText />
      <Search cb={handleSearch} />
      <MealList DUMMY_MEALS={sortedCatalog} />
    </>
  );
}
