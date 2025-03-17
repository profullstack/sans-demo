import { Observable } from '@nativescript/core';

// Create an observable view model
const viewModel = new Observable();
viewModel.count = 0;

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = viewModel;
}

export function onButtonTap(args) {
  // Increment the counter
  viewModel.count++;
  
  // Update the counter display
  const page = args.object.page;
  const counterLabel = page.getViewById('counterValue');
  counterLabel.text = viewModel.count.toString();
}