# The Life Calendar (Android Live Wallpaper)

A minimalist Android Live Wallpaper application inspired by [thelifecalendar.com](https://www.thelifecalendar.com/). It helps you visualize your life, year, or goals directly on your home and lock screens, promoting mindful living.

![App Icon](https://raw.githubusercontent.com/niteshmandall/thelifecalendar/main/app/src/main/res/mipmap-xxhdpi/ic_launcher.png)

## Features

### Three Calendar Modes:

1. **Life Calendar**: Visualizes a 90-year life in weeks. Filled dots represent weeks lived; empty dots are the future.
2. **Year Calendar**: Tracks the progress of the current year (365 days).
3. **Goal Calendar**: A custom countdown grid from a Start Date to a Deadline.

### Key Capabilities:

- **Live Updates**: The wallpaper updates automatically as time progresses.
- **Percentage Display**: Shows exactly how much life, year, or goal time used/remaining (e.g., "45% Left").
- **Theming**:
  - **Auto**: Follows system dark/light mode.
  - **Manual**: Force Light or Dark mode via settings.
- **Modern UI**: Native Android settings screen built with Jetpack Compose.

## Tech Stack

- **Language**: Kotlin
- **UI Framework**: Jetpack Compose (Material3)
- **Core API**: `android.service.wallpaper.WallpaperService`
- **Graphics**: Native Canvas drawing for high performance and crisp rendering.
- **Architecture**: MVVM-lite (Compose UI -> SharedPreferences -> WallpaperEngine).

## Installation

### From Source

1. Clone the repository.
2. Open in Android Studio.
3. Build and Run on your device (Shift + F10).

### Release Build

A keyed build configuration is included for creating signed release APKs.

1. Run `./gradlew assembleRelease`
2. Locate APK at `app/build/outputs/apk/release/app-release.apk`.

## Usage

1. Open the **The Life Calendar** app.
2. **Appearance**: Select your preferred theme (Auto/Light/Dark).
3. **Choose Mode**: Scroll to Life, Year, or Goal section.
4. **Configure**: Enter your birthdate or goal dates.
5. **Set Wallpaper**: Tap the "Set Wallpaper" button for your chosen mode.
6. **Apply**: Confirm in the system wallpaper previewer.

## Web Landing Page

This repository now includes a premium landing page to showcase the app.
The source code is located in the [`my-react-app`](./my-react-app) directory.

### [View Web Project Details](./my-react-app/README.md)

## Credits

- **Android Development**: HoxLabs
- **Original Concept**: Luis Batalha & João Batalha
- **Inspiration**: [The Life Calendar](https://www.thelifecalendar.com/)
- **Built by [HoxLabs](https://hoxlabs.com/)**
