# Platforms

For now, Hound has a **Web** client, and clients for **Android** and **Android TV.** There is a working iOS build but it will take time to get it into Test Flight.

Android, Android TV, and the future iOS, and tvOS clients are built on **React Native TVOS**, a fork of React Native, and share the same code.

[Hound App Repo](https://github.com/Hound-Media-Server/hound-app)

### Android and Android TV

To install on Android, please join the closed testing:
First, join this group: https://groups.google.com/g/hound-play-store-testing

Then get the app on either of these links:

- Web: https://play.google.com/apps/testing/com.houndmediaserver.hound
- Your android device: https://play.google.com/store/apps/details?id=com.houndmediaserver.hound

Make sure you join the group with the same account that is logged in your Play Store.

### iOS and tvOS

You'll need the TestFlight app. Accept the invitation, and download through TestFlight: [here](https://testflight.apple.com/join/W2HWsaxZ)

### Windows and MacOS

Hound has clients for windows and MacOS (arm). You can grab the binaries from the [releases](https://github.com/Hound-Media-Server/hound-app/releases) tab. Currently, these builds are not signed, so you will likely face warnings when trying to run the binaries on your Desktop:

**On Windows:**

Unpack the .zip, and run 'Hound Desktop.exe' if an SmartScreen warning pops up, click 'Run Anyway.'

**On MacOS:**

Open the .dmg, if a Gatekeeper message appears, select 'Done'. Navigate to MacOS Settings -> Privacy and Security, in the security section, find the hound .dmg and select 'open anyway.' Drag the .app to the Applications folder. If another Gatekeeper message appears, go back to the Privacy and Security screen and select 'open anyway' again for the .app executable.

An alternative to this would be to build the executables yourself on your machine. There are other ways to bypass or disable smart screen / gatekeeper, and the current method may be outdated in the future.

### Web / Browsers

This is pre-packaged with the server install.

## Other Clients

Contributions to the official app, or developing your own third-party apps for other clients are very welcome. This is the area of the project which needs most contributions.
