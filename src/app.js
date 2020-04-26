import 'dotenv/config';

import cors from 'cors';

import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('root'),
  };
  next();
});

// Routes
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// Start
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);
    createUsersWithMessages();
  }
  app.listen(process.env.PORT, () =>console.log(`listening on port localhost:${process.env.PORT}`));
});

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'Josue Yenga',
  });

  const user2 = new models.User({
    username: 'Peter Doe',
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React🎅',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Happy to release ...🎅',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'Published a complete ...🎅',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();
};