import * as CalendarEnum from './calendarGrid'
import * as Task from './task'

export interface Event {
    id: string,
    selected: boolean,
    type?: CalendarEnum.CalendarEventType,
    color: CalendarEnum.CalendarColorType,
    description: string,
    title: string,
    endDate: Date | null,
    startDate: Date | null,
    location: string,
    taskType?: Task.TaskTypeClassifier,
    priority?: Task.TaskPriorityClassifier,
    willBeDeleted: boolean, // Нажали на удаление задачи, теперь она не будет отображаться в стакане задач и календаре,
    // и если не нажмут на восстановлние задачи, она удалится польностью
    task: Task.SbrfTask,  // задача приходящая с бэка
}