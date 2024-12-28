const username = localStorage.getItem('username')
const gender = localStorage.getItem('gender')
const dob = localStorage.getItem('dob')
const testScore = localStorage.getItem('testScore')
const logOut = document.getElementById('logoutButton')

document.getElementById('profileUsername').textContent = username
	? username
	: 'Не задано'
document.getElementById('profileGender').textContent = gender
	? gender === 'male'
		? 'Мужской'
		: 'Женский'
	: 'Не задано'
document.getElementById('profileDob').textContent = dob ? dob : 'Не задано'
document.getElementById('profileTestScore').textContent =
	testScore !== null && testScore !== ''
		? `${testScore} баллов`
		: 'Тест не пройден'

logOut.addEventListener('click', function () {
	localStorage.clear()
	window.location.href = './index.html'
})

// Проверка, есть ли данные пользователя в localStorage
if (!localStorage.getItem('username')) {
    window.location.href = 'index.html';
  }