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
