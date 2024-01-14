// User.ts

interface User {
    id: number | null;
    email: string | null;
    roles: string[];
    password: string | null;
    addressStreet: string | null;
    addressNumber: string | null;
    creationDate: Date | null;
    tryCount: number | null;
    enabled: boolean | null;
    confirmed: boolean | null;
    postalCode: string | null;
    isVerified: boolean | null;
}