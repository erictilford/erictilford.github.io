$(document).ready(function () {
    const DEFAULT_LENGTH = 8;
    const DEFAULT_NUMBER = 5;
    const DEFAULT_OMIT_SIMILAR = true;
    const DEFAULT_OMIT_UNDESIRABLE = true;

    // Load saved password length, number of passwords, and omit similar from localStorage or use defaults
    const savedLength = localStorage.getItem("passwordLength");
    const savedNumber = localStorage.getItem("numberOfPasswords");
    const savedOmitSimilar = localStorage.getItem("omitSimilar");
    const savedOmitUndesirable = localStorage.getItem("omitUndesirable");
    const initialLength = savedLength ? parseInt(savedLength, 10) : DEFAULT_LENGTH;
    const initialNumber = savedNumber ? parseInt(savedNumber, 10) : DEFAULT_NUMBER;
    const initialOmitSimilar = savedOmitSimilar !== null ? (savedOmitSimilar === "true") : DEFAULT_OMIT_SIMILAR;
    const initialOmitUndesirable = savedOmitUndesirable !== null ? (savedOmitUndesirable === "true") : DEFAULT_OMIT_UNDESIRABLE;

    // Set the sliders and displayed values to the initial values
    $("#length-slider").val(initialLength);
    $("#slider-value").text(initialLength);
    $("#number-slider").val(initialNumber);
    $("#number-slider-value").text(initialNumber);
    $("#omit-similar").prop("checked", initialOmitSimilar);
    $("#omit-undesirable").prop("checked", initialOmitUndesirable);

    function generateSecurePassword(length) {
        if (length < 8) {
            throw new Error("Password length should be at least 8 characters for security.");
        }

        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";
        let special = "@%+!#$^?:.(){}[]~-_";
        let omitSimilar = $("#omit-similar").prop("checked");
        let omitUndesirable = $("#omit-undesirable").prop("checked");

        if (omitSimilar) {
            upper = upper.replace(/[OIS]/g, "");
            lower = lower.replace(/[l]/g, "");
            numbers = numbers.replace(/[015]/g, "");
        }
        if (omitUndesirable) {
            // Remove ^ : . ( ) { } [ ] ~ from special characters
            special = special.replace(/[\^:\.\(\)\{\}\[\]~]/g, "");
        }

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

        // Remove undefined if any character set is empty (e.g., all numbers omitted)
        guaranteed = guaranteed.filter(Boolean);

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
        localStorage.setItem("passwordLength", newLength);
        displayPasswords(); // Add this line
    });

    $("#number-slider").on("input", function () {
        const newNumber = $(this).val();
        $("#number-slider-value").text(newNumber);
        localStorage.setItem("numberOfPasswords", newNumber);
        displayPasswords(); // Add this line
    });

    $("#omit-similar").on("change", function () {
        const omit = $(this).prop("checked");
        localStorage.setItem("omitSimilar", omit);
        displayPasswords();
    });

    $("#omit-undesirable").on("change", function () {
        const omit = $(this).prop("checked");
        localStorage.setItem("omitUndesirable", omit);
        displayPasswords();
    });

    displayPasswords();

    function updateSliderBackground(slider) {
        const value = slider.value;
        const min = slider.min || 0;
        const max = slider.max || 100;
        const percentage = ((value - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #35424a ${percentage}%, #c3ced5 ${percentage}%)`;
    }

    $(".slider").on("input", function () {
        updateSliderBackground(this);
    });

    $(".slider").each(function () {
        updateSliderBackground(this);
    });
});