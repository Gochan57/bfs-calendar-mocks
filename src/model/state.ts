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
    Network
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
export interface EventFilter {
    datePlanFrom: Date | null,
    datePlanTo: Date | null,
}

// параметры, для получения списка задач, эвентов
export interface TaskListParams extends Config.SbrfTaskFilter {
    // сюда выносим обязательные параметры
    pageNum: number,
    pageSize: number,
}

export interface Position {
    left: number,
    top: number,
    width: number,
    height: number,
}

export interface AppState {
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
    eventsFetchError: Error,
    selectedEventId: string, // выбранная задача в календаре
    selectedEventPosition: Position, // габаритный прямоугольник выбранноф задачи для вывода поповера

    tasks: Event[],  // список задач в стакане задач
    tasksShowLoader: boolean,
    tasksFetching: boolean,
    tasksFetchSuccess: boolean,
    tasksFetchError: Error,
    selectedTaskId: string, // выбранная задача в стакане задач

    searchTask: string, // строка поиска задачи
    fullSize: boolean, // true для режима без стакана задач
    calendarType: CalendarEnum.CalendarType,
    activeDate: string,

    config: Config.Config,

    configFetching: boolean,
    configFetchSuccess: boolean,
    configFetchError: Error,

    taskToDelete: Event, // задача, которая удалится после 5 секунд ожидания, если не нажать Восстановить
    deleteTaskFetching: boolean, // запрос на удаление задачи в процессе
    deleteTaskSuccess: boolean, // задача удалилась успешно
    deleteTaskError: Error, // ошибка при удалении задачи

    allPopoverClosed: boolean, // задать в true, чтобы закрыть все поповеры при выходе из приложения
}
