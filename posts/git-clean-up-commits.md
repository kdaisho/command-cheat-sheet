---
title: "Git - Clean Up Commits Before Push"
keywords: "git, clean up, commits, merge, merging, history"
date: "2020-08-15"
---

When you have multiple commits and you want to clean them up before push your local branch, you can merge them into one.

For example, squashing last 3 commits in to 1.

```
git rebase -i HEAD~3
```

_-i = interactive_

This command opens an interactive window. Pick a commit (usually it would be the last one) then squash the rest.

Leave `pick` to the last commit, then write `squash` to the rest of commits.

e.g.

```
pick e8ce13 Accessibility fix
squash 4673ee Updating title
squash 43c543 Changing colors
```

Then save the file. Now, another window opens. Edit the commit message for picked commit.

Then save the file. Done.

**Limit this when you are the only person working on the branch because it is changing commit history**
