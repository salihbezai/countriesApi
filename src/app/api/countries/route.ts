
 
export  async function GET (req:Request){   
        if(req.method === "GET"){
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")
                const countries = await response.json()
                if(countries != null && countries.length > 0  ){
                    return new Response(JSON.stringify(countries),{
                        status:200,
                        headers:{"Contenet-Type":"application/json"}
                    })
                }
            } catch (error) {   
                return new Response(JSON.stringify({ error: "No countries found"}),{
                    status:404, headers:{"Contenet-Type":"application/json"}
                })
            }
        }else {
            return new Response(
                JSON.stringify({ error: "Something went wrong!" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
              );
          }
      

}