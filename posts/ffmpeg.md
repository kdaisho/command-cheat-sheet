---
title: "ffmpeg commands"
keywords: "ffmpeg, mp3, edit, sound, music, editor"
date: "2021-06-16"
---

## Trim audio

```
ffmpeg -ss 01:43:46 -t 00:00:44.30 -i input.mp3 output.mp3
```

## Convert 3gp file to mp3

```
ffmpeg -i input.3gp -c:a libmp3lame output.mp3
```
