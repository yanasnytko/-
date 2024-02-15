interface Stage {
    id: number;
    stageName: string | null;
    description: string | null;
    price: number | null;
    additionalInformation: string | null;
    startDate: Date | null;
    endDate: Date | null;
    showStartDate: Date | null;
    showEndDate: Date | null;
    providerID: Provider | null;
}