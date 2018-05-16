import * as Task from './task'

/**
 * Наименования бандлов других приложений.
 **/
export const AppBundleName = {
    PLANNER: 'ufs-taskservice'
}

/**
 * Общий вид исходящего сообщения
 */
export interface OutputMessage {
    type: string
    payload?: {
        task?: Partial<Task.SbrfTask>
        param?: any
    }
}

/**
 * Общий вид входящего сообщения
 */
export interface InputMessage {
    type: string
    task?: Partial<Task.SbrfTask>
    param?: any
}

/**
 * Сообщения для планировщика
 */
export type PlannerMessage = PlannerMessageReadTask | PlannerMessageUpdateTask | PlannerMessageCreateTask | PlannerMessageEnterResult

export interface PlannerMessageReadTask extends OutputMessage {
    type: 'READ_TASK',
    payload: {
        task: {
            id: string
        }
    }
}

export interface PlannerMessageUpdateTask extends OutputMessage {
    type: 'UPDATE_TASK',
    payload: {
        task: {
            id: string
        }
    }
}

export interface PlannerMessageCreateTask extends OutputMessage {
    type: 'CREATE_TASK',
    payload: {
        task: {
            startDate?: string
        }
    }
}

export interface PlannerMessageEnterResult extends OutputMessage {
    type: 'ENTER_RESULT',
    payload: {
        task: {
            id: string
        }
    }
}

export type CalendarMessage = CalendarMessageOtherPerson | CalendarMessageNavigateBack

/**
 * открыть календарь в режиме подчиненного
 */
export interface CalendarMessageOtherPerson extends InputMessage{

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

/**
 * возврат в приложение Календаря
 */
export interface CalendarMessageNavigateBack extends InputMessage
{
    type: 'NAVIGATE_BACK'
}
