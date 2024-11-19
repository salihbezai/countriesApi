import type { NextApiRequest, NextApiResponse } from 'next'
 

 
export default async function handler (req:NextApiRequest,res: NextApiResponse){   
        if(req.method === "GET"){
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")
                const countries = await response.json()
                if(countries != null && countries.length > 0  ){
                    res.status(200).json(countries)
                }
            } catch (error) {   
                res.status(404).json({ error: "something went wrong !"})
            }
        }else {
            // Handle unsupported methods
            res.status(405).json({ error: `Method ${req.method} Not Allowed` });
          }
      

}