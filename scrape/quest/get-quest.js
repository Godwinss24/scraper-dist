"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestDetails = void 0;
class QuestDetails {
    eventName;
    questId;
    cookie;
    constructor(eventName, questId, cookie) {
        if (!eventName || !questId || !cookie) {
            throw new Error("EVENT NAME OR QUEST ID OR COOKIE MISSING");
        }
        this.eventName = eventName;
        this.questId = questId;
        this.cookie = cookie;
    }
    zealyApiBaseURL = "https://api-v1.zealy.io/communities";
    getEventName() {
        return this.eventName;
    }
    getQuestId() {
        return this.questId;
    }
    getCookie() {
        return this.cookie;
    }
    buildRequestOptions() {
        const cookie = this.getCookie();
        return {
            method: "GET",
            headers: {
                accept: "application/json",
                cookie: cookie,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
                referer: "https://zealy.io/",
                origin: "https://zealy.io",
            },
            signal: AbortSignal.timeout(20000),
        };
    }
    buildURL() {
        return `${this.zealyApiBaseURL}/${this.eventName}/quests/v2/${this.questId}`;
    }
    async getQuestDetails() {
        const requestOptions = this.buildRequestOptions();
        const url = this.buildURL();
        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                return await response.text();
            }
            return await response.json();
        }
        catch (err) {
            throw new Error(`Failed to fetch quest details: ${err.message}`);
        }
    }
}
exports.QuestDetails = QuestDetails;
//# sourceMappingURL=get-quest.js.map