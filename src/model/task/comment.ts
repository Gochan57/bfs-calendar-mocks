import {Author} from './author'

export interface SbrfTaskComment {
    /**
     * Идентификатор
     */
    id: string;
    /**
     * Комментарий
     */
    text: string;
    /**
     * Дата создания
     */
    createdOn: string;
    /**
     * Дата последнего изменения
     */
    modifiedOn: string;
    /**
     * Автор
     */
    author: Author
    /**
     * Идентификатор версии записи (изменяемой, т.е. исходной)
     */
    modId: number;
}