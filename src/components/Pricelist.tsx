import { Pricecard } from './Pricecard';
import './Pricelist.scss';

export const Pricelist = () => {
  return (
    <div className="pricelist">
      <h1 className="pricelist_title">Прайс лист</h1>
      <div className="pricelist_main">
        <Pricecard
          title='Робочі локації'
          first_text='Робочі локації це населені пункти, з яких вам приходять нові замовлення.'
          second_text='Обрати робочі локації можна у в розділі Робочі локації'
          length={32}
        />
        <Pricecard
          title='Робочі локації'
          first_text='Робочі локації це населені пункти, з яких вам приходять нові замовлення.'
          second_text='Обрати робочі локації можна у в розділі Робочі локації'
          length={32}
        />
      </div>
    </div>
  );
};