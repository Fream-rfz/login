
const login = () => {
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    
    alert("Вход выполнен успешно!");
  
  } else {
  
    document.getElementById("error-message").innerText = "Неверное имя пользователя или пароль";
  }
};
