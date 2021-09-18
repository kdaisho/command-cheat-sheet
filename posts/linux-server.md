---
title: "Linux Server Commands"
keywords: "linux, localhost, port, node, kill, process, running port, lsof"
date: "2020-08-09"
---

## List active localhost ports

```
sudo lsof -i -P -n | grep LISTEN
```

_-i = Lists IP sockets_

_-P = Do not resolve port names (list port number instead of its name)_

_-n = Do not resolve hostname (no DNS)_

## Kill a process running on particular port (e.g. 8080)

```
kill -9 $(sudo lsof -t -i:8080)
```

## Find running node process

```
ps aux | grep node
```

_a = show processes for all users_

_u = display the process's user/owner_

_x = also show processes not attached to a terminal_
