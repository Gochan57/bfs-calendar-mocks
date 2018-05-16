import * as Config from '../config'
import {SbrfTaskProduct} from './product'
import {SbrfTaskCorporate} from './corporate'
import {SbrfTaskPerson} from './person'
import {SbrfTaskEmployee} from './employee'
import {SbrfTaskLead} from './lead'
import {SbrfTaskComment} from './comment'
import {SbrfTaskHistory} from './history'
import {Estimated} from './estimated'
import {SbrfTaskDeal} from './deal'
import {Pledges} from './pledge'
import {Classifier,ClassifierRef} from './classifier'
import {TaskStatus, TaskPriority, TaskType, ListType} from './type'

export interface TaskPriorityClassifier extends Classifier {
    ref: TaskPriority;
}

export interface TaskTypeClassifier extends Classifier {
    ref: TaskType;
}

export interface SbrfTask {
    /**
     * Идентификатор
     * @maxLength 255
     */
    id: string;
    /**
     * Идентификатор родительской задачи
     * @maxLength 255
     */
    parentTaskId: string;
    /**
     * Заголовок
     * @maxLength 255
     */
    title: string;
    /**
     * Подзаголовок
     * @maxLength 255
     */
    subtitle: string;
    /**
     * Описание
     * @maxLength 255
     */
    description: string;
    /**
     * Дата начала
     * @maxLength 255
     */
    startDate?: string;
    /**
     * Дата завершения
     * @maxLength 255
     */
    endDate?: string;
    /**
     * Статус
     */
    status?: ClassifierRef<TaskStatus>
    /**
     * Тип задачи
     */
    taskType?: ClassifierRef<TaskType>
    /**
     * Привязка ко времени
     * @maxLength 255
     */
    timeRef?: Config.TimeRef
    /**
     * Приоритет
     */
    priority?: ClassifierRef<TaskPriority>
    /**
     * Подзадачи
     */
    subtasks: SbrfTask[];
    /**
     * Связанные сотрудники
     */
    employees: SbrfTaskEmployee[];
    /**
     * Дата создания
     * @maxLength 255
     */
    createdOn?: string;
    /**
     * Плановая дата начала
     * @maxLength 255
     */
    plannedStart?: string;
    /**
     * Плановая дата завершения
     * @maxLength 255
     */
    plannedEnd?: string;
    /**
     * Фактическая дата начала
     * @maxLength 255
     */
    factStart?: string;
    /**
     * Фактическая дата завершения
     * @maxLength 255
     */
    factEnd?: string;
    /**
     * Потенциальные продажи
     */
    leads: SbrfTaskLead[];
    /**
     * Клиенты ЮЛ
     */
    corporates: SbrfTaskCorporate[];
    /**
     * Место встречи
     * @maxLength 255
     */
    meetingLocation: string;
    /**
     * Комментарий к результату
     * @maxLength 255
     */
    decision: string;
    /**
     * Результат
     */
    actionResult?: Classifier
    /**
     * Кампания
     * @maxLength 255
     */
    campaignName: string;
    /**
     * Продуктовые предложения
     */
    products: SbrfTaskProduct[];
    /**
     * Клиенты ФЛ
     */
    persons: SbrfTaskPerson[];
    /**
     * Добавить в Outlook
     * @maxLength 255
     */
    sendToOutlook: string;
    /**
     * Идентификатор версии записи (изменяемой, т.е. исходной)
     */
    modId?: number;
    /**
     * Канал привлечения
     */
    channel?: Classifier
    /**
     * Источник создания задачи
     * @maxLength 255
     */
    source: string;
    /**
     * Уведомления по SMS -Y, -N
     */
    notifyBySms: boolean;
    /**
     * Номер для уведомлений по SMS
     * @maxLength 255
     */
    smsPhoneNumber: string;
    /**
     * ID Звонка
     * @maxLength 255
     */
    callId: string;
    /**
     * Номер телефона вызова
     * @maxLength 255
     */
    callPhoneNumber: string;
    /**
     * № обращения в CRM
     * @maxLength 255
     */
    clientRequestNumber: string;
    /**
     * Область задачи
     */
    area?: Classifier
    /**
     * Тематика обращения
     */
    split?: Classifier
    /**
     * Подсплит
     * @maxLength 255
     */
    mainSplit: string;
    /**
     * Признак совпадения инициатора и текущего главного исполнителя
     */
    initiatorFlg: boolean;
    /**
     * Уникальный идентификатор операции создания
     * @maxLength 255
     */
    operUID: string;
    /**
     * Комментарии
     */
    comments: SbrfTaskComment[];
    /**
     * История изменений
     */
    history: SbrfTaskHistory[];
    /**
     * Требует утверждения
     */
    requiresApproval: boolean;
    /**
     * Идентификатор ГСЗ (Для задач на включение в ГСЗ)
     * @maxLength 255
     */
    gszId: string;
    /**
     * Срок исполнения
     * @maxLength 255
     */
    dueDate: string;
    /**
     * Идентификатор карточки обращения
     * @maxLength 255
     */
    referenceCrmId: string;
    /**
     * Идентификатор карточки взаимодействия
     * @maxLength 255
     */
    interactionCrmId: string;
    /**
     * Новая плановая дата начала
     * @maxLength 255
     */
    newPlannedStart: string;
    /**
     * Новая плановая дата окончания
     * @maxLength 255
     */
    newPlannedEnd: string;
    /**
     * Оцениваемый
     */
    estimated?: Estimated;
    /**
     * Признак наличия дочерней записи
     * @maxLength 255
     */
    childActivityFlag: string;
    /**
     * Id родительской записи (Идентификатор торговой точки)
     * @maxLength 255
     */
    pointId: string;
    /**
     * Заметка
     */
    note?: {
        /**
         * Комментарий
         */
        text: string;
        /**
         * Id родительской записи организации/МОКК/МП
         */
        objectId: string;
    };
    /**
     * Id адреса
     * @maxLength 255
     */
    addressId: string;
    /**
     * Несовпадение GPS
     * @maxLength 255
     */
    gps: string;
    /**
     * Несвоевременный приход флаг
     * @maxLength 255
     */
    inTimeFlag: string;
    /**
     * Id договора
     * @maxLength 255
     */
    agreementId: string;
    /**
     * ФИО оператора внешнего КЦ
     * @maxLength 255
     */
    createdByCcFullName: string;
    /**
     * Идентификатор внешнего КЦ
     * @maxLength 255
     */
    createdByCcId: string;
    /**
     * Код участника кампании
     * @maxLength 255
     */
    ukCode: string;
    /**
     * Признак автоматически созданной активности
     * @maxLength 255
     */
    autoactivityFlag: boolean;
    /**
     * Сделки
     */
    opportunities: SbrfTaskDeal[];
    /**
     * Признак наличия дочерней записи
     * @maxLength 255
     */
    childVisitFlag: string;
    /**
     * Периодичность
     * @maxLength 255
     */
    period: string;
    /**
     * Планируемое количество сотрудников
     */
    employeePlan?: number;
    /**
     * Фактическое количество сотрудников
     */
    employeeFact?: number;
    /**
     * Телефон клиента, связанный с активностью/Телефон контактного лица
     * @maxLength 255
     */
    phoneNumber: string;
    /**
     * Тип телефона
     * @maxLength 255
     */
    phoneType: string;
    /**
     * Тип листа в сервисах CRM
     */
    listType?: ListType
    /**
     * Количество Персональных предложений по клиенту
     * @maxLength 255
     */
    countPP: string;

    /** Объекты залога **/
    pledges: Pledges;
}