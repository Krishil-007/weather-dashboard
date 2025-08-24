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
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <Label htmlFor="city" className="sr-only">City</Label>
            <Input
                id="city"
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1"
            />
            <Button type="submit">Search</Button>
        </form>
    );
}
