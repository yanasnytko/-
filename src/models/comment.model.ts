interface Comment {
    id: number;
    title: string | null;
    content: string | null;
    rating: number | null;
    encoded: Date | null;
    providerID: Provider | null;
    consumerID: Consumer | null;
    abuses: Abuse[];
}