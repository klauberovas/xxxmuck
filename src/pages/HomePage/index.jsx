import { Products } from '../../components/Products';
import './index.css';

export const HomePage = () => {
  return (
    <main className="main">
      <div className="offer">
        <h2 className="offer__title">Aktuální nabídka</h2>
        <p className="offer__text">
          Nejnovější prémiové produkty od předních českých designerů.
        </p>
        <p className="offer__text">
          Doprava zdarma až k vám domů, na cenu nehleďte.
        </p>
      </div>

      <Products />
    </main>
  );
};
