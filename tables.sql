create table t_recetas(
	rec_id int primary key auto_increment,
    rec_name varchar(50) not null unique,
    rec_kind varchar(50) not null,
    rec_url varchar(100)
);


create table t_cantidad(
	can_id int primary key auto_increment,
    can_name varchar(50),
    can_kind varchar(10)
);

create table t_ingredientes(
	ing_id int primary key auto_increment,
    ing_name varchar(50) not null unique,
    ing_kind varchar(50) not null,
    ing_can_id int not null
);

alter table t_ingredientes
	add constraint ing_fk1 foreign key(ing_can_id)
    references t_cantidad (can_id) on delete cascade; 


create table t_despensa(
    des_ing_id int,
    des_fec_cad date not null,
    des_quantity int(5)
);

alter table t_despensa
	add constraint des_fk1 foreign key(des_ing_id)
    references t_ingredientes (ing_id) on delete cascade; 

create table t_ingredientes_recetas(
	ingrec_rec_id int,
    ingrec_ing_id int,
    ingrec_quantity int(5)
);

alter table t_ingredientes_recetas
	add constraint ingrec_fk1 foreign key(ingrec_ing_id)
    references t_ingredientes (ing_id) on delete cascade; 
    
alter table t_ingredientes_recetas
	add constraint ingrec_fk2 foreign key(ingrec_rec_id)
    references t_recetas (rec_id) on delete cascade; 

create table t_recipes_list(
    recl_id int primary key auto_increment,
    recl_rec_id int not NULL,
    recl_fec TIMESTAMP not null
);

alter table t_recipes_list
    add constraint recl_fk1 foreign key(recl_rec_id)
    references t_recipes(rec_id) on DELETE cascade;