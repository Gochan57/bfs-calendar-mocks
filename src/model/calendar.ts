import {CardConfiguration} from './sbrfModel';

export interface CalendarConfig {
    /**
     * Список ролей, для которых применима данная конфигурация
     */
    roles: string[],
    /**
     * Описание конфигурации
     */
    description: string,
    /**
     * Список доступных для ролей карточек задач
     */
    cards: CardConfiguration[];
    /**
     * Не отображать стакан задач
     */
    taskListDisabled: boolean,
    /**
     * Отображать 7-дневную неделю
     */
    showWeekend: boolean
}