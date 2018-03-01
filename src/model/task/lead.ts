import {SbrfTaskProduct} from './product'

export interface SbrfTaskLead {
    /**
     * Идентификатор лида
     */
    id: string;
    /**
     * Продуктовые предложения
     */
    products: SbrfTaskProduct[];
    /**
     * Суть потенциальной продажи
     */
    description: string;
}