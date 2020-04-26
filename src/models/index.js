import mongoose from 'mongoose';

import Message from './message';
import User from './user';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true});
};
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', ()=>console.log("database is connected"));

const models = { User, Message };
export{ connectDb };
export default models;
