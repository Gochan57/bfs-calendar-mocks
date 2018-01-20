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
     * Не отображать стакан задач
     */
    taskListDisabled: boolean,
    /**
     * Отображать 7-дневную неделю
     */
    showWeekend: boolean
}