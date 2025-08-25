"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { WeatherData } from "@/types/weather";
import WeatherCard from "@/components/WeatherCard";
import { Skeleton } from "@/components/ui/skeleton";
import { X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to fetch weather");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center px-4">
      <Image
        src="/cloud.jpg"
        alt="Weather background fallback"
        fill
        priority
        className={`absolute inset-0 object-cover -z-20 transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
      />

      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-700"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src="/bgvid.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10"></div>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
        Weather Dashboard
      </h1>

      <div className="w-full max-w-md">
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && (
        <div className="w-full max-w-md mt-4">
          <Skeleton className="h-48 w-full rounded-2xl" />
        </div>
      )}

      {error && (
        <div className="relative w-full max-w-md mt-4 p-3 sm:p-4 text-sm sm:text-base text-white bg-red-500/30 border border-red-400/40 rounded-2xl backdrop-blur-md shadow-lg text-center">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setError("")}
              className="text-white/80 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-2">
            <p className="break-words">{error}</p>
          </div>
        </div>
      )}

      {weather && (
        <div className="w-full max-w-md mt-6">
          <WeatherCard
            weather={weather}
            onClose={() => {
              setWeather(null);
              setError("");
            }}
          />
        </div>
      )}
    </main>
  );
}
