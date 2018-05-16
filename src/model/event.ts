import * as Task from './task'

export interface Event {
    id: string,
    endDate: Date | null,   // дублирование даты в формате Date
    startDate: Date | null,
    hidden?: boolean, // не отображать задачу на UI; ставим в true, если задачу удалили, но пока не прошло 5 секунд,
    // во время которых задачу могут восстановить, или задачу перетащили из стакана в сетку, но пока не закончили редактировать
    task: Task.SbrfTask,    // задача приходящая с бэка
}
