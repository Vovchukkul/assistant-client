import { Link } from 'react-router-dom';
import './PersonalInfo.scss';

export const ProfileInfo = () => {
  const array_of_specialities = ['Наявність інструментів', 'Наявність майстерні', 'Наявність автомобіля', 'Фізична особа-підприємець', 'Терміновий виїзд', 'Надаю гарантію', 'Наявність договору', 'Без авансу за роботу', 'Працюю з командою', 'Без авансу за матеріали'];
  
  const getIndexOfItem = (item: string) => {
    return array_of_specialities.indexOf(item);
  }
  
  return (
    <div className="profile_info">
      <h1 className="profile_info_title">Персональні дані</h1>
      <div className="profile_info_wrap">
        <div className="profile_info_left">
          <div className="basic_info">
            <div className="basic_info_top">
              <p className="basic_info_title">Загальна інформація</p>
              <div className="icon_edit" />
            </div>
            <div className="basic_info_bottom">
              <ul className="basic_info_list">
                <li className="basic_info_items">Прізвище: - не заповнено -</li>
                <li className="basic_info_items">Ім'я: *Тут писатиметься, що вказано під час реєстрації*</li>
                <li className="basic_info_items">По-батькові: - не заповнено -</li>
                <li className="basic_info_items">Дата народження: - не заповнено -</li>
                <li className="basic_info_items">Місто: - не заповнено -</li>
              </ul>
            </div>
          </div>
          <div className="photo">
            <p className="photo_title">Фотографія</p>
            <div className="photo_bottom">
              <div className="photo_img"></div>
              <p className="photo_subtitle">
                <strong>Увага!</strong> На фото не повинно бути сторонніх об’єктів (темних окулярів, головних уборів, алкоголю, сигарет, оголених частин тіла, татуювання, посторонніх людей та тварин), а сама фотографія повинна бути гарної якості.
                Завантажена фотографія підвищує довіру клієнта до виконавця.
              </p>
            </div>
          </div>
          <div className="additional_contacts">
            <div className="additional_contacts_top">
              <p className="additional_contacts_title">Додаткові контакти</p>
              <div className="icon_edit" />
            </div>
            <ul className="additional_contacts_list">
              <li className="additional_contacts_item"><span className="gray">Телефон:</span> - не заповнено -</li>
              <li className="additional_contacts_item"><span className="gray">Ел. пошта:</span> - не заповнено -</li>
            </ul>
          </div>
          <div className="about_yourself">
            <div className="about_yourself_top">
              <p className="about_yourself_title">Інформація про себе</p>
              <div className="icon_edit" />
            </div>
            <ul className="about_yourself_list">
              <li className="about_yourself_item"><span className="gray">Професія та досвід:</span> - не заповнено -</li>
              <li className="about_yourself_item"><span className="gray">Про мене:</span> - не заповнено -</li>
            </ul>
          </div>
          <div className="speciality_info">
            <div className="speciality_info_top">
              <p className="speciality_info_title">Спеціалізована інформація</p>
              <div className="icon_edit"></div>
            </div>
            <ul className="speciality_info_list">
              {array_of_specialities.map(item => (
                <div className="input_items">
                  <input name={getIndexOfItem(item).toString()} type="checkbox" className="speciality_info_item" />
                  <label htmlFor={getIndexOfItem(item).toString()} className='input_label'>{item}</label>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="profile_info_right">
          <div className="number_for_entry">
            <p className="number_title">Телефон для входу</p>
            <p className="number_subtitle"><span className="gray">Основний номер для входу:</span> *Тут писатиметься, що вказано під час реєстрації*</p>
            <div className="orange_block">
              <div className="icon_warning" />
              <p className="orange_block_text">
                Телефон для входу в особистий кабінет змінюється на сторінці <Link to="/" className='link_to_setupe'>Налаштування</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
