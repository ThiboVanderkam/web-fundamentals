<?php
    class Database {
        private $hostname = "localhost";
        private $username = "webshop";
        private $password = "webshop";
        private $database = "webshop";
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
    }
    

    

