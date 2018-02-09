/**
 * Конфигурация всего приложения (календарь + планировщик)
 */
export interface Config extends CalendarConfig {
    /**
     * Настройка для отображения кнопки 'Добавить задачу'
     */
    canCreateTask: boolean;
    /**
     * Признак вызова как subflow
     */
    isSubflow: boolean;
    /**
     * Признак отсутствия отдельного сервиса для получения детальной информации по задаче
     */
    noSeparateTaskService: boolean;
    /**
     * Признаки обогащения задач данными о клиенте и сотрудниках
     */
    enrichTaskListVsEmployee: boolean;
    enrichTaskListVsClientInfo: boolean;
    enrichTaskListVsPoints: boolean;
    enrichTaskDetailsVsEmployees: boolean;
    enrichTaskDetailsVsClientInfo: boolean;
    enrichTaskDetailsVsPoints: boolean;
    /**
     * Тип задачи для зависимого справочника Результат
     */
    actionTypeParentValueId?: string;
    /**
     * Перечень возможных привязок ко времени
     */
    timeRefList: TimeRef[];
    /**
     * Стратегия заполнения полей title, subtitle
     */
    titleFillStrategy: TitleFillStrategy | 'PERFORMER' | 'PRODUCTS'
    /**
     * Стратегия выбора отображаемой даты в списке задач
     */
    showDateStrategy: ShowDateStrategy
    /**
     * Перечень параметров фильтрации
     */
    filter: Filter[];
    defaultFilter: SbrfTaskFilter
    /**
     * Признак необходимости группировки задач по дате
     */
    isNeedToGroupTaskList: boolean;
}

/**
 * Конфигурация календаря.
 */
export interface CalendarConfig {
    /**
     * Список ролей, для которых применима данная конфигурация
     */
    roles: string[],
    /**
     * Описание конфигурации
     */
    description: string,
    /**
     * Список доступных для ролей карточек задач
     */
    cards: CardConfiguration[];
    /**
     * SbrfTaskListFilter, при инициализации заполняется значениями по умолчанию из FilterParam
     */
    /**
     * Не отображать стакан задач
     */
    taskListDisabled: boolean,
    /**
     * Отображать 7-дневную неделю
     */
    showWeekend: boolean
}

// типы для календаря
export interface Classifier {
    /**
     * Код
     */
    code: string;
    /**
     * Значение
     */
    value: string;
}

export interface ClassifierRef<T> extends Classifier {
    // ссылка на значение
    ref: T
}

export interface TaskPriorityClassifier extends Classifier {
    ref: TaskPriority;
}

export interface TaskTypeClassifier extends Classifier {
    ref: TaskType;
}

export type AddressType = 'REG' | 'WORK' | 'LIVE';
export const AddressType: { [key: string]: AddressType } = {
    REG: 'REG',
    WORK: 'WORK',
    LIVE: 'LIVE',
}

export type CardConditionOperand = 'EQUALS' | 'NOT_EQUALS';
export const CardConditionOperand: { [key: string]: CardConditionOperand } = {
    EQUALS: 'EQUALS',
    NOT_EQUALS: 'NOT_EQUALS',
}

export type TimeRef = 'UNBOUND' | 'DATE' | 'DATETIME' | 'DEADLINE' | 'DAY'
export const TimeRef: { [key: string]: TimeRef } = {
    UNBOUND: 'UNBOUND',
    DATE: 'DATE',
    DATETIME: 'DATETIME',
    DEADLINE: 'DEADLINE',
    DAY: 'DAY',
}

export type CardMode = 'CREATE' | 'READ' | 'UPDATE'
export const CardMode: { [key: string]: CardMode } = {
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
}

export type DataSource = 'CRM_CORPORATE' | 'CRM_RETAIL';
export const DataSource: { [key: string]: DataSource } = {
    CRM_CORPORATE: 'CRM_CORPORATE',
    CRM_RETAIL: 'CRM_RETAIL',
}

/**
 * Enumeration EmployeeType: Роль сотрудника в обслуживании клиента (инициатор, исполнитель, менеджер и т.д.)
 */
