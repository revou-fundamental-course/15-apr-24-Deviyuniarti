document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.querySelector('.input-celcius');
    const fahrenheitInput = document.querySelector('.input-fahrenheit');
    const convertButton = document.getElementById('button-convert');
    const resetButton = document.getElementById('button-reset');
    const reverseButton = document.getElementById('button-reverse');
    const calculationDetails = document.getElementById('calculation-details'); // Menambahkan selector untuk textarea

    function convertToFahrenheit() {
        let celcius = parseFloat(celciusInput.value);
        let fahrenheit = (celcius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        calculationDetails.value = `S(F) = (${celcius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}`; // Menampilkan cara kalkulasi
    }

    function convertToCelcius() {
        let fahrenheit = parseFloat(fahrenheitInput.value);
        let celcius = (fahrenheit - 32) * 5 / 9;
        celciusInput.value = celcius.toFixed(2);
        calculationDetails.value = `S(C) = (${fahrenheit} - 32) × 5/9 = ${celcius.toFixed(2)}`; // Menampilkan cara kalkulasi
    }

    function resetInput() {
        celciusInput.value = '';
        fahrenheitInput.value = '';
        calculationDetails.value = ''; // Mereset detail kalkulasi
    }

    convertButton.addEventListener('click', convertToFahrenheit);
    resetButton.addEventListener('click', resetInput);
    reverseButton.addEventListener('click', convertToCelcius);
});
