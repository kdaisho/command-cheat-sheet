---
title: "Git Commands"
keywords: "git, remote, add, remove"
date: "2020-08-10"
---

## Print remote repository

```
git remote -v
```

## Git remote add

```
git remote add origin <destination>
```

## Git remote remove

```
git remote rm <destination>
```

## Creating a local branch that tracks a remote branch

```
git checkout --track origin/branch_name
```

## Deleting a local branch

```
git branch -d local_branch_name
```

## Stashing changes

```
git stash
```

## Retrieve stashed changes

Applies the changes and leaves a copy in stash

```
git stash apply stash_name
```

Applies the changes and removes the files from the stash

```
git stash pop stash_name
```
