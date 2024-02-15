interface City {
    id: number;
    city: string | null;
    region: Region | null;
    postalCodes: PostalCode[];
}