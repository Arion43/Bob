document.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('testForm')
		.addEventListener('submit', function (event) {
			event.preventDefault()

			// Правильные ответы
			const correctAnswers = {
				question1: 'Гэри',
				question2: 'Мистер Крабс',
				question3: 'Бикини Боттом',
				question4: 'Патрик',
				question5: '2',
				question6: '5',
			}

			let score = 0

			// Обработка вопросов
			const questions = document.querySelectorAll('.question')
			questions.forEach((question, index) => {
				const input =
					question.querySelector('input:checked') ||
					question.querySelector('input[type="text"], input[type="number"]')
				const feedback = question.querySelector('.feedback')
				const questionKey = `question${index + 1}`

				if (input) {
					if (
						input.value.trim().toLowerCase() ===
						correctAnswers[questionKey].toLowerCase()
					) {
						score++
						feedback.textContent = 'Ответ правильный!'
						feedback.style.color = 'green'
					} else {
						feedback.textContent = `Ответ неправильный, правильный ответ: ${correctAnswers[questionKey]}`
						feedback.style.color = 'red'
					}
				} else {
					feedback.textContent = 'Вы не ответили на этот вопрос.'
					feedback.style.color = 'orange'
				}
			})

			// Сохранение результата в localStorage
			localStorage.setItem('testScore', score)

			// Вывод результата
			const resultDiv = document.getElementById('result')
			if (resultDiv) {
				resultDiv.textContent = `Вы набрали ${score} из ${
					Object.keys(correctAnswers).length
				} баллов.`

				// Добавление кнопки "Пройти заново"
				const retryButton = document.createElement('button')
				retryButton.textContent = 'Пройти тест заново'
				retryButton.addEventListener('click', function () {
					document.getElementById('testForm').reset()
					document
						.querySelectorAll('.feedback')
						.forEach(feedback => (feedback.textContent = ''))
					resultDiv.textContent = ''
				})
				resultDiv.appendChild(retryButton)
			}
		})
})

// Проверка, есть ли данные пользователя в localStorage
if (!localStorage.getItem('username')) {
    window.location.href = 'index.html';
  }