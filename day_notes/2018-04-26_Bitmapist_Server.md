## Utilizing Bitmapist server

https://github.com/Doist/bitmapist-server

### Installation

1. Install [go](https://golang.org/doc/install)
2. `go get -u github.com/Doist/bitmapist-server`
3. Navigate to `$HOME/go/bin`
4. `./bitmapist-server -addr "localhost:1234"`

### Talking to bitmapist-server

Needed to use [redis protocol](https://redis.io/topics/protocol) to talk to the server. Found this [gist](https://gist.github.com/laserson/2689744) and used it to encode `info keys` and send to server like this:

`echo -e '*2\r\n$4\r\ninfo\r\n$4\r\nkeys\r\n' | nc -q 5 127.0.0.1 1234`

Response:

```
keys_total:0
keys_cached:0
```

### Adding mock data

1. `pip install bitmapist`
2. Add some random bitmapist events into redis  


```
from bitmapist import mark_event

for x in range(10000):
  mark_event('test', random.randint(1,100000))

```

### `slurp`-ing data from redis into bitmapist-server

I ran `slurp` noted in bitmapist-server's README via 

`echo -e '*2\r\n$5\r\nslurp\r\n$14\r\nlocalhost:6379\r\n' | nc -q 5 127.0.0.1 1234`

and server returned `+OK`

Re-running `info keys` on bitmapist-server gives us

```
keys_total:3
keys_cached:3
```

Running `redis-cli info` gives us the keyspace

```
# Keyspace
db0:keys=3,expires=0,avg_ttl=0
```

Meaning the keys were successfully copied into server!

### Testing data integrity

We can test data integrity by checking that the representations of instances of `MonthEvents` are the same when using bitmapist system defaults (localhost:6379) and our bitmapist-server system (localhost:1234)  

```
from bitmapist import setup_redis, MonthEvents

redis_data = MonthEvents('test')

setup_redis('bitmapist-server', 'localhost', 1234)

assert MonthEvents('test') == MonthEvents('test', system='bitmapist-server')
```

Success! It doesn't error out.
