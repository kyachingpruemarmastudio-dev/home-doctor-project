 "use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
const LocaleContext = createContext<{locale:Locale;setLocale:(v:Locale)=>void}>({locale:"en",setLocale:()=>{}});
export function useLocale(){return useContext(LocaleContext)}
export function Providers({children}:{children:React.ReactNode}){
 const [locale,setLocaleState]=useState<Locale>("en");
 useEffect(()=>{const saved=localStorage.getItem("medinova-locale") as Locale|null;if(saved==="bn"||saved==="en")setLocaleState(saved)},[]);
 const setLocale=(v:Locale)=>{setLocaleState(v);localStorage.setItem("medinova-locale",v);document.documentElement.lang=v};
 return <SessionProvider><ThemeProvider attribute="class" defaultTheme="light" enableSystem><LocaleContext.Provider value={{locale,setLocale}}>{children}</LocaleContext.Provider></ThemeProvider></SessionProvider>
}