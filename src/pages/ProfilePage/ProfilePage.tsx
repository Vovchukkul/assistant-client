/* eslint-disable jsx-a11y/anchor-is-valid */
import './ProfilePage.scss';
import logo from '../../images/HyperTech.svg';
import { AnotherFooter } from '../../components/AnotherFooter';
import { TopDropdown } from '../../components/TopDropdown';
import { useState } from 'react';
import { Dashboard } from '../../components/Dashboard';
import { Pricelist } from '../../components/Pricelist';
import { ProfileInfo } from '../../components/PersonalInfo';

export const ProfilePage = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const handleItemClick = (index: number | null) => {
    setActiveItem(index);
  };

  return (
    <div className="profile-wrap">
      <div className="profile_top-bar">
        <img src={logo} alt="logo" className='logo' />
        <TopDropdown />
      </div>
      <nav className="profile_nav">
        <ul className="profile_list">
          <li className={`profile_item ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
            <a className="profile_link">Dashboard</a>
          </li>
          <li className={`profile_item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
            <a className="profile_link">Персональні дані</a>
          </li>
          <li className={`profile_item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
            <a className="profile_link">Прайс лист</a>
          </li>
          <li className={`profile_item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
            <a className="profile_link">Робочі локації</a>
          </li>
          <li className={`profile_item ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
            <a className="profile_link">Налаштування</a>
          </li>
        </ul>
      </nav>
      <div className="profile_main_wrap">
        {activeItem === 0 && <Dashboard />}
        {activeItem === 1 && <ProfileInfo />}
        {activeItem === 2 && <Pricelist />}
      </div>
      <div className="profile_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};