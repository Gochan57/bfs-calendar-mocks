import * as Task from './task'

/**
 * Наименования бандлов других приложений.
 **/
export const AppBundleName = {
    PLANNER: 'ufs-taskservice'
}

/**
 * структура для обмена сообщениями между приложениями и пропсы для
 */

/**
 * Сообщения для планировщика
 */
export type PlannerMessage =
    {
        type: 'CREATE_TASK',
        task: {
            startDate?: string
        }
    } |
    {
        type: 'UPDATE_TASK'
        task: {
            id: string
        }
    } |
    {
        type: 'READ_TASK'
        task: {
            id: string
        }
    } |
    {
        type: 'ENTER_RESULT'
        task: {
            id: string
        }
    } |
    {
    type: 'CREATE_TASK',
    task: {
        startDate?: string
    }
}

export type CalendarMessage = {
    /**
     * открыть календарь в режиме подчиненного
     */
    type: 'OtherPersonCalendarMode',
    param: {
        positionId: string, // Id подчиненного
        header?: {
            title: string,  // Имя подчиненного
            backButtonName?: string, // текст кнопки для возврата назад
            backMessage?: {  // сообщение которое передается приложению при нажатиии кнопки назад
                bundleName: string, // имя бандла, которому передается сообщение
                payload?: {          // само сообщение
                    type: string,    // 'BackPage'
                }
            }
        }
    }
}

export interface OutputMessage {
    type: string
    task?: Partial<Task.SbrfTask>
    param?: any
}

export interface InputMessage {
    type: string
    task?: Partial<Task.SbrfTask>
    param?: any
}