import './TopDropdown.scss';
import { useState } from "react";

export const TopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top_dropdown">
      <button
        className="top_dropdown_button"
        onClick={handleOpenMenu}
        style={{
          backgroundColor: isOpen ? "rgba(88, 109, 120, 1)" : 'transparent'
        }}
      >
        <div className="top_dropdown_main">
          <div className="top_dropdown-icon" />
          <p className="top_dropdown_text">Кабінет</p>
          <div className="toogle_button" />
        </div>
      </button>

      {isOpen && (
        <ul className="top_dropdown-menu">
          <li className='top_dropdown-menu_item'>
            <a href="#about" className='top_dropdown-menu_link'>Мій профіль</a>
          </li>
          <li className='top_dropdown-menu_item'>
            <a href="#services" className='top_dropdown-menu_link'>Замовлення</a>
          </li>
          <li className='top_dropdown-menu_item'>
            <a href="#projects" className='top_dropdown-menu_link'>Вихід</a>
          </li>
        </ul>
      )}
    </div>
  );
};
