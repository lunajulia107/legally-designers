// Configurações de CORS
<?php 
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Permitir requisições OPTIONS para pré-voo CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Controller para lidar com as requisições de contato
require_once '../controllers/ContatoController.php';

$input = json_decode(file_get_contents("php://input"), true);

// Verificar o método da requisição
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller = new ContatoController();
    $controller->registerContact($input);
} else {
    http_response_code(405);
    echo json_encode(["mensagem" => "Método não permitido"]);
}
