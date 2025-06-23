$(document).ready(function () {
    function generateSecurePassword(length) {
        if (length < 8) {
            throw new Error("Password length should be at least 8 characters for security.");
        }

        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const special = "@%!#$?";
        const all = upper + lower + numbers + special;

        // Helper to check for sequential or repeating characters
        const hasRepeatsOrSequences = (str) => {
            for (let i = 0; i < str.length - 1; i++) {
                if (str[i] === str[i + 1]) return true; // repeating
                if (
                    str.charCodeAt(i + 1) === str.charCodeAt(i) + 1 || // ascending
                    str.charCodeAt(i + 1) === str.charCodeAt(i) - 1    // descending
                ) return true;
            }
            return false;
        };

        let password = "";

        // Ensure all required character types are present
        let guaranteed = [
            upper[Math.floor(Math.random() * upper.length)],
            lower[Math.floor(Math.random() * lower.length)],
            numbers[Math.floor(Math.random() * numbers.length)],
            special[Math.floor(Math.random() * special.length)]
        ];

        // Fill the rest of the password randomly
        while (true) {
            let remainingLength = length - guaranteed.length;
            let result = guaranteed.slice();

            while (result.length < length) {
                let char = all[Math.floor(Math.random() * all.length)];

                // Avoid repeats or sequences
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

            // Shuffle to avoid predictable placement of required characters
            for (let i = result.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]];
            }

            password = result.join("");

            if (!hasRepeatsOrSequences(password)) break;
        }

        return password;
    }

    // Generate and display 5 passwords
    function displayPasswords() {
        const $list = $("#password-list");
        $list.empty();
        for (let i = 0; i < 5; i++) {
            const pwd = generateSecurePassword(8);
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

    displayPasswords();


});