interface QuestDetailsInterface {
    getEventName(): string;
    getQuestId(): string;
    getCookie(): string;
    buildRequestOptions(): RequestInit;
    zealyApiBaseURL: string;
    buildURL(): string;
    getQuestDetails(): Promise<any>;
}
export declare class QuestDetails implements QuestDetailsInterface {
    private eventName;
    private questId;
    private cookie;
    constructor(eventName: string, questId: string, cookie: string);
    zealyApiBaseURL: string;
    getEventName(): string;
    getQuestId(): string;
    getCookie(): string;
    buildRequestOptions(): RequestInit;
    buildURL(): string;
    getQuestDetails(): Promise<any>;
}
export {};
