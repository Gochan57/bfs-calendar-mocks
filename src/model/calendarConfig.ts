import * as Task from './task'
import {Condition} from './condition'
/**
 * Конфигурация календаря.
 */
export interface CalendarConfig {
    /**
     * Список ролей, для которых применима данная конфигурация
     */
    roles: string[],
    /**
     * Описание конфигурации
     * @maxLength 255
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
    showWeekend: boolean,
    /**
     * Время начала и конца дня в календарной сетке
     */
    gridTime: {
        /**
         * Время начала дня в формате hh:mm
         * @TJS-pattern ^[0-2]?[0-9]:[0-9]{2}$
         */
        start: string,
        /**
         * Время конца дня в формате hh:mm
         * @TJS-pattern ^[0-2]?[0-9]:[0-9]{2}$
         */
        end: string,
    }
    /**
     * разрешить перенос задач из стакана в календарь и обратно
     */
    dragAndDropEnabled: boolean
}
/**
 * Конфигурация карточки задачи
 */
export interface CardConfiguration {
    /**
     * Наименование
     * @maxLength 255
     */
    name?: string;
    /**
     * Заглавие
     * @maxLength 255
     */
    caption?: string;
    /**
     * Описание
     * @maxLength 255
     */
    description?: string;
    /**
     * Режим отображения
     * @maxLength 255
     */
    mode?: CardMode;
    /**
     * Условия отображения
     */
    condition?: Condition;
    /**
     * Перечень отображаемых блоков
     */
    rows: BlocksRow[];
}
/**
 * Типы карточек задачи
 * @maxLength 255
 */
export type CardMode = 'CREATE' | 'READ' | 'UPDATE'
export const CardMode: { [key: string]: CardMode } = {
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
}
/**
 * Позиция строки с блоками в детальной карточке задачи
 * @maxLength 255
 */
export type BlocksRowPosition = 'header' | 'footer'
/**
 * Строка с блоками в детальной карточке задачи
 */
export interface BlocksRow {
    /**
     * Отображать линию подчеркивания под блоком
     */
    horizontalLine?: boolean
    /**
     * Режим отображения (блочный или нет)
     * @maxLength 255
     */
    flexWrap?: string
    /**
     * Стратегия выравнивание блоков в строке
     * @maxLength 255
     */
    justifyContent?: 'flex-start' | 'flex-end' | 'space-around' | 'space-between'
    /**
     * Область отображения блока (в заголовке, в футере, или в центральной области, если значение не задано)
     * @maxLength 255
     */
    position?: BlocksRowPosition,
    /**
     * Список блоков в строке
     */
    blocks: Block[]
}
/**
 * Блок в детальной карточке задачи
 */
export interface Block {
    /**
     * Тип блока
     * @maxLength 255
     */
    type: BlockType,
    /**
     * Заголовок блока
     * @maxLength 255
     */
    caption?: string
    /**
     * Заголовок для страницы деталей по блоку
     * @maxLength 255
     */
    itemCaption?: string
    /**
     * Список действий в блоке (для кнопок)
     */
    actions?: ActionBlock
    /**
     *  условия вывода блока
     */
    condition?: Condition
    /**
     *  индивидуальное выравнивание блока, введен для прибивания кнопки вправо всегда, даже если она остается одна в блоке
     *  а для всего блока задано выравнивание spaceBetween
     * @maxLength 255
     */
    justifyContent?: 'flex-start' | 'flex-end'
}
/**
 * Типы блоков в детальной карточке задачи
 * @maxLength 255
 */
export type BlockType =
    /**
     * время начала и конца
     */
    'plannedStartEndTime' |
    /**
     * Внешний блок, который загружается из бандла
     */
    'external' |
    /**
     * кнопка
     */
    'button' |
    /**
     *  красная кнопка
     */
    'redButton' |
    /**
     * Заголовок
     */
    'title' |
    /**
     * Приоритет
     */
    'priority' |
    /**
     * Адрес
     */
    'address' |
    /**
     * Заголовок
     */
    'header' |
    /**
     * Клиенты ФЛ
     */
    'persons' |
    /**
     * Продуктовые предложения
     */
    'products' |
    /**
     * Представители по задаче
     */
    'contacts' |
    /**
     * Комментарии
     */
    'comments' |
    /**
     * Плановые даты
     */
    'planDates' |
    /**
     * Плановая продолжительность
     */
    'planDatesDuration' |
    /**
     * Фактические даты
     */
    'factDates' |
    /**
     * Дата создания
     */
    'createDate' |
    /**
     * Продолжительность
     */
    'dueDateDuration' |
    /**
     * ID задачи
     */
    'id' |
    /**
     * Потенциальные продажи
     */
    'leads' |
    /**
     * Клиенты ЮЛ
     */
    'corporates' |
    /**
     * Место встречи
     */
    'meetingLocation' |
    /**
     * Описание задачи
     */
    'description' |
    /**
     * Комментарий к результату
     */
    'decision' |
    /**
     * Результат
     */
    'actionResult' |
    /**
     * Статус
     */
    'status' |
    /**
     * Тип задачи
     */
    'type' |
    /**
     * Исполнитель(-ли)
     */
    'performer' |
    /**
     * Создатель задачи
     */
    'initiator' |
    /**
     * Команда сотрудников
     */
    'manager' |
    /**
     *  Залог
     */
    'pledge' |
    /**
     * Владелец карточки организации
     */
    'vko' |
    /**
     * Тематика обращения
     */
    'split' |
    /**
     * Сделки
     */
    'opportunities' |
    /**
     * История по задаче
     */
    'history' |
    /**
     * Важность задачи
     */
    'important' |
    /**
     * Телефон клиента
     */
    'clientPhone' |
    /**
     * Комплаенс: отправка уведомлений
     */
    'notifyCompliance' |
    /**
     * есть в коде, но нет в интерфейсе планировщика
     */
    'deposit' |
    /**
     * Карта
     */
    'map'
/**
 * Изменяемые поля в задаче (используется в действии редактирования задачи)
 */
export type DiffTask = Partial<Task.SbrfTask>

/**
 * Типы действия в блоке деталей по задаче:
 * Внутренние экшен по удалению задачи
 */
export interface InnerActionDelete {
    /**
     * Тип внутреннего экшена
     * @maxLength 255
     */
    type: 'Delete'
}
/**
 * Типы действия в блоке деталей по задаче:
 * Внутренние экшен по изменению задачи
 */
export interface InnerActionChange {
    /**
     * Тип внутреннего экшена
     * @maxLength 255
     */
    type: 'Change',
    /**
     * Поля
     * @maxLength 255
     */
    diff?: DiffTask,
}
/**
 * Внутренние экшены
 */
export type InnerAction = InnerActionDelete | InnerActionChange

/**
 *  навигация на внешние бандлы
 */
export interface NavigateToApp {
    /**
     * Наименование бандла приложения, на которое произойдет переход
     * @maxLength 255
     */
    bundle: string,
    /**
     * Поле type в передаваемом сообщении
     */
    type?: string,
    /**
     * Статичные параметры, которые будут переданы в сообщении внешнему приложению при переход
     */
    param?: any,
}

/**
 * Действие в блоке в детальной карточке задачи
 */
export interface ActionBlock {
    /**
     *  внутренние экшены
     */
    action?: InnerAction
    /**
     *  навигация на внешний бандл
     */
    navigateToApp?: NavigateToApp
}
