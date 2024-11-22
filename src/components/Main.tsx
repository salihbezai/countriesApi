"use client";
import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight, Icon, Search } from "lucide-react";
import { Input } from "./ui/input";


const Main = () => {
  const [theCountries, setTheCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [countriesByRegion, setCountriesByRegion] = useState([]);
  const [isRegionSelected, setIsRegionSelected] = useState<boolean>(false);
  const [selectedRegion, setSelectRegion] = useState<string>('All');


  const [ isOpen, setIsOpen ] = useState(false)

  const { data, error, isLoading } = useQuery(["countries"], async () => {
    const response = await fetch("/api/countries");
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const countries = await response.json();
    return countries;
  });


  // Set countries data when fetched
  useEffect(() => {
    if (data) {
      setTheCountries(data);
    }
  }, [data]);
  
const filter =()=>{
      if(selectedRegion !== "All"){
        
        return (countriesByRegion).filter((country: any) => {
          const countryName = country.name?.common;
          if (typeof countryName !== "string") return false; // Ensure it's a string
          return countryName.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }else{
        return (theCountries).filter((country: any) => {
          const countryName = country.name?.common;
          if (typeof countryName !== "string") return false; // Ensure it's a string
          return countryName.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
     
    }

    const filterRegion =(region:string)=>{
      return (theCountries).filter((country: any) => {
       const countryRegion = country.region;
       if (typeof countryRegion !== "string") return false; // Ensure it's a string
       return countryRegion.toLowerCase().includes(region.toLowerCase());
     });
   }

  // Filter countries when search term changes
  useEffect(() => {
    if (!theCountries) return;
    setFilteredCountries(filter());
  }, [searchTerm ,theCountries,countriesByRegion,selectedRegion]);


  useEffect(() => {
    setSelectRegion(selectedRegion)
  }, [selectedRegion]);
 
  // get countries by region
  const getCountriesByRegion = (e:any)=>{
    setSelectRegion(e.target.value)
    const returnedCountries = filterRegion(e.target.value);
    if(returnedCountries.length === 0){
      setCountriesByRegion(theCountries)
    }else{
      setCountriesByRegion(returnedCountries);
    }
  }


  return (
    <div className="">
      <div className="flex  justify-between sm:flex-row  sm:items-center mobile:flex-col mobile:items-start  gap-2">
        <div className="flex items-center mobile:w-full sm:w-1/3 dark:bg-darkBlueElements  bg-white rounded-sm px-4 py-2 border-none shadow-md">
          <Search className="text-icon dark:text-white" size={18} />
          <Input
            className=" mobile:text-[0.8rem] px-4 py-5 ml-2 w-full h-8
             dark:bg-darkBlueElements   border-transparent rounded-[4px] focus-visible:ring-0"
            type="text"
            placeholder="Search for a country…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center mobile:w-full sm:w-1/3 dark:bg-darkBlueElements  bg-white rounded-sm px-4 py-2 border-none shadow-md">
        <select className="custom-select flex justify-between items-center dark:bg-darkBlueElements w-full cursor-pointer px-4 py-2" 
        onClick={(e)=>setIsOpen(prev=>!prev)}  onChange={(e)=>getCountriesByRegion(e)} defaultValue='All'>
              <option selected={selectedRegion === "All"} className="text-detail " value="All">
                All
              </option>
              <option selected={selectedRegion === "Africa"} className="text-detail" value="Africa">
                Africa
              </option>
              <option selected={selectedRegion === "America"} className="text-detail" value="America">
                America
              </option>
              <option selected={selectedRegion === "Asia"} className="text-detail" value="Asia">
                Asia
              </option>
              <option selected={selectedRegion === "Europe"} className="text-detail" value="Europe">
                Europe
              </option>
              <option selected={selectedRegion === "Oceania"} className="text-detail" value="Oceania">
                Oceania
              </option>
        </select>
          <ChevronRight className={`${isOpen ? 'rotate-0' : 'rotate-90'}`}/>
        </div>
      </div>

      <Cards
        countries={filteredCountries }
        isLoading={isLoading}
        error={error}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Main;
