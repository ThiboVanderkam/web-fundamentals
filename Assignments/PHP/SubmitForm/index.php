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
            Submit form
        </h1>

        <form method="POST" action="results.php">

            <!-- Firstname -->
            <div>
                <label for="firstname">Firstname</label>
                <br>
                <input type="text" name="firstname" id="firstname" required>
            </div>
            <br>

            <!-- Age -->
            <div>
                <label for="age">Age</label>
                <br>
                <input type="number" name="age" id="age" required>
            </div>
            <br>
            
            <!-- Gender -->
            <div>
                <label for="gender">Gender</label>
                <br>
                <select id="gender" name="gender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <br>

            <!-- House -->
            <div>
                <input type="radio" value="Gryffindor" name="house" id="Gryffindor" required> <!-- Only one radio button needs the required attribute to make them all required -->
                <label for="Gryffindor">Gryffindor</label>
                <br>
                <input type="radio" value="Hufflepuff" name="house" id="Hufflepuff">
                <label for="Hufflepuff">Hufflepuff</label>
                <br>
                <input type="radio" value="Slytherin" name="house" id="Slytherin">
                <label for="Slytherin">Slytherin</label>
                <br>
                <input type="radio" value="Ravenclaw" name="house" id="Ravenclaw">
                <label for="Ravenclaw">Ravenclaw</label>
            </div>
            <br>
                
            <input type="submit" value="submit">
        </form>

    </body>
</html>