import {Classifier} from './classifier'
import {EmployeeType} from './type'

export interface Estimated {
    /**
     * Логин пользователя
     */
    login: string;
    /**
     * Фамилия сотрудника
     */
    lastName: string;
    /**
     * Отчество сотрудника
     */
    middleName: string;
    /**
     * Имя сотрудника
     */
    firstName: string;
    /**
     * ID
     */
    id: string;
    /**
     * Эл. почта
     */
    email: string;
    /**
     * Должность
     */
    jobTitle: string;
    /**
     * Наименование позиции/функциональное подчинение
     */
    positionName: string;
    /**
     * Рабочий телефон
     */
    workPhone: string;
    /**
     * Мобильный телефон
     */
    mobilePhone: string;
    /**
     * Внешний логин пользователя
     */
    extLogin: string;
    /**
     * ФИО Сотрудника
     */
    name: string;
    /**
     * Признак основного исполнителя
     */
    primary: boolean;
    /**
     * Признак блокировки
     */
    blocked: boolean;
    /**
     * Роль
     */
    role: Classifier
    /**
     * Тип сотрудника
     */
        type: EmployeeType
    /**
     * Сегмент профиля сотрудника
     */
    businessSegment: Classifier
    /**
     * 11-значный полный код ВСП(ТБ+ОСБ+ВСП) подразделения сотрудника, к которому привязана основная позиция пользователя
     */
    divisionCode: string;
    /**
     * Функциональное подразделение
     */
    funcDivisionName: string;
    /**
     * Номер окна МО, который провел идентификацию
     */
    window: string;
}