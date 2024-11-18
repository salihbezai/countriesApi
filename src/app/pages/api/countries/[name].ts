import type { NextApiRequest, NextApiResponse } from 'next'
 

export const getSingleCountry=async(req:NextApiRequest,res:NextApiResponse)=>{
    const  { name } = req.query;
    if(!name) res.status(404).json({error:"Country name must be provided as a single string."})
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        if(!response.ok) throw new Error(`Failed to fetch Country ${response.status}`)
        const country = await response.json()
        res.status(200).json(country)
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}