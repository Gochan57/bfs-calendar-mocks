// Generated using typescript-generator version 1.14.251 on 2017-11-13 11:24:15.

export interface IIgnoreUnknownFields extends Serializable {
}

/**
 * <b>Root</b>-class declaration<br> Задача для планировщика
 */
export interface SbrfTask extends Root, IIgnoreUnknownFields {
    id?: string;
    parentTaskId?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    startDate?: DateAsString;
    endDate?: DateAsString;
    status?: TaskStatusClassifier;
    taskType?: TaskTypeClassifier;
    priority?: TaskPriorityClassifier;
    subtasks?: SbrfTask[];
    employees?: SbrfTaskEmployee[];
    createdOn?: DateAsString;
    plannedStart?: DateAsString;
    plannedEnd?: DateAsString;
    factStart?: DateAsString;
    factEnd?: DateAsString;
    leads?: SbrfTaskLead[];
    corporates?: SbrfTaskCorporate[];
    meetingLocation?: string;
    decision?: string;
    actionResult?: Classifier;
    campaignName?: string;
    products?: SbrfTaskProduct[];
    persons?: SbrfTaskPerson[];
    sendToOutlook?: string;
    modId?: number;
    channel?: Classifier;
    source?: string;
    notifyBySms?: boolean;
    smsPhoneNumber?: string;
    callId?: string;
    callPhoneNumber?: string;
    clientRequestNumber?: string;
    area?: Classifier;
    split?: Classifier;
    mainSplit?: string;
    initiatorFlg?: boolean;
    operUID?: string;
    comments?: SbrfTaskComment[];
    history?: SbrfTaskHistory[];
    requiresApproval?: boolean;
    gszId?: string;
    dueDate?: string;
    referenceCrmId?: string;
    interactionCrmId?: string;
    newPlannedStart?: DateAsString;
    newPlannedEnd?: DateAsString;
    estimated?: SbrfTaskEmployee;
    childActivityFlag?: string;
    pointId?: string;
    note?: SbrfTaskNote;
    addressId?: string;
    gps?: string;
    inTimeFlag?: string;
    agreementId?: string;
    createdByCcFullName?: string;
    createdByCcId?: string;
    ukCode?: string;
    autoactivityFlag?: boolean;
    opportunities?: SbrfTaskDeal[];
    childVisitFlag?: string;
    period?: string;
    employeePlan?: number;
    employeeFact?: number;
    phoneNumber?: string;
    phoneType?: string;
    listType?: ListType;
    countPP?: string;
}

export interface SbrfTaskAgreement extends Additional, IIgnoreUnknownFields {
    id?: string;
    contractNumber?: string;
    startDate?: string;
    endDate?: string;
    points?: SbrfTaskPoint[];
}

/**
 * <b>Additional</b>-class declaration<br> Комментарий по задаче
 */
export interface SbrfTaskComment extends Additional, IIgnoreUnknownFields {
    id?: string;
    text?: string;
    createdOn?: DateAsString;
    modifiedOn?: DateAsString;
    author?: SbrfTaskEmployee;
    modId?: number;
}

/**
 * <b>Additional</b>-class declaration<br> Клиент ЮЛ по задаче
 */
export interface SbrfTaskCorporate extends Root, IIgnoreUnknownFields {
    crmId?: string;
    eksId?: string;
    parentId?: string;
    name?: string;
    shortName?: string;
    fullName?: string;
    fullNameEn?: string;
    inn?: string;
    ogrn?: string;
    kpp?: string;
    opf?: Classifier;
    contacts?: SbrfTaskPerson[];
    mdmId?: string;
    orgCardType?: Classifier;
    segment?: string;
    priority?: Classifier;
    accOrg?: string;
    opfName?: string;
    orgCardTypeName?: string;
    numEmployees?: string;
    addresses?: SbrfTaskCorporateAddress[];
    industryName?: string;
    segmentName?: string;
    holding?: string;
    note?: string;
    teamMembers?: SbrfTaskEmployee[];
    agreements?: SbrfTaskAgreement[];
    zpflag?: boolean;
    akkflag?: boolean;
    mokkflag?: boolean;
    fot?: string;
}

/**
 * <b>Additional</b>-class declaration<br> Адрес клиента ЮЛ по задаче
 */
