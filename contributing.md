This is a guide to help new members of the open source community contribute to the Open Camps website (http://opencamps.org), and the related Camp sites (see below).



GENERAL CONTRIBUTIONS

Feedback is welcome for suggestions on how to improve the the Open Camps sites, including design and U/X suggestions, or documentation, or project management assistance. Please open an issue or drop us an email at info@opencamps.org.


CODE CONTRIBUTIONS

Pull requests (PRs) - patches, improvements, & features - are really appreciated.

 should remain focused in scope and avoid containing unrelated commits.

If you have any large pull request in mind (e.g. implementing features, refactoring code, etc), please ask first by creating a new issue otherwise you risk spending a lot of time working on something that may not make it into the live site).

When working with git, we recommend the following process in order to craft an excellent pull request:

Fork the project, clone your fork locally, and configure the upstream remote repo:

# Clone your fork of the repo into your working directory
git clone https://github.com/<your-username>/<repo-name>

# Navigate to the newly cloned directory
cd <repo-name>

# Assign the original repo to a remote called "upstream"
git remote add upstream <http://url-of-upstream-repo>

Whenever you commence working and before committed (especially if you cloned a while ago), get the latest changes from upstream repo in order to update your fork:

git checkout master
git pull upstream master
git push
Create a new topic branch (off of master) to contain your feature, change, or fix.

IMPORTANT: Making changes in master is discouraged. You should always keep your local master in sync with upstream master and make your changes in topic branches.

git checkout -b <topic-branch-name>

Commit your changes in logical chunks tied to issues, and with useful messages for other team members -- also always start with a simple 1-line intro. It's also often helpful to use Git's interactive rebase feature to tidy up your commits before making them public.

git push origin <topic-branch-name>

Open a Pull Request with a clear title and description.

If you haven't updated your pull request for a while, you should consider rebasing on master and resolving any conflicts.

IMPORTANT: Never ever merge upstream master into your branches. You should always git rebase on master to bring your changes up to date when necessary.

git checkout master
git pull upstream master
git checkout <your-topic-branch>
git rebase master
Thank you for your contributions!


CAMPS REPOS

List of Organizations/Repos for sites

https://github.com/AppsCamp
https://github.com/AgencyCamp
https://github.com/AICamp
https://github.com/AndroidCamp
https://github.com/Angular-Camp
https://github.com/CapitalCamp
https://github.com/CivicCamp
https://github.com/CommunityCamp
https://github.com/DatabaseCamp
https://github.com/DataVizCamp
https://github.com/DevOpsCamp
https://github.com/EdTechCamp
https://github.com/ElixirCamp
https://github.com/ErlangCamp
https://github.com/GoCamp
https://github.com/MapsCamp
https://github.com/MeteorCampNYC
https://github.com/NervesCamp
https://github.com/NextGenCamp
https://github.com/Node-Camp
https://github.com/Maker-Camp
https://github.com/Rails-Camp-io
https://github.com/PhoenixCamp
https://github.com/React-Camp
https://github.com/FrontEnd-Camp
https://github.com/Swift-Camp
https://github.com/SearchCamp
https://github.com/WebPerfCamp


IMPORTANT: By submitting a patch, you agree that your work will be licensed under the license used by the project.

