import {RoleGroupConfiguration} from 'src/model/task';
import {Response} from 'src/model/common';

const config: Response<RoleGroupConfiguration> = {
    "success": true,
    "body": {
        "roles": [
            "EFS_MRM_MONITORING_GUARANTY_USER"
        ],
        "description": "Геомониторинг для логов",
        "dataSource": "CRM_CORPORATE",
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
                "@type": "TabSelector",
                "order": 0,
                "required": true,
                "name": "status",
                "caption": "Статус задач",
                "position": "DEFAULT",
                "defaultValue": "any",
                "immediatelyApplicable": false,
                "resettable": true,
                "items": [
                    {
                        "value": "assigned",
                        "text": "Назначенные"
                    },
                    {
                        "value": "confirmation",
                        "text": "На подтверждении"
                    },
                    {
                        "value": "closed",
                        "text": "Завершенные"
                    },
                    {
                        "value": "any",
                        "text": "Все задачи"
                    }
                ]
            },
            {
                "@type": "Select",
                "order": 2,
                "required": true,
                "name": "type",
                "caption": "Типы задач",
                "position": "DEFAULT",
                "defaultValue": "any",
                "immediatelyApplicable": false,
                "resettable": true,
                "items": [
                    {
                        "value": "any",
                        "text": "Все типы задач"
                    },
                    {
                        "value": "Calling",
                        "text": "Звонки"
                    },
                    {
                        "value": "Meeting",
                        "text": "Встречи"
                    },
                    {
                        "value": "Task",
                        "text": "Задания"
                    }
                ],
                "type": "DEFAULT"
            },
            {
                "@type": "DateInput",
                "order": 4,
                "required": true,
                "name": "dateCreateFrom",
                "caption": "Дата начала или дедлайн, от",
                "position": "DEFAULT",
                "immediatelyApplicable": false,
                "resettable": true
            },
            {
                "@type": "DateInput",
                "order": 6,
                "required": true,
                "name": "dateCreateTo",
                "caption": "Дата начала или дедлайн, до",
                "position": "DEFAULT",
                "immediatelyApplicable": false,
                "resettable": true
            },
            {
                "@type": "Checkbox",
                "order": 8,
                "required": false,
                "name": "important",
                "caption": "Только важные",
                "position": "DEFAULT",
                "defaultValue": false,
                "immediatelyApplicable": false,
                "resettable": true
            },
            {
                "@type": "Switch",
                "order": 9,
                "required": false,
                "name": "divisionTasks",
                "caption": "Показать все задачи подразделения",
                "position": "SEARCH_PANEL",
                "defaultValue": false,
                "immediatelyApplicable": false,
                "resettable": true
            }
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
}

export default config