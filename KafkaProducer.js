const kafka = require('kafka-node');

const kafkaClient = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(kafkaClient);

producer.on('ready', () => {
    console.log('Kafka Producer is ready');
});

producer.on('error', (error) => {
    console.error('Error in Kafka Producer', error);
});

const sendMessage = (topic, message) => {
    return new Promise((resolve, reject) => {
        const payloads = [{ topic, messages: message }];

        producer.send(payloads, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

module.exports = { sendMessage };
