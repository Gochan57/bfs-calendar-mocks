import * as Config from './config'
import * as Model from '../model'
import * as CalendarEnum from './calendarGrid'
import * as Filter from './filter'
import {Event} from './event'

export interface GlobalState {
    user: {
        appcalendar: AppState
    }
}

export const enum ErrorType {
    Network,
    Cache
}

export interface Error {
    type: ErrorType,
    code?: string,
    message?: string,
    comment?: string,
}

export interface Response<T> {
    success: boolean,
    body?: T,
    error?: string,
    message?: string
}

// фильтр для стакана задач, задается пользователем и хранится в стайте
export interface TaskFilters extends Filter.FiltersValues {

}

// фильтр для сетки календаря, задается пользователем и хранится в стайте
export interface EventFilter extends Config.SbrfTaskFilter {
    // сюда выносим обязательные параметры из SbrfTaskFilter
    datePlanFrom: string,
    datePlanTo: string,
}

/**
 * Параметры, для получения списка задач
 */
export interface TaskListFilter extends Config.SbrfTaskFilter {
    // сюда выносим обязательные параметры из SbrfTaskFilter
    pageNum: number,
    pageSize: number,
}

export interface Position {
    left: number,
    top: number,
    width: number,
    height: number,
}

/**
 * место вывода cooбщения об ошибке
 */
export const enum ErrorMessagePanel {
    allPanels = 0,
    taskList = 1,
    calendar = 2,
}

/**
 * ошибка для вывода на экран
 */
export interface ErrorMessage {
    panel: ErrorMessagePanel,
    type: 'error' | 'warning',
    title: string,  // обязательный заголовок
    text?: string,  // необязательный текст
    button?: {
        text: string, // текст кнопки
        onExecute: (errorMessage: ErrorMessage) => void,
    }
}

/**
 * обслуживет драг и дроп
 */
export interface DragAndDrop {
    enabled: boolean  // глобальный рубильник включить/выключить днд (будет читаться из конфига)
    id: string        // ид перетаскиваемого события
}

export interface AppState {
    errorMessages: ErrorMessage[],
    dragAndDrop: DragAndDrop,
    appInitialProps: Model.CalendarMessage
    calendarMode: Model.CalendarMode, // текущий режим календаря
    defaultEventColor: Model.CalendarColorType,
    userRole: string, // текущая роль пользователя

    taskFilters: TaskFilters,
    taskPage: number,  // текущая страница

    eventFilter: EventFilter,  // фильтрация параметров календаря
    events: Event[], // список событий в календаре
    eventsShowLoader: boolean,
    eventsFetching: boolean,
    eventsFetchSuccess: boolean,
    selectedEventId: string, // выбранная задача в календаре
    selectedEventPosition: Position, // габаритный прямоугольник выбранноф задачи для вывода поповера

    tasks: Event[],  // список задач в стакане задач
    tasksShowLoader: boolean,
    tasksFetching: boolean,
    tasksFetchSuccess: boolean,
    selectedTaskId: string, // выбранная задача в стакане задач

    searchTask: string, // строка поиска задачи
    fullSize: boolean, // true для режима без стакана задач
    calendarType: CalendarEnum.CalendarType,
    activeDate: string,

    config: Config.Config,

    configFetching: boolean,
    configFetchSuccess: boolean,
    configFetchError: Error,

    configInited: boolean, // приложение удачно считало конфиг (из кэша или по сети)

    globalLoader: boolean,

    taskToDelete: Event, // задача, которая удалится после 5 секунд ожидания, если не нажать Восстановить
    deleteTaskFetching: boolean, // запрос на удаление задачи в процессе
    deleteTaskSuccess: boolean, // задача удалилась успешно
    deleteTaskError: Error, // ошибка при удалении задачи

    allPopoverClosed: boolean, // задать в true, чтобы закрыть все поповеры при выходе из приложения

    isOnline: boolean, // подключено ли устройство к сети
}
