import express, {Application, Request, Response} from "express" ;

const PORT = process.env.PORT || 2121;

const app: Application = express();

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