export interface SbrfTaskCorporateAddress extends Additional, IIgnoreUnknownFields {
    addressType?: AddressType;
    address?: string;
    addressId?: string;
    primaryFlg?: boolean;
}

export interface SbrfTaskCorporateAddressBuilder {
}

/**
 * <b>Additional</b>-class declaration<br> Сделка по задаче
 */
export interface SbrfTaskDeal extends SbrfTaskLead, Additional, IIgnoreUnknownFields {
    salesStage?: string;
    salesChannel?: string;
    fot?: number;
    employeeQuantity?: number;
    managerIds?: string[];
}

/**
 * <b>Additional</b>-class declaration<br> Сотрудник Банка по задаче
 */
export interface SbrfTaskEmployee extends Root, IIgnoreUnknownFields {
    login?: string;
    lastName?: string;
    middleName?: string;
    firstName?: string;
    id?: string;
    email?: string;
    jobTitle?: string;
    positionName?: string;
    workPhone?: string;
    mobilePhone?: string;
    extLogin?: string;
    name?: string;
    primary?: boolean;
    blocked?: boolean;
    role?: Classifier;
    type?: EmployeeType;
    businessSegment?: Classifier;
    divisionCode?: string;
    funcDivisionName?: string;
    window?: string;
}

export interface SbrfTaskEmployeeBuilder {
}

/**
 * <b>Additional</b>-class declaration<br> История изменений по задаче
 */
export interface SbrfTaskHistory extends Additional, IIgnoreUnknownFields {
    employee?: SbrfTaskEmployee;
    phoneNum?: string;
    businessUnit?: string;
    accDivision?: string;
    dataTimeStarted?: string;
    dataTimeFinished?: string;
}

/**
 * <b>Additional</b>-class declaration<br> Предложение по задаче
 */
export interface SbrfTaskLead extends Additional, IIgnoreUnknownFields {
    id?: string;
    products?: SbrfTaskProduct[];
    description?: string;
}

/**
 * <b>Serializable</b>-class declaration<br> Список задач
 */
export interface SbrfTaskList extends Root, IIgnoreUnknownFields {
    items?: SbrfTask[];
    pageNum?: number;
    pageCount?: number;
    count?: number;
    lastPage?: boolean;
}

/**
 * <b>Additional</b>-class declaration<br> Заметка по задаче
 */
export interface SbrfTaskNote extends Additional, IIgnoreUnknownFields {
    text?: string;
    objectId?: string;
}

export interface SbrfTaskNoteBuilder {
}

/**
 * <b>Additional</b>-class declaration<br> Клиент ФЛ по задаче
 */
export interface SbrfTaskPerson extends Additional, IIgnoreUnknownFields {
    birthDate?: DateAsString;
    stubId?: string;
    epkId?: string;
    fullName?: string;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    docDate?: DateAsString;
    docType?: Classifier;
    documentSerNum?: string;
    segment?: Classifier;
    phones?: Phone[];
    id?: string;
    email?: string;
    jobTitle?: string;
    typeJobTitle?: JobTitleType;
    gender?: Classifier;
    workPhone?: string;
    mobilePhone?: string;
    primaryEmail?: string;
    primaryPhone?: string;
    relType?: Classifier;
}

export interface SbrfTaskPoint extends Root, IIgnoreUnknownFields {
    id?: string;
    name?: string;
    location?: string;
    status?: string;
    assessQty?: number;
    assessAvg?: number;
    assessGoalAvg?: number;
    assessAvgPotok?: number;
    addressId?: SbrfTaskCorporateAddress;
    fullAddress?: string;
    note?: string;
}

/**
 * <b>Additional</b>-class declaration<br> Продукты по задаче/лиду
 */
export interface SbrfTaskProduct extends Additional, IIgnoreUnknownFields {
    mdmId?: string;
    name?: string;
    description?: string;
    ukCode?: string;
    presentationResult?: string;
    waveId?: string;
}

export interface Classifier extends IIgnoreUnknownFields {
    code?: string;
    value?: string;
}

export interface ClassifiersHelper {
}

export interface TaskPriorityClassifier extends Classifier {
    ref?: TaskPriority;
}

