# Git and Github

## What is Git?

Git is version control software. It allows us to track changes in any set of files. This set is called a repository, or "repo" for short.

It also allows for non-linear workflows. We can create branches of our repos, separate from the main branch and develop new features without altering main. We can then merge these branches back into main after testing.

## What is Github?

Github is an internet host for git repositories. Among other features, Github allows us to share our code publically, and it lets us collaborate on a repository as a team.

### How to install git for Mac

1. Check if you have Homebrew by opening a terminal and typing brew -v.
2. If you see a version, then you have brew installed. If not, you must install brew.
3. To install brew, paste this into your terminal:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
4. Brew requires the Xcode CLI. Confirm when the installer asks your permission.
5. After installation of XCode CLI and Brew, install git by typing brew install git in the terminal.

### How to install git for PC

 1. Go to https://git-scm.com/
 2. Download and run the installer.

### Configure Git for the First Time

 1. Configure your username by opening a terminal and typing "git config --global user.name (your_github_user_name)"
 2. Configure your email by typing "git config --global user.email (your_github_email)"
 3. Verify by typing "git config --global --list"

### Create a new local Git repository using VS Code's built-in GUI

 1. From the file menu, choose "Open Folder."
 2. Navigate to your project folder. Open it in VS Code. **This is very important!** *Open your project folder and only your project folder. Do not open a parent folder.*
 3. Toggle open your Source Control pane by clicking the Source Control icon on the left. It looks like three circles with lines connecting them.
 4. Click the "Initialize Repository" button.
 5. Click the plus sign next to each file you want to add to the repo. If you want to add all the files, click the plus sign next to "Changes".
 6. Write a caption (message) for your snapshot (commit) in the message window.
 7. Click the checkmark.
 8. Click publish. If this is the first time you are trying to push a local git repo to Github, you will be asked to give authorization. Switch to your browser to do that. Just click through and accept at every point they ask.
 9. Make sure you choose the public option if you want your instructor (or anyone else) to be able to view your repo on Github.
 10. After it's done pushing, you can view your repo on Github.