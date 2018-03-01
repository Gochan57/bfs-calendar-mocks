import {AddressType} from './type'

export interface SbrfTaskCorporateAddress {
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
}