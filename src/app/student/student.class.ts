import { Major } from '../major/major.class';

export class Student {

    id: number = 0;
    name: string;
    sat: number = 0;
    gpa: number = 0;
    majorId?: number = null;
    major: Major;

    constructor() {}
}