import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['InuYasha']);

  /* const handleAdd = () => {
    setCategories([...categories, 'Papu']);
    //setCategories( cate => [...cate, 'Papu']);
  } */

  return (
    <>
      <h1>GIFTEXPERT APP</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};
