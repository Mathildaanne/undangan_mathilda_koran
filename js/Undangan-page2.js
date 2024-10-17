
//COUNTDOWM
const countdown = () => {
    //waktu yang akan di hitung mundur
    const countDate = new Date ("Dec 25, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    
    //menghitung waktu
    const remainingTime= countDate - now;
    
    //workout the time in days, hours, minutes, sec
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    //update the html with the calculated values
    //check if the time is past 0
    document.querySelector("#day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector("#hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector("#minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector("#second").innerText = textSecond > 0 ? textSecond : 0;
}

//run the countdown every 500ms to display the time.
setInterval(countdown, 500)


// FORM RSVP
function submitRSVP() {
    const form = document.getElementById('rsvpForm');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const status = document.getElementById('status').value;

    console.log(`Name: ${name}, Email: ${email}, Status: ${status}`);

    form.reset();
}

// Output Form Message
function submitMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('message').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Name: ${name}</p>
                           <p>Message: ${message}</p>`;
}
                           

function copyText() {
    const textToCopy = "1234567890";
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied: ' + textToCopy);
    }).catch(err => {
        alert('Error in copying text: ' + err);
    });
}

function putarMusik(){
    const music = document.querySelector('#music');
    const imgmusic = document.querySelector('#imgmusic');

    if(music.paused){
      music.play();
      imgmusic.src = "Assets/Images/image-sound-off";
    } else {
      music.pause();
      imgmusic.src = "Assets/Images/image-sound-on";
    }
  }