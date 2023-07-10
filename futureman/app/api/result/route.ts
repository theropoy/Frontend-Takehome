import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: NextApiResponse) {
    const data = await req.json();

    if (data.result) {
        console.log(data.result);
        return NextResponse.json({}, {status: 200});

    } else {
        return NextResponse.json({message: 'Result not received'}, {status: 400});
    }

}