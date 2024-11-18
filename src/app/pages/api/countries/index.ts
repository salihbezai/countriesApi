import type { NextApiResponse } from 'next'
 

 
export const  getAllCountries= async(   
     res: NextApiResponse)=>{
        try {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const countries = await response.json()
            if(countries != null && countries.length > 0  ){
                res.status(200).json(countries)
            }
        } catch (error) {   
            res.status(404).json({ error: "something went wrong !"})
        }
}
  