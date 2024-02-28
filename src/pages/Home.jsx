import React, { useState } from 'react'
import Hero from '../components/Hero';
import BestPlaceToWork from '../components/BestPlaceToWork';
import Categories from '../components/Categories';
import Brands from '../components/Brands';
import { categories } from '../data/categories';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <>
      <Hero />
      <Categories categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      <Brands />
      <BestPlaceToWork />
    </>
  )
}

export default Home