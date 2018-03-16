import * as Task from './task'
import {Event} from './event'

export interface CalendarEventItem {
    color: number, // хотелось бы задать ему тип CalendarColorType, но не выходит, ибо CalendarColorType экспортирована как константа
    startDate: string,
    endDate: string,
    title: string,
    selected: boolean,
    eventId: string,
    description: string,
    type: number, // замечание, аналогичное CalendarColorType
    icons: number[] // замечание, аналогичное CalendarColorType
}

/**
 * Объект, генерируемый календарной сеткой в ответ на тап по задаче
 */
export interface CalendarEventClick {
    eventId: string, // null, если тапнули не по задаче, а по пустому месту
    clickDate: Date, // Время, соответствующее точке, по которой тапнули
    taskCoords: { // координаты задачи, по которой произошел тап, относительно верхнего левого угла сетки
        top: number,
        width: number,
        left: number,
        height: number
    }
}

export interface CalendarActionClick {
    actionName: string, // Например, MoreCellAction
    clickDate: Date, // Дата(без времени)
}

// conference:1
// telephoneConference:2
// videoConference:3
export const enum CalendarIconType {
    conference = 1,
    telephoneConference = 2,
    videoConference = 3,
}

export const enum CalendarEventType {
    Distributed = 1,
    WholeDay = 2,
}

export const enum CalendarColorType {
    Black = 1,
    Blue = 4,
    Clear = 9,
    Green = 6,
    Grey = 8,
    LightGrey = 7,
    Red = 3,
    White = 2,
    Yellow = 5,
    // работают
    // Green = 1,
    // Blue = 2,
    // Red = 3,

    // пока не работают
    // White = 4,
    // Black = 5,
    // Yellow = 6,
    // Clear = 7,
    // Gray = 8,
    // LightGray = 9,
}

export const enum CalendarSizeType {
    Default = 1,
    Full = 2,
    Compact = 3,
}

export const enum CalendarType {
    Day = 1, // UfsCalendar.CalendarColorType..CalendarType.DAY,
    Week = 2,
    Month = 3,

}

export const enum CalendarGridWholeDayType {
    Type1 = 1,
    Type2 = 2,
    Type3 = 3,
}

export const enum DragAndDropAvailabilityType {
    Disabled = 0,
    Enabled = 1,
}

export const enum DropAreaType {
    GridAreaType = 1, //drop в гриде
    WholeDayAreaType = 2, // в области на весь день
}

// частичный тип, может содержать любое количество свойств <T>
//export type Partial<T> = { [P in keyof T]?: T[P] }

export type Props<T extends string> = {[P in T]?: boolean}

// TODO
export type PartialEvent = Partial<Event>
// TODO
export type PropsTaskType = Props<Task.TaskType>

export interface PeriodBoundaries {
    startDate: Date,
    endDate: Date,
}