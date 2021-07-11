//open and close menu
const menuButtons = document.querySelectorAll('.menu-button')
const menu = document.querySelectorAll('header .menu')

for (const button of menuButtons) {
	button.addEventListener('click', function () {
		for (const menuItem of menu) {
			menuItem.classList.toggle('show')
		}
	})
}

//close menu when selecting option
const links = document.querySelectorAll('header nav ul li a')

for (const link of links) {
	link.addEventListener('click', function () {
		for (const menuItem of menu) {
			menuItem.classList.remove('show')
		}
	})
}

//header transparent when on top
const header = document.querySelector('header')

function headerOnTop() {
	if (window.scrollY == 0) {
		header.classList.add('onTop')
	} else {
		header.classList.remove('onTop')
	}
}

//scrolling
window.addEventListener('scroll', function () {
	headerOnTop()
})
