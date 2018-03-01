import {SbrfTaskPoint} from './point'

export interface SbrfTaskAgreement {
    /**
     * Идентификатор договора
     */
    id: string;
    /**
     * Номер договора
     */
    contractNumber: string;
    /**
     * Дата начала действия договора
     */
    startDate: string;
    /**
     * Дата окончания действия договора
     */
    endDate: string;
    /**
     * Список точек по договору
     */
    points: SbrfTaskPoint[];
}