# React Native Template

<p>
  <a href="https://github.com/EslamElMeniawy/react-native-temp#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/EslamElMeniawy/react-native-temp/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/EslamElMeniawy/react-native-temp/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> React Native template with initial setup.

## Features

- Full project setup is available.
- `TypeScript` enabled and used.
- `Redux` added and configured.
- `Navigation` added and configured.
- `Firebase` (`Analytics`, `Cloud Messaging` and `Crashlytics`) added and configured.
- Most of libraries added in each project is added and configured.

## Usage

```sh
npx react-native init MyApp --template https://github.com/EslamElMeniawy/react-native-temp.git
```

### Additional Setup

After project creation please follow the following steps before running the project for project to run successfully:

- Add `google-services.json` to location `/android/app/google-services.json`.
- Add `GoogleService-Info.plist` to location `/ios/GoogleService-Info.plist`.
- Edit `app_name` key value in each translation file in location `/src/translations/`.
- Add your app native icons and splashes.
- Change values in `.env.development`, `.env.staging` and `.env.production` to values related to your project.
- Check `TODO` comments added in code in the following locations:
  - `/android/app/build.gradle`.
  - `/android/app/src/main/AndroidManifest.xml`.
  - `/android/app/src/main/res/values/colors.xml`.
  - `/android/app/src/main/res/values/strings.xml`.
  - `/src/App.tsx`.
  - `/src/components/Splash.tsx`.
  - `/src/navigation/NavigationParamsKeys.tsx`.
  - `/src/screens/Splash/index.tsx`.
  - `/src/utils/NotificationUtils.tsx`.

## License

This project is [MIT](LICENSE) licensed.
