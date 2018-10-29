import { Social } from './social.interface';

export interface Portfolio {
    firstName: string;
    lastName: string;
    subheading: string;
    socialMedia: Social[];
    introduction: string;
    speakerBio: string;
}

