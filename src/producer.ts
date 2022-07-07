import kafka from 'kafka-node';

const client = new kafka.KafkaClient({
    kafkaHost: "localhost:9092"
});
const producer = new kafka.HighLevelProducer(client, {
    partitionerType: 1
});

producer.on("ready", () => {
    const name = process.argv[2];
    const message = [
        {
            topic: "test",
            messages: JSON.stringify({name: name})
        }
    ];

    producer.send(message, (err, data) => {
        if (err) {
            console.log(`[!] Error: ${err}`);
        } else {
            console.log(`Sent messages`);
        }
        process.exit();
    })
})