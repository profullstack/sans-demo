/**
 * Sans UI - Desktop Counter Demo
 * 
 * This file demonstrates how to use the @profullstack/sans-ui package
 * to create a counter button in a desktop application using NodeGUI.
 * 
 * Note: You need to install @nodegui/nodegui before running this demo:
 * pnpm add @nodegui/nodegui
 */

try {
  // Dynamic import for NodeGUI
  const importNodeGUI = async () => {
    try {
      // Try to import NodeGUI
      const nodeGUI = await import('@nodegui/nodegui');
      const sansUI = await import('@profullstack/sans-ui');
      
      const { QApplication, QMainWindow, QWidget, QVBoxLayout, QPushButton, QLabel, QFont } = nodeGUI;
      const { createButton, getNativeUI } = sansUI;

      // Create a Qt application
      const app = new QApplication([]);

      // Create the main window
      const win = new QMainWindow();
      win.setWindowTitle('Sans UI - Desktop Counter Demo');
      win.resize(400, 300);

      // Create a central widget and layout
      const centralWidget = new QWidget();
      const layout = new QVBoxLayout();
      centralWidget.setLayout(layout);

      // Create a label for the counter value
      const counterLabel = new QLabel();
      counterLabel.setText('0');
      const counterFont = new QFont('Arial', 24);
      counterFont.setBold(true);
      counterLabel.setFont(counterFont);
      counterLabel.setAlignment(2); // AlignCenter
      layout.addWidget(counterLabel);

      // Create a button using Sans UI
      const button = createButton({
        label: 'Increment (+1)',
        type: 'primary',
        size: 'large'
      });

      // Get the native UI adapter
      const nativeUI = getNativeUI();

      // Counter state
      let count = 0;

      // Update the counter display
      function updateCounterDisplay() {
        counterLabel.setText(count.toString());
      }

      // Set up event handler for the button
      nativeUI.setEventHandler(button, 'click', () => {
        count++;
        updateCounterDisplay();
      });

      // Add the button to the layout
      layout.addWidget(button);

      // Set the central widget
      win.setCentralWidget(centralWidget);

      // Show the window
      win.show();

      // Start the event loop
      app.exec();
    } catch (error) {
      console.error('Error importing NodeGUI:');
      console.error(error.message);
      console.error('\nPlease make sure you have installed @nodegui/nodegui:');
      console.error('pnpm add @nodegui/nodegui');
      console.error('\nSee README.md for more detailed instructions.');
      process.exit(1);
    }
  };

  // Run the app
  importNodeGUI();
} catch (error) {
  console.error('Error running desktop demo:');
  console.error(error.message);
  console.error('\nPlease make sure you have installed @nodegui/nodegui:');
  console.error('pnpm add @nodegui/nodegui');
  console.error('\nSee README.md for more detailed instructions.');
  process.exit(1);
}