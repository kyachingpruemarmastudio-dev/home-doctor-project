"use client";
import { Moon,Sun,Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale } from "./providers";
export function ThemeToggle(){const {theme,setTheme}=useTheme();return <button className="btn btn-outline" aria-label="Toggle theme" onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{theme==="dark"?<Sun size={17}/>:<Moon size={17}/>}</button>}
export function LanguageToggle(){const {locale,setLocale}=useLocale();return <button className="btn btn-outline" onClick={()=>setLocale(locale==="en"?"bn":"en")}><Languages size={17}/>{locale==="en"?"বাংলা":"English"}</button>}