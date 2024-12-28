// Проверка, есть ли данные пользователя в localStorage
if (!localStorage.getItem('username')) {
    window.location.href = 'index.html';
  }