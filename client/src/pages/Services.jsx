import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import "../assets/Services.css";
import { Loader } from './Loader';
import { useProvider } from "../Provider/Service_API_Provider";

const Services = () => {
  const { state } = useProvider();
  const { loading, api_data } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on search term
    const filtered = api_data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [api_data, searchTerm]);

  if (loading) {
    return <Loader />;
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className='search-container'>
        <input
          className='search-bar'
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='container'>
        {filteredData.map(curr => {
          const { id, title, price, description, category, images } = curr;
          return (
            <Card
              key={id}
              title={title}
              price={price}
              description={description}
              category={category.name}
              image={images[0]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
