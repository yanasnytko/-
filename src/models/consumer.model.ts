interface Consumer {
    nameConsumer: string | null;
    firstNameConsumer: string | null;
    newsletter: boolean | null;
    comments: Comment[];
    abuses: Abuse[];
    positions: Position[];
    picture: Picture | null;
    bookmarkProvider: Provider[];
}