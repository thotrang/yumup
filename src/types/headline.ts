export interface IHeadline {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    createdAt: string;
    updatedAt: string;
    name?: string;
    alternativeText?: null;
    caption?: null;
    width?: number;
    height?: number;
    formats?: Formats;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: null;
    provider?: string;
    provider_metadata?: Provider_metadata;
    title?: string;
    description?: null;
    link?: null;
    thumbnail?: Thumbnail;
}

export interface Thumbnail {
    ext?: string;
    url?: string;
    hash?: string;
    mime?: string;
    name?: string;
    path?: null;
    size?: number;
    width?: number;
    height?: number;
    sizeInBytes?: number;
    provider_metadata?: Provider_metadata;
    data?: Data;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Formats {
    thumbnail: Thumbnail;
}

export interface Provider_metadata {
    public_id: string;
    resource_type: string;
}

