const kafka = require('kafka-node');

const kafkaClient = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new kafka.Consumer(
    kafkaClient,
    [{ topic: 'test', partition: 0 }],
    { autoCommit: true }
);

consumer.on('message', (message) => {
    console.log('Received message:', message);
});

consumer.on('error', (error) => {
    console.error('Error in Kafka Consumer', error);
});

const start = () => {
    console.log('Kafka Consumer started');
};

module.exports = { start }; 
