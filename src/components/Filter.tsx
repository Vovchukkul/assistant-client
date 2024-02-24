import { useState } from 'react';
import './Filter.scss';
import Dropdown from './Dropdown';
import plane from '../images/icons/paper-plane.svg';

export const Filter = () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className='filter'>
      <div className="services">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          droptext="Що потрібно робити"
          legend='Послуги'
        />
      </div>
      <div className="city">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          droptext="Виберіть місто"
          legend='Місто'
        />
      </div>
      <button className="search">
        <img
          src={plane}
          alt="plane"
          className='plane'
        />
        <p className='search__text'>Пошук послуги</p>
      </button>
    </div>
  );
};
