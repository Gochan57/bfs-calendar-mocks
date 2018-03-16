import * as Task from './task'

export interface Event {
    id: string,
    selected: boolean,      // выбранная в гриде задача
    // color: CalendarEnum.CalendarColorType, пока не используется, но скоро понадобится
    endDate: Date | null,   // дублирование даты в формате Date
    startDate: Date | null,
    willBeDeleted: boolean, // Нажали на удаление задачи, теперь она не будет отображаться в стакане задач и календаре,
                            // и если не нажмут на восстановлние задачи, она удалится польностью
    task: Task.SbrfTask,    // задача приходящая с бэка
}