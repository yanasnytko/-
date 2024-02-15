interface Promotion {
    id: number;
    promotionName: string | null;
    description: string | null;
    startDate: Date | null;
    endDate: Date | null;
    showStartDate: Date | null;
    showEndDate: Date | null;
    serviceCategoryID: ServiceCategory | null;
    providerID: Provider | null;
}