import express from 'express'
import bodyParser from 'body-parser'

import * as Response from './response/index'

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 8080;
const router = express.Router();

router.post('/task-service-bh/config/', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json(Response.configPlanner())
    }, 2000)
})

router.post('/task-service-bh/config-calendar/', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json(Response.configCalendar())
    }, 2000)
})

router.post('/task-service-bh/tasks/', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json(Response.taskList(req.body))
    }, 2000)
})

router.post('/task-service-bh/tasks/delete/:taskid', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json(Response.deleteTask())
    }, 2000)
})

app.use('/', router);
app.listen(port);

console.log('server bfs-calendar-mocks is running on port ' + port);
