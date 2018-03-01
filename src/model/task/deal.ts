import {SbrfTaskProduct} from './product'

export interface SbrfTaskDeal {
    /**
     * Номер сделки
     */
    id: string;
    /**
     * Продуктовые предложения
     */
    products: SbrfTaskProduct[];
    /**
     * Суть сделки
     */
    description: string;
    /**
     * Стадия сделки
     */
    salesStage: string;
    /**
     * Канал продаж
     */
    salesChannel: string;
    /**
     * ФОТ
     */
    fot: number;
    /**
     * Количество сотрудников
     */
    employeeQuantity: number;
    /**
     * Команда сотрудников, работающих со сделкой
     */
    managerIds: string[];
}