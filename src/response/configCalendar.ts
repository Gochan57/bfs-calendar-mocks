/**
 * Кофигурация, возвращаемая бэком календаря.
 */

import * as Model from 'src/model/index';

export function configCalendar(): Model.Response<Model.CalendarConfig> {
    return {
        success: true,
        body: {
            roles: [
                'GUIDE'
            ],
            description: 'Конфиг Календаря',
            cards: [
                {
                    name: 'read',
                    caption: null,
                    description: 'Детальная карточка задачи',
                    mode: 'READ',
                    taskListDisabled: null,
                    taskListVisible: null,
                    headerHidden: null,
                    conditions: [
                        {
                            '@type': 'AND',
                            when: null,
                            value: [
                                {
                                    '@type': 'ROLE',
                                    when: 'EQUALS',
                                    value: 'GUIDE'
                                },
                                {
                                    '@type': 'TASK_TYPE',
                                    when: 'NOT_EQUALS',
                                    value: '1-CALL'
                                }
                            ]
                        }
                    ],
                    rows: [
                        {
                            title: {
                            }
                        },
                        {
                            manager: {
                                caption: 'Участники',
                            }
                        },
                        {
                            type: {
                                caption: 'Тип задачи'
                            },
                            status: {
                                caption: 'Статус'
                            },
                            priority: {
                                caption: 'Приоритет'
                            },
                        },
                        {
                            planDates: {
                                caption: 'Дата начала'
                            },
                            planDatesDuration: {
                                caption: 'Длительность'
                            }
                        },
                        {
                            address: {
                                caption: 'Место встречи'
                            }
                        },
                        {
                            description: {
                                caption: 'Описание',
                            }
                        },
                        {
                            contacts: {
                                caption: 'Контактное лицо'
                            }
                        },
                        {
                            persons: {
                            }
                        },
                        {
                            products: {
                            }
                        },
                        {
                            contacts: {
                                caption: 'Представители клиента',
                            }
                        },
                        {
                            comments: {
                                caption: 'История и комментарии',
                            }
                        },
                        {
                            factDates: {
                            }
                        },
                        {
                            leads: {
                            }
                        },
                        {
                            corporates: {
                            }
                        },
                        {
                            meetingLocation: {
                            }
                        },
                        {
                            description: {
                                caption: 'Суть задачи',
                            }
                        },
                        {
                            decision: {
                                caption: 'Текст запроса',
                            }
                        },
                        {
                            actionResult: {
                                caption: 'Результат запроса',
                            }
                        },
                        {
                            performer: {
                                caption: 'Исполнители',
                            }
                        },
                        {
                            initiator: {
                            }
                        },
                        {
                            manager: {
                            }
                        },
                        {
                            vko: {
                            }
                        },
                        {
                            split: {
                            }
                        },
                        {
                            opportunities: {
                            }
                        },
                        {
                            history: {
                            }
                        },
                    ],
                    operations: [
                        {
                            name: 'assign',
                            conditions: [
                                {
                                    '@type': 'ROLE',
                                    when: 'EQUALS',
                                    value: 'EFS_PMOP_COMPLIANCE_CORP'
                                }
                            ],
                            caption: 'Ввести результат',
                            gotoCardName: '_INPUT_RESULT',
                            hidden: true
                        },
                        {
                            name: 'edit',
                            conditions: [],
                            caption: 'Изменить или удалить',
                            gotoCardName: 'update',
                            hidden: false
                        },
                        {
                            name: 'edit',
                            conditions: [],
                            caption: 'Удалить',
                            gotoCardName: 'update',
                            hidden: false
                        }
                    ],
                    allOperations: [
                        {
                            name: 'assign',
                            conditions: [
                                {
                                    '@type': 'ROLE',
                                    when: 'EQUALS',
                                    value: 'EFS_PMOP_COMPLIANCE_CORP'
                                }
                            ],
                            caption: 'Назначить на исполнителя',
                            gotoCardName: 'assign',
                            hidden: false
                        },
                        {
                            name: 'edit',
                            conditions: [],
                            caption: 'Редактировать',
                            gotoCardName: 'update',
                            hidden: false
                        }
                    ]
                }
            ],
            taskListDisabled: false,
            showWeekend: false
        }
    }
}
