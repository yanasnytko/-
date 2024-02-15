interface Picture {
    id: number;
    pictureOrder: number | null;
    serviceCategoryID: ServiceCategory | null;
    consumerID: Consumer | null;
    providerPictures: Provider | null;
    providerLogo: Provider | null;
}