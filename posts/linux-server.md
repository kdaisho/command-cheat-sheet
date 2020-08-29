---
title: "Linux Server Commands"
keywords: "linux, localhost, port, node, kill, process, running"
date: "2020-08-09"
---

## List active localhost ports

```
sudo lsof -i -P -n | grep LISTEN
```

## Kill a process running on particular port (e.g. 8080)

```
kill -9 $(sudo lsof -t -i:8080)
```

## Find running node process

```
ps aux | grep node
```

_a = show processes for all users<br>u = display the process's user/owner<br>x = also show processes not attached to a terminal_
