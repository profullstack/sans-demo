# sans-demo

Demo app built using Sans UI

## Description

This project demonstrates how to use the @profullstack/sans-ui module to create a simple counter button in both Web Components and Svelte.

## Features

- Web Components demo with a counter button
- Svelte demo with a counter button
- Both demos use the @profullstack/sans-ui module for UI components

## Installation

```bash
# Install dependencies
npm install
# or if you prefer pnpm
pnpm install
```

## Running the Demos

### Web Components Demo

```bash
npm run dev:web-components
```

This will start a local server for the Web Components demo at http://localhost:3000.

### Svelte Demo

```bash
npm run dev:svelte
```

This will start a local development server for the Svelte demo at http://localhost:5173.

## Project Structure

- `web-components/` - Contains the Web Components demo
- `svelte/` - Contains the Svelte demo
- `node_modules/@profullstack/sans-ui` - The Sans UI module

## How It Works

Both demos implement a simple counter that increments by 1 when the button is clicked. The counter value is displayed above the button.

### Web Components Implementation

The Web Components demo uses the `sans-button` custom element from the Sans UI module. The counter logic is implemented in JavaScript.

### Svelte Implementation

The Svelte demo uses the `Button` component from the Sans UI module. The counter logic is implemented using Svelte's reactive state.
