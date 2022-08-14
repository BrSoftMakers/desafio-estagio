import { FormDataConvertible, Method } from './types';
export declare function hrefToUrl(href: string | URL): URL;
export declare function mergeDataIntoQueryString(method: Method, href: URL | string, data: Record<string, FormDataConvertible>): [string, Record<string, FormDataConvertible>];
export declare function urlWithoutHash(url: URL | Location): URL;
