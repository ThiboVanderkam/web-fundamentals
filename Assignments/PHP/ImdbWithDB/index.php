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
            Harry Potter Movies
        </h1>
        <?php
            include "db/connections.php";

            $conn = makeConnectionWithDatabase();
                
            $movies = getQuery($conn, "SELECT * FROM movies;");
        ?>
        <table> <!-- Make a table with the data about the movies -->
            <th>
                Movie
            </th>
            <th>
                Rating
            </th>
            <th>
                Year
            </th>

            <?php
                foreach($movies as $movie) { //Loop over the movies
            ?>
            <tr>
                <?php
                    echo "<td>" . $movie["movie"] . "</td>";
                    echo "<td>" . $movie["rating"] . "</td>";
                    echo "<td>" . $movie["year"] . "</td>";
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