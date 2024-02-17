-- CreateTable
CREATE TABLE "pet" (
    "id" SERIAL NOT NULL,
    "nome_sobrenome" VARCHAR(150),
    "animal" VARCHAR(8),
    "dono" VARCHAR(150),
    "raca" VARCHAR(200),
    "telefone" VARCHAR(14),
    "nascimento" DATE,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);
