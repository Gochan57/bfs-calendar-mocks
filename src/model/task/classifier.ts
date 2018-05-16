// типы для календаря
export interface Classifier {
    /**
     * Код
     * @maxLength 255
     */
    code: string;
    /**
     * Значение
     * @maxLength 255
     */
    value: string;
}

export interface ClassifierRef<T> extends Classifier {
    /**
     * Ссылка на значение
     */
    ref: T
}