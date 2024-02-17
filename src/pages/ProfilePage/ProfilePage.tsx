import './ProfilePage.scss';
import logo from '../../images/HyperTech.svg';
import { AnotherFooter } from '../../components/AnotherFooter';

export const ProfilePage = () => {
  return (
    <div className="profile-wrap">
      <div className="profile_top-bar">
        <img src={logo} alt="logo" className='logo' />
        <div className="profile__contact">
          <div className="profile__tel-icon"></div>
          <div className="profile__number">+380 63 431 23 44</div>
        </div>
      </div>
      <div className="profile_main_wrap">
        <div className="profile_main">
          <div className="welcome">
            <h1 className='welcome_title'>Ласкаво просимо до співпраці з HyperTech</h1>
            <p className="welcome_subtitle">Після реєстрації ви можете отримувати замовлення і гідно заробляти</p>
          </div>
          <div className="img"></div>
        </div>
      </div>
      <div className="profile_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};