let displayContent = '';
        let calculation = '';
        
        const display = document.getElementById('display');
        
        // Append number or operator to the display
        function appendNumber(number) {
            displayContent += number;
            calculation += number;
            updateDisplay(displayContent);
        }

        // Append the operation to the display
        function chooseOperation(operator) {
            if (displayContent === '') return;
            if (['+', '-', '*', '/'].includes(displayContent.slice(-1))) return; // Prevent consecutive operators
            displayContent += operator;
            calculation += operator;
            updateDisplay(displayContent);
        }

        // Calculate the result
        function calculateResult() {
            try {
                const result = eval(calculation); // Evaluate the string calculation
                displayContent = `${displayContent}=${result}`; // Show the full expression with result
                calculation = result.toString(); // Store the result for further calculation
                updateDisplay(displayContent);
                displayContent = ''; // Reset displayContent for new calculation
            } catch (error) {
                updateDisplay('Error');
            }
        }

        // Clear the display and reset everything
        function clearDisplay() {
            displayContent = '';
            calculation = '';
            updateDisplay('');
        }

        // Update the display with the current value
        function updateDisplay(content) {
            display.value = content;
        }