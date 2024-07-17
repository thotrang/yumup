export interface IChannel {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    name: string;
    createdAt: string;
    updatedAt: string;
    alternativeText?: null;
    caption?: null;
    width?: number;
    height?: number;
    formats?: null | Formats;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: null;
    provider?: string;
    provider_metadata?: Provider_metadata;
    shortDescription?: string;
    link?: null;
    description?: null;
    avatar?: Avatar;
    thumbnail?: Thumbnail;
}

export interface Avatar {
    data: Data;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Provider_metadata {
    public_id: string;
    resource_type: string;
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

export interface Formats {
    thumbnail: Thumbnail;
}
