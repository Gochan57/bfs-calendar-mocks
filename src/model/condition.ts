import * as Task from './task'

/**
 * Общие поля в проверке условия
 */
export interface BaseCheck {
    /**
     * Тип проверки (ROLE, TASK_FIELD, ...) - переопределяется в классе наследнике
     * @maxLength 255
     */
    type: string,
    /**
     * Оператор проверки
     * @maxLength 255
     */
    when: '==' | '!=' | '>=' | '<=',
    /**
     * Правая часть в проверке условия
     */
    value: string | number | Date
}
/**
 * Проверка условия на роль
 */
export interface RoleCheck extends BaseCheck{
    /**
     * Тип проверки (проверяется роль)
     * @maxLength 255
     */
    type: 'ROLE',
    /**
     * Ожидаемое значение роли
     * @maxLength 255
     */
    value: string
}
/**
 * Режим отображения календаря
 * @maxLength 255
 */
export type CalendarMode = 'MainCalendarMode' | 'OtherPersonCalendarMode'
/**
 * Проверка условия на параметры программы
 */
export interface CalendarModeCheck extends BaseCheck{
    /**
     * Тип проверки (проверяется роль)
     * @maxLength 255
     */
    type: 'CALENDAR_MODE',

    /**
     * Ожидаемое значение режима
     * @maxLength 255
     */
    value: CalendarMode
}

/**
 * Проверка условия на поле в задаче
 */
export interface TaskFieldCheck extends BaseCheck{
    /**
     * Тип проверки (проверяется роль)
     * @maxLength 255
     */
    type: 'TASK_FIELD',
    /**
     * Поле в задаче, значение которого проверяется
     * @maxLength 255
     */
    param: keyof Task.SbrfTask,
}
/**
 * Проверка условия
 */
export type Check = RoleCheck | TaskFieldCheck | CalendarModeCheck
/**
 * Оператор в условии
 */
export interface Operator {
    /**
     * Тип оператора
     * @maxLength 255
     */
    operator: 'AND' | 'OR',
    /**
     * Список операндов
     */
    operands: Condition[]
}
/**
 * Условие
 */
export type Condition = Check | Operator