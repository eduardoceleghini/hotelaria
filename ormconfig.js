module.exports = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'hotelaria',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true
  };