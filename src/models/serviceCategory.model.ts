interface ServiceCategory {
    id: number;
    serviceCategoryName: string;
    description: string;
    highlight: boolean;
    validated: boolean;
    promotions: Promotion[]; 
    picture: Picture | null; 
    providers: Provider[]; 
}