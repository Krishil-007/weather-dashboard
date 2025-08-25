"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
    onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [city, setCity] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city.trim());
            setCity("");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-2 items-center w-full p-3 sm:p-3 rounded-2xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg"
        >
            <Label htmlFor="city" className="sr-only">
                City
            </Label>
            <Input
                id="city"
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/70 border-none focus-visible:ring-0 focus-visible:outline-none text-sm sm:text-base"
            />
            <Button
                type="submit"
                className="bg-white/30 hover:bg-white/40 text-white border border-white/40 rounded-xl px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base"
            >
                Search
            </Button>
        </form>
    );
}