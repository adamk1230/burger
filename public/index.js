$("#button").on("click", function() {

    // Form validation
    function validateForm() {
        var isValid = true;

        //select all elements with the class form-control checks if they are empty.  If emtpy sets inValid to false.
        $('.form-control').each(function() {

            if ($(this).val() === '') {
                isValid = false;
            }

        });


        return isValid;
    }




    if (validateForm() == true) {

        var currentURL = window.location.origin;

        // $.ajax({
        //     url: currentURL,
        //     type: "post",
        //     data: $("#target").serialize(),
        //     success: function(r) {
        //         //form posted successfully
        //         window.location.reload();
        //     },
        //     error: function(error) {
        //         alert(error);
        //     }
        // });

        $("#target").submit();



    } else {
        alert("Please enter a burger!")
    }

});