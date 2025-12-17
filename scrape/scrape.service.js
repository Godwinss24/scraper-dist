"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const crypto = require("crypto");
const get_quest_1 = require("./quest/get-quest");
let ScrapeService = class ScrapeService {
    configService;
    botToken;
    baseUrl;
    constructor(configService) {
        this.configService = configService;
        this.botToken = this.configService.get("TELEGRAM_BOT_TOKEN") || "";
        this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
    }
    create(createScrapeDto) {
        return "This action adds a new scrape";
    }
    findAll() {
        return `This action returns all scrape`;
    }
    findOne(id) {
        return `This action returns a #${id} scrape`;
    }
    update(id, updateScrapeDto) {
        return `This action updates a #${id} scrape`;
    }
    remove(id) {
        return `This action removes a #${id} scrape`;
    }
    getQuestDetails(eventName, questId) {
        const cookie = this.cookieData();
        const questDetailsService = new get_quest_1.QuestDetails(eventName, questId, cookie);
        return questDetailsService.getQuestDetails();
    }
    buildFilePath(name) {
        return (0, path_1.join)(__dirname, "../assets", name);
    }
    cookieData() {
        return "_fbp=fb.1.1756283062502.580017252538621248; intercom-id-nketzd4e=385781d5-e5c9-43d7-9bf4-47bbeaf251fa; intercom-device-id-nketzd4e=a511f8f9-b03d-432d-bf74-9ae25e07649f; _tt_enable_cookie=1; _ttp=01K3NA3XNZ48KWAB4J94M84AV1_.tt.1; ttcsid_CO6OII3C77UAL9O5M6RG=1758728222180::RuAHd9UtPirBC9pPBS8G.14.1758728360651.0; ttcsid=1758728222181::NFYwFcgASScpuI28aYGY.13.1758728360651.0; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWVlZWE4ZS0wMmUxLTQ3ZDEtYWM1OC02MmRmMDc5Njc0NDgiLCJhY2NvdW50VHlwZSI6ImVtYWlsIiwiZW1haWwiOiJnb2R3aW5zZ29kd2luOTczQGdtYWlsLmNvbSIsImxhc3RFbWFpbENoZWNrIjoxNzYzODMzMjMxMTg2LCJpYXQiOjE3NjM4MzMyMzEsImV4cCI6MTc2NjQyNTIzMX0.fgHLpLlaL_tjSLaexZz8xqlqT3AkRd4yj7Dcc4AGoU0; user_metadata=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWVlZWE4ZS0wMmUxLTQ3ZDEtYWM1OC02MmRmMDc5Njc0NDgiLCJpYXQiOjE3NjM4MzMyMzEsImV4cCI6MTc2NjQyNTIzMX0.oVtbaZXN8YUVC5KY10_dWH636qoBQPmplfnLKH5rBFE; cookie-config={%22analytics%22:true%2C%22marketing%22:true%2C%22functional%22:true}; referrer-url=https://zealy.io/my-communities; connect.sid=s%3AblCXOoRVwrAVMGzrNCoS8WuaqKAHqzOy.U%2FmhK7E5nof%2BRHexshBavoleoGe%2B%2BYlCx01A%2FNlWcKQ; intercom-session-nketzd4e=am5ydUY0OU1ITDJBOVZHVEs2azR2WGlieW9wa1EwdXdQSFJpSlZvTjJKdUNjYkVjZFJESy91eUhKOXdEVTlQc1V6Qjl6UWxmU014L1ZxdkhvZWk0UlpRKytTVzlnK2Z1NGtJZG5tWmM3UFU9LS1lekdwQzNiYXp5WjN3S3BhRDkwSWVBPT0=--3d8e50ea1b140243b7b66690aa24d9eac4d592f3; mp_331e7ed57ec193ae7fde9e90b8ef68d4_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Ab74edc42-911d-410f-b59c-7d0138825448%22%2C%22%24device_id%22%3A%22b74edc42-911d-410f-b59c-7d0138825448%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D";
    }
    async sendMessage(chatId, text) {
        await fetch(`${this.baseUrl}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
            }),
        });
    }
    fetchUrl(url, requestOptions) {
        return fetch(url, requestOptions);
    }
    hashString(data) {
        return crypto.createHash("sha256").update(data).digest("hex");
    }
    buildRequestOptions(cookieData) {
        return {
            method: "GET",
            headers: {
                accept: "application/json",
                cookie: cookieData,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
                referer: "https://zealy.io/",
                origin: "https://zealy.io",
            },
            signal: AbortSignal.timeout(20000),
        };
    }
    async getFileContent(filePath) {
        try {
            const fileContent = await fs_1.promises.readFile(filePath, "utf-8");
            return fileContent;
        }
        catch (err) {
            if (err.code === "ENOENT") {
                await fs_1.promises.writeFile(filePath, "", "utf-8");
                return "";
            }
            throw err;
        }
    }
    async editFileContent(filePath, data) {
        await fs_1.promises.writeFile(filePath, data, "utf8");
    }
    extractUsername(url) {
        try {
            const urlObj = new URL(url);
            const parts = urlObj.pathname.split("/");
            return parts[2] || null;
        }
        catch (error) {
            console.error("Invalid URL:", error);
            return null;
        }
    }
    async getZealyData(link, fileName) {
        try {
            const cookieData = this.cookieData();
            const filePath = this.buildFilePath(fileName);
            const requestOptions = this.buildRequestOptions(cookieData);
            const response = await this.fetchUrl(link, requestOptions);
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            const res = await response.json();
            const minimalData = res.map((category) => ({
                id: category.id,
                totalQuestCount: category.totalQuestCount,
                quests: category.quests.map((q) => ({
                    id: q.id,
                    completed: q.completed,
                    claimed: q.claimed,
                })),
            }));
            const fileContent = await this.getFileContent(filePath);
            if (fileContent.trim() === JSON.stringify(minimalData)) {
                console.log("Same content", link);
            }
            else {
                const changedQuestIdsForTelegram = [];
                try {
                    const previousData = JSON.parse(fileContent);
                    minimalData.forEach((category) => {
                        const oldCategory = previousData.find((c) => c.id === category.id);
                        if (!oldCategory)
                            return;
                        category.quests.forEach((quest) => {
                            const oldQuest = oldCategory.quests.find((q) => q.id === quest.id);
                            if (!oldQuest ||
                                oldQuest.completed !== quest.completed ||
                                oldQuest.claimed !== quest.claimed) {
                                changedQuestIdsForTelegram.push({
                                    categoryId: category.id,
                                    questId: quest.id,
                                });
                            }
                        });
                    });
                    if (changedQuestIdsForTelegram.length) {
                        console.log("Changed quest IDs:", changedQuestIdsForTelegram.map((q) => q.questId));
                    }
                }
                catch (e) {
                    console.warn("Could not parse previous file content for quest diff");
                }
                if (changedQuestIdsForTelegram.length) {
                    await this.onLeaderboardChange(link, changedQuestIdsForTelegram);
                }
                await this.editFileContent(filePath, JSON.stringify(minimalData));
                console.log("different content");
            }
            return res;
        }
        catch (error) {
            console.error(error);
        }
    }
    async onLeaderboardChange(link, changedQuestIds) {
        console.log("Running your custom logic...");
        const telegramIds = process.env.TELEGRAM_IDS?.split(",") || [];
        const sendPromises = [];
        for (const id of telegramIds) {
            for (const q of changedQuestIds) {
                const message = `Task Added ${this.extractUsername(link)}\nlink: https://zealy.io/cw/${this.extractUsername(link)}/questboard/${q.categoryId}/${q.questId}`;
                sendPromises.push(this.sendMessage(Number(id.trim()), message));
            }
        }
        await Promise.all(sendPromises);
    }
    async scrapeData() {
        const rawLinks = this.configService.get("ZEALY_LINKS");
        if (!rawLinks) {
            console.error("ZEALY_LINKS not defined in .env");
            return;
        }
        let links;
        try {
            links = JSON.parse(rawLinks);
        }
        catch (err) {
            console.error("Invalid ZEALY_LINKS JSON in .env", err);
            return;
        }
        const tasks = links
            .filter((event) => event.link && event.fileName)
            .map((event) => this.getZealyData(event.link, event.fileName));
        await Promise.all(tasks);
    }
};
exports.ScrapeService = ScrapeService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_SECOND),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScrapeService.prototype, "scrapeData", null);
exports.ScrapeService = ScrapeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ScrapeService);
//# sourceMappingURL=scrape.service.js.map