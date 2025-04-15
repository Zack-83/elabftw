/**
 * @author Nicolas CARPi <nico-git@deltablot.email>
 * @author Moustapha Camara <mouss@deltablot.email>
 * @copyright 2025 Nicolas CARPi
 * @see https://www.elabftw.net Official website
 * @license AGPL-3.0
 * @package elabftw
 */
import { Api } from './Apiv2.class';
import { EntityType } from './interfaces';

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/database.php') {
    return;
  }
  const ApiC = new Api();
  const params = new URLSearchParams(document.location.search.substring(1));
  const id = params.get('id');

  const container = document.getElementById('book_weekdays_restricted');
  container.addEventListener('change', () => {
    const checkedInputs = Array.from(
      container.querySelectorAll('input[type=checkbox]:checked'),
    ) as HTMLInputElement[];
    const checked = checkedInputs.map(cb => parseInt(cb.value));

    ApiC.patch(`${EntityType.Item}/${id}`, {book_weekdays_restricted: JSON.stringify(checked)});
  });
});
