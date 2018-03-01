
export interface FilterItemValue {
    text: string
    value: string
}

export interface FilterVisibilityCondition {
    condition: string
    field: string
    value: string
}

export interface FilterChangeCondition extends FilterVisibilityCondition {
    fieldValue: string
}

export interface FiltersState {
    isShowed?: boolean
    searchInput?: string
    values: FiltersValues | null
    editedValues: FiltersValues | null
    defaultValues: FiltersValues | null
    isSearchShowed: Boolean
}

export type FilterValue = boolean|string|string[]|undefined

export type FiltersValues = {
    // TODO сделать конвертер FiltersValues в SbrfTaskFilter
    //[key in Config.TaskFilterKey]?: FilterValue
    [key: string]: FilterValue
}