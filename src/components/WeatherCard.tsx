"use client";

import Image from "next/image";
import { WeatherData } from "@/types/weather";
import { Droplets, Wind, ThermometerSun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WeatherCardProps {
    weather: WeatherData;
    onClose: () => void;
}

export default function WeatherCard({ weather, onClose }: WeatherCardProps) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div className="relative flex items-center justify-center my-3">
            <div className="w-full max-w-sm mx-auto p-4 sm:p-6 rounded-3xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl animate-fadeIn relative">

                <div className="absolute top-4 right-4">
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20 rounded-full"
                    >
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="flex flex-col items-center gap-3 sm:gap-4 text-white text-center mt-4">
                    <h2 className="text-lg sm:text-xl font-semibold tracking-wide drop-shadow-md">
                        {weather.name}
                    </h2>
                    <p className="capitalize text-xs sm:text-sm opacity-80 drop-shadow-sm">
                        {weather.weather[0].description}
                    </p>

                    <Image
                        src={iconUrl}
                        alt={weather.weather[0].description}
                        width={90}
                        height={90}
                        className="sm:w-[100px] sm:h-[100px]"
                        priority
                    />

                    <p className="text-4xl sm:text-6xl font-bold drop-shadow-lg">
                        {Math.round(weather.main.temp)}°
                    </p>

                    <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-4 w-full text-xs sm:text-sm">
                        <div className="flex flex-col items-center gap-1">
                            <Droplets className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                            <span className="opacity-70">Humidity</span>
                            <span className="font-semibold">{weather.main.humidity}%</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Wind className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                            <span className="opacity-70">Wind</span>
                            <span className="font-semibold">{weather.wind.speed} m/s</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <ThermometerSun className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                            <span className="opacity-70">Feels Like</span>
                            <span className="font-semibold">{Math.round(weather.main.feels_like)}°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
