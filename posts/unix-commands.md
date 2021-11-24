---
title: "Unix commands"
keywords: "linux, unix, command, find, file, filename, rename, regex"
date: "2021-11-24"
---

## Find a file by name

```bash
find . -iname <filename>
```

### Examples:

Find all jpg files

```bash
find . -iname '*.jpg'
```

_. = current directory_

_i = case insensitively_

## Rename multiple files

Renaming `example-image_f08dycb.gif` to `example-image.gif`

```bash
rename 's~_[a-z|0-9]+(?=\.gif$)~~' *.gif
```

Renaming all gif files in multiple folders

```bash
rename 's~_[a-z|0-9]+(?=\.gif$)~~' */*.gif
```

_s = subtract_

_~ = delimiter; equivalent to / (slash) but if file name includes slashes you have to escape it \\/_

Note: For macOs, install `rename` first. Run `brew install rename`.

Reference: [Bulk Rename Mp3 Files With Regular Expressions in Unix & Linux CLI](https://www.youtube.com/watch?v=PLljPCMdiQs)
