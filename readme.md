# MERN Stack Syllabus

## Basics (JS Client approach/Server Approach)

-Basics js(syntax)
-Variables and constants
-Data types
-Operators
-Control Statements
-Functions
  -Synchronous
  -Asynchronous
    -Promise Handling
      -then.catch
      -async-await
-OOP
-ES standard

## GIT and use cases

## Node.js + Express (Application)

    - MVC pattern
    - API (Ecommerce/)
    - Features of Express

### Datbase (NoSQL or SQL)

    - Integration with Express
    - Project API------------------------1st Project

## Frontend

 -Basics of HTML
 -Css basics
   -Css Framework/Library (Tailwindcss)
 -JS+TS(DOM Manipulation)

## Libarary (React.js)

    -....
    -CMS Application-------------2nd Project

## Socket Programming

    - Real time communication
    - Chat Application-----2.1 Project
  
## Nextjs Programming

 -React based framework -----------3rd Project

 -1project Submit
  -Certificate

  -Agile Process
   -Sprint

## Git

    ### Developers
      -Version Control
        -commit
        -branch
        -tags
      -Code Maintenance or backup

### DevOps

    -Automation (Deploy/CI/CD)

### Project Managers/Leads

    -Tracking (Project Managemnt/PMT)

### Our Decice and Online repository

    -Local repo==> Dev environment (git)
    -Online Repo=> a. gitlab  b.github  c.bitbucket

#### Structure

      -tree structure
      -Trunk (degault branch) (main or master)
      -History

### SSH

    -Private key, public key, known_host
    -public key------>server add (github)
    -laptop---->Internat---->server
    -<----Connection req
    -yes

### Glolbal Configuration

    -User setup
      -`git config--global user.name"<yourname>"
      -git config--global user.email"<yoyremail@address>"
    -Default Branch
      -`git config--global default.branch "main"
    -Pull strategy
      -`git config--globall pull.rebase true` -----Rebase
      -`git config --global pull.rebase false` ---Merge (Accept or configure)
      -`git config --global pull.ff only` ---- fast forward

### Git Commands

### Initialize git in local repo

    -`git init`
    -`git remote add <name> <repoUrl> --- add repoUrl to our local repo
    -`gir remolte set-url <name> <nameUrl> ---- replace the old url
    -`git remote-v` --- list all the available  remote repo on our local repository

### Clone the project

    -`git clone <repoUrl>`

### Status

    -`git status`

### Branch List

    `git branch`

### Staging

    -Add tracking
      -`git add <filename/.>`
    -Do commit
      -`git commit -m "<Message>"`

### Push operation

    -git push <repoName> <localBranchName> [:<remoteBranch>]`
      -e.g `git push origin main:main`

### Pull operation

    -`git pull <repoName> <remoteBranchName>`
      -e.g. `git pull origin main`
    -sometimes during pull, it might create some conflicts
      -Manually resolve the conflict
      - After resolving the conflict, commit the code

#### Branch Operation

    -`git checkout -b <BranchName>` ---create a branch
    -`git branch -D <branchName>` ---Delete a local branch
    -`git branch` ---List of available branches
    -`git checkout <branchName>` ---switch to existing branch
  