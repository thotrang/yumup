export interface ISection {
    attributes: {
        section: "banner" | "statistic" | "channel" | "headline";
        page: "homepage" | "about-us";
        description: string;
        background: { data: IThumbnail };
        ListStatistic: {
            id: number,
            title: string;
            value: string;
            icon: string;
        }[]
        data: any;
    };
    id: number;
}

export interface IThumbnail {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: Provider_metadata;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    large: Thumbnail;
    small: Thumbnail;
    medium: Thumbnail;
    thumbnail: Thumbnail;
}

export interface Provider_metadata {
    public_id: string;
    resource_type: string;
}

export interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: Provider_metadata;
}