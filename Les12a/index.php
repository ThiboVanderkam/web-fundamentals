<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    </head>
    <body>
        <h1>
            Choose a schoen
        </h1>

        <?php
            include "db/index.php";

            $database = new Database();
            $database->getQuery("SELECT * FROM products;");

            $products = $database->getQuery("SELECT * FROM products;");
            
            foreach($products as $product) {
                $productName = $product["name"];
                $productColor = $product["color"];
                $productId = $product["id"];
        ?>
            <div class="product hide" data-id="<?php echo $productId; ?>">
                <h2>
                    <?php echo $productName . " " . $productColor; ?>
                </h2>

                <img src="assets/images/adidas_<?php echo $productColor; ?>.jpeg" width="25%">

            </div>
        <?php      
            }
        ?>
    </body>
</html>