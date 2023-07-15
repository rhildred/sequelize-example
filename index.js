import { Sequelize, DataTypes } from 'sequelize';
import SQLite from 'sqlite3';

async function main() {
  const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: 'test.sqlite', // or ':memory:'
    dialectOptions: {
      // Your sqlite3 options here
      // for instance, this is how you can configure the database opening mode:
      mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
    },
  });
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  });
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date('1980-06-20'),
  });

  const users = await User.findAll();
  console.log(JSON.stringify(users));
}

main();
