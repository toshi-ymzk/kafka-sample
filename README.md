# kafka-sample

#### Run container
```
docker run -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST=localhost  --env ADVERTISED_PORT=9092 --name test_kafka spotify/kafka
```

#### Create topic
```
docker exec -it test_kafka bash
cd /opt/kafka_2.11-0.10.1.0/
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
```

#### Send messages
```
npx ts-node src/producer.ts toshi
```

#### Receive messages
```
npx ts-node src/consumer.ts
```
