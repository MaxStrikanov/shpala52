export const sendForm = () => {
	document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    const botToken = "6204256393:AAGM1DI4JDtudeIqesTR4W-wqvA4YVoNgx8"; // Замените на ваш токен
    const chatId = "-1001823613382"; // Замените на ID вашего чата с ботом
    
    
    
    document.getElementById("submitButton").addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        
        const text = `Имя: ${name}\nEmail: ${phone}\nСообщение: ${message}`;
        
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
        
        // Отправка данных на сервер Telegram с использованием AJAX
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Показать модальное окно
            } else {
                alert("Произошла ошибка при отправке заявки.");
            }
        };
        
        xhr.send();
    });
});
}

