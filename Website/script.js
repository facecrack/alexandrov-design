// Время
function updateClock() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	
	const timeString = `${hours}:${minutes}:${seconds}`;
	document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// Анимация
window.addEventListener('load', () => {
	document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', () => {
	const headerScroll = document.getElementById('header');
	const toggleBtn = document.querySelector('.color-mode');
	const body = document.body;

// Скролл
	window.addEventListener('scroll', () => {
		if (window.scrollY > 660) {
			headerScroll.classList.add('headerScroll');
		} else {
			headerScroll.classList.remove('headerScroll');
		}
	});

// Переключение темы
	toggleBtn.addEventListener('click', function (e) {
		e.preventDefault();

		// Одна тема активна за раз
		body.classList.toggle('light-mode');
		body.classList.toggle('dark-mode');

		// Меняем текст кнопки
		this.textContent = body.classList.contains('dark-mode') 
			? '[ Dark mode ]' 
			: '[ Light mode ]';
	});
});

// Cсылки
document.querySelectorAll('a').forEach(link => {
	const isExternal = link.hostname && link.hostname !== location.hostname;
	if (isExternal) {
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
	}
});