export type EmployeeType =
    'INITIATOR'
        | 'PERFORMER'
        | 'MANAGER'
        | 'VKO'
        | 'COMMENTAUTHOR'
        | 'CORPORATETEAMMEMBER'
        | 'BANKEMPLOYEE';
export const EmployeeType: { [key: string]: EmployeeType } = {
    INITIATOR: 'INITIATOR',
    PERFORMER: 'PERFORMER',
    MANAGER: 'MANAGER',
    VKO: 'VKO',
    COMMENTAUTHOR: 'COMMENTAUTHOR',
    CORPORATETEAMMEMBER: 'CORPORATETEAMMEMBER',
    BANKEMPLOYEE: 'BANKEMPLOYEE',
}

export type FilterParamPosition = 'DEFAULT' | 'SEARCH_PANEL';
export const FilterParamPosition: { [key: string]: FilterParamPosition } = {
    DEFAULT: 'DEFAULT',
    SEARCH_PANEL: 'SEARCH_PANEL',
}

export type JobTitleType = 'OFFICER' | 'EMPLOYEE' | 'DIRECTOR';
export const JobTitleType: { [key: string]: JobTitleType } = {
    OFFICER: 'OFFICER',
    EMPLOYEE: 'EMPLOYEE',
    DIRECTOR: 'DIRECTOR',
}

export type ListType = 'ACTIONINFO' | 'VISIT' | 'ACTIVITY' | 'TASK' | 'REQUEST' | 'TASKPIP' | 'NBOTASK'
export const ListType: { [key: string]: ListType } = {
    ACTIONINFO: 'ACTIONINFO',
    VISIT: 'VISIT',
    ACTIVITY: 'ACTIVITY',
    TASK: 'TASK',
    REQUEST: 'REQUEST',
    TASKPIP: 'TASKPIP',
    NBOTASK: 'NBOTASK',
}

export type SelectType = 'DASHED' | 'DEFAULT' | 'INVERT';
export const SelectType: { [key: string]: SelectType } = {
    DASHED: 'DASHED',
    DEFAULT: 'DEFAULT',
    INVERT: 'INVERT',
}

/**
 * Стратегия выбора отображаемой даты в списке задач
 */
export type ShowDateStrategy =
    'PLANNED_START'
        | 'PLANNED_END'
        | 'FACT_START'
        | 'FACT_END'
        | 'CREATED_ON'
        | 'DUE_DATE'
        | 'ACTIVE_START_DATE'
        | 'ACTIVE_END_DATE';
export const ShowDateStrategy: { [key: string]: ShowDateStrategy } = {
    PLANNED_START: 'PLANNED_START',
    PLANNED_END: 'PLANNED_END',
    FACT_START: 'FACT_START',
    FACT_END: 'FACT_END',
    CREATED_ON: 'CREATED_ON',
    DUE_DATE: 'DUE_DATE',
    ACTIVE_START_DATE: 'ACTIVE_START_DATE',
    ACTIVE_END_DATE: 'ACTIVE_END_DATE',
}

export type TaskPriority = 'HIGH' | 'MEDIUM' | 'LOW' | 'DEF_TASK_PRIORITY';
export const TaskPriority: { [key: string]: TaskPriority } = {
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW',
    DEF_TASK_PRIORITY: 'DEF_TASK_PRIORITY',
}

export type TaskStatus =
    'PLANNED'
        | 'PROGRESS'
        | 'APPROVAL'
        | 'DECLINED'
        | 'CLARIFY'
        | 'DONE'
        | 'ARCHIEVE'
        | 'DEF_TASK_STATUS';
export const TaskStatus: { [key: string]: TaskStatus } = {
    PLANNED: 'PLANNED',
    PROGRESS: 'PROGRESS',
    APPROVAL: 'APPROVAL',
    DECLINED: 'DECLINED',
    CLARIFY: 'CLARIFY',
    DONE: 'DONE',
    ARCHIEVE: 'ARCHIEVE',
    DEF_TASK_STATUS: 'DEF_TASK_STATUS',
}

export type TaskType = 'MEETING' | 'CALL' | 'OTHER';
export const TaskType: { [key: string]: TaskType } = {
    MEETING: 'MEETING',
    CALL: 'CALL',
    OTHER: 'OTHER',
}

