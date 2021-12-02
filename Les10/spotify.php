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
            $popularSongs = [
                "Billie Ajlisch" => "bad guy",
                "K3" => "waterval",
                "Kelah Ballie" => "slide"
            ];
            
            
            

            $classicSongs = [
                "Pearl Jam" => "alive",
                "Nick Cave" => "Into my arms"
            ];
            
            createPlaylist($popularSongs, "Popular songs");
            createPlaylist($classicSongs, "Classic songs");
            

            function createPlaylist($songs, $listName) {
                echo "<h2>" . $listName . "</h2>";
                echo "<ul>";
    
                foreach($songs as $artist => $song) {
                    echo "<li>" . $artist . " - " . $song . "</li>";
                }
    
                echo "</ul>";
            }

            function createSong($artist, $song) {
                $listItem = "<li>" . $artist . " - " . $song . "</li>";
                return $listItem;
            }

            
  
            ?>
        
    </body>
</html>