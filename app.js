// DATA
let medications = [];

// UI CONTROLS

// Show/hide screens
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(screenId).style.display = 'block';
}

// Navigation
document.getElementById('go-to-signup-btn').addEventListener('click', () => showScreen('signup-screen'));
document.getElementById('go-to-login-btn').addEventListener('click', () => showScreen('login-screen'));
document.getElementById('cancel-add-med-btn').addEventListener('click', () => showScreen('main-screen'));

// Add medication button
document.getElementById('add-med-btn').addEventListener('click', () => showScreen('add-med-screen'));

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
  console.log('Logout clicked');
  showScreen('login-screen');
});

// SOS BUTTON (with vibration + color change)

document.getElementById('sos-btn').addEventListener('click', function() {
  // vibration
  if (navigator.vibrate) {
    navigator.vibrate(500);
  }
  
  // color change
  this.style.backgroundColor = '#b91c1c';
  setTimeout(() => {
    this.style.backgroundColor = '#dc2626';
  }, 500);

  console.log('SOS button pressed');
  alert('SOS alert sent to your caregivers.');
});

// LOGIN / SIGNUP

// Login
document.getElementById('login-btn').addEventListener('click', function() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  console.log('Login with:', email, password);
  //Replace with Firebase Auth
  showScreen('main-screen');
});

// Signup
document.getElementById('signup-btn').addEventListener('click', function() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const name = document.getElementById('signup-name').value;
  console.log('Signup with:', email, password, name);
  //Replace with Firebase Auth
  showScreen('main-screen');
});

// SAVE MEDICATION (with loading spinner + success screen)
document.getElementById('save-med-btn').addEventListener('click', function() {
  const name = document.getElementById('med-name').value;
  const time = document.getElementById('med-time').value;
  const dose = document.getElementById('med-dose').value;

  //loading spinner
  document.getElementById('loading-spinner').style.display = 'block';
  document.getElementById('save-med-btn').disabled = true;

  //add to list
  medications.push({ name, time, dose });
  updateMedicationList();

  //saving demo (1 sec)
  setTimeout(function() {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('save-med-btn').disabled = false;
    showScreen('success-screen'); // goes to success screen
  }, 1000);
});

// MEDICATION LIST
function updateMedicationList() {
  const list = document.getElementById('med-list');
  list.innerHTML = ''; // emptying

  if (medications.length === 0) {
    list.innerHTML = '<li class="empty-msg">No medications added yet.</li>';
    return;
  }

  medications.forEach(function(med) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${med.name}</strong> ${med.dose} at ${med.time}`;
    list.appendChild(li);
  });
}

// BACK TO MAIN
document.getElementById('back-to-main-btn').addEventListener('click', function() {
  showScreen('main-screen');
});

//FIREBASE PLACEHOLDERS


function loginUser(email, password) {
  console.log('Firebase login placeholder');
}

function signupUser(email, password, name) {
  console.log('Firebase signup placeholder');
}

function saveMedicationToDB(medData) {
  console.log('Firebase save placeholder');
}

function loadMedicationsFromDB() {
  console.log('Firebase load placeholder');
}

function sendSOSAlert(location) {
  console.log('SOS send placeholder');
}
