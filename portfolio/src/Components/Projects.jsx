export default async function projects(){
    const data = fetch(process.env.LARAVEL_API +'projects');
    const res = await data.json;

    return(

    )
}