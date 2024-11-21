

export  async function POST(req:Request){
    const body = await req.json()
    const { name } = body;

    if(!name) return new Response(JSON.stringify({error:"country name must be provided as a single string."})
        ,{status:404,headers: { "Content-Type": "application/json" }})
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        if(!response.ok) throw new Error(`Failed to fetch Country ${response.status}`)
        const country = await response.json()
            return new Response(JSON.stringify(country), {
                status: 200,
                headers: { "Content-Type": "application/json" },
              });
    } catch (error:any) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
    }
}