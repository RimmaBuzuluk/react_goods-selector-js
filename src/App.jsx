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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? (
          <>No goods selected</>
        ) : (
          <>{selectedGood} is selected</>
        )}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(g => (
            <tr
              data-cy="Good"
              className={g === selectedGood && 'has-background-success-light'}
            >
              <td>
                {g === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="GoodTitle"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood(g)}
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
