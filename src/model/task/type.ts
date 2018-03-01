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

export type TaskPriority = 'HIGH' | 'MEDIUM' | 'LOW' | 'DEF_TASK_PRIORITY';
export const TaskPriority: { [key: string]: TaskPriority } = {
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW',
    DEF_TASK_PRIORITY: 'DEF_TASK_PRIORITY',
}

export type TaskType = 'MEETING' | 'CALL' | 'OTHER';
export const TaskType: { [key: string]: TaskType } = {
    MEETING: 'MEETING',
    CALL: 'CALL',
    OTHER: 'OTHER',
}

export type AddressType = 'REG' | 'WORK' | 'LIVE';
export const AddressType: { [key: string]: AddressType } = {
    REG: 'REG',
    WORK: 'WORK',
    LIVE: 'LIVE',
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

export type JobTitleType = 'OFFICER' | 'EMPLOYEE' | 'DIRECTOR';
export const JobTitleType: { [key: string]: JobTitleType } = {
    OFFICER: 'OFFICER',
    EMPLOYEE: 'EMPLOYEE',
    DIRECTOR: 'DIRECTOR',
}