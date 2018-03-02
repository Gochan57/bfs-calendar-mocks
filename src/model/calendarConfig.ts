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
     * Наименование кнопки
     * @maxLength 255
     */
    saveButtonLabel?: string;
    /**
     * Показывать только выбранную задачу в стакане
     */
    taskListDisabled?: boolean;
    /**
     * Показывать или скрывать стакан задач.
     */
    taskListVisible?: boolean;
    /**
     * Если true, заголовок не показывается
     */
    headerHidden?: boolean;
    /**
     * Условия отображения
     */
    condition?: Condition;
    /**
     * Перечень отображаемых блоков
     */
    rows: BlocksRow[];
    /**
     * Доступные действия из этой карточки
     */
    operations: Operation[]
    /**
     * Все действия
     */
    allOperations?: Operation[]
}
/**
 * Типы карточек задачи
 */
export type CardMode = 'CREATE' | 'READ' | 'UPDATE'
export const CardMode: { [key: string]: CardMode } = {
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
}

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
    justifyContent?: 'flex-start' | 'space-around' |  'space-between'
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
     */
    justifyContent?: 'flex-start' | 'flex-end'
}
/**
 * Типы блоков в детальной карточке задачи
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
        /***
         * устарело - убрать
         */
    'operationHiddenTrue' |
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
         *
         * */
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
    'map'
/**
 * Типы действия в блоке деталей по задаче
 */
/**
 *  Внутренние экшкены
 */
export type DiffTask = Partial<Task.SbrfTask>

export interface InnerActionDelete {
    type: 'Delete'
}
export interface InnerActionChange {
    type: 'Change',
    diff?: DiffTask,
}
export type InnerAction = InnerActionDelete | InnerActionChange

/**
 *  навигация на внешние бандлы
 */
export interface NavigateToApp {
    bundle: string,
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

    // /**
    //  * Тип действия
    //  * @maxLength 255
    //  */
    // type?: ActionBlockType,
    // /**
    //  * Параметр действия
    //  * @maxLength 255
    //  */
    // param?: string,
}

/**
 * Операция
 */
export interface Operation {
    /**
     * Наименование/идентификатор действия
     * @maxLength 255
     */
    name: string;
    /**
     * Необходимо подтверждение пользователя, если поле заполнено
     * @maxLength 255
     */
    confirmation?: string;
    /**
     * Условия отображения
     */
    condition?: Condition;
    /**
     * Название действия, для отображения в выпадающем списке из карточки задач
     * @maxLength 255
     */
    caption: string;
    /**
     * Внешний Workflow
     * @maxLength 255
     */
    externalWorkflowName?: string;
    /**
     * Карточка, в которую можно перейти
     * @maxLength 255
     */
    gotoCardName: string;
    /**
     * Не показывать операцию в выпадающем списке на PL.
     */
    hidden: boolean;
}
