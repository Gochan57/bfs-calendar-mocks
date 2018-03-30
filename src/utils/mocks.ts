import * as Model from '../model'
import * as SbrfModel from '../model/sbrfModel'
import moment from 'moment'

/**
 * Хранилище списка задач
 */
namespace Task {

    function createPriority(priority?: SbrfModel.TaskPriority): Model.ClassifierRef<SbrfModel.TaskPriority> {
        if (!priority) {
            return undefined
        }
        if (priority === SbrfModel.TaskPriority.HIGH) {
            return {
                'code': '1-ASAP',
                'value': 'Высокий',
                'ref': priority
            }
        }
        if (priority === SbrfModel.TaskPriority.MEDIUM) {
            return {
                'code': '2-HIGH',
                'value': 'Высокий',
                'ref': priority
            }
        }
        if (priority === SbrfModel.TaskPriority.HIGH) {
            return {
                'code': '3-Medium',
                'value': 'Низкий',
                'ref': priority
            }
        }
        return {
            'code': '4-Low',
            'value': '4-Low',
            'ref': SbrfModel.TaskPriority.DEF_TASK_PRIORITY
        }
    }

    function createTaskType(taskType: SbrfModel.TaskType | 'ISU'): Model.ClassifierRef<SbrfModel.TaskType> {
        if (!taskType) {
            return undefined
        }
        if (taskType === SbrfModel.TaskType.MEETING) {
            return {
                'code': '2-Meeting',
                'value': 'Встреча',
                'ref': taskType
            }
        }
        if (taskType === SbrfModel.TaskType.CALL) {
            return {
                'code': '1-Calling',
                'value': 'Звонок',
                'ref': taskType
            }
        }
        if (taskType === 'ISU') {
            return {
                'code': 'ISU',
                'value': 'Отклонение ИСУ',
                'ref': SbrfModel.TaskType.OTHER
            }
        }
        if (taskType === SbrfModel.TaskType.OTHER) {
            return {
                'code': 'OTHER',
                'value': 'Неизвестный тип',
                'ref': taskType
            }
        }
    }

    interface ITask {
        id: string,
        title?: string,
        subtitle?: string,
        description?: string,
        start?: string,
        end?: string,
        dueDate?: string,
        priority?: SbrfModel.TaskPriority,
        taskType?: SbrfModel.TaskType,
        meetingLocation?: string,
        wholeDay?: boolean,
        pledges?: SbrfModel.Pledges
    }

