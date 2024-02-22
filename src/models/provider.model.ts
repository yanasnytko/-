interface Provider extends User {
    id: number;
    providerName: string | null;
    webSite: string | null;
    phoneNumber: string | null;
    tva: string | null;
    promotions: Promotion[];
    stages: Stage[];
    comments: Comment[];
    pictures: Picture[];
    picture: Picture | null;
    bookmarkConsumer: Consumer[];
    proposedServiceCategory: ServiceCategory[];
}