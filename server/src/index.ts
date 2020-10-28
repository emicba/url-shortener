import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import monk from 'monk';
import { nanoid } from 'nanoid';
import { Url, Error } from './interfaces';
import schema from './schema';
import errorHandler from './errorHandler';

const app = express();
const port = process.env.PORT || 3000;

const db = monk(process.env.MONGO_URI || 'mongodb://localhost');
const urls = db.get('urls');
urls.createIndex({ slug: 1 }, { unique: true });

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  if (req.headers.accept === 'application/json') {
    res.json({ message: 'OK' });
  } else {
    res.redirect(301, 'https://http.cat/200');
  }
});

app.post('/url', async (req, res, next) => {
  // eslint-disable-next-line prefer-const
  let { slug, url }: Url = req.body;
  try {
    await schema.validate({ slug, url });

    if (!slug) slug = nanoid(7);
    slug = slug.toLowerCase().trim();

    const created = await urls.insert({ slug, url });
    res.json(created);
  } catch (error) {
    if (error.message.startsWith('E11000')) {
      error.message = 'Slug in use 🐛';
    }
    next(error);
  }
});

app.get('/:id', async (req, res, next) => {
  const { id: slug } = req.params;
  try {
    const url: Url | null = await urls.findOne({ slug });
    if (url) {
      res.redirect(301, url.url);
    } else {
      const error: Error = new Error(`${slug} not found`);
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${port}`);
});
