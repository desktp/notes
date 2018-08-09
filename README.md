# Notes board

## Development instructions

### Setup Firebase project
1. Go to the [Firebase console](https://console.firebase.google.com/u/0/) and create a new project
2. Click on `Add Firebase to your web app` and copy the keys to the `src/config.js` file (`config.js.example` included)
3. Next, go on `Database` on the Firebase console and change the database type to `Realtime Database`
4. Go to `Rules`, set `.read` and `.write` to `true`
5. Then, on the project's folder, `yarn && yarn start` :D