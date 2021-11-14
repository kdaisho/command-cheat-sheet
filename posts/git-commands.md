---
title: "Git Commands"
keywords: "git, remote, add, remove stash, inline, config"
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

## Checkout a remote branch

```
git co -b <local_branch_name> origin/<remote_branch_name>

// e.g. git co -b client origin/client
```

## Set `git stash list` to inline mode (not pager mode)

```
git config --global pager.stash 'false'
```
