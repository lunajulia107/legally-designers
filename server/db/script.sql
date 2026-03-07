create database legally_designers;

use legally_designers;

-- =========================
-- tabela: contatos
-- =========================
create table contatos (
    id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(150) not null,
    telefone varchar(20),
    mensagem text not null,
    criado_em timestamp default current_timestamp
) engine=innodb default charset=utf8mb4;
