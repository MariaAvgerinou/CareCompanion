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
  // Placeholder — will be replaced with Firebase logout
  console.log('Logout clicked');
  showScreen('login-screen');
});

// SOS button
document.getElementById('sos-btn').addEventListener('click', function() {
  // Placeholder — will be replaced with actual SOS logic (GPS + Twilio)
  console.log(' SOS button pressed');
  alert('SOS alert sent to your caregivers.');
});

// Login
document.getElementById('login-btn').addEventListener('click', function() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  console.log('Login with:', email, password);
  // PLACEHOLDER: Replace with Firebase Auth
  // For demo, just go to main screen
  showScreen('main-screen');
});

// Signup
document.getElementById('signup-btn').addEventListener('click', function() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const name = document.getElementById('signup-name').value;
  console.log('Signup with:', email, password, name);
  // PLACEHOLDER: Replace with Firebase Auth
  showScreen('main-screen');
});

// Save medication
document.getElementById('save-med-btn').addEventListener('click', function() {
  const name = document.getElementById('med-name').value;
  const time = document.getElementById('med-time').value;
  const dose = document.getElementById('med-dose').value;

  // spinner
  document.getElementById('loading-spinner').style.display = 'block';
  document.getElementById('save-med-btn').disabled = true;

  // save after 1 sec
  setTimeout(function() {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('save-med-btn').disabled = false;
    alert('Medication saved (demo)');
    showScreen('main-screen');
  }, 1000);
});
  console.log('Save medication:', { name, time, dose });

  //Replace with Firebase Firestore save
  alert('Medication saved (demo)');
  showScreen('main-screen');
});

// =============================================
// FIREBASE PLACEHOLDERS (fill here)
// =============================================

function loginUser(email, password) {
  // Firebase Auth login will go here
  console.log('Firebase login placeholder');
}

function signupUser(email, password, name) {
  // Firebase Auth signup will go here
  console.log('Firebase signup placeholder');
}

function saveMedicationToDB(medData) {
  // Firebase Firestore save will go here
  console.log('Firebase save placeholder');
}

function loadMedicationsFromDB() {
  //Firebase Firestore load will go here
  console.log('Firebase load placeholder');
}

function sendSOSAlert(location) {
  //backend API call will go here
  console.log('SOS send placeholder');
}
