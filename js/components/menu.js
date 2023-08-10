

const toggleMenu = () => {
	const menuToggle = document.querySelector('.menu-toggle input ');
	const menuItems = document.querySelector('.menu-items');

	menuToggle.addEventListener('click', () => {
	menuItems.classList.toggle('open');
	});
}

export default toggleMenu;