import express from 'express'
import bodyParser from 'body-parser'

import * as mocks from './utils/mocks'

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 8080;
const router = express.Router();

router.post('/task-service-bh/v4.0/config', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json({
            success: true,
            body: mocks.generatePlannerConfig()
        })
    }, 2000)
})

router.post('/bfs-calendar-bh/v4.0/config', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json({
            success: true,
            body: mocks.generateCalendarConfig()
        })
    }, 2000)
})

router.post(`/task-service-bh/v4.0/tasks/update`, (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json({
            success: true
        })
    }, 2000)
})

router.post('/task-service-bh/v4.0/tasks', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json({
            success: true,
            body: mocks.generateTaskList(req.body)
        })
    }, 2000)
})

router.post('/task-service-bh/v4.0/tasks/delete/:taskid', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.contentType('application/json; charset=utf-8')
        res.json({
            success: true
        })
    }, 2000)
})

app.use('/', router);
app.listen(port);

console.log('server bfs-calendar-mocks is running on port ' + port);