    function createTask(params: ITask): SbrfModel.SbrfTask {
        const {id, title, subtitle, description, start, end, dueDate, priority, taskType, meetingLocation, wholeDay, pledges} = params
        return {
            'id': id,
            'title': title !== undefined ? title : 'Торговый дом оконная, ООО',
            'description': description !== undefined ? description : 'В ГОСБ число ТП с отклонение «Количество созданных сделок МКК по зарплатным проектам» за две недели наибольшее в ТБ с учетом доли бизнеса.',
            'plannedStart': start,
            'plannedEnd': end,
            'dueDate': dueDate,
            'timeRef': wholeDay ? 'DAY' : 'DATETIME',
            'subtitle': subtitle !== undefined ? subtitle : '2 объекта',
            'status': {
                'code': 'NEW',
                'value': 'Новая',
                'ref': 'PLANNED'
            },
            'taskType': createTaskType(taskType),
            'priority': createPriority(priority),
            'employees': [
                {
                    'login': 'IIShishkin',
                    'name': 'Иванов Иван Иванович',
                    'type': 'INITIATOR',
                    'jobTitle': 'Большая шишка',
                    'workPhone': '1234-5678-00',
                    'mobilePhone': '916-1234-5678',
                    'email': '1234@mail.ru',

                },
                {
                    'login': 'IKAyvasovsky',
                    'name': 'Иван Константинович Айвазовский',
                    'type': 'PERFORMER',
                    'jobTitle': 'Свободный художник',
                    'workPhone': '1234-5678-01',
                    'mobilePhone': '916-1234-12345',
                    'email': '6785@mail.ru',
                    'businessSegment': {
                        'code': 'Mass',
                        'value': 'Mass'
                    }
                },

            ],
            'meetingLocation': meetingLocation !== undefined ? meetingLocation : 'ул. Просвещения, 80',
            'corporates': [
                {
                    'crmId': '1-CG64DU',
                    'name': 'ОАО УралПромСтройМарш',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Иван Константинович Айвазовский с сыновьями и внуками',
                            'mobilePhone': '+7 (988) 123-12-12',
                            'primaryEmail': 'mail@mail.ru',
                            'primaryPhone': '12345-987654',
                            'jobTitle': 'Залогодатель',
                        }
                    ]
                }
            ],
            'actionResult': {
                'code': 'Other',
                'value': 'Other'
            },
            'products': [
                {
                    'name': 'Потребительский кредит'
                },
                {
                    'name': 'Жилищные кредиты'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value002',
                    'epkId': 'EpkId_value002',
                    'lastName': 'Фет',
                    'firstName': 'Афанасий',
                    'middleName': 'Афанасьевич',
                    'documentSerNum': '21 21 654321',
                    'segment': {
                        'code': 'Super VIP',
                        'value': 'Super VIP'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 8'
                }
            ],
            'estimated': {
                'login': 'Vania',
                'type': 'MANAGER'
            },
            'childActivityFlag': 'C',
            'pointId': '2',
            'addressId': 'SPB',
            'gps': 'G',
            'inTimeFlag': 'I',
            'autoactivityFlag': true,
            'opportunities': [
                {
                    'id': '1',
                    'description': 'возможность 1',
                    'salesStage': 'шаг 1',
                    'salesChannel': 'канал 1',
                    'fot': 2,
                    'employeeQuantity': 1
                }
            ],
            'phoneNumber': 'hidden',
            'listType': 'ACTIVITY',
            'pledges': pledges !== undefined ? pledges : {
                'totalCount': 79,
                'objects': [
                    {
                        'objType': 'Недвижимость',
                        'name': 'Автомобили, спецтехника, самоходные механизмы',
                        'count': 74
                    },
                    {
                        'objType': 'Движимое имущество',
                        'name': 'Воздушные суда',
                        'count': 5,
                    }
                ]
            }
        }
    }

    /**
     * Получить дату в виде строки ISO
     * @param {number} days - Число дней от сегодняшнего: -1 - вчера, 0 - сегодня, 1 - завтра и тд
     * @param {string} time - Время в формате HH:MM
     * @returns {string} - Дата в формате ISO
     */
    function date(days: number, time?: string): string {
        let day = moment().add(days, 'days').format('YYYY-MM-DD') // день в формате 2013-02-25
        return moment(`${day} ${time}`).toISOString()
    }

    /**
     * Задача для демонстрации перехода на планировщик
     */
    const plannerGeoTask: SbrfModel.SbrfTask = {
        'id': '1-2GHE2Q',
        'title': 'ОАО УралПромСтройМарш',
        'description': 'ул. Просвещения, 80',
        'subtitle': '2 объекта',
        'status': {
            'code': 'Assigned',
            'value': 'Назначенная'
        },
        'taskType': {
            'code': 'Call – Outbound',
            'value': 'Исходящий звонок',
            'ref': 'OTHER'
        },
        'priority': {
            'code': '4-Low',
            'value': '4-Low',
            'ref': 'DEF_TASK_PRIORITY'
        },
        'employees': [
            {
                'login': 'IIShishkin',
                'name': 'Иван Иванович Шишкин',
                'type': 'INITIATOR'
            },
            {
                'login': 'IKAyvasovsky',
                'name': 'Иван Константинович Айвазовский',
                'type': 'PERFORMER',
                'businessSegment': {
                    'code': 'Mass',
                    'value': 'Mass'
                }
            },
            {
                'id': 'mid-02',
                'type': 'MANAGER'
            }
        ],
        'plannedStart': date(0, '12:00'),
        'plannedEnd': date(0, '13:00'),
        'meetingLocation': 'ул. Просвещения, 80',
        'corporates': [
            {
                'crmId': '1-CG64DU',
                'name': 'ОАО УралПромСтройМарш',
                'inn': '1234567890',
                'contacts': [
                    {
                        'fullName': 'Айвазовский Иван Константинович',
                        'mobilePhone': '+7 (988) 123-12-12',
                        'primaryEmail': 'mail@mail.ru',
                        'jobTitle': 'Залогодатель'
                    }
                ],
                'addresses': [
                    {
                        'address': 'ул. Ростовская, 23'
                    }
                ]
            }
        ],
        'actionResult': {
            'code': 'Other',
            'value': 'Other'
        },
        'products': [
            {
                'name': 'Потребительский кредит'
            },
            {
                'name': 'Жилищные кредиты'
            }
        ],
        'persons': [
            {
                'birthDate': '1989-06-13',
                'stubId': 'StubId_value002',
                'epkId': 'EpkId_value002',
                'lastName': 'Фет',
                'firstName': 'Афанасий',
                'middleName': 'Афанасьевич',
                'documentSerNum': '21 21 654321',
                'segment': {
                    'code': 'Super VIP',
                    'value': 'Super VIP'
                }
            }
        ],
        'modId': 1,
        'comments': [
            {
                'text': 'Текст комментария 8'
            }
        ],
        'estimated': {
            'login': 'Vania',
            'type': 'MANAGER'
        },
        'childActivityFlag': 'C',
        'pointId': '2',
        'addressId': 'SPB',
        'gps': 'G',
        'inTimeFlag': 'I',
        'autoactivityFlag': true,
        'opportunities': [
            {
                'id': '1',
                'description': 'возможность 1',
                'salesStage': 'шаг 1',
                'salesChannel': 'канал 1',
                'fot': 2,
                'employeeQuantity': 1
            }
        ],
        'phoneNumber': 'hidden',
        'listType': 'ACTIVITY',
        'pledges': {
            'totalCount': 79,
            'objects': [
                {
                    'objType': 'Недвижимость',
                    'name': 'Автомобили, спецтехника, самоходные механизмы',
                    'count': 74
                },
                {
                    'objType': 'Движимое имущество',
                    'name': 'Воздушные суда',
                    'count': 5
                }
            ]
        }
    }

    export const tasks: SbrfModel.SbrfTask[] = [
        plannerGeoTask,
        createTask({id: '1', start: date(+0, '15:30'), end: date(+0, '16:30'), taskType: 'MEETING', priority: 'HIGH'}),
        createTask({
            id: '2',
            start: date(+0, '15:40'),
            end: date(+0, '16:20'),
            taskType: 'CALL',
            title: 'ОАО УралПромСтройМарш'
        }),
        createTask({
            id: '3',
            start: date(+0, '16:00'),
            end: date(+0, '16:20'),
            taskType: 'CALL',
            title: 'Группа Компаний ПИК',
            description: 'Крупнейшая российская девелоперская компания, реализующая проекты в Москве, Московской области и регионах России. Группа работает на рынке с 1994 года и специализируется на проектах в сегменте доступного жилья'
        }),
        createTask({id: '4', start: date(+0, '00:00'), end: date(0, '13:59'), wholeDay: true}),
        createTask({id: '5', start: date(-1, '12:15'), end: date(-1, '14:00'), taskType: 'CALL', priority: 'HIGH'}),
        createTask({
            id: '6',
            start: date(-1, '15:15'),
            end: date(-1, '16:00'),
            taskType: 'MEETING',
            title: 'ОАО ТяжПромСтрой'
        }),
        createTask({
            id: '7',
            start: date(+1, '13:00'),
            end: date(+1, '14:15'),
            title: 'Залоги Полярис',
            pledges: {totalCount: 0, objects: []}
        }),
        createTask({
            id: '8',
            start: date(+1, '00:00'),
            end: date(+1, '13:59'),
            wholeDay: true,
            title: 'ООО СХП Вдохновение'
        }),
        createTask({id: '9', start: date(-20, '18:00'), end: date(-20, '19:30')}),
        createTask({id: '10', title: 'ЗАО Полярис', meetingLocation: 'ул. Мира, 132'}),
        createTask({id: '11', title: 'Авиоконструкторское бюро', meetingLocation: 'ул. Орбитальная, 109'}),
        createTask({id: '12', title: 'ОАО Лукойл', meetingLocation: 'ул. Возрождения, 2'}),
        createTask({id: '13', title: 'Сделка с ООО "ЯСНО"', meetingLocation: 'ул. Просвещения, 80'}),
        createTask({id: '14', title: 'Встреча с клиентом из группы ПИК', taskType: 'MEETING'}),
        createTask({
            id: '15',
            title: 'Отнести документы в отдел кадров',
            subtitle: 'Документы на отпуск',
            meetingLocation: 'ДФ-1 10 этаж'
        }),
        createTask({id: '16'}),
        createTask({id: '17'}),
        createTask({id: '18'}),
        createTask({id: '19'}),
        createTask({id: '20'}),
        createTask({id: '21'}),
        createTask({id: '22'}),
        createTask({id: '23'}),
        createTask({id: '24'}),
        createTask({id: '25'}),
        createTask({id: '26'}),
        createTask({id: '27'}),
        createTask({id: '28'}),
        createTask({id: '29'}),
        createTask({id: '30'}),
        createTask({id: '31'}),
        createTask({id: '32'}),
        createTask({id: '33'}),
        createTask({id: '34'}),
        createTask({id: '35'}),
        createTask({id: '36'}),
        createTask({id: '37'}),
        createTask({id: '38'}),
        createTask({id: '39'}),
        createTask({id: '40'}),
        createTask({id: '41'}),
        createTask({id: '42'}),
        createTask({id: '43'}),
        createTask({id: '44'}),
        createTask({id: '45'}),
        createTask({id: '46'}),
        createTask({id: '47'}),
        createTask({id: '48'}),
        createTask({id: '49'}),
        createTask({id: '50'}),
        createTask({id: '51'}),
        createTask({id: '52'}),
        createTask({id: '53'}),
        createTask({id: '54'}),
        createTask({id: '55'}),
        createTask({id: '56'}),
        createTask({id: '57'}),
        createTask({id: '58'}),
        createTask({id: '59'}),
        createTask({id: '60'}),
        createTask({id: '61'}),
        createTask({id: '62'}),
        createTask({id: '63'}),
        createTask({id: '64'}),
        createTask({id: '65'}),
        createTask({id: '66'}),
        createTask({id: '67'}),
        createTask({id: '68'}),
        createTask({id: '69'}),
        createTask({id: '70'}),
        createTask({id: '71'}),
        createTask({id: '72'}),
        createTask({id: '73'}),
        createTask({id: '74'}),
        createTask({id: '75'}),
        createTask({id: '76'}),
        createTask({id: '77'}),
        createTask({id: '78'}),
        createTask({id: '79'}),
        createTask({id: '80'}),
        createTask({id: '81'}),
        createTask({id: '82'}),
        createTask({id: '83'}),
        createTask({id: '84'}),
        createTask({id: '85'}),
        createTask({id: '86'}),
        createTask({id: '87'}),
        createTask({id: '88'}),
        createTask({id: '89'}),
        createTask({id: '90'}),
        createTask({id: '91'}),
        createTask({id: '92'}),
        createTask({id: '93'}),
        createTask({id: '94'}),
        createTask({id: '95'}),
        createTask({id: '96'}),
        createTask({id: '97'}),
        createTask({id: '98'}),
        createTask({id: '99'}),
        createTask({id: '100'}),
    ]
}

