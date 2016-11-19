import * as express from 'express';
import * as path from 'path';
import * as multer from 'multer';
import container from './inversify.config';
import { ConfigService } from './services';

var configService = container.get(ConfigService);

function errorHandler(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500)
        .render('error', {
            message: err.message,
            error: err
        });
};

var app = express();
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.use(errorHandler);

app.post('/file-size', upload.single('file'), async (req : any, res : any, next : any) => {
    try {
        console.log(req.file);
        return res.json({ size : req.file.size});
    }
    catch (err) {
        return next(err);
    }
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(configService.port);