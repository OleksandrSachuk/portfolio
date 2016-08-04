<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            body{
                text-align: center;
            }
            form{
                margin-top: 100px;
            }
            span{
                font-size: 2em;
            }
            input[type="text"]{
                padding: 10px;
                font-size: 1.2em;
            }
            input[type="submit"]{
                padding: 10px;
                font-size: 2em;
            }
            #information{
                font-size: 2em;
            }
        </style>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script>
            $(document).ready(function () {
                $("input[type='submit']").on("click", function (e) {
                    e.preventDefault();
                    $.ajax({
                        url: "./check.php",
                        type: 'POST',
                        data: ({login: $('#login').val()}),
                        dataType: "html",
                        beforeSend: function () {
                            if ($('#login').val()) {
                                $("#information").text("Checking login...");
                            } else {
                                $("#information").text("Please, enter your login");
                            }
                        },
                        success: function (data) {
                            $("#information").text(data);
                        }
                    });
                });
            });
        </script>
    </head>
    <body>
        <form>
            <span>Please, enter your login</span>
            <br>
            <br>
            <input type="text" id="login">
            <br>
            <br>
            <input type="submit" value="Send">
        </form>
        <br>
        <div id="information"></div>

    </body>
</html>
