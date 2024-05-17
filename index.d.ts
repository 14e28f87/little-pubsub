export default class LittlePubSub {
    subscribers: {
        [index: string]: {
            value?: any;
            handlers?: Function[];
        };
    };
    verbose: boolean;
    constructor(verbose?: boolean);
    _handleContext(handler: Function, context?: Function): Function;
    hasSubscribers(event: string): boolean;
    subscribe<T = any>(event: string, handler: (T: any) => any, context?: Function): void;
    unsubscribe<T = any>(event: string, handler: (T: any) => any, context?: Function): void;
    publish<T = string | number | boolean | object | Array<any>>(event: string, value: T, verbose?: boolean): void;
    publishVerbose(event: string, value: string | number | boolean | object | Array<any>): void;
    once(event: string): Promise<string | number | boolean | object | Array<any>>;
}
