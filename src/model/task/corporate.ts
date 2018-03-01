import {SbrfTaskCorporate} from './corporate'
import {SbrfTaskPerson} from './person'
import {SbrfTaskEmployee} from './employee'
import {SbrfTaskAgreement} from './agreement'
import {SbrfTaskCorporateAddress} from './address'
import {Classifier} from './classifier'

export interface SbrfTaskCorporate {
    /**
     * Идентификатор организации в CRM
     */
    crmId: string;
    /**
     * Идентификатор организации в ЕКС
     */
    eksId: string;
    /**
     * Идентификатор родительской организации
     */
    parentId: string;
    /**
     * Наименование организации
     */
    name: string;
    /**
     * Краткое наименование организации
     */
    shortName: string;
    /**
     * Полное наименование (в соответствии с уставом)
     */
    fullName: string;
    /**
     * Латинское наименование
     */
    fullNameEn: string;
    /**
     * ИНН
     */
    inn: string;
    /**
     * ОГРН
     */
    ogrn: string;
    /**
     * КПП
     */
    kpp: string;
    /**
     * ОПФ
     */
    opf: Classifier
    /**
     * Контакты
     */
    contacts: SbrfTaskPerson[];
    /**
     * Идентификатор организации в MDM
     */
    mdmId: string;
    /**
     * Тип карточки организации
     */
    orgCardType: Classifier
    /**
     * Сегмент
     */
    segment: Classifier
    /**
     * Приоритет
     */
    priority: Classifier
    /**
     * Терриориальный банк клиента
     */
    accOrg: string;
    /**
     * ОПФ Наименование
     */
    opfName: string;
    /**
     * Наименование типа карточки организации
     */
    orgCardTypeName: string;
    /**
     * Количество сотрудников
     */
    numEmployees: string;
    /**
     * Список адресов организации
     */
    addresses: SbrfTaskCorporateAddress[];
    /**
     * Наименование отрасли
     */
    industryName: string;
    /**
     * Наименование сегмента
     */
    segmentName: string;
    /**
     * Холдинг
     */
    holding: string;
    /**
     * Текст заметки
     */
    note: string;
    /**
     * Список членов команды организации
     */
    teamMembers: SbrfTaskEmployee[];
    /**
     * Список договоров организации
     */
    agreements: SbrfTaskAgreement[];
    zpflag: boolean;
    akkflag: boolean;
    mokkflag: boolean;
    fot: string;
}