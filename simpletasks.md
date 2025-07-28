# JavaScript & HTML Learning Assignments


### Assignment 1: Simple Counter

**Concepts:** HTML structure, button clicks, displaying dynamic text, basic variables.

**Requirements:**

1.  **HTML:**
    * A heading (e.g., "Simple Counter").
    * A paragraph or `<span>` to display the current count, initialized to `0`.
    * A "Increment" button.
    * A "Decrement" button.
    * A "Reset" button.
2.  **JavaScript:**
    * Initialize a JavaScript variable (e.g., `count`) to `0`.
    * When the "Increment" button is clicked, increase `count` by 1 and update the displayed text.
    * When the "Decrement" button is clicked, decrease `count` by 1 and update the displayed text.
    * When the "Reset" button is clicked, set `count` back to `0` and update the displayed text.
    * **Challenge:** Prevent the count from going below 0.

---

### Assignment 2: Basic Calculator

**Concepts:** Input fields, multiple buttons, parsing numbers, basic arithmetic operations, displaying results.

**Requirements:**

1.  **HTML:**
    * A heading (e.g., "Simple Calculator").
    * Two input fields for numbers.
    * Buttons for basic operations: "Add", "Subtract", "Multiply", "Divide".
    * A paragraph or `<span>` to display the result.
2.  **JavaScript:**
    * Get the values from the two input fields.
    * When an operation button is clicked:
        * Convert the input values from strings to numbers (e.g., `parseInt()` or `parseFloat()`).
        * Perform the corresponding arithmetic operation.
        * Display the result.
    * **Error Handling:** If inputs are not valid numbers, display an error message (e.g., "Please enter valid numbers").
    * **Challenge:** Handle division by zero gracefully (display an error message instead of crashing).

---

### Assignment 3: Dynamic Image Gallery

**Concepts:** Arrays, loops, changing image sources, event delegation (optional but good practice).

**Requirements:**

1.  **HTML:**
    * An `<img>` tag to display the current image.
    * "Previous" and "Next" buttons.
2.  **JavaScript:**
    * Create an array of image URLs (you can use placeholder images like `https://via.placeholder.com/300x200?text=Image1`, `https://via.placeholder.com/300x200?text=Image2`, etc., or find actual image links online).
    * Keep track of the `currentIndex` of the displayed image.
    * When "Next" is clicked, show the next image in the array. If at the end, loop back to the first.
    * When "Previous" is clicked, show the previous image. If at the beginning, loop to the last.
    * **Challenge:** Add small "thumbnail" buttons below the main image, clicking on which directly shows that image.

---

### Assignment 4: Simple To-Do List (Enhanced)

**Concepts:** Creating/removing elements, managing lists, storing data (optional), form submission (optional).

**Requirements (Building on your existing knowledge):**

1.  **HTML:**
    * Input field for new tasks.
    * "Add Task" button.
    * Unordered list (`<ul>`) to display tasks.
2.  **JavaScript:**
    * Add tasks from the input field to the list when the "Add Task" button is clicked or Enter is pressed.
    * **Add a "Delete" button next to each task.** Clicking this button should remove the corresponding task from the list.
    * **Add a "Mark as Complete" button/feature** next to each task. When clicked, it should visually indicate the task is complete (e.g., by adding a CSS class that styles it with a strikethrough). You can toggle this feature.
    * **Challenge 1 (Persistence):** Use `localStorage` to save the tasks so they are still there when the user closes and reopens the browser.
    * **Challenge 2 (Filtering):** Add buttons to filter tasks: "All", "Active", "Completed".

---

### Assignment 5: Basic Quiz App

**Concepts:** Arrays of objects, conditional logic, user input validation, scoring, dynamic content generation.

**Requirements:**

1.  **HTML:**
    * A place to display the question.
    * Radio buttons or standard buttons for multiple-choice answers.
    * A "Submit Answer" button.
    * A place to display feedback (correct/incorrect) and the final score.
2.  **JavaScript:**
    * Create an array of objects, where each object represents a question and its properties (e.g., `question: "What is 2+2?", options: ["3", "4", "5"], correctAnswer: "4"`).
    * Display one question at a time.
    * When "Submit Answer" is clicked:
        * Check if an answer was selected.
        * Compare the selected answer to the correct answer.
        * Provide feedback (e.g., "Correct!" or "Incorrect! The answer was 4.").
        * Keep track of the user's score.
        * Move to the next question.
    * After the last question, display the final score.
    * **Challenge:** Add a "Restart Quiz" button.
    * **Challenge:** Implement a timer for each question or the entire quiz.