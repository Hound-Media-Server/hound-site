# Platforms

For now, Hound has a **Web** client, and clients for **Android** and **Android TV.** There is a working iOS build but it will take time to get it into Test Flight.

Android, Android TV, and the future iOS, and tvOS clients are built on **React Native TVOS**, a fork of React Native, and share the same code.

[Hound App Repo](https://github.com/Hound-Media-Server/hound-app)

### Android and Android TV

Android and Android TV has fully working clients, which you need to sideload using our APKs. You can grab the latest APKs from the repo.

### iOS and tvOS

**These are not available yet.**
While a working iOS build exists, it will take time to get it into Test Flight as Beta, and eventually the app store on release. They share the codebase with Android, so are being developed simultaneously. tvOS will require more work, since d-pad remote behavior isn't identical across tvOS and AndroidTV.

### Web / Browsers

Although you can stream from the web browser, this is not recommended since many codecs and containers are not supported. You'll likely run into issues with audio and track selection. Since we don't have a desktop client yet, if you want you want to watch on a desktop, the recommended way is to copy the stream link and play it through VLC or another media player app.

## Other Clients

Contributions to the official app, or developing your own third-party apps for other clients are very welcome. This is the area of the project which needs most contributions.
