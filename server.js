const express = require('express');
const bodyParser = require('body-parser');
const { KafkaProducer } = require('./KafkaProducer');
const { start } = require('./KafkaConsumer'); 

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    const message = req.body.message;

    try {
        await KafkaProducer.sendMessage('test', message);
        res.status(200).send({ status: 'Message sent to Kafka', message });
    } catch (error) {
        res.status(500).send({ status: 'Error sending message', error });
    }
});

// Iniciar el consumidor
start(); // Cambiar esta línea para llamar a la función start

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
