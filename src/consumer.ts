import kafka from 'kafka-node';

const client = new kafka.KafkaClient({
    kafkaHost: "localhost:9092"
});
const consumer = new kafka.Consumer(
    client,
    [{topic: "test", partition: 0}],
    {
        groupId: "my-consumer",
        autoCommit: true,
        fromOffset: true
    }
)

consumer.on("message", (msg) => {
    const json = JSON.parse(msg.value.toString());
    console.log(`JSON: ${JSON.stringify(json)}`);
});

consumer.on("error", (err) => {
    console.log(`[!] Error: ${err}`);
})