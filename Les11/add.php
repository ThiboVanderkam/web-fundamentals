<?
    $songname = $_GET["songname"];
    $artist = $_GET["artist"];
    //var_dump($_GET);
    //var_dump($artist);
    //var_dump($songname);
    
    include "db/connection.php";
    $conn = makeConnectionWithDatabase();

    $getsql = "SELECT * FROM songs WHERE artist LIKE '$artist' AND songname like '$songname'";
    $songs = getQuery($conn, $getSql);

    if(sizeof($songs) > 0) {
        echo "Sorry maatje hij bestaat al";
    }
    else {
        $insertsql = "INSERT INTO `songs` (`artist`, `songname`) VALUES ('$artist', '$songname');";
        mysqli_query($conn, $insertsql);

        header("Location: http://localhost");
    }
    
    

    closeConnection();
?>