export function generateTaskList(filter: Model.SbrfTaskFilter): SbrfModel.SbrfTask[] {
    const {pageSize, pageNum, datePlanFrom, datePlanTo, type, taskTypes, planned} = filter

    const res = Task.tasks
        .filter(task => {
            // Фильтруем по датам
            if ((datePlanFrom || datePlanTo) && (!task.plannedStart || !task.plannedEnd)) {
                return false
            }
            if (datePlanFrom && task.plannedStart && moment(task.plannedStart).isBefore(moment(datePlanFrom))) {
                return false
            }
            if (datePlanTo && task.plannedStart && moment(task.plannedStart).isAfter(moment(datePlanTo))) {
                return false
            }
            return true
        })
        .filter(task => {
            // Фильтруем незапланированные
            // FIXME узнать, чему равны значения plannedStart и plannedEnd у незапланированных задач
            return planned === false && !task.plannedStart && !task.plannedEnd || planned !== false
        })
        .filter(task => {
            // Фильтруем "Завершить до"
            // FIXME узнать, какой параметр в SbrfTaskFilter отвечает за "Завершить до"
            return true
        })
        .filter(task => {
            // Фильтруем "Приоритет"
            // FIXME как задавать приоритет с помощью Switch ?
            return true
        })
        .filter(task => {
            // Фильтруем по типу задачи
            // FIXME что передается в type и taskTypes у SbrfTaskFilter: ref или code ?
            if (type) {
                return task.taskType && task.taskType.ref === type
            }
            if (taskTypes) {
                return task.taskType && taskTypes.indexOf(task.taskType.ref) > -1
            }
            return true
        })
        .filter((task, i) => {
            // Выбираем нужную страницу
            if (pageNum === undefined || pageNum === null || pageSize === undefined || pageSize === null) {
                return true
            }
            return i >= pageNum * pageSize && i < (pageNum + 1) * pageSize
        })
        // .map(task => ({...task, timeRef: <'UNBOUND' | 'DATE' | 'DATETIME' | 'DEADLINE' | 'DAY'>'DAY'}))

    return res
}

