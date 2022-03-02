# download.cider.sh

This mini Vue.js app uses the Fetch API to dynamically fetch releases from CircleCI.

---

To add a branch to the list of branches, add an `<buttonRow>` element to `src/App.vue`.

`<buttonRow branch="develop" display-name="Develop"></buttonRow>`
 - `branch`: The GitHub branch to fetch releases from. **Required**.
 - `display-name`: The name to display in the list of branches. **Required**.
 
---

To change the buttons themselves, edit `src/components/button-row.vue`

---

Non-Cider Org Users: To save changes, create a PR for the `main` branch.
 
Cider Org Contributors: To deploy this app after a PR, pull, then run `npm run deploy`/`yarn deploy` while logged into your GitHub account via git. It'll push the dist folder to the `gh-pages` branch. 
