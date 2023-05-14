import { Image } from './image';
import { ButtonObject } from './button';

export interface ElementList {
    type: string;
    data: ElementData[];
}

export interface ElementData {
    title: string;
    description?: string;
    subDescription?: string;
    image?: Image;
    button?: ButtonObject;
}