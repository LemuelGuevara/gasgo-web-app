"use client"
import { useAddress } from "@/hooks/useAddress";
import { useEffect, useState } from "react";
import { getCurrentLocation } from "./getCurrentLocation";

interface AddressProps {
  lat: number;
  lng: number;
}

interface StationDistanceProps {
  origin: string;
  destination: string;
}

function GetAddress (props: AddressProps) {
    const address = useAddress(props.lat, props.lng);
  
    return address
  };
  

export { GetAddress,  };
