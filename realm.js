import Realm from 'realm';

class Book extends Realm.Object {}

Book.schema = {
  name: 'Book',
  properties: {
    recordID: 'int',
    name: 'string',
    author: 'string',
    details: 'string',
  },
  primaryKey: 'recordID',
};

const realm = new Realm({schema: [Book], schemaVersion: 4});

export default realm;

// functionalities of app

const addData = (recordID, name, author, details) => {
    // adding functionality
  realm.write(() => {
    const book = realm.create('Book', {
      recordID,
      name,
      author,
      details,
    });
  });
  return true;
};

const getAllData = () => {
  // getting data from realm
  return realm.objects('Book')
};

const deleteAllData = () => {
  // delete functionality
  realm.write(() => {
    realm.deleteAll()
  })
  return true
};

export {addData, getAllData, deleteAllData};