export interface TaskStatusClassifier extends Classifier {
    ref?: TaskStatus;
}

export interface TaskTypeClassifier extends Classifier {
    ref?: TaskType;
}

export interface CardConfiguration extends IIgnoreUnknownFields {
    name?: string;
    caption?: string;
    description?: string;
    mode?: CardMode;
    saveButtonLabel?: string;
    taskListDisabled?: boolean;
    taskListVisible?: boolean;
    headerHidden?: boolean;
    // conditions?: DefaultCondition<T>[];
    blocks?: Blocks;
    operations?: Operation[];
    allOperations?: Operation[];
}

/**
 * Конфигурация уровня канала
 */
export interface ConfigurationsStore extends IIgnoreUnknownFields {
    rolesPriority?: { [index: string]: number };
    groups?: RoleGroupConfiguration[];
    configurations?: string[];
}

export interface Mappings extends IIgnoreUnknownFields {
    taskTypes?: { [index: string]: TaskType };
    taskStatuses?: { [index: string]: TaskStatus };
    taskPriorities?: { [index: string]: TaskPriority };
}

/**
 * Названия методов, которые передаются в Акцептор для выполнения операций
 */
export interface Methods extends IIgnoreUnknownFields {
    forTaskDetails?: string;
    forTaskList?: string;
    forTaskListByLeadId?: string;
    forTaskListByContactId?: string;
    forTaskListBySvisorId?: string;
    forTaskCreate?: string;
    forTaskUpdate?: string;
    forClientInfo?: string;
    forEmployees?: string;
    forEmployeesSubordinates?: string;
}

/**
 * Действие, доступное по кнопке из карточки задачи или из списка
 */
export interface Operation extends IIgnoreUnknownFields {
    name?: string;
    confirmation?: string;
    // conditions?: DefaultCondition<T>[];
    caption?: string;
    externalWorkflowName?: string;
    gotoCardName?: string;
    diff?: SbrfTask;
    hidden?: boolean;
}

/**
 * Специальная модель ответа от заглушки на запрос конфигурации
 */
export interface StubRoleGroupConfiguration {
    directUrl: string;
    id: string;
    name: string;
    parameters: FilterParam<string>[];
}

/**
 * Конфигурация уровня роли
 */
export interface RoleGroupConfiguration extends IIgnoreUnknownFields {
    roles?: string[];
    description?: string;
    dataSource?: DataSource;
    methods?: Methods;
    canCreateTask?: boolean;
    enrichTaskListVsEmployee?: boolean;
    enrichTaskListVsClientInfo?: boolean;
    enrichTaskListVsPoints?: boolean;
    enrichTaskDetailsVsEmployees?: boolean;
    enrichTaskDetailsVsClientInfo?: boolean;
    enrichTaskDetailsVsPoints?: boolean;
    actionTypeParentValueId?: string;
    titleFillStrategy?: TitleFillStrategy;
    showDateStrategy?: ShowDateStrategy;
    filter?: FilterParamUnion[];
    cards?: CardConfiguration[];
    taskStatuses?: { [index: string]: string[] };
    defaultFilter?: SbrfTaskFilter;
    mappings?: Mappings;
    listType?: ListType[];
    isNeedToGroupTaskList?: boolean;
}

export interface BlockParameter extends IIgnoreUnknownFields {
    supParamName?: string;
    name?: string;
    value?: string;
}

/**
 * Блок карточки задачи (исполнитель, комментарий, юр. лицо и т.п.)
 */
export interface Blocks extends IIgnoreUnknownFields {
    header?: DefaultBlock;
    persons?: MultipleValuedBlock;
    products?: DefaultBlock;
    contacts?: DefaultBlock;
    comments?: MultipleValuedBlock;
    planDates?: DefaultBlock;
    factDates?: DefaultBlock;
    leads?: MultipleValuedBlock;
    corporates?: MultipleValuedBlock;
    meetingLocation?: DefaultBlock;
    description?: DefaultBlock;
    decision?: DefaultBlock;
    actionResult?: DefaultBlock;
    status?: ClassifierBlock;
    performer?: MultipleValuedBlock;
    initiator?: DefaultBlock;
    manager?: MultipleValuedBlock;
    vko?: DefaultBlock;
    split?: DefaultBlock;
    opportunities?: DefaultBlock;
    history?: MultipleValuedBlock;
    notifyCompliance?: ExternalBlock;
}

