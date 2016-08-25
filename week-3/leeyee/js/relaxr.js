/*more text display*/
$(document).ready(function() {
    $("#readmoretext1, #readmoretext2, #learnmoretext").hide();

    /* When click on Read More of Post #1,
    more text will be shown and Read More tag disappear*/

    $("#readmore1").click(
        function() {
            $("#readmoretext1").fadeIn();
            $("#readmore1").hide();
            return false;
        }
    );

    /* When click on Read Less of Post #1,
    initial more text will not be shown and Read More tag re-appear*/

    $("#readless1").click(
        function() {
            $("#readmoretext1").fadeOut();
            $("#readmore1").fadeIn(2000);
            return false;
        }
    );

    /* When click on Read More of Post #2,
    more text will be shown and Read More tag disappear*/

    $("#readmore2").click(
        function() {
            $("#readmoretext2").fadeIn();
            $("#readmore2").hide();
            return false;
        }
    );

    /* When click on Read Less of Post #2,
    initial more text will not be shown and Read More tag re-appear*/

    $("#readless2").click(
        function() {
            $("#readmoretext2").fadeOut();
            $("#readmore2").fadeIn(2000);
            return false;
        }
    );

    /* When click on Learn More,
    more text will be shown and Read Less tag appear*/

    $("#learnmore").click(
        function() {
            $("#learnmoretext").slideDown("200");
            $("#learnmore").hide();
            return false;
        }
    );

    /* When click on Hide text.
    less text will be shown and Learn More tag appear*/
    $("#learnless").click(
        function() {
            $("#learnmoretext").slideUp("200");
            $("#learnmore").show();
            return false;
        }
    );
});

/*sign up button alert*/
function signupfunction() {
    alert("We're Not Ready For Sign-Ups...Yet.");
};

/*msg to appear when nav links are not ready*/
function linkmsg() {
    alert("Page will be available soon! Be patient!");
};
