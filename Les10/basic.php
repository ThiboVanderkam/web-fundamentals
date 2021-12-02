<?php
    $firstName = "Collin";
    $lastName = "Van der Vorst";
    echo $firstName;
    echo "<br>";
    echo $lastName;
    
    echo "<br>";
    var_dump($firstName);
    echo "<br>";

    $fullName = $firstName . " " . $lastName;
    echo $fullName;

    $age = 30;
    $length = 1.94;

    $isAwesome = true;
    $isRich = false;
    echo "<br>";

    $friends = ["Phaedra", "Cédric", "Robert"];
    echo $friends[0];

    echo "<br>";
    echo sizeof($friends);

    for ($index = 0; $index < sizeof($friends); $index++) {
        echo "<br>";
        echo $friends[$index];
    }

    echo "<br>";
    echo "<br>";

    foreach ($friends as $index => $friend) {
        echo "<br>";
        echo $index + 1 . " ";
        echo $friend;
    }


    // associative array
    $friends = [
        "een" => "Phaedra",
        "twee" => "Cédric",
        "drie" => "Robert"
    ];

    echo "<br>";
    echo $friends["een"];

    const APP_NAME = "Mijn app";

    $number1 = 10;
    $number2 = 5;

    echo $number1 + $number2;
    echo "<br>";
    echo $number1 - $number2;
    echo "<br>";
    echo $number1 * $number2;
    echo "<br>";
    echo $number1 / $number2;
    echo "<br>";
    echo $number1 % $number2;
    echo "<br>";
    
    $age = 69;
    $isFemale = true;
    if ($age < 16) {
        echo "je mag geen pinten drinken";
    }
    else if ($age < 18) {
        echo "je mag pintjes drinken, maar geen sterke drank";
    }
    else {
        echo "je mag alles drinken";
    }
    echo "<br>";
    echo "<br>";

    $fruit = "orange";

    switch($fruit) {
        case "orange":
            echo "das gezond";
            break;
        case "apple":
            echo "das gezond";
            break;
        default:
            echo "WHOOPIE";
            break;
    }

    echo "<br>";
    echo "<br>";

    $counter = 0;
    while ($counter < 10) {
        echo $counter . "<br>";
        $counter++;
    }


