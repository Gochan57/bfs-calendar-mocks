// типы для календаря
export interface Classifier {
    /**
     * Код
     */
    code: string;
    /**
     * Значение
     */
    value: string;
}

export interface ClassifierRef<T> extends Classifier {
    // ссылка на значение
    ref: T
}