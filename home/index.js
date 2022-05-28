$(document).ready(function () {
    // https://dog.ceo/dog-api/documentation/
    // https://dog.ceo/api/breeds/image/random
    $.ajax({
        url: "https://dog.ceo/api/breed/schnauzer/images/random",
        type: "GET",
        success: function (result) {
            console.log(result.message);
            $("#dogPic").attr("src", result.message);
            $('#dogText').text("Random Schnauzer");
        },
        error: function (error) {
            console.log(error);
        }
    });
});