---
title: "Grep"
keywords: "grep, search"
date: "2020-08-28"
---

## Basic search pattern

```
grep -ril <pattern>
```

_r = recursively<br>i = case insensitive<br>l = print file name only_

## Search while excluding specific folder

```
grep -ril --exclude-dir=.next/ <pattern>
grep -ril --exclude-dir={node_modules,.next} <pattern> //multiple folders
```

_e.g. Excluding `.next` folder_