/**
 * Стратегия заполнения полей title, subtitle
 */
export type TitleFillStrategy = 'CLIENT' | 'TASK_TYPE';
export const TitleFillStrategy: { [key: string]: TitleFillStrategy } = {
    CLIENT: 'CLIENT',
    TASK_TYPE: 'TASK_TYPE',
}

// end типы для календаря

export interface SbrfTaskFilter {
    /**
     * Id лида
     */
    leadId?: string;
    /**
     * Id клиента
     */
    accountId?: string;
    /**
     * Id контакта
     */
    contactCrmId?: string;
    /**
     * Статус
     */
    status?: string;
    /**
     * Тип задачи
     */
        type?: string;
    /**
     * Приоритет
     */
    priority?: string;
    /**
     * Список типов задач
     */
    taskTypes?: string[];
    /**
     * Тематика обращения
     */
    split?: string;
    /**
     * Подсплит
     */
    mainSplit?: string;
    /**
     * Исполнитель
     */
    performer?: string;
    /**
     * Дата и время создания, от
     */
    dateCreateFrom?: string;
    /**
     * Дата и время создания, до
     */
    dateCreateTo?: string;
    /**
     * Плановая дата начала
     */
    datePlanFrom?: string;
    /**
     * Плановая дата завершения
     */
    datePlanTo?: string;
    /**
     * Фактическая дата начала
     */
    dateFactFrom?: string;
    /**
     * Фактическая дата завершения
     */
    dateFactTo?: string;
    /**
     * Текущая дата
     */
    currentDate?: string;
    /**
     * Дата рождения
     */
    birthDate?: string;
    /**
     * overdue/open
     */
    state?: string;
    /**
     * Задачи текущего дня
     */
    current?: boolean;
    /**
     * Запланированные задачи
     */
    planned?: boolean;
    /**
     * Просроченные задачи
     */
    expired?: boolean;
    /**
     * Уникальный идентификатор клиента в МДМ
     */
    stubId?: string;
    /**
     * Уникальный идентификатор клиента в ЕПК
     */
    epkId?: string;
    /**
     * Фамилия клиента
     */
    lastName?: string;
    /**
     * Имя клиента
     */
    firstName?: string;
    /**
     * Отчество клиента
     */
    middleName?: string;
    /**
     * Серия + номер документа
     */
    documentSerNum?: string;
    /**
     * Номер ВСП
     */
    divisionNum?: string;
    /**
     * Показать все задачи подразделения
     */
    divisionTasks?: boolean;
    /**
     * Признак последней страницы
     */
    lastPage?: boolean;
    /**
     * Номер страницы
     */
    pageNum?: number;
    /**
     * Размер страницы
     */
    pageSize?: number;
    /**
     * Срочные задачи
     */
    important?: boolean;
    /**
     * Только свои задачи
     */
    onlyUserTasks?: boolean;
}

// TODO
export type Filter = CheckboxGroup | Checkbox | DateInput | RadioGroup | Select | Switch | TabSelector

