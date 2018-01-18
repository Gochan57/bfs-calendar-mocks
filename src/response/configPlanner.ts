/**
 * Кофигурация, возвращаемая бэком планировщика.
 */

import * as Model from 'src/model/index';

export default function configPlanner(): Model.Response<Model.RoleGroupConfiguration> {
    return {
        'success': true,
        'body': {
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
            'canCreateTask': true,
            'enrichTaskListVsEmployee': false,
            'enrichTaskListVsClientInfo': false,
            'enrichTaskListVsPoints': false,
            'enrichTaskDetailsVsEmployees': false,
            'enrichTaskDetailsVsClientInfo': false,
            'enrichTaskDetailsVsPoints': false,
            'titleFillStrategy': 'CLIENT',
            'showDateStrategy': 'PLANNED_START',
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
                    ]
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
                    'operations': [
                        {
                            hidden: true,
                            'name': 'assign',
                            'conditions': [
                                {
                                    '@type': 'ROLE',
                                    'when': 'EQUALS',
                                    'value': 'EFS_PMOP_COMPLIANCE_CORP'
                                }
                            ],
                            'caption': 'Ввести результат',
                            'gotoCardName': '_INPUT_RESULT',
                        },
                        {
                            hidden: false,
                            'name': 'edit',
                            'caption': 'Изменить или удалить',
                            'gotoCardName': 'update'
                        },
                        {
                            hidden: false,
                            'name': 'edit',
                            'caption': 'Удалить',
                            'gotoCardName': 'update'
                        }
                    ],
                    'allOperations': [
                        {
                            'name': 'assign',
                            'conditions': [
                                {
                                    '@type': 'ROLE',
                                    'when': 'EQUALS',
                                    'value': 'EFS_PMOP_COMPLIANCE_CORP'
                                }
                            ],
                            'caption': 'Назначить на исполнителя',
                            'gotoCardName': 'assign'
                        },
                        {
                            'name': 'edit',
                            'caption': 'Редактировать',
                            'gotoCardName': 'update'
                        }
                    ]
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
            },
            //'isNeedToGroupingTaskList': true
        }
    }
}
