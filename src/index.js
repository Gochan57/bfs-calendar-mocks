import express from 'express';
import bodyParser from 'body-parser';
import response from './response/index';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8080;
const router = express.Router();
router.get('/task-service-bh/config/', (req, res) => {
    setTimeout(() => {
        res.json(response.config);
    }, 2000);
});
app.use('/', router);
app.listen(port);
console.log('server bfs-calendar-mocks running on port ' + port);
//# sourceMappingURL=index.js.map