declare namespace NodeJS {
  interface ProcessEnv {
    // Public
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string
    NEXT_PUBLIC_SMARTY_AUTOCOMPLETE_API_KEY: string
    NEXT_PUBLIC_BING_AUTOCOMPLETE_API_KEY: string
    NEXT_PUBLIC_WEB3FORMS_API_KEY: string
    NEXT_PUBLIC_BRIDGE_API_KEY: string
    NEXT_PUBLIC_VERCEL_URL: string | null
    NEXT_PUBLIC_VERCEL_ENV: 'production' | 'preview' | 'development'

    // Server only
    GOOGLE_GEOLOCATION_API_KEY: string
    BRIDGE_API_KEY: string
    REVALIDATE_API_SECRET_TOKEN: string
    YELP_API_KEY: string
  }
}
