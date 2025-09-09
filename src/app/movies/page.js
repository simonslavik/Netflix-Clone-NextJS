"use client";
import { useSession } from "next-auth/react";
import UnauthPage from "../../components/unauth-page";

export default function Movies() {
    const {data: session} =   useSession();
    
        if(session === null) return <UnauthPage />
    
  return <div>MoviesPage</div>;
}