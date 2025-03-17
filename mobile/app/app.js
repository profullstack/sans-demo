/**
 * Sans UI - Mobile Counter Demo
 * 
 * This file demonstrates how to use the @profullstack/sans-ui package
 * to create a counter button in a mobile application using NativeScript.
 * 
 * Note: You need to set up NativeScript before running this demo.
 * See README.md for detailed instructions.
 */

try {
  const importNativeScript = async () => {
    try {
      const nativeScriptCore = await import('@nativescript/core');
      const sansUI = await import('@profullstack/sans-ui');
      
      const { Application } = nativeScriptCore;
      const { createButton, getNativeUI } = sansUI;

      // Register the main module
      Application.run({ moduleName: 'app-root' });
    } catch (error) {
      console.error('Error importing NativeScript:');
      console.error(error.message);
      console.error('\nPlease make sure you have set up NativeScript correctly.');
      console.error('See README.md for detailed instructions.');
    }
  };

  // Run the app
  importNativeScript();
} catch (error) {
  console.error('Error running mobile demo:');
  console.error(error.message);
  console.error('\nPlease make sure you have set up NativeScript correctly.');
  console.error('See README.md for detailed instructions.');
}