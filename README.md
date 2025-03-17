# sans-demo

Demo app built using Sans UI

## Description

This project demonstrates how to use the @profullstack/sans-ui module to create a simple counter button across multiple platforms:

- Web (Web Components and Svelte)
- Desktop (Windows, macOS, Linux)
- Mobile (iOS, Android)

## Features

- Counter button that increments by 1 when clicked
- Consistent UI across all platforms using Sans UI
- Native performance on desktop and mobile

## Installation

```bash
# Install dependencies
pnpm install
```

## Running the Demos

### Web Demos

#### Quick Test (No Additional Setup Required)

```bash
pnpm run test:web
```

This will start a simple HTTP server and open the Web Components demo in your default browser.

#### Web Components Demo

```bash
pnpm run dev:web-components
```

This will start a local server for the Web Components demo at http://localhost:3000.

#### Svelte Demo

```bash
pnpm run dev:svelte
```

This will start a local development server for the Svelte demo at http://localhost:5173.

### Desktop Demo

To run the desktop demo, you'll need to install NodeGUI dependencies first:

```bash
# Install NodeGUI dependencies
pnpm add @nodegui/nodegui
```

Then you can run the desktop app:

```bash
pnpm run desktop
```

### Mobile Demo

To run the mobile demo, you'll need to set up NativeScript first:

```bash
# Install NativeScript CLI globally
npm install -g nativescript

# Verify installation
ns doctor
```

Follow the instructions from the `ns doctor` command to set up your environment for Android and/or iOS development.

Once your environment is set up, you can run the mobile app:

```bash
# Run on Android
pnpm run mobile:android

# Run on iOS (requires macOS)
pnpm run mobile:ios
```

## Manual Build Instructions

### Desktop Builds (Windows, macOS, Linux)

To build the desktop app for distribution, follow these steps:

1. Install NodeGUI and its dependencies:

```bash
cd desktop
npm install @nodegui/nodegui
```

2. For Windows:

```bash
# Install Windows build tools
npm install --global windows-build-tools

# Build the app
npm install electron-packager -g
electron-packager . --platform=win32
```

3. For macOS:

```bash
# Build the app
npm install electron-packager -g
electron-packager . --platform=darwin
```

4. For Linux:

```bash
# Build the app
npm install electron-packager -g
electron-packager . --platform=linux
```

### Mobile Builds (Android, iOS)

To build the mobile app for distribution, follow these steps:

1. Set up your development environment following the NativeScript docs:
   - Android: https://docs.nativescript.org/environment-setup.html#android
   - iOS: https://docs.nativescript.org/environment-setup.html#ios

2. For Android:

```bash
cd mobile
ns build android --release --key-store-path <path-to-keystore> --key-store-password <password> --key-store-alias <alias> --key-store-alias-password <password>
```

3. For iOS (requires macOS):

```bash
cd mobile
ns build ios --release --for-device --team-id <your-team-id>
```

## Project Structure

- `web-components/` - Web Components implementation
- `svelte/` - Svelte implementation
- `desktop/` - Desktop implementation using NodeGUI
- `mobile/` - Mobile implementation using NativeScript

## How It Works

All implementations use the @profullstack/sans-ui package to provide a consistent UI across platforms:

- Web implementations use the web components or Svelte components
- Desktop implementation uses NodeGUI/Qt
- Mobile implementation uses NativeScript

Each implementation provides the same functionality: a button that increments a counter by 1 when clicked, with the current count displayed above the button.

## Troubleshooting

### Desktop Build Issues

If you encounter issues with the NodeGUI dependencies, you may need to install additional system dependencies:

- **Linux**: `sudo apt-get install build-essential libglib2.0-dev`
- **macOS**: `xcode-select --install`
- **Windows**: Install Visual Studio with C++ build tools

### Mobile Build Issues

For mobile build issues, refer to the NativeScript troubleshooting guide:
https://docs.nativescript.org/troubleshooting.html
