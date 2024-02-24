import './RegistrationPage.scss';
import logo from '../../images/HyperTech.svg';
import { About } from '../../components/About';
import { Link } from 'react-router-dom';
import { AnotherFooter } from '../../components/AnotherFooter';
import { SetStateAction, useState } from 'react';
import ukraine_flag from '../../images/icons/ukraine-flag.svg';

export const RegisterPage = () => {
  const [countryCode, setCountryCode] = useState('+380'); // Default country code for Ukraine
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="register-wrap">
      <div className="register_top-bar">
        <img src={logo} alt="logo" className='logo' />
        <div className="register__contact">
          <div className="register__tel-icon"></div>
          <a href='tel: 380634312344' className="register__number">+380 63 431 23 44</a>
        </div>
      </div>
      <div className="register_main_wrap">
        <div className="register_main">
          <div className="welcome">
            <h1 className='welcome_title'>Ласкаво просимо до співпраці з HyperTech</h1>
            <p className="welcome_subtitle">Після реєстрації ви можете отримувати замовлення і гідно заробляти</p>
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
          <div className="register_form-wrap">
            <form action="http://localhost:3000/" className='register_form'>
              <p className="form_title">
                Реєстрація виконавця
              </p>
              <div className="inputs">
                <input 
                  className="input_name input"
                  name='name'
                  placeholder="Ім'я"
                  type='text'
                />
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
                <input
                  className="input_repeat_password input"
                  type='password'
                  name='repeat_password'
                  placeholder='Повторіть пароль'
                />
              </div>
              <p className="form_subtitle">
                Реєструючись, ви приймаєте <span className='conditions'>Умови
                користувацької угоди та Політику
                конфіденційності</span>
              </p>
              <div className="button_wrap">
                <Link to="/profile">
                  <button type="submit" className="form_button">
                    Продовжити
                  </button>
                </Link>
              </div>
              <div className="form_bottom">
                Уже є акаунт? <Link to="/login" className='form_bottom-link'>Увійти</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="register_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};