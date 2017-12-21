import * as Model from '../model/task';
import {Response} from '../model/common';

export default function taskList(param: Model.SbrfTaskFilter): Response<Model.SbrfTask[]> {
    let flTask = !(param && param.datePlanTo)
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


    const models: Model.SbrfTask[] = [
        {
            'id': '1-2GHE2Q',
            'title': 'ОАО УралПромСтройМарш',
            'description': 'Решение очень важных задач на ул. Просвещения',
            startDate: tomorrow + '15:24:00',
            endDate: tomorrow + '17:24:00',
            'subtitle': '2 объекта',
            'status': {
                'code': 'Scheduled',
                'value': 'Scheduled',
                'ref': 'DEF_TASK_STATUS'
            },
            'taskType': {
                'code': 'Call – Outbound',
                'value': 'Встреча',
                'ref': 'OTHER'
            },
            'priority': {
                'code': '1-ASAP',
                'value': 'Высокий',
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
            'plannedStart': '2017-12-15T07:00:00.000+0000',
            'plannedEnd': '2017-12-16T14:00:00.000+0000',
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
            'listType': 'ACTIVITY'
        },
        {
            'id': '1-5DW6IU',
            'title': 'Группа Компаний ПИК',
            'description': 'ул. Мосфильмовская, 18',
            startDate: tomorrow + '15:24:00',
            endDate: tomorrow + '16:24:00',
            'subtitle': '4 объекта',
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
            'plannedStart': '2017-12-20T11:00:00.000+0000',
            'plannedEnd': '2017-12-22T11:00:00.000+0000',
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
            startDate: tomorrow + '13:24:00',
            endDate: tomorrow + '15:24:00',
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
            'plannedStart': '2017-12-20T09:45:00.000+0000',
            'plannedEnd': '2017-12-22T15:30:00.000+0000',
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
            startDate: tomorrow + '03:10:00',
            endDate: tomorrow + '03:24:00',
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
            'plannedStart': '2017-12-05T06:00:00.000+0000',
            'plannedEnd': '2017-12-05T07:00:00.000+0000',
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
            startDate: tomorrow + '01:24:00',
            endDate: tomorrow + '03:24:00',
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
            'plannedStart': '2017-12-05T07:00:00.000+0000',
            'plannedEnd': '2017-12-07T15:00:00.000+0000',
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
            startDate: today + '02:13:00',
            endDate: today + '01:13:00',
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
            'plannedStart': '2017-12-15T07:00:00.000+0000',
            'plannedEnd': '2017-12-21T14:00:00.000+0000',
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
            startDate: yestarday + '13:12:00',
            endDate: yestarday + '15:20:00',
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
            'plannedStart': '2017-12-14T07:00:00.000+0000',
            'plannedEnd': '2017-12-15T14:00:00.000+0000',
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
            startDate: yestarday + '15:13:00',
            endDate: today + '17:24:00',
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
            'plannedStart': '2017-12-15T08:11:33.000+0000',
            'plannedEnd': '2017-12-15T08:11:33.000+0000',
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
            startDate: today + '10:11:00',
            endDate: today + '11:12:00',
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
            'plannedStart': '2017-12-14T07:00:00.000+0000',
            'plannedEnd': '2017-12-15T14:00:00.000+0000',
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


    const tasks: Model.SbrfTask[] = []

    for (let i = 0; i < sizePage; i++) {
        let index = i + page * sizePage
        const item = {...models[index % models.length]}
        if (flTask) {
            if (param) {
                const taskTypeMap: {[key: string]: Model.TaskType} = {
                    Calling: Model.TaskType.CALL,
                    Meeting: Model.TaskType.MEETING,
                    Task: Model.TaskType.OTHER,
                }
                let datePlanTo = param.datePlanTo ? new Date(param.datePlanTo) : null
                let taskType = Array.isArray(param.type) ? param.type.map(item => taskTypeMap[item]).filter(item => item) : null
                let priority = param.priority ? [Model.TaskPriority.HIGH] : null  // можно будет добавить ASAP


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
                if (datePlanTo && item.endDate && datePlanTo.getTime() <= (new Date(item.endDate)).getTime()) {
                    continue
                }

            }
            tasks.push({
                ...item,
                id: '' + (index + 1),
                title: item.title,
                description: item.description,
                startDate: undefined,
                endDate: item.endDate,
                priority: item.priority,
                taskType: item.taskType,
                meetingLocation: item.meetingLocation || 'Переговорная 215 оранж',
            })
        }
        else {
            tasks.push({
                ...item,
                id: '' + (index + 1),
                title: item.title,
                description: item.description,
                startDate: item.startDate,
                endDate: item.endDate,
                priority: item.priority,
                taskType: item.taskType,
                meetingLocation: item.meetingLocation || 'Переговорная 215 оранж',
            })
        }
    }
    return {
        success: true,
        body: tasks
    }
}
/*
export default function taskList2 (param: Model.SbrfTaskFilter): Response<Model.SbrfTask[]> {
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

    const models: Model.SbrfTask[] = [
        {
            title: 'ПромСтройИнвест, ООО',
            description: 'Срочное принятие бюджета на следущий год.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: today + '10:11:00',
            endDate: today + '11:12:00',
        },

        {
            title: 'Удача, ООО2',
            description: 'Отложить на завтра все, что можно отложить сегодня.',
            taskType: {ref: Model.TaskType.MEETING},
            priority: {ref: Model.TaskPriority.MEDIUM},
            startDate: yestarday + '13:12:00',
            endDate: yestarday + '15:20:00',
        },

        {
            title: 'Удача, ООО3',
            description: 'Перевыпуск карты Visa Classic однозначно показывает, что график функции многих переменных нетривиален.',
            taskType: {ref: Model.TaskType.OTHER},
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: yestarday + '15:13:00',
            endDate: today + '17:24:00',
        },
        {
            title: 'ISCReam ',
            description: 'Демо ',
            taskType: {ref: Model.TaskType.MEETING},
            priority: {ref: Model.TaskPriority.MEDIUM},
            startDate: today + '14:00:00',
            endDate: today + '15:00:00',
        },

        {
            title: 'Удача, ООО4',
            description: 'Перевыпуск многих переменных нетривиален.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '02:24:00',
            endDate: tomorrow + '03:24:00',
        },

        {
            id: '5',
            title: 'Удача3242, ООО',
            description: 'Срочный перевыпуск карты.',
            taskType: {ref: Model.TaskType.MEETING},
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: today + '02:13:00',
            endDate: today + '01:13:00',
        },
        {
            title: 'Удача 6, ООО6',
            description: 'Перевыпуск многих переменных нетривиален.',
            taskType: {ref: Model.TaskType.OTHER},
            priority: {ref: Model.TaskPriority.MEDIUM},
            startDate: tomorrow + '01:24:00',
            endDate: tomorrow + '03:24:00',
        },
        {
            title: 'Удача 7, ООО7',
            description: 'Срочное совещание в министерстве',
            taskType: undefined,
            priority: {ref: Model.TaskPriority.HIGH},
            startDate: tomorrow + '03:10:00',
            endDate: tomorrow + '03:24:00',
        },

        {
            title: 'От субботы до понедельника CalendarItem Title Test 1 25',
            description: 'Позвонить очень важному клиенту  очень очень очень очень длинный текст поздравления с благими пожеланиями и прочими удовольствиями.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '13:24:00',
            endDate: tomorrow + '15:24:00',
        },
        {
            title: 'От субботы до понедельника CalendarItem Title Test 1 25',
            description: 'Позвонить очень важному клиенту  очень очень очень очень длинный текст поздравления с благими пожеланиями и прочими удовольствиями.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '15:24:00',
            endDate: tomorrow + '16:24:00',
        },
        {
            title: 'От субботы до понедельника CalendarItem Title Test 1 25',
            description: 'Позвонить очень важному клиенту  очень очень очень очень длинный текст поздравления с благими пожеланиями и прочими удовольствиями.',
            taskType: {ref: Model.TaskType.CALL},
            priority: {ref: Model.TaskPriority.LOW},
            startDate: tomorrow + '15:24:00',
            endDate: tomorrow + '17:24:00',
        },
    ]
    const tasks: Model.SbrfTask[] = []

    for (let i = 0; i < sizePage; i++) {
        let index = i + page * sizePage
        const item = {...models[index % models.length]}
        if (param) {
            const taskTypeMap: {[key: string]: Model.TaskType} = {
                Calling: Model.TaskType.CALL,
                Meeting: Model.TaskType.MEETING,
                Task: Model.TaskType.OTHER,
            }
            let datePlanTo = param.datePlanTo ? new Date(param.datePlanTo) : null
            let taskType = Array.isArray(param.type) ? param.type.map(item => taskTypeMap[item]).filter(item => item) : null
            let priority = param.priority ? [Model.TaskPriority.HIGH] : null  // можно будет добавить ASAP

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
            if (datePlanTo && item.endDate && datePlanTo.getTime() <= (new Date(item.endDate)).getTime()) {
                continue
            }

        }
        tasks.push({
            id: '' + (index + 1),
            title: item.title,
            description: item.description,
            startDate: undefined,
            endDate: item.endDate,
            priority: item.priority,
            taskType: item.taskType,
            meetingLocation: 'Переговорная 215 оранж',
        })

    }
    return {
        success: true,
        body: tasks
    }
}
*/