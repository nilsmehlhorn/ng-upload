import * as express from 'express';
import * as fileUpload from 'express-fileupload'

const app = express();

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }))

app.post('/api/upload', (req, res) => {
    console.log(`Successfully uploaded ${req.files.file.name}`);
    res.sendStatus(200)
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
