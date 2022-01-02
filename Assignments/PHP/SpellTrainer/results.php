<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
            Succes!
        </h1>
        <?php
            include "db/connections.php";

            $database = new Database();
            $spell = $_POST["spell"]; //Get the name of the spell

            $validationSql = "SELECT * FROM spells WHERE spell LIKE '$spell';";
            $validationResult = $database->getQuery($validationSql);
            if ($validationResult) { //If the spell exists in the database, the score can be updated
                $database->updateScore($spell);
            }
                
            $spellsValues = $database->getQuery("SELECT * FROM spells;");
        ?>
        <table> <!-- Make a table with the data about the spells -->
            <th>
                spell
            </th>
            <th>
                score
            </th>
            <?php
                foreach($spellsValues as $spellValue) {
            ?>
            <tr>
                <?php
                    echo "<td>" . $spellValue["spell"] . "</td>";
                    echo "<td>" . $spellValue["score"] . "</td>";
                ?>
            </tr>
            <?php
                }
            ?>
        </table>

        <?php
            $database->closeConnection();
        ?>
    </body>
</html>