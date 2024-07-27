import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good === '' ? <>No goods selected</> : <>{good} is selected</>}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setGood('')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(g => (
            <tr
              data-cy="Good"
              className={g === good && 'has-background-success-light'}
            >
              <td>
                {g === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setGood('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="GoodTitle"
                    type="button"
                    className="button is-info"
                    onClick={() => setGood(g)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {g}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
