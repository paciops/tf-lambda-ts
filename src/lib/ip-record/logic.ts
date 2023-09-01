import { IpRecord } from "@lib/ip-record";

export interface IpRecordLogic {
    saveIp(ipRecord: IpRecord):Promise<void>
}