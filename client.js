// Obtener el formulario y el div de mensaje
const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

// Agregar evento al envío del formulario
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar recarga de página

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Enviar los datos al servidor
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        // Parsear la respuesta JSON
        const data = await response.json();

        // Mostrar el mensaje según el resultado
        if (response.ok) {
            messageDiv.className = 'message success';
            messageDiv.textContent = '✓ ' + data.message;
            console.log('Login exitoso:', data);
            // Aquí puedes redirigir a otra página o hacer otra acción
            setTimeout(() => {
                console.log('Usuario autenticado:', username);
                // window.location.href = '/dashboard.html'; // Redirigir si lo deseas
            }, 1500);
        } else {
            messageDiv.className = 'message error';
            messageDiv.textContent = '✗ ' + data.message;
            console.error('Error de login:', data);
        }
    } catch (error) {
        messageDiv.className = 'message error';
        messageDiv.textContent = '✗ Error de conexión con el servidor';
        console.error('Error:', error);
    }
});
