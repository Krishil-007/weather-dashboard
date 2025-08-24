"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WeatherData } from "@/types/weather";

interface WeatherCardProps {
    weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <Card className="max-w-sm mx-auto mt-4 animate-fadeIn">
            <CardHeader>
                <CardTitle>{weather.name}</CardTitle>
                <CardDescription>{weather.weather[0].description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
                <img src={iconUrl} alt={weather.weather[0].description} />
                <p className="text-2xl font-bold">{weather.main.temp} °C</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
            </CardContent>
        </Card>
    );
}
