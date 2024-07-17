import { IThumbnail } from ".";

export interface IAboutUs {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    section: string;
    shortDescription: null;
    createdAt: string;
    updatedAt: string;
    page: string;
    description: string;
    title: string;
    ListStatistic: unknown[];
    background: {data: IThumbnail};
    gallery: {data: IThumbnail[]};
}