export interface ClassifierBlock extends DefaultBlock {
    items?: Classifier[];
}

export interface DefaultBlock extends IIgnoreUnknownFields {
    caption?: string;
    order?: number;
    mode?: CardMode;
    params?: BlockParameter[];
}

export interface ExternalBlock extends DefaultBlock {
}

export interface MultipleValuedBlock extends DefaultBlock {
    multiple?: boolean;
}

// export interface AndCondition extends DefaultCondition<DefaultCondition<T>[]> {
//     "@type"?: "AND";
// }

/**
 * Условия отображения карточки задач и действия
 */
export interface DefaultCondition<T> extends IIgnoreUnknownFields {
    '@type'?: string;
    when?: CardConditionOperand;
    value?: T;
}

// export interface OrCondition extends DefaultCondition<DefaultCondition<T>[]> {
//     "@type"?: "OR";
// }

export interface RoleCondition extends DefaultCondition<string> {
    '@type'?: 'ROLE';
}

export interface TaskStatusCondition extends DefaultCondition<string> {
    '@type'?: 'TASK_STATUS';
}

export interface TaskTypeCondition extends DefaultCondition<string> {
    '@type'?: 'TASK_TYPE';
}

export interface AbstractSelect<T> extends FilterParam<T> {
    items?: OptionItem[];
    additionalItem?: OptionItem;
    classifierName?: string;
}

export interface Checkbox extends FilterParam<boolean> {
    '@type'?: 'Checkbox';
}

export interface DateInput extends FilterParam<string> {
    '@type'?: 'DateInput';
    deltaParamName?: string;
}

/**
 * Параметр фильтрации списка задач
 */
export interface FilterParam<T> extends IIgnoreUnknownFields {
    '@type'?: string;
    order?: number;
    required?: boolean;
    name?: string;
    caption?: string;
    position?: FilterParamPosition;
    defaultValue?: T;
    visibilityConditions?: FilterParamCondition[];
    immediatelyApplicable?: boolean;
    resettable?: boolean;
}

export interface FilterParamCondition extends IIgnoreUnknownFields {
    field?: string;
    value?: string;
}

export interface OptionItem extends IIgnoreUnknownFields {
    value?: string;
    text?: string;
}

export interface RadioGroup extends AbstractSelect<string> {
    '@type'?: 'RadioGroup';
}

export interface Select extends AbstractSelect<string> {
    '@type'?: 'Select';
    type?: SelectType;
}

export interface Switch extends FilterParam<boolean> {
    '@type'?: 'Switch';
}

export interface TabSelector extends AbstractSelect<string> {
    '@type'?: 'TabSelector';
}

export interface SbrfTaskFilter extends IIgnoreUnknownFields {
    leadId?: string;
    accountId?: string;
    contactCrmId?: string;
    status?: string;
    type?: string;
    priority?: string;
    taskTypes?: string[];
    personal?: boolean;
    split?: string;
    mainSplit?: string;
    performer?: string;
    dateCreateFrom?: DateAsString;
    dateCreateTo?: DateAsString;
    datePlanFrom?: DateAsString;
    datePlanTo?: DateAsString;
    dateFactFrom?: DateAsString;
    dateFactTo?: DateAsString;
    currentDate?: DateAsString;
    birthDate?: DateAsString;
    state?: string;
    asapPriority?: boolean;
    current?: boolean;
    planned?: boolean;
    expired?: boolean;
    stubId?: string;
    epkId?: string;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    documentSerNum?: string;
    divisionNum?: string;
    divisionTasks?: boolean;
    lastPage?: boolean;
    pageNum?: number;
    pageSize?: number;
    important?: boolean;
    onlyUserTasks?: boolean;
}

export interface SbrfTaskFilterBuilder {
}

export interface Serializable {
}

export interface Root extends Serializable {
}

export interface Additional extends Serializable {
}

export interface Phone extends AbstractContact, Additional {
}

export interface AbstractContact extends Additional {
    contactId?: string;
}

export type DateAsString = string;

export type ListType = 'ACTIONINFO' | 'VISIT' | 'ACTIVITY' | 'TASK' | 'REQUEST' | 'TASKPIP' | 'NBOTASK';

