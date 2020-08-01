# Asyncing Ship Git Workflow

## Pushing changes

1. `git pull origin develop`
2. Make your changes
3. git add .
4. git commit -m 'message'
5. git pull origin develop --rebase
6. use Source Control to help make your merge changes.
7. restart from step 5 until you get a `current branch is up to date`
8. git push origin branch-name
9. Make a pull request
10. Repeat

## How Branches Work

- Primarily work out of the `develop` branch
- At end of day, someone pulls `develop` changes and makes a `version` branch
- after doing all bug fixes on `version` branch, push to github
- Make a pull request to `master`. 3 people need to review
- Make a pull request to `develop`. 1 person needs to review.
