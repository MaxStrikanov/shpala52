import toggleMenu from './menu.js';

const  scroll = async () => {
    const links = document.querySelectorAll('.menu-item-link');

    links.forEach(item => item.onclick = (e) => {
		e.preventDefault()
        document.getElementById(item.getAttribute('data-link')).scrollIntoView(
            {
                behavior: "smooth",
				block: "center",
				inline: "center"
            })
			document.querySelector('.menu-items').classList.toggle('open');
    })
}

export default scroll;
