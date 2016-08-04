<?php

if(isset($_POST['country']) && $_POST['country'] == 'ukraine') echo json_encode (array("0" => "Kiev", "1" => "Kharkov"));
if(isset($_POST['country']) && $_POST['country'] == 'russian') echo json_encode (array("0" => "Moscow", "1" => "Rostov"));

