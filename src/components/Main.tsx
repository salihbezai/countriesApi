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
  const [selectedRegion, setSelectRegion] = useState<string>('');


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
       return (theCountries).filter((country: any) => {
        const countryName = country.name?.common;
        if (typeof countryName !== "string") return false; // Ensure it's a string
        return countryName.toLowerCase().includes(searchTerm.toLowerCase());
      });
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
  }, [searchTerm, theCountries,countriesByRegion]);

 
  // get countries by region
  const getCountriesByRegion = (e:any)=>{
    setFilteredCountries(filterRegion(e.target.value));
  }
  return (
    <div className="">
      <div className="flex items-center justify-between sm:flex-row sm:items-center mobile:flex-col mobile:items-start mobile:space-y-3 gap-4">
        <div className="flex items-center mobile:w-full sm:w-1/3  bg-white rounded-sm px-4 py-2 border-none shadow-md">
          <Search className="text-icon" size={18} />
          <Input
            className="text-detail px-4 py-5 w-full h-8 border-transparent rounded-none focus-visible:ring-0"
            type="text"
            placeholder="Search for a country…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex  items-center bg-white dark:bg-darkblue py-4 px-4 
        mobile:w-full sm:w-1/3 rounded-[4px]  w-full h-full shadow-md">
        <select className="custom-select flex justify-between items-center w-full cursor-pointer px-4 py-2
         " 
        onClick={(e)=>setIsOpen(prev=>!prev)} value={selectedRegion} onChange={(e)=>getCountriesByRegion(e)}>
              <option className="text-detail" value="All">
                All
              </option>
              <option className="text-detail" value="Africa">
                Africa
              </option>
              <option className="text-detail" value="America">
                America
              </option>
              <option className="text-detail" value="Asia">
                Asia
              </option>
              <option className="text-detail" value="Europe">
                Europe
              </option>
              <option className="text-detail" value="Oceania">
                Oceania
              </option>
          </select>
          <ChevronRight className={`${isOpen ? 'rotate-90' : 'rotate-0'}`}/>
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
