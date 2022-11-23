Steps:

1. Create own branch
2. Commit need to add issues #
3. Create pull request for partner
4. Merge main branch (which has latest stable version)


git checkout my_branch    # move on your branch (make sure it exists) \\
git fetch origin          # fetch all changes \\
git pull origin master    # pull changes from the origin remote, master branch and merge them into my_branch \\
git push origin my_branch # push my_branch
