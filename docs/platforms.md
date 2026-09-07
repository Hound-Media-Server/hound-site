# Platforms

For now, Hound has a **Web** client, and clients for **Android** and **Android TV.** There is a working iOS build but it will take time to get it into Test Flight.

Android, Android TV, and the future iOS, and tvOS clients are built on **React Native TVOS**, a fork of React Native, and share the same code.

[Hound App Repo](https://github.com/Hound-Media-Server/hound-app)

### Android and Android TV

Android and Android TV has fully working clients, which you need to sideload using the APKs. You can grab the latest APKs from the repo.

Download the APKs here: [Releases](https://github.com/Hound-Media-Server/hound-app/releases)

AFTV Downloader Code: **5479712** (v0.0.1-beta, for Android TV)

### iOS and tvOS

**These are not available yet.**
While a working iOS build exists, it will take time to get it into Test Flight as Beta, and eventually the app store on release. They share the codebase with Android, so are being developed simultaneously. tvOS will require more work, since d-pad remote behavior isn't identical across tvOS and AndroidTV.

### Windows and MacOS

Hound has clients for windows and MacOS (arm). You can grab the binaries from the [releases](https://github.com/Hound-Media-Server/hound-app/releases) tab. Currently, these builds are not signed, so you will likely face warnings when trying to run the binaries on your Desktop:

**On Windows:**

Unpack the .zip, and run 'Hound Desktop.exe' if an SmartScreen warning pops up, click 'Run Anyway.'

**On MacOS:**

Open the .dmg, if a Gatekeeper message appears, select 'Done'. Navigate to MacOS Settings -> Privacy and Security, in the security section, find the hound .dmg and select 'open anyway.' Drag the .app to the Applications folder. If another Gatekeeper message appears, go back to the Privacy and Security screen and select 'open anyway' again for the .app executable.

An alternative to this would be to build the executables yourself on your machine. There are other ways to bypass or disable smart screen / gatekeeper, and the current method may be outdated in the future.

### Web / Browsers

Although you can stream from the web browser, this is not recommended since many codecs and containers are not supported. You'll likely run into issues with audio and track selection. Prefer the Desktop apps instead.

## Other Clients

Contributions to the official app, or developing your own third-party apps for other clients are very welcome. This is the area of the project which needs most contributions.
