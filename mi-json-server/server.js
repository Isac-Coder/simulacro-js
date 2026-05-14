import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001 || process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Leer el archivo db.json
        const data = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8');
        
        // 2. Convertir el texto JSON a un arreglo de JavaScript
        const usuarios = JSON.parse(data);

        // 3. Buscar si existe un usuario que coincida con las credenciales
        const usuarioValido = usuarios.find(
            (u) => u.username === username && u.password === password
        );

        // 4. Validar el resultado de la búsqueda
        if (usuarioValido) {
            res.status(201).json({ success: true, message: 'Login successful!' });
        } else {
            res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        }

    } catch (error) {
        // Manejar error si el archivo db.json no existe o está mal escrito
        res.status(500).json({ success: false, message: 'Error en la base de datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