export interface AbstractFilter {
    atype: string;
    /**
     * Порядок следования параметра
     */
    order: number;
    /**
     * Обязательность заполнения
     */
    required: boolean;
    /**
     * Название аналогично полю в SbrfTaskListFilter
     */
    name: string;
    /**
     * Заголовок, отображаемый на PL
     */
    caption: string;
    /**
     * Позиция фильтра на PL
     */
    position: FilterParamPosition
    /**
     * Условия отображения
     */
    visibilityConditions: FilterParamCondition[];
    /**
     * Фильтр применяемый сразу
     */
    immediatelyApplicable: boolean;
    /**
     * Фильтр сбрасываемый
     */
    resettable: boolean;
}
export interface BinaryFilter extends AbstractFilter {
    /**
     * Значение по умолчанию (из filter.items)
     */
    defaultValue: boolean;
}
export interface StringFilter extends AbstractFilter {
    /**
     * Значение по умолчанию (из filter.items)
     */
    defaultValue: string;
}
export interface CheckboxGroup extends StringFilter {
    atype: 'CheckboxGroup';
    /**
     * Перечень возможных значений фильтра
     */
    items: OptionItem[];
    /**
     * Дополнительное значение фильтра
     */
    additionalItem?: {
        value: string;
        text: string;
    };
    /**
     * Имя справочника, из которого получаем значения
     */
    classifierName: string;
}
export interface Checkbox extends BinaryFilter{
    atype: 'Checkbox';
}
export interface DateInput extends StringFilter {
    atype: 'DateInput';
    /**
     * Значение параметра в СУП. +- к используемой дате
     */
    deltaParamName: string;
}
export interface RadioGroup extends StringFilter{
    atype: 'RadioGroup';
    /**
     * Перечень возможных значений фильтра
     */
    items: OptionItem[];
    /**
     * Дополнительное значение фильтра
     */
    additionalItem?: {
        value: string;
        text: string;
    };
    /**
     * Имя справочника, из которого получаем значения
     */
    classifierName: string;
}
export interface Select extends StringFilter{
    atype: 'Select';
    /**
     * Перечень возможных значений фильтра
     */
    items: OptionItem[];
    /**
     * Дополнительное значение фильтра
     */
    additionalItem?: {
        value: string;
        text: string;
    };
    /**
     * Имя справочника, из которого получаем значения
     */
    classifierName: string;
    /**
     * Тип селекта
     */
        type: SelectType;
}
export interface Switch extends BinaryFilter{
    atype: 'Switch';
}
export interface TabSelector extends StringFilter{
    atype: 'TabSelector';
    /**
     * Перечень возможных значений фильтра
     */
    items: OptionItem[];
    /**
     * Дополнительное значение фильтра
     */
    additionalItem?: {
        value: string;
        text: string;
    };
    /**
     * Имя справочника, из которого получаем значения
     */
    classifierName: string;
}

export interface FilterParamCondition {
    /**
     * Название фильтра из атрибута filter.name
     */
    field: string;
    /**
     * Значение фильтра из filter.items.value
     */
    value: string;
}
export interface OptionItem {
    value: string;
    text: string;
}
export interface CardConfiguration {
    /**
     * Наименование
     */
    name?: string;
    /**
     * Заглавие
     */
    caption?: string;
    /**
     * Описание
     */
    description?: string;
    /**
     * Режим отображения
     */
    mode?: CardMode;
    /**
     * Наименование кнопки
     */
    saveButtonLabel?: string;
    /**
     * Показывать только выбранную задачу в стакане
     */
    taskListDisabled?: boolean;
    /**
     * Показывать или скрывать стакан задач.
     */
    taskListVisible?: boolean;
    /**
     * Если true заголовок заголовок не показывается
     */
    headerHidden?: boolean;
    /**
     * Условия отображения
     */
    conditions?: (Role | TaskStatusCondition | TaskTypeCondition | And | Or)[];
    /**
     * Перечень отображаемых блоков
     */
    rows: BlocksRow[];
    /**
     * Доступные действия из этой карточки
     */
    operations: Operation[]
    allOperations?: Operation[]
}
export interface Role {
    '@type': 'ROLE';
    /**
     * Операнд условия отображения
     */
    when: 'EQUALS' | 'NOT_EQUALS';
    /**
     * Сравниваемое значение
     */
    value: string;
}
export interface TaskStatusCondition {
    '@type': 'TASK_STATUS';
    /**
     * Операнд условия отображения
     */
    when: 'EQUALS' | 'NOT_EQUALS';
    /**
     * Сравниваемое значение
     */
    value: string;
}
export interface TaskTypeCondition {
    '@type': 'TASK_TYPE';
    /**
     * Операнд условия отображения
     */
    when: 'EQUALS' | 'NOT_EQUALS';
    /**
     * Сравниваемое значение
     */
    value: string;
}
export interface And {
    '@type': 'AND';
    /**
     * Операнд условия отображения
     */
    when: 'EQUALS' | 'NOT_EQUALS';
    /**
     * Сравниваемое значение
     */
    value: (Role | TaskStatusCondition | TaskTypeCondition | And | Or)[];
}
export interface Or {
    '@type': 'OR';
    /**
     * Операнд условия отображения
     */
    when: 'EQUALS' | 'NOT_EQUALS';
    /**
     * Сравниваемое значение
     */
    value: (Role | TaskStatusCondition | TaskTypeCondition | And | Or)[];
}
export type ActionBlockType = 'NavigateToApp' | 'WorkFlow' | 'Action'
export interface ActionBlock {
    caption?: string,
    type?: ActionBlockType,
    param?: string,
}

