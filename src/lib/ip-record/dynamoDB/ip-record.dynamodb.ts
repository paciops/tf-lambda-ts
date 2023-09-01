import { IpRecord, IpRecordLogic } from "@lib/ip-record/";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export class IpRecordDynamoDB implements IpRecordLogic {
    private ddbDocClient:DynamoDBDocument
    private table: string

    constructor({client, table}:{client: DynamoDBClient, table: string}) {
        this.ddbDocClient = DynamoDBDocument.from(client);
        this.table = table
    }
    async saveIp(ipRecord: IpRecord){
        const response = await this.ddbDocClient.put({
            TableName: this.table,
            Item: ipRecord
        })
        console.log("saveIp response = ", response)
        return
    }
}