import { LoaderOptions } from '@googlemaps/js-api-loader';
import { AsyncProps, GroupBase } from 'chakra-react-select';

export type GooglePlacesAutocompleteOption = {
  label: string;
  value: google.maps.places.AutocompletePrediction;
};

export type GooglePlacesAutocompleteHandle = {
  getSessionToken: () => google.maps.places.AutocompleteSessionToken | undefined;
  refreshSessionToken: () => void;
};

export interface LatLng {
  lat: number;
  lng: number;
}

export interface AutocompletionRequest {
  bounds?: [LatLng, LatLng];
  componentRestrictions?: { country: string | string[] };
  location?: LatLng;
  offset?: number;
  radius?: number;
  types?: string[];
}

export default interface GooglePlacesAutocompleteProps {
  apiKey?: string;
  apiOptions?: Partial<LoaderOptions>;
  autocompletionRequest?: AutocompletionRequest;
  debounce?: number;
  minLengthAutocomplete?: number;
  onLoadFailed?: (error: Error) => void;
  selectProps?: AsyncProps<GooglePlacesAutocompleteOption, false, GroupBase<GooglePlacesAutocompleteOption>>;
  withSessionToken?: boolean;
}
