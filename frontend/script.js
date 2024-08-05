document.getElementById('password').addEventListener('input', async function () {
    const password = this.value;

    if (password.length > 0) {
        try {
            const response = await fetch('http://127.0.0.1:5000/encrypt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            document.getElementById('hashed-password').textContent = data.hashed_password;
        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById('hashed-password').textContent = 'Error al encriptar la contraseña';
        }
    } else {
        document.getElementById('hashed-password').textContent = '';
    }
});
