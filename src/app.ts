import express, {Application, Request, Response} from "express" ;
//import userRoutes from './routes/';
import carRoutes from './routes/cars';

const PORT = process.env.PORT || 2121;

const app: Application = express();


app.use('/api/v1/cars', carRoutes);

app.use(express.json());

app.use((req, _res, next) => {  
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.get("/ping", async (_req : Request, res: Response) => {
    res.json(
    "hello from Roman"
    );
});

app.get('/bananas', async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});

app.get('/sirozha', async (_req : Request, res: Response) => {
    res.json({
    message: "this is sirozha",
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });

