export interface SbrfTaskProduct {
    /**
     * ЦКПИТ Id продукта
     */
    mdmId: string;
    /**
     * Название продукта
     */
    name: string;
    /**
     * Описание
     */
    description: string;
    /**
     * Код участника кампании (для ListOfNbo)
     */
    ukCode: string;
    /**
     * Результат презентации продукта (для ListOfNbo)
     */
    presentationResult: string;
    /**
     * Код волны (соответствующий каналу, в который передается предложение), к которому относится данный УК (для ListOfNbo)
     */
    waveId: string;
}