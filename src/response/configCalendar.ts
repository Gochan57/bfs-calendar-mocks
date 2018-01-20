/**
 * Кофигурация, возвращаемая бэком календаря.
 */

import * as Model from 'src/model/index';

export default function configCalendar(): Model.Response<Model.CalendarConfig> {
    return {
        success: true,
        body: {
            roles: ['GUIDE'],
            description: 'Конфигурация календаря',
            taskListDisabled: false,
            showWeekend: false
        }
    }
}
