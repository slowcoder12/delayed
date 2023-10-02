let selectedSlotTime = '';

function showBookingForm(slotTime) {
  selectedSlotTime = slotTime;
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.style.display = 'block';
}

function bookSlot() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const slot = {name,email,slotTime: selectedSlotTime};

  axios.post('http://localhost:3000/addBooking',slot).then((response) => {
    console.log(response);
    const booking = response.data;
})
.catch(err => {
    console.log(err);
});


  const googleMeetLink = 'https://meet.google.com/dummy-link';

  const confirmName = document.getElementById('confirmName');
  const confirmTime = document.getElementById('confirmTime');
  const googleMeetLinkElement = document.getElementById('googleMeetLink');
 

  confirmName.textContent = booking.name;
  confirmTime.textContent = booking.slotTime;
  googleMeetLinkElement.href = googleMeetLink;
  googleMeetLinkElement.innerHTML = googleMeetLink;


  
  const bookingForm = document.getElementById('bookingForm');
  const confirmation = document.getElementById('confirmation');
  bookingForm.style.display = 'none';
  confirmation.style.display = 'block';

  



  const bookingList = document.getElementById('bookingList');
        const bookingDiv = document.createElement('div');
        bookingDiv.className = 'booking-box';
        bookingDiv.textContent = `Hi ${booking.name}, please join the meeting at ${booking.slotTime}.`;
        bookingList.appendChild(bookingDiv);

        confirmation.style.display = 'none';

      
}
