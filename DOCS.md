# Cloning a repo that uses git submodules

`git clone --recurse-submodules <URL>`

<br/>

If you forgot the recurse-sbumodule flag, you can run `git submodule init`

# Adding node_modules to all packages and apps

From the root, run `npx learna add <insert_dependency_name>`

## Adding node_modules to selected packages

`npx lerna add @types/lodash packages/simple-* --dev`

<br/>

This will add the @types/lodash package to all folders inside of packages that start with `simple-`

# .gitignore

This will ignore all folders in the current directory AND it will ignore folders with the same name in the workspaces.

# Add new submodules

Do not clone from github. Instead, go to directory you would like to have this existing github-module. Run the command `git submodule add <insert_.git_link>`.

<br/>

Example :
`git submodule add git@github.com:alexeagleson/react-dark-mode.git`

<br />

Changes to the sub-module are in the git repo of the submodule, not of the monorepo. The repo will notice a folder added but will not keep track of what happens insude of the sub-module.
