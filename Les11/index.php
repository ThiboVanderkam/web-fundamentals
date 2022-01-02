<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spotify.php</title>
    </head>
    <body>
        <?php
            include "components/nav.php";
        ?>

        <h1>
            Overview of spotify songs
        </h1>

        <ul>
            <?php
                include "db/connection.php";

                $conn = makeConnectionWithDatabase();
                $songs = getQuery($conn, "SELECT * FROM SONGS;");
                
                foreach($songs as $song) {
            ?>
                <li>
                    <?php
                        echo $song["artist"] . " - " . $song["songname"];              
                    ?>
                </li>
            <?php
                }

                closeConnection($conn);
            ?>
        </ul>

        <hr>

        <form action="add.php" method="GET">
            <label for="input-artist">
                Artist
            </label>
            <br>
            <input type="text" id="input-artist" name="artist">
            <br>

            <label for="input-songname">
                Songname
            </label>
            <br>
            <input type="text" id="input-songname" name="songname">
            <br>
            <button type="submit">
                submit
            </button>
        </form>

        
    </body>
</html>

