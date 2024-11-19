/**
 * @author Nicolas CARPi <nico-git@deltablot.email>
 * @author Moustapha Camara <mouss@deltablot.email>
 * @copyright 2024 Nicolas CARPi
 * @see https://www.elabftw.net Official website
 * @license AGPL-3.0
 * @package elabftw
 */
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== '/database.php') {
    return;
  }

  const minStartTime = document.getElementById('minStartTime') as HTMLSelectElement;
  const maxEndTime = document.getElementById('maxEndTime') as HTMLSelectElement;

  // Function to update maxEndTime options based on minStartTime's selected value
  function updateMaxEndTimeOptions() {
    const selectedMinTime = minStartTime.value;

    // update maxEndTime to minTime + 1 hour, as item can't be booked from e.g 7am to 7am
    const minTimeDate = new Date(`1970-01-01T${selectedMinTime}Z`);
    minTimeDate.setUTCHours(minTimeDate.getUTCHours() + 1);
    const nextHour = minTimeDate.toISOString().substring(11, 19); // Extract time in HH:mm:ss format

    // Disable each maxEndTime option that's inferior to minStartTime
    Array.from(maxEndTime.options).forEach(option => {
      option.disabled = option.value < nextHour;
    });

    // Update the maxEndTime to never be inferior, if min time is selected later
    if (maxEndTime.value < nextHour) {
      maxEndTime.value = nextHour;
      // When the js updates the maxEndTime, user does not trigger the blur event. Send it here so we prevent having min time > to end time in db.
      const event = new Event('blur');
      maxEndTime.dispatchEvent(event);
    }
  }

  minStartTime.addEventListener('change', updateMaxEndTimeOptions);
});
