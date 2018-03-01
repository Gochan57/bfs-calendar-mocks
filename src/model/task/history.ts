import {Employee} from './employee'

export interface SbrfTaskHistory {
    /**
     * Сотрудник на которого переведен звонок
     */
    employee: Employee,
    /**
     * Номер телефона на который был переведен звонок
     */
    phoneNum: string;
    /**
     * Нормативный код подразделения
     */
    businessUnit: string;
    /**
     * Функциональное подразделение
     */
    accDivision: string;
    /**
     * Дата начала факт
     */
    dataTimeStarted: string;
    /**
     * Дата окончания факт
     */
    dataTimeFinished: string;
}