/**
 * Custom build script for Sans UI Desktop Demo
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create build directory
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy main index.js file
fs.copyFileSync(
  path.join(__dirname, 'index.js'),
  path.join(buildDir, 'index.js')
);

// Create package.json for the build
const packageJson = {
  name: 'sans-demo-desktop',
  version: '1.0.0',
  description: 'Desktop demo app built using Sans UI',
  main: 'index.js',
  dependencies: {
    '@nodegui/nodegui': '^0.71.0',
    '@profullstack/sans-ui': '^1.0.3'
  }
};

fs.writeFileSync(
  path.join(buildDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

// Install dependencies in the build directory
console.log('Installing dependencies in the build directory...');
try {
  execSync('pnpm install', { cwd: buildDir, stdio: 'inherit' });
  console.log('\nBuild completed successfully!');
  console.log(`\nTo run the app, navigate to ${buildDir} and run 'node index.js'`);
} catch (error) {
  console.error('Error during build:', error);
  process.exit(1);
}
