const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'funDB';


async function main()
{
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('funs');

  // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([
//     { 
//         _id: 1,
//         name: "Apple",
//         price: 15
//     },
//     { 
//         _id: 2,
//         name: "Orange",
//         price: 10
//     },
//     { 
//         _id: 3,
//         name: "Banana",
//         price: 5
//     },
//     { 
//         _id: 4,
//         name: "Coconut",
//         price: 70
//     },
//     { 
//         _id: 5,
//         name: "Pista",
//         price: 250
//     },
//     { 
//         _id: 6,
//         name: "Kaju",
//         price: 1000
//     } 
    
// //   ]);
//   console.log('Inserted documents =>', insertResult);

const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);


const filteredDocs = await collection.find({ _id : 2 }).toArray();
console.log('Found filtered =>', filteredDocs);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());