export type AddressType = 'REG' | 'WORK' | 'LIVE';

/**
 * Enumeration EmployeeType: Роль сотрудника в обслуживании клиента (инициатор, исполнитель, менеджер и т.д.)
 */
export type EmployeeType = 'INITIATOR' | 'PERFORMER' | 'MANAGER' | 'VKO' | 'COMMENTAUTHOR' | 'CORPORATETEAMMEMBER' | 'BANKEMPLOYEE';

export type JobTitleType = 'OFFICER' | 'EMPLOYEE' | 'DIRECTOR';

export type TaskPriority = 'HIGH' | 'MEDIUM' | 'LOW' | 'DEF_TASK_PRIORITY';

export type TaskStatus = 'PLANNED' | 'PROGRESS' | 'APPROVAL' | 'DECLINED' | 'CLARIFY' | 'DONE' | 'ARCHIEVE' | 'DEF_TASK_STATUS';

export type TaskType = 'MEETING' | 'CALL' | 'OTHER';

export type CardMode = 'CREATE' | 'READ' | 'UPDATE';

export type DataSource = 'CRM_CORPORATE' | 'CRM_RETAIL';

/**
 * Стратегия заполнения полей title, subtitle
 */
export type TitleFillStrategy = 'CLIENT' | 'TASK_TYPE';

/**
 * Стратегия выбора отображаемой даты в списке задач
 */
export type ShowDateStrategy = 'PLANNED_START' | 'PLANNED_END' | 'FACT_START' | 'FACT_END' | 'CREATED_ON' | 'DUE_DATE' | 'ACTIVE_START_DATE' | 'ACTIVE_END_DATE';

export type CardConditionOperand = 'EQUALS' | 'NOT_EQUALS';

export type FilterParamPosition = 'DEFAULT' | 'SEARCH_PANEL';

export type SelectType = 'DASHED' | 'DEFAULT' | 'INVERT';

// export type DefaultConditionUnion = RoleCondition | TaskStatusCondition | TaskTypeCondition | AndCondition | OrCondition;

export type FilterParamUnion = Checkbox | DateInput | OptionItem | RadioGroup | Select | Switch | TabSelector;

export const AddressType = {
    REG: <AddressType>'REG',
    WORK: <AddressType>'WORK',
    LIVE: <AddressType>'LIVE',
}

export const CardConditionOperand = {
    EQUALS: <CardConditionOperand>'EQUALS',
    NOT_EQUALS: <CardConditionOperand>'NOT_EQUALS',
}

export const CardMode = {
    CREATE: <CardMode>'CREATE',
    READ: <CardMode>'READ',
    UPDATE: <CardMode>'UPDATE',
}

export const DataSource = {
    CRM_CORPORATE: <DataSource>'CRM_CORPORATE',
    CRM_RETAIL: <DataSource>'CRM_RETAIL',
}

export const EmployeeType = {
    INITIATOR: <EmployeeType>'INITIATOR',
    PERFORMER: <EmployeeType>'PERFORMER',
    MANAGER: <EmployeeType>'MANAGER',
    VKO: <EmployeeType>'VKO',
    COMMENTAUTHOR: <EmployeeType>'COMMENTAUTHOR',
    CORPORATETEAMMEMBER: <EmployeeType>'CORPORATETEAMMEMBER',
    BANKEMPLOYEE: <EmployeeType>'BANKEMPLOYEE',
}

export const FilterParamPosition = {
    DEFAULT: <FilterParamPosition>'DEFAULT',
    SEARCH_PANEL: <FilterParamPosition>'SEARCH_PANEL',
}

export const JobTitleType = {
    OFFICER: <JobTitleType>'OFFICER',
    EMPLOYEE: <JobTitleType>'EMPLOYEE',
    DIRECTOR: <JobTitleType>'DIRECTOR',
}

export const ListType = {
    ACTIONINFO: <ListType>'ACTIONINFO',
    VISIT: <ListType>'VISIT',
    ACTIVITY: <ListType>'ACTIVITY',
    TASK: <ListType>'TASK',
    REQUEST: <ListType>'REQUEST',
    TASKPIP: <ListType>'TASKPIP',
    NBOTASK: <ListType>'NBOTASK',
}

