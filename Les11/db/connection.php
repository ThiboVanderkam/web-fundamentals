<?php
    function makeConnectionWithDatabase() {
        $hostname = "localhost";
        $dbUser = "spotifyAdmin";
        $dbPassword = "supersecretpassword";
        $dbName = "spotify";
        $port = 3306;

        $conn = mysqli_connect($hostname, $dbUser, $dbPassword, $dbName, $port);

        if ($conn == false) {
            echo "ik kan de database niet bereiken";
            die();
        }
        return $conn;
    }
    
    function getQuery($conn, $query) {
        $songs = mysqli_query($conn, $query)->fetch_all(MYSQLI_ASSOC);
        return $songs;
    }

    function closeConnection($conn) {
        $conn->close();
    }

    function insertQuery($conn, $query) {
        mysqli_querry($conn, $query);
    }

?>