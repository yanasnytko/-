interface Abuse {
    id: number;
    description: string | null;
    encoded: Date | null;
    consumerID: Consumer | null;
    commentID: Comment | null;
}