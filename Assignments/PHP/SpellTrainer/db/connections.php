<?php
    class Database {
        private $hostname = "localhost";
        private $username = "spelltrainerUser";
        private $password = "WebFundamentals2021";
        private $database = "spelltrainer";
        private $port = 3306;
        public $conn;

        function __construct() {
            $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->database, $this->port);
            if ($connection == false) {
                echo "geen connectie met de gegevensbank";
                die();
            }

            $this->conn = $connection;
        }

        function getQuery($sql) {
            return mysqli_query($this->conn, $sql)->fetch_all((MYSQLI_ASSOC));
        }

        function insertQuery($query) {
            mysqli_query($this->conn, $query);
        }

        function closeConnection() {
            $this->conn->close();
        }

        function updateScore($spell) {
            $query = $this->getQuery("SELECT score FROM spells WHERE spell LIKE '$spell';");  //Get the current score for the given spell
            $newScore = (int)$query[0]["score"] + 1;                                                //Add 1 because he got the spell right
            $sql = "UPDATE spells SET score = $newScore WHERE spell like '$spell';";                //Update the score for the given spell
            $this->insertQuery($sql);
            return;
        }
    }
 
?>