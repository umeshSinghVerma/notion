'use server'
import { setCookie } from 'cookies-next';
import { revalidatePath,revalidateTag } from "next/cache"
import { cookies } from "next/headers"
export const secret=async(values)=>{
    // console.log('value in secret',values)
    // setCookie('key', 'value');
    // return values;
}