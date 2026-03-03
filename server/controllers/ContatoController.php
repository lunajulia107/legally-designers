<?php
require_once '../config/database.php';
require_once '../models/Contato.php';

class ContatoController {
    public function registrarContato($data) {
        $database = new Database();
        $db = $database->connect();

        $contato = new Contato($db);
        $contato->nome = $data['nome'] ?? '';
        $contato->celular = $data['celular'] ?? '';
        $contato->tipo_servico = $data['servico'] ?? '';
        $contato->descricao = $data['descricao'] ?? '';

        if ($contato->salvar()) {
            http_response_code(200);
            echo json_encode(["mensagem" => "Contato registrado com sucesso"]);
        } else {
            http_response_code(500);
            echo json_encode(["mensagem" => "Erro ao registrar o contato"]);
        }
    }
}