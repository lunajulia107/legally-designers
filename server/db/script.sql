create database legally_designers;

use legally_designers;

-- =========================
-- tabela: contatos
-- =========================
create table contatos (
    id int auto_increment primary key,
    nome varchar(100) not null,
    celular varchar(20) not null,
    tipo_servico varchar(100) not null,
    descricao text,
    criado_em timestamp default current_timestamp
) engine=innodb default charset=utf8mb4;
