// Models para representar os dados de contato e interagir com o banco de dados
<?php
class Contato {
    private $conn;
    private $table = "contatos";

    public $nome;
    public $celular;
    public $tipo_servico;
    public $descricao;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function saveDatas() {
        $query = "INSERT INTO {$this->table} (nome, celular, tipo_servico, descricao)
                  VALUES (:nome, :celular, :tipo_servico, :descricao)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":celular", $this->celular);
        $stmt->bindParam(":tipo_servico", $this->tipo_servico);
        $stmt->bindParam(":descricao", $this->descricao);

        return $stmt->execute();
    }
}