export function generatePlannerConfig(): SbrfModel.RoleGroupConfiguration {
    return {
        'roles': [
            'GUIDE'
        ],
        'description': 'Гайд Планировщика (для разработки/тестирования)',
        'dataSource': 'CRM_CORPORATE',
        'methods': {
            'forTaskDetails': 'EFSCMPLGetActionDetails',
            'forTaskList': 'EFSCMPLGetActionsByLogin',
            'forTaskUpdate': 'EFSCMPLUpdateAction'
        },
        'canCreateTask': false, // для геомониторига не возм созд задачу  // true,
        'noSeparateTaskService': true, // признак отсутствия отдельного сервиса для получения детальной информации по задаче
        'enrichTaskListVsEmployee': false,
        'enrichTaskListVsClientInfo': false,
        'enrichTaskListVsPoints': false,
        'enrichTaskDetailsVsEmployees': false,
        'enrichTaskDetailsVsClientInfo': false,
        'enrichTaskDetailsVsPoints': false,
        'titleFillStrategy': 'CLIENT',
        'showDateStrategy': 'DUE_DATE', //'PLANNED_START',
        'filter': [
            {
                '@type': 'CheckboxGroup',
                'order': 0,
                'required': true,
                'name': 'type',
                'caption': 'Типы задач',
                'position': 'DEFAULT',
                'defaultValue': 'any',
                'immediatelyApplicable': false,
                'resettable': true,
                'items': [
                    {
                        'value': 'Meeting',
                        'text': 'Встречи'
                    },
                    {
                        'value': 'Calling',
                        'text': 'Звонки'
                    },
                    {
                        'value': 'Task',
                        'text': 'Задания'
                    }
                ],
                'type': 'DEFAULT'
            },
            {
                '@type': 'DateInput',
                'order': 1,
                'required': true,
                'name': 'datePlanTo',
                'caption': 'Завершить до',
                'position': 'DEFAULT',
                'immediatelyApplicable': false,
                'resettable': true
            },
            {
                '@type': 'Switch',
                'order': 2,
                'required': false,
                'name': 'priority',
                'caption': 'Только важные',
                'position': 'SEARCH_PANEL',
                'defaultValue': false,
                'immediatelyApplicable': false,
                'resettable': true
            },
        ],
        'cards': [
            {
                'name': 'read',
                'caption': null,
                'description': 'Детальная карточка задачи',
                'mode': 'READ',
                'taskListDisabled': null,
                'taskListVisible': null,
                'headerHidden': null,
                'conditions': [
                    {
                        '@type': 'AND',
                        'when': null,
                        'value': [
                            {
                                '@type': 'ROLE',
                                'when': 'EQUALS',
                                'value': 'GUIDE'
                            },
                            {
                                '@type': 'TASK_TYPE',
                                'when': 'NOT_EQUALS',
                                'value': '1-CALL'
                            }
                        ]
                    }
                ],
                'rows': [
                    {
                        'title': {
                            'order': 10
                        }
                    },
                    {
                        'manager': {
                            'order': 1,
                            'caption': 'Участники',
                        }
                    },
                    {
                        'type': {
                            'order': 14,
                            'caption': 'Тип задачи'
                        },
                        'status': {
                            'order': 12,
                            'caption': 'Статус'
                        },
                        'priority': {
                            'order': 13,
                            'caption': 'Приоритет'
                        },
                    },
                    {
                        'planDates': {
                            'order': 10,
                            'caption': 'Дата начала'
                        },
                        'planDatesDuration': {
                            'order': 10,
                            'caption': 'Длительность'
                        }
                    },
                    {
                        'address': {
                            'order': 10,
                            'caption': 'Место встречи'
                        }
                    },
                    {
                        'description': {
                            'caption': 'Описание',
                            'order': 10,
                        }
                    },
                    {
                        'contacts': {
                            'order': 10,
                            'caption': 'Контактное лицо'
                        }
                    },
                    {
                        'persons': {
                            'order': 7,
                            'multiple': false
                        }
                    },
                    {
                        'products': {
                            'order': 75
                        }
                    },
                    {
                        'contacts': {
                            'caption': 'Представители клиента',
                            'order': 50
                        }
                    },
                    {
                        'comments': {
                            'caption': 'История и комментарии',
                            'order': 70,
                            'multiple': true
                        }
                    },
                    {
                        'factDates': {
                            'order': 15
                        }
                    },
                    {
                        'leads': {
                            'order': 80,
                            'multiple': true
                        }
                    },
                    {
                        'corporates': {
                            'order': 30,
                            'multiple': false
                        }
                    },
                    {
                        'meetingLocation': {
                            'order': 17
                        }
                    },
                    {
                        'description': {
                            'caption': 'Суть задачи',
                            'order': 40
                        }
                    },
                    {
                        'decision': {
                            'caption': 'Текст запроса',
                            'order': 60
                        }
                    },
                    {
                        'actionResult': {
                            'caption': 'Результат запроса',
                            'order': 20
                        }
                    },
                    {
                        'performer': {
                            'caption': 'Исполнители',
                            'order': 65,
                            'multiple': true
                        }
                    },
                    {
                        'initiator': {
                            'order': 90
                        }
                    },
                    {
                        'manager': {
                            'order': 100,
                            'multiple': false
                        }
                    },
                    {
                        'vko': {
                            'order': 100
                        }
                    },
                    {
                        'split': {
                            'order': 110
                        }
                    },
                    {
                        'opportunities': {
                            'order': 120
                        }
                    },
                    {
                        'history': {
                            'order': 130,
                            'multiple': false
                        }
                    },
                ],
            }
        ],
        'defaultFilter': {
            'status': 'any',
            'type': 'any',
            'divisionTasks': false,
            'important': false
        },
        'mappings': {
            'taskTypes': {
                '3-ClientCall': 'CALL',
                '1-Calling': 'CALL',
                '2-Meeting': 'MEETING'
            },
            'taskStatuses': {
                'Cancelled': 'DECLINED',
                'Planned': 'PLANNED'
            },
            'taskPriorities': {
                '2-High': 'MEDIUM',
                '1-ASAP': 'HIGH'
            }
        }
    }
}