// new
/**
 * Типы блоков в детальной карточке задачи
 */
export type BlockType =
    /**
     * Внешний блок, который загружается из бандла
     */
    'external' |
        'button' |
        'redButton' |
        'operationHiddenTrue' |
        /**
         * Заголовок
         */
        'title' |

        /**
         * Приоритет
         */
        'priority' |
        /**
         * Адрес
         */
        'address' |
        /**
         * Заголовок
         */
        'header' |
        /**
         * Клиенты ФЛ
         */
        'persons' |
        /**
         * Продуктовые предложения
         */
        'products' |
        /**
         * Представители по задаче
         */
        'contacts' |
        /**
         * Комментарии
         */
        'comments' |
        /**
         * Плановые даты
         */
        'planDates' |
        'planDatesDuration' |
        /**
         * Фактические даты
         */
        'factDates' |
        /**
         * Дата создания
         */
        'createDate' |
        /**
         * ID задачи
         */
        'id' |
        /**
         * Потенциальные продажи
         */
        'leads' |
        /**
         * Клиенты ЮЛ
         */
        'corporates' |
        /**
         * Место встречи
         */
        'meetingLocation' |
        /**
         * Описание задачи
         */
        'description' |
        /**
         * Комментарий к результату
         */
        'decision' |
        /**
         * Результат
         */
        'actionResult' |
        /**
         * Статус
         */
        'status' |
        /**
         * Тип задачи
         */
        'type' |
        /**
         * Исполнитель(-ли)
         */
        'performer' |
        /**
         * Создатель задачи
         */
        'initiator' |
        /**
         * Команда сотрудников
         */
        'manager' |
        /**
         *  Залог
         */
        'pledge' |
        /**
         * Владелец карточки организации
         */
        'vko' |
        /**
         * Тематика обращения
         */
        'split' |
        /**
         * Сделки
         */
        'opportunities' |
        /**
         * История по задаче
         */
        'history' |
        /**
         * Важность задачи
         */
        'important' |
        /**
         * Телефон клиента
         */
        'clientPhone' |
        /**
         * Комплаенс: отправка уведомлений
         */
        'notifyCompliance' |
        /**
         * есть в коде, но нет в интерфейсе планировщика
         */
        'deposit' |
        'map'

// Блок
export interface Block {
    type: BlockType,

    // Загголовок
    caption?: string
    // Заголовок для страницы  деталей
    itemCaption?: string
    // Порядок следования в карточке (от меньшего к большему)
    //order: number;
    // кнопки с действиями
    actions?: ActionBlock[]
}

export interface BlocksRow {
    horizontalLine?: boolean,
    flexWrap?: 'wrap' | 'noWrap',
    justifyContent?: 'spaceBetween' | 'spaceAround' | 'flexStart',
    position?: 'header' | 'footer',
    blocks: Block[], // Маассив блоков в строке

}

export interface BlockParameter {
    /**
     * Название параметра в СУП
     */
    supParamName: string;
    /**
     * Название параметра, для использования на PL
     */
    name: string;
    /**
     * Значение параметра, полученное из СУП
     */
    value: string;
}

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

