<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            include "db/connections.php";

            $firstname = $_POST["firstname"];
            $age = $_POST["age"];
            $gender = $_POST["gender"];
            $house = $_POST["house"];

            $conn = makeConnectionWithDatabase();

            $insertSql = "INSERT INTO hogwarts (firstname, age, gender, house) VALUES ('$firstname' ,$age, '$gender', '$house');";
            insertQuery($conn, $insertSql);

            $students = getQuery($conn, "SELECT * FROM hogwarts;");
        ?>
        <h1>
            Succes!
        </h1>

        <table> <!-- Make a table with the data about the movies -->
            <th>
                Firstname
            </th>
            <th>
                Age
            </th>
            <th>
                Gender
            </th>
            <th>
                House
            </th>

            <?php
                foreach($students as $student) { //Loop over the movies
            ?>
            <tr>
                <?php
                    echo "<td>" . $student["firstname"] . "</td>";
                    echo "<td>" . $student["age"] . "</td>";
                    echo "<td>" . $student["gender"] . "</td>";
                    echo "<td>" . $student["house"] . "</td>";
                ?>
            </tr>
            <?php
                }
            ?>
        </table>

        <?php
            closeConnection($conn);
        ?>
    </body>
</html>