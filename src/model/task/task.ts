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
     */
    id: string;
    /**
     * Идентификатор родительской задачи
     */
    parentTaskId: string;
    /**
     * Заголовок
     */
    title: string;
    /**
     * Подзаголовок
     */
    subtitle: string;
    /**
     * Описание
     */
    description: string;
    /**
     * Дата начала
     */
    startDate?: string;
    /**
     * Дата завершения
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
     */
    createdOn?: string;
    /**
     * Плановая дата начала
     */
    plannedStart?: string;
    /**
     * Плановая дата завершения
     */
    plannedEnd?: string;
    /**
     * Фактическая дата начала
     */
    factStart?: string;
    /**
     * Фактическая дата завершения
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
     */
    meetingLocation: string;
    /**
     * Комментарий к результату
     */
    decision: string;
    /**
     * Результат
     */
    actionResult?: Classifier
    /**
     * Кампания
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
     */
    source: string;
    /**
     * Уведомления по SMS -Y, -N
     */
    notifyBySms: boolean;
    /**
     * Номер для уведомлений по SMS
     */
    smsPhoneNumber: string;
    /**
     * ID Звонка
     */
    callId: string;
    /**
     * Номер телефона вызова
     */
    callPhoneNumber: string;
    /**
     * № обращения в CRM
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
     */
    mainSplit: string;
    /**
     * Признак совпадения инициатора и текущего главного исполнителя
     */
    initiatorFlg: boolean;
    /**
     * Уникальный идентификатор операции создания
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
     */
    gszId: string;
    /**
     * Срок исполнения
     */
    dueDate: string;
    /**
     * Идентификатор карточки обращения
     */
    referenceCrmId: string;
    /**
     * Идентификатор карточки взаимодействия
     */
    interactionCrmId: string;
    /**
     * Новая плановая дата начала
     */
    newPlannedStart: string;
    /**
     * Новая плановая дата окончания
     */
    newPlannedEnd: string;
    /**
     * Оцениваемый
     */
    estimated?: Estimated;
    /**
     * Признак наличия дочерней записи
     */
    childActivityFlag: string;
    /**
     * Id родительской записи (Идентификатор торговой точки)
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
     */
    addressId: string;
    /**
     * Несовпадение GPS
     */
    gps: string;
    /**
     * Несвоевременный приход флаг
     */
    inTimeFlag: string;
    /**
     * Id договора
     */
    agreementId: string;
    /**
     * ФИО оператора внешнего КЦ
     */
    createdByCcFullName: string;
    /**
     * Идентификатор внешнего КЦ
     */
    createdByCcId: string;
    /**
     * Код участника кампании
     */
    ukCode: string;
    /**
     * Признак автоматически созданной активности
     */
    autoactivityFlag: boolean;
    /**
     * Сделки
     */
    opportunities: SbrfTaskDeal[];
    /**
     * Признак наличия дочерней записи
     */
    childVisitFlag: string;
    /**
     * Периодичность
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
     */
    phoneNumber: string;
    /**
     * Тип телефона
     */
    phoneType: string;
    /**
     * Тип листа в сервисах CRM
     */
    listType?: ListType
    /**
     * Количество Персональных предложений по клиенту
     */
    countPP: string;

    /** Объекты залога **/
    pledges: Pledges;
}