export const SelectType = {
    DASHED: <SelectType>'DASHED',
    DEFAULT: <SelectType>'DEFAULT',
    INVERT: <SelectType>'INVERT',
}

export const ShowDateStrategy = {
    PLANNED_START: <ShowDateStrategy>'PLANNED_START',
    PLANNED_END: <ShowDateStrategy>'PLANNED_END',
    FACT_START: <ShowDateStrategy>'FACT_START',
    FACT_END: <ShowDateStrategy>'FACT_END',
    CREATED_ON: <ShowDateStrategy>'CREATED_ON',
    DUE_DATE: <ShowDateStrategy>'DUE_DATE',
    ACTIVE_START_DATE: <ShowDateStrategy>'ACTIVE_START_DATE',
    ACTIVE_END_DATE: <ShowDateStrategy>'ACTIVE_END_DATE',
}

export const TaskPriority = {
    HIGH: <TaskPriority>'HIGH',
    MEDIUM: <TaskPriority>'MEDIUM',
    LOW: <TaskPriority>'LOW',
    DEF_TASK_PRIORITY: <TaskPriority>'DEF_TASK_PRIORITY',
}

export const TaskStatus = {
    PLANNED: <TaskStatus>'PLANNED',
    PROGRESS: <TaskStatus>'PROGRESS',
    APPROVAL: <TaskStatus>'APPROVAL',
    DECLINED: <TaskStatus>'DECLINED',
    CLARIFY: <TaskStatus>'CLARIFY',
    DONE: <TaskStatus>'DONE',
    ARCHIEVE: <TaskStatus>'ARCHIEVE',
    DEF_TASK_STATUS: <TaskStatus>'DEF_TASK_STATUS',
}

export const TaskType = {
    MEETING: <TaskType>'MEETING',
    CALL: <TaskType>'CALL',
    OTHER: <TaskType>'OTHER',
}

export const TitleFillStrategy = {
    CLIENT: <TitleFillStrategy>'CLIENT',
    TASK_TYPE: <TitleFillStrategy>'TASK_TYPE',
}

// export function isRoleCondition(defaultCondition<T>: DefaultCondition<T>): defaultCondition<T> is RoleCondition {
//     return defaultCondition<T>. === "ROLE";
// }
//
// export function isTaskStatusCondition(defaultCondition<T>: DefaultCondition<T>): defaultCondition<T> is TaskStatusCondition {
//     return defaultCondition<T>. === "TASK_STATUS";
// }
//
// export function isTaskTypeCondition(defaultCondition<T>: DefaultCondition<T>): defaultCondition<T> is TaskTypeCondition {
//     return defaultCondition<T>. === "TASK_TYPE";
// }
//
// export function isAndCondition(defaultCondition<T>: DefaultCondition<T>): defaultCondition<T> is AndCondition {
//     return defaultCondition<T>. === "AND";
// }
//
// export function isOrCondition(defaultCondition<T>: DefaultCondition<T>): defaultCondition<T> is OrCondition {
//     return defaultCondition<T>. === "OR";
// }
//
// export function isCheckbox(filterParam<T>: FilterParam<T>): filterParam<T> is Checkbox {
//     return filterParam<T>. === "Checkbox";
// }
//
// export function isDateInput(filterParam<T>: FilterParam<T>): filterParam<T> is DateInput {
//     return filterParam<T>. === "DateInput";
// }
//
// export function isOptionItem(filterParam<T>: FilterParam<T>): filterParam<T> is OptionItem {
//     return filterParam<T>. === "OptionItem";
// }
//
// export function isRadioGroup(filterParam<T>: FilterParam<T>): filterParam<T> is RadioGroup {
//     return filterParam<T>. === "RadioGroup";
// }
//
// export function isSelect(filterParam<T>: FilterParam<T>): filterParam<T> is Select {
//     return filterParam<T>. === "Select";
// }
//
// export function isSwitch(filterParam<T>: FilterParam<T>): filterParam<T> is Switch {
//     return filterParam<T>. === "Switch";
// }
//
// export function isTabSelector(filterParam<T>: FilterParam<T>): filterParam<T> is TabSelector {
//     return filterParam<T>. === "TabSelector";
// }
