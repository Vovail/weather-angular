const apiUrl = 'https://api.weather.com/v3';
export const apiParams = {
  apiKey: '6532d6454b8aa370768e63d6ba5a832e',
  language: 'en-US',
  format: 'json',
};

export const locationSearchUrl = `${apiUrl}/location/search`;
export const locationParams = {
  ...apiParams,
  locationType: 'city,postCode',
};

export const dailyForecastUrl = `${apiUrl}/wx/forecast/daily/10day`;
export const dailyParams = {
  ...apiParams,
  units: 'm',
};
