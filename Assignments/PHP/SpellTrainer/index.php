<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spell Trainer</title>
    </head>
    <body>
        <h1>
            Submit form
        </h1>

        <form method="POST" action="results.php">
            <label for="spell">
                Spell
            </label>
            <br>
            <input type="text" name="spell" id="spell" required>
            <input type="submit" value="submit">
        </form>
    </body>
</html>