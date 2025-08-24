"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { WeatherData } from "@/types/weather";
import WeatherCard from "@/components/WeatherCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data: WeatherData = await res.json();
      setWeather(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-4 md:p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Dashboard</h1>

      <div className="w-full max-w-md">
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && (
        <div className="w-full max-w-md mt-4">
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
      )}

      {error && (
        <div className="w-full max-w-md mt-4 p-4 bg-red-100 text-red-700 rounded shadow">
          {error}
        </div>
      )}

      {weather && (
        <div className="w-full max-w-md mt-4">
          <WeatherCard weather={weather} />
        </div>
      )}
    </main>

  );
}
