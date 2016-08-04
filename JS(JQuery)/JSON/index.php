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
            select{
                margin-top: 100px;
                min-width: 200px;
                font-size: 2em;
            }
        </style>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script>
            $(document).ready(function () {
                $("select[name='country']").on("change", function (e) {
                    console.log('OK');
                    e.preventDefault();
                    $("select[name='city']").empty();
                    $.post('./city.php', {country: $("select[name='country']").val()}, function (data) {
                        console.log($("select[name='country']").val());
                        console.log('data' + data);
                        data = JSON.parse(data);
                        console.log('data2' + data);
                        for (var key in data) {
                            $("select[name='city']").
                                    append($("<option value'" + key + "'>" + data[key] + "</option>"));
                        }
                    });
                });
            });
        </script>
    </head>
    <body>
        <form>
            <select name="country">
                <option value="0"></option>
                <option value="ukraine">Ukraine</option>
                <option value="russian">Russian</option>
            </select>
            <select name="city"></select>
        </form>
    </body>
</html>
