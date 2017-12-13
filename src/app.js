import express from 'express';
const bodyParser = require('body-parser');
const response = require('./response');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8080;
const router = express.Router();
router.get('/task-service-bh/config/', function (req, res) {
    setTimeout(function () {
        res.json(response.config);
    });
});
app.use('/', router);
app.listen(port);
console.log('erver bfs-calendar-mocks running on port ' + port);
//# sourceMappingURL=app.js.map