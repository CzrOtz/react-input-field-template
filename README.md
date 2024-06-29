# InputFormTemplate

This repository contains a reusable React component template for handling multiple input fields in a form.

## Features

- Multiple input fields
- Each input field is managed by a state setter to allow manipulation without losing focus due to re-rendering
- Input data does not dynamically render until submission
- A button to trigger results display when data is ready

## How It Works

1. **Input Fields**: The form contains four input fields, each managed by a state setter. This management ensures that the cursor does not lose focus during state updates.

2. **Dynamic Rendering**: The input data does not appear in the dynamic rendering until the "Show Results" button is clicked. This prevents premature data display.

3. **Show Results**: When the "Show Results" button is clicked, the `setShowResults` state changes to `true`, triggering the display of the input data and allowing any other functions to take place after that.
