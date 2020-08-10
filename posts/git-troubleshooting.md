---
title: "Git Troubleshooting"
keywords: "git, error, not working, gitignore, ignore"
date: "2020-08-10"
---

## When your .gitignore file is not working for some reason.

> The files/folder in your version control will not just delete themselves just because you added them to the .gitignore now. They are already in the repository. You have to remove them. You can just do this with this:

```
git rm -rf --cached .
git add .
```

> This removes all files from the repository and adds them back (this time respecting the rules in your .gitignore).

> Remember to commit everything you've changed before you do this.
