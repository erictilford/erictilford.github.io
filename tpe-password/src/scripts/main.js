$(document).ready(function () {
    const DEFAULT_LENGTH = 8;
    const DEFAULT_NUMBER = 5;

    // Load saved password length and number of passwords from localStorage or use defaults
    const savedLength = localStorage.getItem("passwordLength");
    const savedNumber = localStorage.getItem("numberOfPasswords");
    const initialLength = savedLength ? parseInt(savedLength, 10) : DEFAULT_LENGTH;
    const initialNumber = savedNumber ? parseInt(savedNumber, 10) : DEFAULT_NUMBER;

    // Set the sliders and displayed values to the initial values
    $("#length-slider").val(initialLength);
    $("#slider-value").text(initialLength);
    $("#number-slider").val(initialNumber);
    $("#number-slider-value").text(initialNumber);

    function generateSecurePassword(length) {
        if (length < 8) {
            throw new Error("Password length should be at least 8 characters for security.");
        }

        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const special = "@%!#$?";
        const all = upper + lower + numbers + special;

        const hasRepeatsOrSequences = (str) => {
            for (let i = 0; i < str.length - 1; i++) {
                if (str[i] === str[i + 1]) return true;
                if (
                    str.charCodeAt(i + 1) === str.charCodeAt(i) + 1 ||
                    str.charCodeAt(i + 1) === str.charCodeAt(i) - 1
                ) return true;
            }
            return false;
        };

        let password = "";
        let guaranteed = [
            upper[Math.floor(Math.random() * upper.length)],
            lower[Math.floor(Math.random() * lower.length)],
            numbers[Math.floor(Math.random() * numbers.length)],
            special[Math.floor(Math.random() * special.length)]
        ];

        while (true) {
            let remainingLength = length - guaranteed.length;
            let result = guaranteed.slice();

            while (result.length < length) {
                let char = all[Math.floor(Math.random() * all.length)];
                if (
                    result.length === 0 ||
                    (char !== result[result.length - 1] &&
                        (result.length < 2 ||
                            char.charCodeAt(0) !== result[result.length - 1].charCodeAt(0) + 1 &&
                            char.charCodeAt(0) !== result[result.length - 1].charCodeAt(0) - 1)
                    )
                ) {
                    result.push(char);
                }
            }

            for (let i = result.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]];
            }

            password = result.join("");

            if (!hasRepeatsOrSequences(password)) break;
        }

        return password;
    }

    function displayPasswords() {
        const $list = $("#password-list");
        const length = parseInt($("#length-slider").val(), 10);
        const numberOfPasswords = parseInt($("#number-slider").val(), 10);
        $list.empty();
        for (let i = 0; i < numberOfPasswords; i++) {
            const pwd = generateSecurePassword(length);
            const $item = $(`<div class="password-item" style="cursor:pointer;user-select:all;" title="Click to copy">${pwd}</div>`);
            $item.on("click", function () {
                navigator.clipboard.writeText(pwd).then(() => {
                    $item.text("Copied!");
                    setTimeout(() => $item.text(pwd), 1000);
                });
            });
            $list.append($item);
        }
    }

    $("#generate-password").on("click", displayPasswords);

    $("#length-slider").on("input", function () {
        const newLength = $(this).val();
        $("#slider-value").text(newLength);

        // Save the new length to localStorage
        localStorage.setItem("passwordLength", newLength);
    });

    $("#number-slider").on("input", function () {
        const newNumber = $(this).val();
        $("#number-slider-value").text(newNumber);

        // Save the new number to localStorage
        localStorage.setItem("numberOfPasswords", newNumber);
    });

    displayPasswords();

    function updateSliderBackground(slider) {
        const value = slider.value;
        const min = slider.min || 0;
        const max = slider.max || 100;
        const percentage = ((value - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #35424a ${percentage}%, #c3ced5 ${percentage}%)`;
    }

    // Attach the function to all sliders with the "slider" class
    $(".slider").on("input", function () {
        updateSliderBackground(this);
    });

    // Initialize the background for all sliders on page load
    $(".slider").each(function () {
        updateSliderBackground(this);
    });
});