import {CalendarConfig} from './calendarConfig'
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

export type DataSource = 'CRM_CORPORATE' | 'CRM_RETAIL';
export const DataSource: { [key: string]: DataSource } = {
    CRM_CORPORATE: 'CRM_CORPORATE',
    CRM_RETAIL: 'CRM_RETAIL',
}

export type FilterParamPosition = 'DEFAULT' | 'SEARCH_PANEL';
export const FilterParamPosition: { [key: string]: FilterParamPosition } = {
    DEFAULT: 'DEFAULT',
    SEARCH_PANEL: 'SEARCH_PANEL',
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

/**
 * Стратегия заполнения полей title, subtitle
 */
export type TitleFillStrategy = 'CLIENT' | 'TASK_TYPE';
export const TitleFillStrategy: { [key: string]: TitleFillStrategy } = {
    CLIENT: 'CLIENT',
    TASK_TYPE: 'TASK_TYPE',
}

/**
 * Фильтр для задач
 */
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

export type TaskFilterKey = keyof SbrfTaskFilter
// TODO
export type Filter = CheckboxGroup | Checkbox | DateInput | RadioGroup | Select | Switch | TabSelector

/**
 * Общие поля фильтров
 */
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
    name: TaskFilterKey // string;
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
/**
 * Фильтр с булевым значением
 */
export interface BinaryFilter extends AbstractFilter {
    /**
     * Значение по умолчанию (из filter.items)
     */
    defaultValue: boolean;
}
/**
 * Фильтр со строковым значением
 */
export interface StringFilter extends AbstractFilter {
    /**
     * Значение по умолчанию (из filter.items)
     */
    defaultValue: string;
}
/**
 * Фильтр типа Группа чекбоксов
 */
export interface CheckboxGroup extends StringFilter {
    /**
     * Тип фильтра
     */
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
/**
 * Фильтр типа Чекбокс
 */
export interface Checkbox extends BinaryFilter{
    /**
     * Тип фильтра
     */
    atype: 'Checkbox';
}
/**
 * Фильтр типа Дата
 */
export interface DateInput extends StringFilter {
    /**
     * Тип фильтра
     */
    atype: 'DateInput';
    /**
     * Значение параметра в СУП. +- к используемой дате
     */
    deltaParamName: string;
}
/**
 * Фильтр типа Группа радиобаттонов
 */
export interface RadioGroup extends StringFilter{
    /**
     * Тип фильтра
     */
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
/**
 * Фильтр типа выпадающего списка
 */
export interface Select extends StringFilter{
    /**
     * Тип фильтра
     */
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
/**
 * Фильтр типа Свитчер
 */
export interface Switch extends BinaryFilter{
    /**
     * Тип фильтра
     */
    atype: 'Switch';
}
/**
 * Фильтр типа Панель закладок
 */
export interface TabSelector extends StringFilter{
    /**
     * Тип фильтра
     */
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
/**
 * Выбранное значение фильтра
 */
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
/**
 * Возможное значение фильтра
 */
export interface OptionItem {
    value: string;
    text: string;
}
