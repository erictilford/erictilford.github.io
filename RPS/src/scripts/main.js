$(document).ready(function () {

    // Add event listener for keypress events to change the left image
    window.addEventListener('keydown', (event) => {
        const leftImage = document.getElementById('left-image');

        switch (event.key) {
            case 'q':
                leftImage.src = 'assets/rock.png';
                leftImage.alt = 'Rock';
                leftImage.style.display = 'block'; // Ensure the image is visible
                break;
            case 'w':
                leftImage.src = 'assets/paper.png';
                leftImage.alt = 'Paper';
                leftImage.style.display = 'block'; // Ensure the image is visible
                break;
            case 'e':
                leftImage.src = 'assets/scissors.png';
                leftImage.alt = 'Scissors';
                leftImage.style.display = 'block'; // Ensure the image is visible
                break;
            case 'r':
                leftImage.style.display = 'none'; // Hide the image
                break;
        }
    });

    window.addEventListener('keydown', (event) => {
        const leftImage = document.getElementById('right-image');

        switch (event.key) {
            case 'i':
                leftImage.src = 'assets/rock.png';
                leftImage.alt = 'Rock';
                leftImage.style.display = 'block'; // Ensure the image is visible
                break;
            case 'o':
                leftImage.src = 'assets/paper.png';
                leftImage.alt = 'Paper';
                leftImage.style.display = 'block'; // Ensure the image is visible
                break;
            case 'p':
                leftImage.src = 'assets/scissors.png';
                leftImage.alt = 'Scissors';
                leftImage.style.display = 'block'; // Ensure the image is visible
                break;
            case '[':
                leftImage.style.display = 'none'; // Hide the image
                break;
        }
    });

});