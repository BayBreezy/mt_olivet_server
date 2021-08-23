module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("db_host"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("db_name"),
        username: env("db_user"),
        password: env("db_password"),
        ssl: env.bool("DATABASE_SSL", false),
        charset: "utf8mb4",
      },
      options: {
        charset: "utf8mb4",
      },
    },
  },
});
