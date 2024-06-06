const modal = document.getElementById('emailModal');
const closeButton = document.querySelector('.close');
const emailForm = document.getElementById('emailForm');

function openEmailModal() {
  modal.style.display = 'block';
}

closeButton.onclick = function() {
  modal.style.display = 'none';
}

emailForm.onsubmit = function(event) {
  event.preventDefault(); // מונע רענון דף

  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // שמירה ב-Local Storage
  localStorage.setItem('email', email);
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // קוד לטיפול בנתונים (שליחה לדואר אלקטרוני, אחסון וכו')

  modal.style.display = 'none'; // סגירת חלון המודלי
  alert('הנתונים נשמרו בהצלחה!'); // הודעה למשתמש
}
