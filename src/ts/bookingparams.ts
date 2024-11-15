/**
 * @author Nicolas CARPi <nico-git@deltablot.email>
 * @author Moustapha Camara <mouss@deltablot.email>
 * @copyright 2024 Nicolas CARPi
 * @see https://www.elabftw.net Official website
 * @license AGPL-3.0
 * @package elabftw
 */
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/database.php' || !window.location.search.includes('?mode=edit')) {
    return;
  }

  const minStartTime = document.getElementById('minStartTime') as HTMLSelectElement;
  const maxEndTime = document.getElementById('maxEndTime') as HTMLSelectElement;

  console.log(minStartTime, maxEndTime);
  // Function to update maxEndTime options based on minStartTime's selected value
  function updateMaxEndTimeOptions() {
    const selectedMinTime = minStartTime.value;
    // Disable each maxEndTime option that's inferior to minStartTime
    Array.from(maxEndTime.options).forEach(option => {
      option.disabled = option.value < selectedMinTime;
    });

    // Update the maxEndTime to never be inferior, if min time is selected later
    if (maxEndTime.value < selectedMinTime) {
      maxEndTime.value = selectedMinTime;
      // When the js updates the maxEndTime, user does not trigger the blur event. Send it here so we prevent having min time > to end time in db.
      const event = new Event('blur');
      maxEndTime.dispatchEvent(event);
    }
  }

  minStartTime.addEventListener('change', updateMaxEndTimeOptions);
  updateMaxEndTimeOptions();
});
