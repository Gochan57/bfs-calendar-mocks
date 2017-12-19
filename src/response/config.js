export default function config() {
    return {
        "success": true,
        "body": {
            "roles": [
                "EFS_MRM_MONITORING_GUARANTY_USER"
            ],
            "description": "Геомониторинг для логов",
            "dataSource": "PPRB_USP",
            "methods": {
                "forTaskDetails": "EFSCMPLGetActionDetails",
                "forTaskList": "EFSCMPLGetActionsByLogin",
                "forTaskUpdate": "EFSCMPLUpdateAction"
            },
            "canCreateTask": false,
            "enrichTaskListVsEmployee": false,
            "enrichTaskListVsClientInfo": false,
            "enrichTaskListVsPoints": false,
            "enrichTaskDetailsVsEmployees": false,
            "enrichTaskDetailsVsClientInfo": false,
            "enrichTaskDetailsVsPoints": false,
            "titleFillStrategy": "CLIENT",
            "showDateStrategy": "PLANNED_START",
            "filter": [
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
            "cards": [
                {
                    "name": "read",
                    "caption": null,
                    "description": "Детальная карточка задачи",
                    "mode": "READ",
                    "taskListDisabled": null,
                    "taskListVisible": null,
                    "headerHidden": null,
                    "conditions": [
                        {
                            "@type": "AND",
                            "when": null,
                            "value": [
                                {
                                    "@type": "ROLE",
                                    "when": "EQUALS",
                                    "value": "GUIDE"
                                },
                                {
                                    "@type": "TASK_TYPE",
                                    "when": "NOT_EQUALS",
                                    "value": "1-CALL"
                                }
                            ]
                        }
                    ],
                    "rows": [
                        {
                            "title": {
                                "order": 10
                            }
                        },
                        {
                            "planDates": {
                                "order": 10,
                                "caption": "Дата начала"
                            },
                            "status": {
                                "order": 12,
                                "caption": "Статус"
                            },
                            "priority": {
                                "order": 13,
                                "caption": "Приоритет"
                            },
                            "type": {
                                "order": 14,
                                "caption": "Тип задачи"
                            }
                        },
                        {
                            "address": {
                                "order": 10,
                                "caption": "Адрес"
                            }
                        },
                        {
                            "contacts": {
                                "order": 10,
                                "caption": "Контактное лицо"
                            }
                        }
                    ],
                    "operations": [],
                    "allOperations": []
                }
            ],
            "defaultFilter": {
                "status": "any",
                "type": "any",
                "divisionTasks": false,
                "important": false
            },
            "mappings": {
                "taskTypes": {
                    "3-ClientCall": "CALL",
                    "1-Calling": "CALL",
                    "2-Meeting": "MEETING"
                },
                "taskStatuses": {
                    "Cancelled": "DECLINED",
                    "Planned": "PLANNED"
                },
                "taskPriorities": {
                    "2-High": "MEDIUM",
                    "1-ASAP": "HIGH"
                }
            }
        }
    };
}
//# sourceMappingURL=config.js.map