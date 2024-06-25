import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Callapi from '../utils/CallApi';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const fetchSuggestions = () => {
    Callapi('data/suggestions.json').then((results) => {
      setSuggestions(results);
    });
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className='w-full relative'>
      <form className='flex items-center h-10 bg-amazon-yellow' onSubmit={onHandleSubmit}>
        <select
          className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Mobiles</option>
          <option>Home</option>
        </select>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex-grow h-full rounded-l text-black'
          type='text'
        />
        <button className='w-[45px]' type='submit'>
          <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
        </button>
      </form>
      {suggestions && (
        <div className='bg-white text-black w-full z-40 absolute'>
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div key={suggestion.id}>
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