/**
 * Генерация конфига для РКМ
 * @return {CalendarConfig} - конфиг
 */
export function generateRKMCalendarConfig(): Model.CalendarConfig {
    return {
        roles: [
            'GUIDE'
        ],
        description: 'Конфиг Календаря',
        cards: [
            //Встречи
            {
                name: 'cardTalk',
                description: 'Карточка встречи',
                mode: 'READ',
                condition: {
                    type: 'TASK_FIELD',
                    param: 'taskType',
                    when: '==',
                    value: 'TALK',

                },
                rows: [
                    {
                        position: 'header',
                        blocks: [{
                            type: 'title'
                        }],
                    },
                    {
                        position: 'header',
                        blocks: [
                            {
                                type: 'type'
                            },
                            {
                                type: 'priority'
                            }
                        ],
                    },
                    {
                        blocks: [{
                            type: 'contacts',
                            caption: 'Контактное лицо',
                        }],
                    },
                    {
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        blocks: [{
                            type: 'planDates',
                            caption: 'Дата начала'
                        }, {
                            type: 'plannedStartEndTime', // planTime
                            caption: 'Время'
                        }, {
                            type: 'dueDateDuration',
                            caption: 'Осталось',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес'
                        },]
                    },
                    {
                        blocks: [
                            {
                                type: 'performer',
                                caption: 'Исполнитель'
                            }
                        ]
                    },
                    {
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        blocks: [
                            {
                                type: 'button',
                                caption: 'Детальная карточка продажи',
                                actions: {
                                    navigateToApp: {
                                        // перейти в приложение планировщика на разные карточки
                                        bundle: 'demoapp',  // надо задать
                                        param: {formName: 'nameForm'},
                                    },
                                }
                            },
                        ]
                    },
                    {
                        blocks: [
                            {
                                type: 'external',
                                caption: 'План встречи загружается...'
                            }
                        ]
                    },
                ],
            },
            // Отклонение ИСУ
            {
                name: 'read',
                description: 'Детальная карточка Отклонение ИСУ (TASK_FIELD taskType == ISU)',
                mode: 'READ',
                condition: {
                    type: 'TASK_FIELD',
                    param: 'taskType',
                    when: '==',
                    value: 'ISU',

                },
                rows: [
                    {
                        position: 'header',
                        blocks: [{
                            type: 'title'
                        }],
                    },
                    {
                        position: 'header',
                        blocks: [
                            {
                                type: 'type'
                            },
                            {
                                type: 'priority'
                            }
                        ],
                    },
                    {
                        blocks: [
                            {
                                type: 'button',
                                caption: 'Принять в работу',
                                condition: {
                                    type: 'TASK_FIELD',
                                    param: 'status',
                                    when: '==',
                                    value: 'NEW'
                                },
                                actions: {
                                    action: {
                                        type: 'Change',
                                        // navigateToApp:{
                                        //     bundle: 'task-service',
                                        // }
                                        diff: {
                                            //'PLANNED'| 'PROGRESS' | 'APPROVAL'| 'DECLINED'| 'CLARIFY'| 'DONE'| 'ARCHIEVE' | 'DEF_TASK_STATUS'
                                            //title: 'Вы приняли в работу',
                                            status: {
                                                ref: 'PROGRESS',
                                                code: 'PROGRESS',
                                                value: 'В работе',
                                            }
                                        },
                                    },
                                    // navigateToApp: {
                                    //     // перейти в приложение геомониторинга
                                    //     bundle:'geoBundle',
                                    //     param: 'bundleName',
                                    // },
                                }
                            },
                            {
                                type: 'button',
                                caption: 'Закрыть',
                                condition: {
                                    type: 'TASK_FIELD',
                                    param: 'status',
                                    when: '==',
                                    value: 'PROGRESS'
                                },
                                actions: {
                                    action: {
                                        type: 'Change',
                                        // navigateToApp:{
                                        //     bundle: 'task-service',
                                        // }
                                        diff: {
                                            //'PLANNED'| 'PROGRESS' | 'APPROVAL'| 'DECLINED'| 'CLARIFY'| 'DONE'| 'ARCHIEVE' | 'DEF_TASK_STATUS'
                                            // title: 'Вы закрыли задачу',
                                            status: {
                                                ref: 'DONE',
                                                code: 'DONE',
                                                value: 'Закрытая',
                                            }
                                        },
                                    },

                                }
                            },
                            {
                                type: 'button',
                                caption: 'Подробности',
                                justifyContent: 'flex-end',
                                actions: {
                                    navigateToApp: {
                                        // перейти в приложение
                                        bundle: 'demoapp',  // надо задать
                                        param: {formName: 'nameForm'},
                                    },
                                }
                            },
                        ],
                    },
                    // Период выявления отклонения и осталось будут отображаться во внешнем блоке
                    // {
                    //     blocks: [
                    //         {
                    //             type: 'dueDateDuration',
                    //             caption: 'Осталось'
                    //         },
                    //     ],
                    //
                    // },
                    {
                        blocks: [{
                            type: 'description',
                            caption: 'Описание'
                        }],
                    },
                    {
                        blocks: [{
                            type: 'external',
                            caption: 'Менеджер и Период выявления отклонения',
                        },]
                    },

                ],
            },
            {
                name: 'read',
                description: 'Детальная карточка задачи TASK_FIELD taskType == ISU',
                mode: 'READ',
                condition: {
                    type: 'TASK_FIELD',
                    param: 'taskType',
                    when: '==',
                    value: 'ISU'

                },
                rows: [
                    {
                        position: 'header',
                        blocks: [{
                            type: 'title'
                        }]
                    },
                    {
                        position: 'header',
                        blocks: [{
                            type: 'type', // возможно, что важность задачи надо описывать через important
                            'caption': 'Тип задачи (TASK_FIELD taskType == ISU)',
                        }, {
                            type: 'priority',
                            'caption': 'Высокая важность'
                        },]
                    },
                    {
                        blocks: [{
                            type: 'button',
                            condition: {
                                operator: 'AND',
                                operands: [
                                    {
                                        type: 'ROLE',
                                        when: '==',
                                        value: 'GUIDE'
                                    },
                                    {
                                        operator: 'OR',
                                        operands: [
                                            {
                                                type: 'TASK_FIELD',
                                                param: 'status',
                                                when: '==',
                                                value: 'Scheduled2'
                                            },
                                            {
                                                type: 'TASK_FIELD',
                                                param: 'taskType',
                                                when: '==',
                                                value: 'Call – Outbound2'
                                            }
                                        ]
                                    }
                                ]
                            },
                            caption: 'Поехали! role == GUIDE && type == Call – Outbound2',
                            actions: {
                                navigateToApp: {
                                    bundle: 'taskBandle',
                                    param: 'bundleName',
                                },
                            }
                        }, {
                            type: 'button',
                            caption: 'Подробности',
                            actions: {
                                navigateToApp: {
                                    bundle: 'taskBandle',
                                    param: 'bundleName',
                                },
                            }
                        }]
                    },
                    {
                        blocks: [{
                            type: 'external',
                            caption: 'Менеджер и Период выявления отклонения',
                        },]
                    },
                    {
                        blocks: [{
                            type: 'pledge',
                            caption: 'Объекты залога',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'button',
                            caption: 'Показать все объекты',
                            actions: {
                                navigateToApp: {
                                    bundle: 'taskBandle',
                                    param: 'bundleName',
                                },
                            }
                        }]
                    },
                    {
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        blocks: [{
                            type: 'planDates',
                            caption: 'Дата начала'
                        }, {
                            type: 'external',
                            caption: 'Блок в строке'
                        }, {
                            type: 'status',
                            caption: 'Статус',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'manager',
                            caption: 'Менеджер',
                            itemCaption: 'Менеджер',

                        }]
                    },
                    {
                        blocks: [{
                            type: 'description',
                            'caption': 'Описание',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 2'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 3'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 4'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 5'
                        },]
                    }, {
                        blocks: [{
                            type: 'contacts',
                            caption: 'Контактное лицо',
                            itemCaption: 'Контактное лицо',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'pledge',
                            caption: 'Объекты залога',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'button',
                            caption: 'Показать все объекты',
                            actions: {
                                navigateToApp: {
                                    bundle: 'taskBandle',
                                    param: 'bundleName',
                                },
                            }
                        }]
                    },
                    // TODO Для геомониторига не нужен
                    {
                        blocks: [{
                            type: 'manager',
                            caption: 'Участники',
                            itemCaption: 'Участник',

                        }]
                    },
                    {
                        justifyContent: 'space-around',
                        position: 'footer',

                        blocks: [{
                            type: 'button',
                            caption: 'Изменить',
                            actions: {
                                action: {
                                    type: 'Change',
                                    diff: {
                                        //'PLANNED'| 'PROGRESS' | 'APPROVAL'| 'DECLINED'| 'CLARIFY'| 'DONE'| 'ARCHIEVE' | 'DEF_TASK_STATUS'
                                        status: {
                                            ref: 'DONE',
                                            code: 'DONE',
                                            value: 'DONE',
                                        }
                                    },
                                },
                            }
                        }, {
                            type: 'redButton',
                            caption: 'Удалить',
                            actions: {
                                action: {
                                    type: 'Delete',
                                },
                            }
                        }]
                    },
                ],
            },
            {
                name: 'read',
                description: 'Детальная карточка задачи TASK_FIELD taskType != ISU',
                mode: 'READ',
                condition: {
                    type: 'TASK_FIELD',
                    param: 'taskType',
                    when: '!=',
                    value: 'ISU'

                },
                rows: [
                    {
                        position: 'header',
                        blocks: [{
                            type: 'title'
                        }]
                    },
                    {
                        position: 'header',
                        blocks: [{
                            type: 'type', // возможно, что важность задачи надо описывать через important
                            'caption': 'Тип задачи (TASK_FIELD taskType != ISU)',
                        }, {
                            type: 'priority',
                            'caption': 'Высокая важность'
                        },]
                    },
                    {
                        blocks: [{
                            type: 'external',
                            caption: 'Блок в колонке',
                        },]
                    },
                    {
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        blocks: [{
                            type: 'planDates',
                            caption: 'Дата начала'
                        }, {
                            type: 'external',
                            caption: 'Блок в строке'
                        }, {
                            type: 'status',
                            caption: 'Статус',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'description',
                            'caption': 'Описание',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 2'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 3'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 4'
                        },]
                    }, {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес 5'
                        },]
                    }, {
                        blocks: [{
                            type: 'contacts',
                            caption: 'Контактное лицо',
                            itemCaption: 'Контактное лицо',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'pledge',
                            caption: 'Объекты залога',
                        }]
                    },
                    // TODO Для геомониторига не нужен
                    {
                        blocks: [{
                            type: 'manager',
                            caption: 'Участники',
                            itemCaption: 'Участник',

                        }]
                    },
                    // TODO Для геомониторига не нужен
                    {
                        blocks: [{
                            type: 'manager',
                            caption: 'Участники',
                            itemCaption: 'Участник',

                        }]
                    },
                    {
                        justifyContent: 'space-around',
                        position: 'footer',
                        blocks: [{
                            type: 'button',
                            caption: 'Изменить',
                            actions: {
                                navigateToApp: {
                                    bundle: 'task-service',
                                }
                            }
                        }, {
                            type: 'redButton',
                            caption: 'Удалить',
                            actions: {
                                action: {
                                    type: 'Delete',
                                },
                            }
                        }]
                    },
                ],
            },
        ],
        taskListDisabled: false,
        showWeekend: true,
        gridTime: {
            start: '9:00',
            end: '18:00'
        },
        dragAndDropEnabled: true
    }
}

