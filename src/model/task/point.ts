import {AddressType} from './type'

export interface SbrfTaskPoint {
    /**
     * Идентификатор точки
     */
    id: string;
    /**
     * Название точки
     */
    name: string;
    /**
     * Местоположение присутствия
     */
    location: string;
    /**
     * Статус
     */
    status: string;
    /**
     * Кол–во оценок поток
     */
    assessQty: number;
    /**
     * Средний уровень
     */
    assessAvg: number;
    /**
     * Средний целевой
     */
    assessGoalAvg: number;
    /**
     * Средний уровень выполнения потока
     */
    assessAvgPotok: number;
    /**
     * Id адреса
     */
    addressId: {
        /**
         * Тип адреса
         */
        addressType: AddressType;
        /**
         * Адрес в произвольной форме
         */
        address: string;
        /**
         * Id адреса организации в CRM
         */
        addressId: string;
        /**
         * Признак основного адреса
         */
        primaryFlg: boolean;
    };
    /**
     * Строка адреса
     */
    fullAddress: string;
    /**
     * Текст заметки
     */
    note: string;
}