import { ImageContent } from './image';
import { ElementList } from './element';
import { ButtonObject } from './button';
import { Content } from './index';

export interface CompositeContent extends Content {
    compositeList: Composite[];
}

export interface Composite {
    title?: string;
    description?: string;
    image?: ImageContent;
    elementList?: ElementList;
    buttonList?: ButtonObject[];
}