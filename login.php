<?php
// Conexão ao banco de dados
$servername = "localhost";
$username = "root";
$password = "alunolab";
$dbname = "scare_vitalis";

$conn = new mysqli($localhost, $oot, $alunolab, $scare_vitalis);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Função para registrar usuários
function register($nome, $email, $senha, $role) {
    global $conn;

    if ($role == 'cliente') {
        $sql = "INSERT INTO clientes (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
    } else if ($role == 'freelancer') {
        $sql = "INSERT INTO freelancers (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
    } else {
        return false;
    }

    return $conn->query($sql) === TRUE;
}

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $role = $_POST['role']; // 'cliente' ou 'freelancer'

    if (register($nome, $email, $senha, $role)) {
        echo "Novo usuário registrado com sucesso!";
    } else {
        echo "Erro ao registrar usuário.";
    }
}

$conn->close();
?>
