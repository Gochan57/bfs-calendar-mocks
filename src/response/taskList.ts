import * as Model from '../model/task';
import {Response} from 'src/model/common';

export default function taskList (param: Model.SbrfTaskFilter): Response<Model.SbrfTask[]> {
    const sizePage = param.pageSize || 100
    const page = param.pageNum || 0

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const yestarday = (new Date(new Date().getTime() - 24 * 60 * 60 * 1000)).toLocaleString('en-US', options) + ' ' // 'November 3, 2017 '
    const today = (new Date()).toLocaleString('en-US', options) + ' ' // 'November 3, 2017 '
    const tomorrow = (new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toLocaleString('en-US', options) + ' ' // 'November 8, 2017 '

    const models: Model.SbrfTask[] = [
        {
            title: 'ПромСтройИнвест, ООО',
            description: 'Срочное принятие бюджета на следущий год.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: today + '10:11:00',
            endDate: today + '11:12:00',
        },

        {
            title: 'Удача, ООО2',
            description: 'Отложить на завтра все, что можно отложить сегодня.',
            taskType: {ref: Model.TaskType.MEETING},
            priority: {ref: Model.TaskPriority.MEDIUM},
            startDate: yestarday + '13:12:00',
            endDate: yestarday + '15:20:00',
        },

        {
            title: 'Удача, ООО3',
            description: 'Перевыпуск карты Visa Classic однозначно показывает, что график функции многих переменных нетривиален.',
            taskType: {ref: Model.TaskType.OTHER},
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: yestarday + '15:13:00',
            endDate: today + '17:24:00',
        },
        {
            title: 'ISCReam ',
            description: 'Демо ',
            taskType: {ref: Model.TaskType.MEETING},
            priority: {ref: Model.TaskPriority.MEDIUM},
            startDate: today + '14:00:00',
            endDate: today + '15:00:00',
        },

        {
            title: 'Удача, ООО4',
            description: 'Перевыпуск многих переменных нетривиален.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '02:24:00',
            endDate: tomorrow + '03:24:00',
        },

        {
            id: '5',
            title: 'Удача3242, ООО',
            description: 'Срочный перевыпуск карты.',
            taskType: {ref: Model.TaskType.MEETING},
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: today + '02:13:00',
            endDate: today + '01:13:00',
        },
        {
            title: 'Удача 6, ООО6',
            description: 'Перевыпуск многих переменных нетривиален.',
            taskType: {ref: Model.TaskType.OTHER},
            priority: {ref: Model.TaskPriority.MEDIUM},
            startDate: tomorrow + '01:24:00',
            endDate: tomorrow + '03:24:00',
        },
        {
            title: 'Удача 7, ООО7',
            description: 'Срочное совещание в министерстве',
            taskType: undefined,
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: tomorrow + '03:10:00',
            endDate: tomorrow + '03:24:00',
        },

        {
            title: 'От субботы до понедельника CalendarItem Title Test 1 25',
            description: 'Позвонить очень важному клиенту  очень очень очень очень длинный текст поздравления с благими пожеланиями и прочими удовольствиями.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '13:24:00',
            endDate: tomorrow + '15:24:00',
        },
        {
            title: 'От субботы до понедельника CalendarItem Title Test 1 25',
            description: 'Позвонить очень важному клиенту  очень очень очень очень длинный текст поздравления с благими пожеланиями и прочими удовольствиями.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '15:24:00',
            endDate: tomorrow + '16:24:00',
        },
        {
            title: 'От субботы до понедельника CalendarItem Title Test 1 25',
            description: 'Позвонить очень важному клиенту  очень очень очень очень длинный текст поздравления с благими пожеланиями и прочими удовольствиями.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '15:24:00',
            endDate: tomorrow + '17:24:00',
        },
    ]
    const tasks: Model.SbrfTask[] = []

    for (let i = 0; i < sizePage; i++) {
        let index = i + page * sizePage
        const item = {...models[index % models.length]}
        if (param) {
            const taskTypeMap: {[key: string]: Model.TaskType} = {
                Calling: Model.TaskType.CALL,
                Meeting: Model.TaskType.MEETING,
                Task: Model.TaskType.OTHER,
            }
            let datePlanTo = param.datePlanTo ? new Date(param.datePlanTo) : null
            let taskType = Array.isArray(param.type) ? param.type.map(item => taskTypeMap[item]).filter(item => item) : null
            let priority = param.priority ? [Model.TaskPriority.HIGH] : null  // можно будет добавить ASAP

            if (Array.isArray(priority)) {
                if (!(item.priority && item.priority.ref)) { // не установлены атрибуты
                    continue
                }
                if ((item.priority && item.priority.ref && priority.indexOf(item.priority.ref) === -1)) {
                    continue
                }
            }
            if (Array.isArray(taskType)) { // есть фильтр
                if (!(item.taskType && item.taskType.ref)) { // не установлены атрибуты
                    continue
                }
                if ((item.taskType && item.taskType.ref && taskType.indexOf(item.taskType.ref) === -1)) {
                    continue
                }
                //alert(JSON.stringify(taskType) + JSON.stringify(param))
            }
            if (datePlanTo && item.endDate && datePlanTo.getTime() <= (new Date(item.endDate)).getTime()) {
                continue
            }

        }
        tasks.push({
            id: '' + (index + 1),
            title: item.title,
            description: item.description,
            startDate: undefined,
            endDate: item.endDate,
            priority: item.priority,
            taskType: item.taskType,
            meetingLocation: 'Переговорная 215 оранж',
        })

    }
    return {
        success: true,
        body: tasks
    }
}