export interface Operation {
    /**
     * Наименование/идентификатор действия
     */
    name: string;
    /**
     * Необходимо подтверждение пользователя, если поле заполнено
     */
    confirmation?: string;
    /**
     * Условия отображения
     */
    conditions: (Role | TaskStatusCondition | TaskTypeCondition | And | Or)[];
    /**
     * Название действия, для отображения в выпадающем списке из карточки задач
     */
    caption: string;
    /**
     * Внешний Workflow
     */
    externalWorkflowName?: string;
    /**
     * Карточка, в которую можно перейти
     */
    gotoCardName: string;
    /**
     * Изменяемая часть задачи.
     */
    diff?: {
        /**
         * Идентификатор
         */
        id?: string;
        /**
         * Идентификатор родительской задачи
         */
        parentTaskId?: string;
        /**
         * Заголовок
         */
        title?: string;
        /**
         * Подзаголовок
         */
        subtitle?: string;
        /**
         * Описание
         */
        description?: string;
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
        timeRef?: TimeRef
        /**
         * Приоритет
         */
        priority?: ClassifierRef<TaskPriority>

        /**
         * Подзадачи
         */
        subtasks?: SbrfTask[];
        /**
         * Связанные сотрудники
         */
        employees?: SbrfTaskEmployee[];
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
        leads?: SbrfTaskLead[];
        /**
         * Клиенты ЮЛ
         */
        corporates?: SbrfTaskCorporate[];
        /**
         * Место встречи
         */
        meetingLocation?: string;
        /**
         * Комментарий к результату
         */
        decision?: string;
        /**
         * Результат
         */
        actionResult?: Classifier
        /**
         * Кампания
         */
        campaignName?: string;
        /**
         * Продуктовые предложения
         */
        products?: SbrfTaskProduct[];
        /**
         * Клиенты ФЛ
         */
        persons?: SbrfTaskPerson[];
        /**
         * Добавить в Outlook
         */
        sendToOutlook?: string;
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
        source?: string;
        /**
         * Уведомления по SMS -Y, -N
         */
        notifyBySms?: boolean;
        /**
         * Номер для уведомлений по SMS
         */
        smsPhoneNumber?: string;
        /**
         * ID Звонка
         */
        callId?: string;
        /**
         * Номер телефона вызова
         */
        callPhoneNumber?: string;
        /**
         * № обращения в CRM
         */
        clientRequestNumber?: string;
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
        mainSplit?: string;
        /**
         * Признак совпадения инициатора и текущего главного исполнителя
         */
        initiatorFlg?: boolean;
        /**
         * Уникальный идентификатор операции создания
         */
        operUID?: string;
        /**
         * Комментарии
         */
        comments?: SbrfTaskComment[];
        /**
         * История изменений
         */
        history?: SbrfTaskHistory[];
        /**
         * Требует утверждения
         */
        requiresApproval?: boolean;
        /**
         * Идентификатор ГСЗ (Для задач на включение в ГСЗ)
         */
        gszId?: string;
        /**
         * Срок исполнения
         */
        dueDate?: string;
        /**
         * Идентификатор карточки обращения
         */
        referenceCrmId?: string;
        /**
         * Идентификатор карточки взаимодействия
         */
        interactionCrmId?: string;
        /**
         * Новая плановая дата начала
         */
        newPlannedStart?: string;
        /**
         * Новая плановая дата окончания
         */
        newPlannedEnd?: string;
        /**
         * Оцениваемый
         */
        estimated?: Estimated
        /**
         * Признак наличия дочерней записи
         */
        childActivityFlag?: string;
        /**
         * Id родительской записи (Идентификатор торговой точки)
         */
        pointId?: string;
        /**
         * Заметка
         */
        note?: {
            /**
             * Комментарий
             */
            text?: string;
            /**
             * Id родительской записи организации/МОКК/МП
             */
            objectId?: string;
        };
        /**
         * Id адреса
         */
        addressId?: string;
        /**
         * Несовпадение GPS
         */
        gps?: string;
        /**
         * Несвоевременный приход флаг
         */
        inTimeFlag?: string;
        /**
         * Id договора
         */
        agreementId?: string;
        /**
         * ФИО оператора внешнего КЦ
         */
        createdByCcFullName?: string;
        /**
         * Идентификатор внешнего КЦ
         */
        createdByCcId?: string;
        /**
         * Код участника кампании
         */
        ukCode?: string;
        /**
         * Признак автоматически созданной активности
         */
        autoactivityFlag?: boolean;
        /**
         * Сделки
         */
        opportunities?: SbrfTaskDeal[];
        /**
         * Признак наличия дочерней записи
         */
        childVisitFlag?: string;
        /**
         * Периодичность
         */
        period?: string;
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
        phoneNumber?: string;
        /**
         * Тип телефона
         */
        phoneType?: string;
        /**
         * Тип листа в сервисах CRM
         */
        listType?: ListType
        /**
         * Количество Персональных предложений по клиенту
         */
        countPP?: string;
    };
    /**
     * Не показывать операцию в выпадающем списке на PL.
     */
    hidden: boolean;
}

