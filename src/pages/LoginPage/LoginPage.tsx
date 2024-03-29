import './LoginPage.scss';
import logo from '../../images/HyperTech.svg';
import { About } from '../../components/About';
import { AnotherFooter } from '../../components/AnotherFooter';
import { Link } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import ukraine_flag from '../../images/icons/ukraine-flag.svg';

export const LoginPage = () => {
  const [countryCode, setCountryCode] = useState('+380'); // Default country code for Ukraine
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="login-wrap">
      <div className="login_top-bar">
        <img src={logo} alt="logo" className='logo' />
        <div className="login__contact">
          <div className="login__tel-icon"></div>
          <div className="login__number">+380 63 431 23 44</div>
        </div>
      </div>
      <div className="login_main_wrap">
        <div className="login_main">
          <div className="welcome">
            <h1 className='welcome_title'>З поверненням до співпраці з HyperTech</h1>
            <p className="welcome_subtitle">Ви можете отримувати замовлення і гідно заробляти</p>
            <div className="welcome_list">
              <About
                number={1} 
                maintext='Наші виконавці заробляють від 20 000 грн. на місяць'
                subtext='У середньому майстер заробляє ~ 34700 ₴'
              />
              <About
                number={2} 
                maintext='Гнучкий графік роботи та віддалена робота'
                subtext='Баланс між роботою та особистим життям'
              />
              <About
                number={3} 
                maintext='Клієнт отримує якісні послуги та надійну підтримку нашого сервісу.'
                subtext='До нас повертаються 36% для замовлення'
              />
            </div>
          </div>
          <div className="login_form-wrap">
            <form action="http://localhost:3000/" className='login_form'>
              <p className="form_title">
                Вхід виконавця
              </p>
              <div className="inputs">
                <fieldset className='fieldset'>
                  <legend className='legend'>Телефон</legend>
                  <div className="select_wrap">
                    <div className='select'>
                      <div className='option'>
                        <img src={ukraine_flag} alt="ukraine" />
                        +380
                      </div>
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className='tel_input'
                    />
                  </div>
                </fieldset>
                <input
                  className="input_password input"
                  type='password'
                  name='password'
                  placeholder='Пароль'
                />
              </div>
              <div className="button_wrap">
                <button type="submit" className="form_button">
                  Увійти
                </button>
              </div>
              <div className="form_bottom">
                <p className="forget">
                  Забули пароль?
                </p>
                <p className="need_to_register">
                  У вас ще немає акаунта? <Link to="/registration" className='register_link'>Зареєструватися</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};