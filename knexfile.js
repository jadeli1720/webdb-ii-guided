// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //used for sqlite
    connection: {
      filename: './data/produce.db3', //this needs to be from the root folder!!!!!! Not from where this file is
    }, //can be an object or a string
  }
};
