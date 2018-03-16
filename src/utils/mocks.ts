import * as Model from '../model'
import * as SbrfModel from '../model/sbrfModel'
import moment from 'moment'

export function generateTaskList(param: Model.TaskListFilter): SbrfModel.SbrfTask[] {
    const sizePage = param.pageSize || 100
    const page = param.pageNum || 0

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const yestarday = (new Date(new Date().getTime() - 24 * 60 * 60 * 1000)).toLocaleString('en-US', options) + ' ' // 'November 3, 2017 '
    const today = (new Date()).toLocaleString('en-US', options) + ' ' // 'November 3, 2017 '
    const tomorrow = (new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toLocaleString('en-US', options) + ' ' // 'November 8, 2017 '

    const models: SbrfModel.SbrfTask[] = [
        {
            'id': '1-2GHE2Q',
            'title': 'Торговый дом оконная, ООО',
            'description': 'В ГОСБ число ТП с отклонение «Количество созданных сделок МКК по зарплатным проектам» за две недели наибольшее в ТБ с учетом доли бизнеса.',
            'plannedStart': tomorrow + '00:00:00',
            'dueDate': tomorrow + '12:24:00',
            'timeRef': 'DAY',
            'plannedEnd': tomorrow + '15:24:00',
            'subtitle': '2 объекта',
            'status': {
                'code': 'NEW',
                'value': 'Новая',
                'ref': 'PLANNED'
            },
            'taskType': {
                'code': 'Talk',
                'value': 'Встреча',
                'ref': 'MEETING'
            },
            'priority': {
                'code': '2-ASAP',
                'value': 'Высокий',
                'ref': 'DEF_TASK_PRIORITY'
            },
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
            'meetingLocation': 'ул. Просвещения, 80',
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
                        'count': 5,
                    }
                ]
            }
        },
        {
            'id': '1-2GHE2Q',
            'title': 'ОАО УралПромСтройМарш',
            'description': 'В ГОСБ число ТП с отклонение «Количество созданных сделок МКК по зарплатным проектам» за две недели наибольшее в ТБ с учетом доли бизнеса.',
            'plannedStart': tomorrow + '00:00:00',
            'plannedEnd': tomorrow + '23:59:59',
            'timeRef': 'DAY',
            'dueDate': tomorrow + '12:24:00',
            'subtitle': '2 объекта',
            'status': {
                'code': 'NEW',
                'value': 'Новая',
                'ref': 'PLANNED'
            },
            'taskType': {
                'code': 'ISU',
                'value': 'Отклонение ИСУ',
                'ref': 'OTHER'
            },
            'priority': {
                'code': '2-ASAP',
                'value': 'Высокий',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'IIShishkin',
                    'name': 'Иван Иванович Шишкин',
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
            'meetingLocation': 'ул. Просвещения, 80',
            'corporates': [
                {
                    'crmId': '1-CG64DU',
                    'name': 'ОАО УралПромСтройМарш',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Иван Константинович Айвазовский',
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
                        'count': 5,
                    }
                ]
            }
        },
        {
            'id': '1-5DW6IU',
            'title': 'Группа Компаний ПИК',
            'description': 'ул. Мосфильмовская, 18',
            'plannedStart': today + '15:24:00',
            'plannedEnd': today + '16:24:00',
            'dueDate': today + '12:24:00',
            'subtitle': '4 объекта',
            'status': {
                'code': 'PROGRESS',
                'value': 'В работе',
                'ref': 'PROGRESS'
            },
            'taskType': {
                'code': 'ISU',
                'value': 'Отклонение ИСУ',
                'ref': 'OTHER'
            },
            'priority': {
                'code': '1-ASAP',
                'value': 'Высокий',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'IAgoncharov',
                    'name': 'Иван Александрович Гончаров',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'NSLeskov',
                    'name': 'Николай Семенович Лесков',
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
            'factStart': '2017-11-21T11:00:00.000+0000',
            'factEnd': '2017-11-29T12:22:34.000+0000',
            'meetingLocation': 'ул. Мосфильмовская, 18',
            'corporates': [
                {
                    'crmId': '2-HJR4F2',
                    'name': 'Группа Компаний ПИК',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Иван Александрович Гончаров',
                            'mobilePhone': '+7 (956) 999-00-00',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'ДСЖ'
                },
                {
                    'name': 'НПР'
                },
                {
                    'name': 'Переводы'
                },
                {
                    'name': 'Потребительский кредит'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value001',
                    'epkId': 'EpkId_value001',
                    'lastName': 'Цветаева',
                    'firstName': 'Марина',
                    'middleName': 'Ивановна',
                    'documentSerNum': '12 12 123456',
                    'segment': {
                        'code': 'Super VIP',
                        'value': 'Super VIP'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 4'
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
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-JD93ED',
            'title': 'ОАО ТяжПромСтрой',
            'plannedStart': tomorrow + '00:00:00',
            'plannedEnd': tomorrow + '23:59:59',
            'timeRef': 'DAY',
            'dueDate': yestarday + '12:24:00',
            'description': 'ул. Строителей, 44',
            'subtitle': '7 объектов',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Call – Outbound',
                'value': 'Call – Outbound',
                'ref': 'OTHER'
            },
            'priority': {
                'code': '1-ASAP',
                'value': 'Высокий',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'NVGogol',
                    'name': 'Николай Васильевич Гоголь',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'AAAhmatova',
                    'name': 'Анна Андреевна Ахматова',
                    'type': 'PERFORMER',
                    'businessSegment': {
                        'code': 'Mass',
                        'value': 'Mass'
                    }
                },
                {
                    'id': 'mid-01',
                    'type': 'MANAGER'
                }
            ],
            'factStart': '2017-12-30T06:22:54.000+0000',
            'factEnd': '2017-12-01T13:25:23.000+0000',
            'meetingLocation': 'ул. Строителей, 44',
            'corporates': [
                {
                    'crmId': '3-JKR34F',
                    'name': 'ОАО ТяжПромСтрой',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Анна Андреевна Ахматова',
                            'mobilePhone': '+7 (912) 765-23-32',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'Страхование'
                },
                {
                    'name': 'Потребительский кредит'
                },
                {
                    'name': 'ПИФы'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value001',
                    'epkId': 'EpkId_value001',
                    'lastName': 'Лермонтов',
                    'firstName': 'Михаил',
                    'middleName': 'Юрьевич',
                    'documentSerNum': '12 12 123456',
                    'segment': {
                        'code': 'Mass',
                        'value': 'Mass'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 2'
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
            'phoneNumber': '89261231123',
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-GHT4R',
            'title': 'ЗАО Полярис',
            'description': 'ул. Искусства, 57',
            'plannedStart': tomorrow + '03:10:00',
            'plannedEnd': tomorrow + '03:24:00',
            'dueDate': tomorrow + '12:24:00',
            'subtitle': '1 объект',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Meeting',
                'value': 'Meeting',
                'ref': 'MEETING'
            },
            'priority': {
                'code': '2-High',
                'value': 'Средний',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'ANTolstoy',
                    'name': 'Алексей Николаевич Толстой',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'ISTurgenev',
                    'name': 'Иван Сергеевич Тургенев',
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
            'factStart': '2017-12-05T06:22:54.000+0000',
            'factEnd': '2017-12-05T06:42:22.000+0000',
            'meetingLocation': 'ул. Искусства, 57',
            'corporates': [
                {
                    'crmId': '4-TY55FD',
                    'name': 'ЗАО Полярис',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Иван Сергеевич Тургенев',
                            'mobilePhone': '+7 (906) 234-99-99',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'Сберегательный сертификат'
                },
                {
                    'name': 'Жилищные кредиты'
                },
                {
                    'name': 'Дебетовая карта'
                },
                {
                    'name': 'Переводы'
                },
                {
                    'name': 'Пакетные предложения'
                },
                {
                    'name': 'Потребительский кредит'
                },
                {
                    'name': 'Страхование'
                },
                {
                    'name': 'Кредитная карта'
                },
                {
                    'name': 'Векселя'
                },
                {
                    'name': 'Вклады'
                },
                {
                    'name': 'Комплексные продукты'
                },
                {
                    'name': 'Брокерское обслуживание'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value001',
                    'epkId': 'EpkId_value001',
                    'lastName': 'Толстой',
                    'firstName': 'Лев',
                    'middleName': 'Николаевич',
                    'documentSerNum': '12 12 123456',
                    'segment': {
                        'code': 'МВС',
                        'value': 'МВС'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 3'
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
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-7FGH4Z',
            'title': 'Группа Компаний ПИК',
            'plannedStart': tomorrow + '01:24:00',
            'plannedEnd': tomorrow + '03:24:00',
            'dueDate': tomorrow + '12:24:00',
            'description': 'ул. Космонавтов, 27',
            'subtitle': '3 объекта',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Call – Outbound',
                'value': 'Call – Outbound',
                'ref': 'CALL'
            },
            'priority': {
                'code': '3-Medium',
                'value': 'Низкий',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'MVLomonosov',
                    'name': 'Михаил Васильевич Ломоносов',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'VYABrusov',
                    'name': 'Валерий Яковлевич Брюсов',
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
            'factStart': '2017-12-05T08:00:00.000+0000',
            'factEnd': '2017-12-06T12:22:34.000+0000',
            'meetingLocation': 'ул. Космонавтов, 27',
            'corporates': [
                {
                    'crmId': '5-LA23DF',
                    'name': 'Группа Компаний ПИК',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Валерий Яковлевич Брюсов',
                            'mobilePhone': '+7 (903) 456-10-10',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'Сберегательный сертификат'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value002',
                    'epkId': 'EpkId_value002',
                    'lastName': 'Чехов',
                    'firstName': 'Антон',
                    'middleName': 'Павлович',
                    'documentSerNum': '21 21 654321',
                    'segment': {
                        'code': 'Mass',
                        'value': 'Mass'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 5'
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
            'phoneNumber': '89261231132',
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-NMD3D1',
            'parentTaskId': '5',
            'plannedStart': today + '02:13:00',
            'plannedEnd': today + '01:13:00',
            'dueDate': tomorrow + '12:24:00',
            'title': 'Авиоконструкторское бюро',
            'description': 'ул. Пушкинская, 78',
            'subtitle': '4 объекта',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Appointment',
                'value': 'Appointment',
                'ref': 'OTHER'
            },
            'priority': {
                'code': '1-ASAP',
                'value': 'Высокий',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'VISurikov',
                    'name': 'Василий Иванович Суриков',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'VGPerov',
                    'name': 'Василий Григорьевич Перов',
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
            'factStart': '2017-12-11T08:00:00.000+0000',
            'factEnd': '2017-12-14T11:23:51.000+0000',
            'meetingLocation': 'ул. Пушкинская, 78',
            'corporates': [
                {
                    'crmId': '6-ER5F5',
                    'name': 'Авиоконструкторское бюро',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Василий Григорьевич Перов',
                            'mobilePhone': '+7 (918) 654-54-54',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'ДСЖ'
                },
                {
                    'name': 'ПИФы'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value002',
                    'epkId': 'EpkId_value002',
                    'lastName': 'Тютчев',
                    'firstName': 'Федор',
                    'middleName': 'Иванович',
                    'documentSerNum': '21 21 654321',
                    'segment': {
                        'code': 'VIP',
                        'value': 'VIP'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 9'
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
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-RTG6HS',
            'title': 'ОАО Лукойл',
            'plannedStart': yestarday + '13:12:00',
            'plannedEnd': yestarday + '15:20:00',
            'dueDate': tomorrow + '12:24:00',
            'description': 'ул. Мира, 132',
            'subtitle': '2 объекта',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Meeting',
                'value': 'Meeting',
                'ref': 'MEETING'
            },
            'priority': {
                'code': '3-Medium',
                'value': 'Низкий',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'ASGrin',
                    'name': 'Александр Степанович Грин',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'AKTolstoy',
                    'name': 'Алексей Константинович Толстой',
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
            'meetingLocation': 'ул. Мира, 132',
            'corporates': [
                {
                    'crmId': '7-VC5HF4',
                    'name': 'ОАО Лукойл',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Алексей Константинович Толстой',
                            'mobilePhone': '+7 (934) 764-34-34',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'Автокредит'
                },
                {
                    'name': 'Векселя'
                },
                {
                    'name': 'Вклады'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value002',
                    'epkId': 'EpkId_value002',
                    'lastName': 'Пушкин',
                    'firstName': 'Александр',
                    'middleName': 'Сергеевич',
                    'documentSerNum': '21 21 654321',
                    'segment': {
                        'code': 'Mass',
                        'value': 'Mass'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 6'
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
            'phoneNumber': '89261233322',
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-1WG56W',
            'parentTaskId': '4',
            'plannedStart': yestarday + '00:00:00',
            'plannedEnd': yestarday + '23:59:59',
            'timeRef': 'DAY',
            'title': 'ОАО УралПромСтройМаш',
            'description': 'ул. Орбитальная, 109',
            'subtitle': '1 объект',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Meeting',
                'value': 'Meeting',
                'ref': 'OTHER'
            },
            'priority': {
                'code': '3-Medium',
                'value': 'Низкий',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'AIPetrov',
                    'name': 'Александр Иванович Петров',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'SMIvanov',
                    'name': 'Семен Максимович Иванов',
                    'type': 'PERFORMER',
                    'businessSegment': {
                        'code': 'Mass',
                        'value': 'Mass'
                    }
                },
                {
                    'id': 'mid-01',
                    'type': 'MANAGER'
                }
            ],
            'factStart': '2017-12-15T13:00:31.000+0000',
            'factEnd': '2017-12-14T10:15:06.000+0000',
            'meetingLocation': 'ул. Орбитальная, 109',
            'corporates': [
                {
                    'crmId': '8-GF5FDS',
                    'name': 'ОАО УралПромСтройМаш',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Александр Иванович Петров',
                            'mobilePhone': '+7 (984) 456-45-45',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'Автокредит'
                },
                {
                    'name': 'Кредитная карта'
                },
                {
                    'name': 'Страхование'
                },
                {
                    'name': 'Сберегательный сертификат'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value',
                    'epkId': 'EpkId_value',
                    'lastName': 'Горький',
                    'firstName': 'Максим',
                    'middleName': 'Алексеевич',
                    'documentSerNum': '12 12 123456',
                    'segment': {
                        'code': 'VIP',
                        'value': 'VIP'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Надо сделать срочно'
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
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-3PA5RU',
            'title': 'Группа Компаний ПИК',
            'plannedStart': today + '10:11:00',
            'plannedEnd': today + '11:12:00',
            'description': 'ул. Возрождения, 2',
            'subtitle': '3 объекта',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Appointment',
                'value': 'Appointment',
                'ref': 'OTHER'
            },
            'priority': {
                'code': '4-Low',
                'value': '4-Low',
                'ref': 'DEF_TASK_PRIORITY'
            },
            'employees': [
                {
                    'login': 'SYAMarshak',
                    'name': 'Самуил Яковлевич Маршак',
                    'type': 'INITIATOR'
                },
                {
                    'login': 'NAKluev',
                    'name': 'Николай Алексеевич Клюев',
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
            'meetingLocation': 'ул. Возрождения, 2',
            'corporates': [
                {
                    'crmId': '9-TYR3D',
                    'name': 'Группа Компаний ПИК',
                    'inn': '1234567890',
                    'contacts': [
                        {
                            'fullName': 'Николай Алексеевич Клюев',
                            'mobilePhone': '+7 (988) 223-22-22',
                            'primaryEmail': 'mail@mail.ru'
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
                    'name': 'Опросы'
                },
                {
                    'name': 'Переводы'
                },
                {
                    'name': 'Страхование'
                }
            ],
            'persons': [
                {
                    'birthDate': '1989-06-13',
                    'stubId': 'StubId_value002',
                    'epkId': 'EpkId_value002',
                    'lastName': 'Шолохов',
                    'firstName': 'Михаил',
                    'middleName': 'Александрович',
                    'documentSerNum': '21 21 654321',
                    'segment': {
                        'code': 'МВС',
                        'value': 'МВС'
                    }
                }
            ],
            'modId': 1,
            'comments': [
                {
                    'text': 'Текст комментария 7'
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
            'listType': 'ACTIVITY'
        }
    ]

    const tasks: SbrfModel.SbrfTask[] = []

    for (let i = 0; i < sizePage; i++) {
        let index = i + page * sizePage
        const item = {...models[index % models.length]}
        if (param) {
            if (param.planned === false) {
                const taskTypeMap: { [key: string]: SbrfModel.TaskType } = {
                    Calling: SbrfModel.TaskType.CALL,
                    Meeting: SbrfModel.TaskType.MEETING,
                    Task: SbrfModel.TaskType.OTHER,
                }
                let datePlanTo = param.datePlanTo ? new Date(param.datePlanTo) : null
                let taskType = Array.isArray(param.type) ? param.type.map(item => taskTypeMap[item]).filter(item => item) : null
                let priority = param.priority ? [SbrfModel.TaskPriority.HIGH] : null  // можно будет добавить ASAP

                if (Array.isArray(priority)) {
                    if (!(item.priority && item.priority.ref)) { // не установлены атрибуты
                        continue
                    }
                    if ((item.priority && item.priority.ref && priority.indexOf(item.priority.ref) === -1)) {
                        continue
                    }
                }
                if (Array.isArray(taskType)) { // есть фильтр
                    if (!(item.taskType && item.taskType.ref)) { // не установлены атрибуты
                        continue
                    }
                    if ((item.taskType && item.taskType.ref && taskType.indexOf(item.taskType.ref) === -1)) {
                        continue
                    }
                    //alert(JSON.stringify(taskType) + JSON.stringify(param))
                }
                if (datePlanTo && item.plannedEnd && datePlanTo.getTime() <= (new Date(item.plannedEnd)).getTime()) {
                    continue
                }

                tasks.push({
                    ...item,
                    id: '' + (index + 1),
                    title: item.title || '',
                    description: item.description,
                    plannedStart: undefined,
                    plannedEnd: item.plannedEnd,
                    dueDate: item.dueDate || item.plannedEnd,
                    priority: item.priority,
                    taskType: item.taskType,
                    meetingLocation: item.meetingLocation || 'Переговорная 215 оранж',
                })
            } else {
                if (item.plannedStart && item.plannedEnd
                    && moment(item.plannedStart).isAfter(moment(param.datePlanFrom))
                    && moment(item.plannedEnd).isBefore(moment(param.datePlanTo))) {
                    let id = item.id
                    if (tasks.find(item => item.id === id)) {
                        id = '' + (10000 + index + 1)
                    }
                    tasks.push({
                        ...item,
                        id: id,
                        title: item.title || '',
                        description: item.description,
                        plannedStart: item.plannedStart,
                        plannedEnd: item.plannedEnd,
                        priority: item.priority,
                        taskType: item.taskType,
                        meetingLocation: item.meetingLocation || 'Переговорная 215 оранж',
                        timeRef: 'DAY', // только для геомониторинга
                    })
                }
            }
        }
    }
    return tasks
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
        'canCreateTask': true,
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
                    // {
                    //     blocks: [
                    //         {
                    //             type: 'manager',
                    //             caption: 'Участники',
                    //             //itemCaption: 'Участник'
                    //         }
                    //     ]
                    // },
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
        dragAndDropEnabled: false

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
                                }
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
    const role = 'EFS_MRM_MONITORING_GEOPLEDGE_USER'
    if (role === 'EFS_MRM_MONITORING_GEOPLEDGE_USER') {
        config = generateGeomonitoringCalendarConfig()
    }
    return config
}
