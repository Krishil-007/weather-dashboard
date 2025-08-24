# Weather Dashboard

A responsive weather dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
Fetches current weather data using the OpenWeatherMap API.

## Features

- Search weather by city
- Displays temperature, condition, humidity, wind speed
- Loading skeleton while fetching
- Error handling for invalid cities or API errors
- Responsive and accessible design
- Weather icons and smooth animations

## Getting Started

### Prerequisites

- Node.js v22+
- npm

### Installation

1. Clone the repo:

```bash
git clone https://github.com/Krishil-007/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Add your OpenWeatherMap API key in `.env.local`:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

4. Run the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Deployment

This project can be deployed on **Vercel**.  

## License

MIT