/**
 * Генерация конфига для геомониторинга
 * @returns {CalendarConfig} - конфиг
 */
export function generateGeomonitoringCalendarConfig(): Model.CalendarConfig {
    return {
        roles: [
            'EFS_MRM_MONITORING_GEOPLEDGE_USER'
        ],
        description: 'Конфиг календаря Геомониторинга',
        cards: [
            {
                name: 'read',
                description: 'Детальная карточка задачи',
                mode: 'READ',
                rows: [
                    {
                        position: 'header',
                        blocks: [{
                            type: 'title'
                        }]
                    },
                    {
                        position: 'header',
                        blocks: [{
                            type: 'type',
                        }, {
                            type: 'priority',
                            caption: 'Высокая важность'
                        },]
                    },
                    {
                        justifyContent: 'flex-end',
                        blocks: [
                            {
                                type: 'button',
                                caption: 'Подробности',
                                justifyContent: 'flex-end',
                                actions: {
                                    navigateToApp: {
                                        // перейти в приложение Планировщика
                                        type: 'READ_TASK',
                                        bundle: 'ufs-taskservice'
                                    },
                                }
                            }
                        ]
                    },
                    {
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        blocks: [{
                            type: 'planDates',
                            caption: 'Дата начала'
                        }, {
                            type: 'status',
                            caption: 'Статус',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'address',
                            caption: 'Адрес'
                        },]
                    },
                    {
                        blocks: [{
                            type: 'contacts',
                            caption: 'Контактное лицо',
                            itemCaption: 'Контактное лицо',
                        }]
                    },
                    {
                        blocks: [{
                            type: 'pledge',
                            caption: 'Объекты залога',
                        }]
                    },
                    {
                        blocks: [
                            {
                                type: 'button',
                                caption: 'Все объекты',
                                actions: {
                                    navigateToApp: {
                                        // перейти в приложение Геомониторинга
                                        bundle: 'listObjects',
                                        type: 'SHOW_ALL_OBJECTS',
                                    },
                                },
                                condition: {
                                    type: 'TASK_FIELD',
                                    param: 'pledges.objects.length', // 'pledges.totalCount',
                                    when: '>',
                                    value: 0,

                                },
                            }
                        ]
                    },
                ],
            },
        ],
        taskListDisabled: true,
        showWeekend: true,
        gridTime: {
            start: '9:00',
            end: '18:00'
        },
        dragAndDropEnabled: false

    }
}

export function generateCalendarConfig(): Model.CalendarConfig {
    let config = generateRKMCalendarConfig()
    let role = 'EFS_MRM_MONITORING_GEOPLEDGE_USER'
    // let role = 'RKM_USER'
    if (role === 'EFS_MRM_MONITORING_GEOPLEDGE_USER') {
        config = generateGeomonitoringCalendarConfig()
    }
    if (role === 'RKM_USER') {
        config = generateRKMCalendarConfig()
    }
    return config
}