// Добавил Pladges в SbrfTask
export interface Pledge {
    objType: string,
    name: string,
    count: number,
}
export interface Pledges
{
    totalCount: number,
    objects: Pledge[],
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
    timeRef?: TimeRef
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
    estimated?: {
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
    };
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
export interface SbrfTaskEmployee {
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
export interface SbrfTaskLead {
    /**
     * Идентификатор лида
     */
    id: string;
    /**
     * Продуктовые предложения
     */
    products: SbrfTaskProduct[];
    /**
     * Суть потенциальной продажи
     */
    description: string;
}
export interface SbrfTaskProduct {
    /**
     * ЦКПИТ Id продукта
     */
    mdmId: string;
    /**
     * Название продукта
     */
    name: string;
    /**
     * Описание
     */
    description: string;
    /**
     * Код участника кампании (для ListOfNbo)
     */
    ukCode: string;
    /**
     * Результат презентации продукта (для ListOfNbo)
     */
    presentationResult: string;
    /**
     * Код волны (соответствующий каналу, в который передается предложение), к которому относится данный УК (для ListOfNbo)
     */
    waveId: string;
}
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
export interface Phone {
    contactId: string;
}
export interface SbrfTaskCorporateAddress {
    /**
     * Тип адреса
     */
    addressType: AddressType;
    /**
     * Адрес в произвольной форме
     */
    address: string;
    /**
     * Id адреса организации в CRM
     */
    addressId: string;
    /**
     * Признак основного адреса
     */
    primaryFlg: boolean;
}
export interface SbrfTaskAgreement {
    /**
     * Идентификатор договора
     */
    id: string;
    /**
     * Номер договора
     */
    contractNumber: string;
    /**
     * Дата начала действия договора
     */
    startDate: string;
    /**
     * Дата окончания действия договора
     */
    endDate: string;
    /**
     * Список точек по договору
     */
    points: SbrfTaskPoint[];
}
export interface SbrfTaskPoint {
    /**
     * Идентификатор точки
     */
    id: string;
    /**
     * Название точки
     */
    name: string;
    /**
     * Местоположение присутствия
     */
    location: string;
    /**
     * Статус
     */
    status: string;
    /**
     * Кол–во оценок поток
     */
    assessQty: number;
    /**
     * Средний уровень
     */
    assessAvg: number;
    /**
     * Средний целевой
     */
    assessGoalAvg: number;
    /**
     * Средний уровень выполнения потока
     */
    assessAvgPotok: number;
    /**
     * Id адреса
     */
    addressId: {
        /**
         * Тип адреса
         */
        addressType: AddressType;
        /**
         * Адрес в произвольной форме
         */
        address: string;
        /**
         * Id адреса организации в CRM
         */
        addressId: string;
        /**
         * Признак основного адреса
         */
        primaryFlg: boolean;
    };
    /**
     * Строка адреса
     */
    fullAddress: string;
    /**
     * Текст заметки
     */
    note: string;
}
export interface Author {
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

export interface SbrfTaskComment {
    /**
     * Идентификатор
     */
    id: string;
    /**
     * Комментарий
     */
    text: string;
    /**
     * Дата создания
     */
    createdOn: string;
    /**
     * Дата последнего изменения
     */
    modifiedOn: string;
    /**
     * Автор
     */
    author: Author
    /**
     * Идентификатор версии записи (изменяемой, т.е. исходной)
     */
    modId: number;
}
export interface Employee {
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
export interface SbrfTaskDeal {
    /**
     * Номер сделки
     */
    id: string;
    /**
     * Продуктовые предложения
     */
    products: SbrfTaskProduct[];
    /**
     * Суть сделки
     */
    description: string;
    /**
     * Стадия сделки
     */
    salesStage: string;
    /**
     * Канал продаж
     */
    salesChannel: string;
    /**
     * ФОТ
     */
    fot: number;
    /**
     * Количество сотрудников
     */
    employeeQuantity: number;
    /**
     * Команда сотрудников, работающих со сделкой
     */
    managerIds: string[];
}
