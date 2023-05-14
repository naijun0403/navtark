import { Image } from './image';
import { ElementList } from './element';
import { ButtonObject } from './button';

export interface CompositeContent {
    compositeList: Composite[];
}

export interface Composite {
    title?: string;
    description?: string;
    image?: Image;
    elementList?: ElementList;
    buttonList?: ButtonObject[];
}