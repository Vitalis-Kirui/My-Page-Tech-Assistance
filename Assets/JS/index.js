// Form validation 1

$(document).ready(function(){

    $("#form1").click(function(event1){

        event1.preventDefault();

        // name validation

    var name = $("#customerName").val();

    if (name == ""){
        alert("Please provide your name.")
        return false;
    };

    if(name.length <= 2){
        alert("Please provide a valid name. \nIt has to be longer than 2 characters.")
        return false;
    };

    // text area validation

    var issue = $("#issue").val();

    if(issue.length > 0 && issue.length < 10){
        alert("Please provide a more detailed issue you want to be attended to.")
        return false;
    };

    if(issue == ""){
        alert("Please provide an issue you want to be looked at.")
        return false;
    };

    // location validation

    var location = $("#location").val();

    if(location == ""){
        alert("Please provide your location.")
        return false;
    };

    if(location.length < 10){
        alert("Please provide more information about your location.")
        return false;
    };

    // phone number validation

    var phoneN = $("#phoneNumber").val();

    if (phoneN == ""){
        alert("Please provide your phone number.")
        return false;
    };

    if(phoneN.length < 10 || phoneN.length > 13){
        alert("Please provide a valid phone number.")
        return false;
    };

    if(name == true && name.length == true && issue == true && issue.length == true && location == true && location.length == true && phoneN == true && phoneN.length == true){
        alert("You have successfully contacted our technician. He/she will be there inside an hour.")
        return true;
    };

    });

});

// Form validation 2

$(document).ready(function(){

    $("#form2").click(function(event2){

        event2.preventDefault();

        // name validation

    var name = $("#customerName2").val();

    if (name == ""){
        alert("Please provide your name.")
        return false;
    };

    if(name.length <= 2){
        alert("Please provide a valid name. \nIt has to be longer than 2 characters.")
        return false;
    };

    // text area validation

    var issue = $("#issue2").val();

    if(issue.length > 0 && issue.length < 10){
        alert("Please provide a more detailed issue you want to be attended to.")
        return false;
    };

    if(issue == ""){
        alert("Please provide an issue you want to be looked at.")
        return false;
    };

    // location validation

    var location = $("#location2").val();

    if(location == ""){
        alert("Please provide your location.")
        return false;
    };

    if(location.length < 10){
        alert("Please provide more information about your location.")
        return false;
    };

    // phone number validation

    var phoneN = $("#phoneNumber2").val();

    if (phoneN == ""){
        alert("Please provide your phone number.")
        return false;
    };

    if(phoneN.length < 10 || phoneN.length > 13){
        alert("Please provide a valid phone number.")
        return false;
    };

    });

});

// Form validation 3

$(document).ready(function(){

    $("#form3").click(function(event3){

        event3.preventDefault();

        // name validation

    var name = $("#customerName3").val();

    if (name == ""){
        alert("Please provide your name.")
        return false;
    };

    if(name.length <= 2){
        alert("Please provide a valid name. \nIt has to be longer than 2 characters.")
        return false;
    };

    // text area validation

    var issue = $("#issue3").val();

    if(issue.length > 0 && issue.length < 10){
        alert("Please provide a more detailed issue you want to be attended to.")
        return false;
    };

    if(issue == ""){
        alert("Please provide an issue you want to be looked at.")
        return false;
    };

    // location validation

    var location = $("#location3").val();

    if(location == ""){
        alert("Please provide your location.")
        return false;
    };

    if(location.length < 10){
        alert("Please provide more information about your location.")
        return false;
    };

    // phone number validation

    var phoneN = $("#phoneNumber3").val();

    if (phoneN == ""){
        alert("Please provide your phone number.")
        return false;
    };

    if(phoneN.length < 10 || phoneN.length > 13){
        alert("Please provide a valid phone number.")
        return false;
    };

    });

});

// end of vidation of the code

// toggles

$(document).ready (function(){

    // animating tecnician 1

    $("#reviewsButton1").click(function(events){

        $(".reviews1").slideToggle();
        $(".hireForm1").hide();

    });

    $("#hireButton1").click(function(){

        $(".hireForm1").slideToggle();
        $(".hireForm2").hide();
        $(".hireForm3").hide();

    });

    // Animating technician 2

    $("#reviewsButton2").click(function(events){

        $(".reviews2").slideToggle();
        $(".hireForm2").hide();

    });

    $("#hireButton2").click(function(){

        $(".hireForm2").slideToggle();
        $(".hireForm1").hide();
        $(".hireForm3").hide();

    });

    // Animating technician 4

    $("#reviewsButton3").click(function(events){

        $(".reviews3").slideToggle();
        $(".hireForm3").hide();

    });

    $("#hireButton3").click(function(){

        $(".hireForm3").slideToggle();
        $(".hireForm2").hide();
        $(".hireForm1").hide();

    });

    events.preventDefault()

});