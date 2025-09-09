"use client"
import { signIn } from "next-auth/react";

export default function UnauthPage() {
  return <div><button onClick={()=>signIn('github')}>Sign in with GitHub</button></div>;
}   