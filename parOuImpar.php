<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Par ou Ímpar</title>
</head>
<body>
    <h1>Este número é ímpar ou par?</h1>
    
    <form method="POST">
        <label for="numero">Digite um número:</label>
        <input type="number" id="numero" name="numero" required>
        <button type="submit">Verificar</button>
    </form>
    
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero = $_POST['numero'];
        
        if ($numero % 2 == 0) {
            echo "<p>O número $numero é par.</p>";
        } else {
            echo "<p>O número $numero é ímpar.</p>";
        }
    }
    ?>
</body>
</html>
