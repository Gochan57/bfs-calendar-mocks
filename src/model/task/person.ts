import {Phone} from './phone'
import {JobTitleType} from './type'
import {Classifier} from './classifier'

export interface SbrfTaskPerson {
    /**
     * Дата рождения
     */
    birthDate: string;
    /**
     * StubId клиента
     */
    stubId: string;
    /**
     * EPKId клиента
     */
    epkId: string;
    /**
     * ФИО клиента банка
     */
    fullName: string;
    /**
     * Фамилия
     */
    lastName: string;
    /**
     * Имя
     */
    firstName: string;
    /**
     * Отчество
     */
    middleName: string;
    /**
     * Дата выдачи документа
     */
    docDate: string;
    /**
     * Тип документа
     */
    docType: Classifier
    /**
     * Серия + номер документа
     */
    documentSerNum: string;
    /**
     * Сегмент клиента
     */
    segment: Classifier
    /**
     * Список номеров телефона клиента
     */
    phones: Phone[];
    /**
     * Идентификатор клиента
     */
    id: string;
    /**
     * Электронная почта
     */
    email: string;
    /**
     * Должность контакта
     */
    jobTitle: string;
    /**
     * Тип должности
     */
    typeJobTitle: JobTitleType;
    /**
     * Пол
     */
    gender: Classifier
    /**
     * Рабочий телефон
     */
    workPhone: string;
    /**
     * Мобильный телефон
     */
    mobilePhone: string;
    /**
     * Основная эл. почта
     */
    primaryEmail: string;
    /**
     * Основной телефон
     */
    primaryPhone: string;
    /**
     * Тип отношений Контакта с Организацией
     */
    relType: Classifier
}