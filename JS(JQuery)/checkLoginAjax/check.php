<?php
sleep(2);
if (isset($_POST['login']) && $_POST['login'] != '') {
    $login = $_POST['login'];
    if ($login == 'admin'){
        echo 'login is busy';
    } else {
        echo 'login is free';
    }
} else {
    echo "didn't get login" ;
}
?>
