import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { IpRecordLogic } from "@lib/ip-record/";
import { IpRecordDynamoDB } from "@lib/ip-record/dynamoDB";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { v4 } from "uuid";

const REGION = "eu-central-1";
const IP_RECORD_TABLE = "ip-table"
const client = new DynamoDBClient({region: REGION})
const IpRecord: IpRecordLogic = new IpRecordDynamoDB({client, table: IP_RECORD_TABLE})

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult>  {
    const { sourceIp } = event.requestContext.identity;
    await IpRecord.saveIp({
        id: v4(),
        ip: sourceIp
    })
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
        body: `<p>Your ip is ${sourceIp}!</p>`,
    }
}