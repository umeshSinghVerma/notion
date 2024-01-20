'use server'
import { secret } from '@/actions/secret';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const clientId = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const redirectUri = process.env.OAUTH_REDIRECT_URI;
export default async function alpha(parms) {
    const code = parms.searchParams.code;
    let user=null;
    try {
        const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
        const response = await fetch("https://api.notion.com/v1/oauth/token", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Basic ${encoded}`,
            },
            body: JSON.stringify({
                grant_type: "authorization_code",
                code: code,
                redirect_uri: redirectUri,
            }),
        });
        const data = await response.json();
        console.log('this is the data', data.access_token);
        user = data.access_token;
    } catch (error) {
        console.error(error)
    }
    finally{
        redirect(`/peter?user=${user}`)
    }
}