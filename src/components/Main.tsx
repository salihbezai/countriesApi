"use client";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Main = () => {
  const [theCountries, setTheCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

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
  

  // Filter countries when search term changes
  useEffect(() => {
    if (!theCountries) return;

    const filtered = theCountries.filter((country: any) => {
      const countryName = country.name?.common;
      if (typeof countryName !== "string") return false; // Ensure it's a string
      return countryName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredCountries(filtered);
  }, [searchTerm, theCountries]);

  return (
    <div className="">
      <div className="flex items-center justify-between sm:flex-row sm:items-center mobile:flex-col mobile:items-start mobile:space-y-3 gap-4">
        <div className="flex items-center bg-white rounded-sm px-4 py-2 border-none">
          <Search className="text-icon" size={18} />
          <Input
            className="text-detail px-4 py-5 w-full h-8 border-transparent rounded-none focus-visible:ring-0"
            type="text"
            placeholder="Search for a country…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center bg-white rounded-sm px-4 py-2 border-none ">
          <Select>
            <SelectTrigger className="w-[180px] focus:outline-none focus:ring-0 border-none rounded-none">
              <SelectValue className="text-detail" placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-detail" value="light">
                Light
              </SelectItem>
              <SelectItem className="text-detail" value="dark">
                Dark
              </SelectItem>
              <SelectItem className="text-detail" value="system">
                System
              </SelectItem>
            </SelectContent>
          </Select>
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
