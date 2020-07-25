import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log("App listening on port 3333!"))

