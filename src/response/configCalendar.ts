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
                    rows:[
                        {
                            position: 'header',
                            blocks: [{
                                type: 'title'
                            }]
                        },
                        {
                            position: 'header',
                            horizontalLine: true,
                            blocks: [{
                                type: 'type', // возможно, что важность задачи надо описывать через important
                                'caption': 'Тип задачи',
                            }, {
                                type: 'priority',
                                'caption': 'Высокая важность'
                            },]
                        },
                        {
                            blocks: [{
                                type: 'button',
                                actions: [{
                                    caption: 'Поехали!',
                                    type: 'NavigateToApp',
                                    param: 'имя бандла Поехали'
                                }]
                            }, {
                                type: 'button',
                                actions: [{
                                    caption: 'Подробности',
                                    type: 'NavigateToApp',
                                    param: 'имя бандла Подробности'
                                }]
                            }]
                        },
                        {
                            flexWrap: 'wrap',
                            justifyContent: 'flexStart',
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
                                type: 'description',
                                'caption': 'Описание',
                            }]
                        },
                        {
                            blocks: [{
                                type: 'address',
                                caption: 'Адрес'
                            },]
                        },{
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
                                actions: [{
                                    caption: 'Показать все объекты',
                                    type: 'NavigateToApp',
                                    param: 'имя бандла геомониторинга'
                                }],
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
                            justifyContent: 'spaceAround',
                            blocks: [{
                                type: 'button',
                                actions: [{
                                    caption: 'Изменить',
                                    type: 'Action',
                                    param: 'Change'
                                }]
                            }, {
                                type: 'redButton',
                                actions: [{
                                    caption: 'Удалить',
                                    type: 'Action',
                                    param: 'Delete',
                                }]
                            }]
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
