//Arquivo de configuração do banco de dados

module.exports = {
    HOST: "babar.db.elephantsql.com",
    USER: "wadjzbfs",
    PASSWORD: "PK9LRUl_kiYp-vTVzC7dS8oDhazvgOs7",
    DB: "wadjzbfs",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };