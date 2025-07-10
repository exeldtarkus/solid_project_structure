import express from 'express';
import userRoutes from './routes/UserRoute';
import { errorHandler } from './middlewares/ErrorHandler';
import { notFoundHandler } from './middlewares/NotFoundHandler';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
