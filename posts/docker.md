---
title: "Docker commands"
keywords: "docker, container, containers, command, commands, images"
date: "2021-06-16"
---

## Create a container

This will download the official Ubuntu container from Docker Hub and grab the version marked with the bionic tag.

```
sudo docker run -it --name docker-host --rm --privileged ubuntu:bionic
```

_--name = name the container (in this example: docker-host) so that I can recognize my container in the list (sudo docker ps)_

_--rm = removes if there's a running process with the same name then runs a new one_

_docker run = we're going to run some commands in the container_

_-it = make the shell interactive (so we can use it like a normal terminal.)_

## Get running containers

```
sudo docker ps
```

## Get all containers (including stopped containers)

```
sudo docker ps -a
```

## Get into a running container

This will let you run arbitrary commands inside an existing container.

```
sudo docker exec -it <mycontainer> bash
```

_-i = Interactive mode (such as when starting a bash shell)_

_-t = Pseudo-terminal (aka pseudo-tty)_

## Attach (me) to a running process

```
sudo docker attach <container_name>
```

## Stop a running container

```
sudo docker kill <container_name>
```

## Remove a container

```
sudo docker container rm <container_id>
```

## Remove all stopped container

```
sudo docker container prune
```

## Remove a docker image

```
sudo docker rmi <image_id>
```

_rmi = remove image_

## Print image history

```
sudo docker history <image_id>
```
