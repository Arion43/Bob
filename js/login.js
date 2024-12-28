const loginForm = document.getElementById('loginForm')
const usernameError = document.getElementById('usernameError')
const genderError = document.getElementById('genderError')
const dobError = document.getElementById('dobError')

loginForm.addEventListener('submit', function (event) {
	event.preventDefault() // Отменяем отправку формы

	// Получаем значения полей
	const username = document.getElementById('username').value.trim()
	const gender = document.getElementById('gender').value
	const dob = document.getElementById('dob').value

	let hasError = false

	// Проверяем поля
	if (!username || username.length < 4 || username.length > 10) {
		usernameError.textContent = 'Логин должен быть от 4 до 10 символов.'
		hasError = true
	} else {
		usernameError.textContent = ''
	}

	if (!gender) {
		genderError.textContent = 'Пожалуйста, выберите пол.'
		hasError = true
	} else {
		genderError.textContent = ''
	}

	if (!dob) {
		dobError.textContent = 'Пожалуйста, укажите дату рождения.'
		hasError = true
	} else {
		dobError.textContent = ''
	}

	if (hasError) return

	// Сохраняем данные в localStorage
	localStorage.setItem('username', username)
	localStorage.setItem('gender', gender)
	localStorage.setItem('dob', dob)

	// Перенаправляем на страницу профиля
	window.location.href = './main.html'
})
