import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult>  {
    const { sourceIp } = event.requestContext.identity;
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
        body: `<p>Your ip is ${sourceIp}!</p>`,
    }
}