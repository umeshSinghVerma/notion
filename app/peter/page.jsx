import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
export default async function Page(params){
    redirect('/?dataSource=notion');
    console.log(params);
    const secret = params.searchParams.user;
    return(
        <div>
            this is div
        </div>
    )

}