const Message = document.querySelector(".Message");
const Message2 = document.querySelector("#j");
const userIdElement = document.querySelector(".User-show");
const newUserElement = document.querySelector(".user-hide");
const Button1 = document.querySelector(".snd");
const Button2 = document.querySelector(".snd2");
const loadingAnimation = document.getElementById('loading-animation');




Button1.addEventListener("click", function user() {
  const username = document.querySelector("#username1").value;
  const password = document.querySelector("#password1").value;

  const storage = JSON.parse(localStorage.getItem("users"));
  console.log(storage);

  // const existingUser = storage.find((user) => user.username === username);

  // console.log(existingUser);

  if (storage) {
    const fondusrname = storage.find(function (users) {
      return users.username === username;
    });
    const fonduserpassword = storage.find(function (users) {
      return users.userpassword === password;
    });

    if (fondusrname && fonduserpassword) {
      Message.textContent = "התחברות מוצלחת!"; 
        setTimeout(() => {
        window.location.replace("./home.html");
        console.log("5 שניות עברו!");
      }, 3000);
    
    } else {
      Message.textContent = " השם אינו קיים במערכת עובר להתחברות !!!";
      setTimeout(() => {
        userIdElement.classList.remove("User-show");
        userIdElement.classList.add("user-hide");
        newUserElement.classList.remove("user-hide");
        newUserElement.classList.add("User-show");
        console.log("5 שניות עברו!");
      }, 3000);
    }
  } else {
    Message.textContent = " השם אינו קיים במערכת עובר להתחברות!!!";
    setTimeout(() => {
      userIdElement.classList.remove("User-show");
      userIdElement.classList.add("user-hide");
      newUserElement.classList.remove("user-hide");
      newUserElement.classList.add("User-show");
      console.log("5 שניות עברו!");
    }, 3000);
  }
});
// Button2.addEventListener("click", function myUser() {
//   const email = document.querySelector("#email").value;
//   const new_username = document.querySelector("#new_username").value;
//   const new_password = document.querySelector("#new_password").value;

//   const userData = {
//     email: email,
//     username: new_username,
//     userpassword: new_password,
//   };
//   let usersArr = JSON.parse(localStorage.getItem("users"));
//   console.log("1111");


//   if (usersArr) {
//     usersArr = [userData];
//     localStorage.setItem("users", JSON.stringify(usersArr));
//     console.log("gggg");
//   } else {
//     usersArr.push(userData);
//     localStorage.setItem("users", JSON.stringify(usersArr));
//     console.log("2222");

//   }

//   Message2.textContent = "  התחברות מוצלחת!";
//   console.log("4444");

//   Timeout(() => {
//     window.location.replace("./home.html");
//     console.log("5 שניות עברו!");
//   }, 3000);

// });
Button2.addEventListener("click", async function myUser() {
  const email = document.querySelector("#email").value.trim(); // הוספת trim()
  const new_username = document.querySelector("#new_username").value.trim(); // הוספת trim()
  const new_password = document.querySelector("#new_password").value.trim(); // הוספת trim()



  const userData = {
    email,
    username: new_username,
    userpassword: new_password
  };

  try {
    let usersArr;
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      usersArr = JSON.parse(storedUsers);
    } else {
      usersArr = [];
    }
    console.log(usersArr);
    console.log(storedUsers);

    usersArr.push(userData); // הוספת נתוני המשתמש החדש
    await localStorage.setItem("users", JSON.stringify(usersArr)); // אחסון אסינכרוני
    console.log("נתוני המשתמש נשמרו בהצלחה!");

    Message2.textContent = "התחברות מוצלחת!";
    console.log("4444");

    // הפניה מחדש לאחר עיכוב באמצעות setTimeout של JavaScript טהור
    setTimeout(() => {
      window.location.replace("./home.html");
      console.log("5 שניות עברו!");
    }, 3000);
  } catch (error) {
    console.error("שגיאה בשמירת נתוני משתמש:", error);
    // טיפול בשגיאות בצורה נכונה, לדוגמה, הצגת הודעת שגיאה למשתמש
  }
});


