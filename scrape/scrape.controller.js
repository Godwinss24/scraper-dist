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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeController = void 0;
const common_1 = require("@nestjs/common");
const scrape_service_1 = require("./scrape.service");
const create_scrape_dto_1 = require("./dto/create-scrape.dto");
const update_scrape_dto_1 = require("./dto/update-scrape.dto");
let ScrapeController = class ScrapeController {
    scrapeService;
    constructor(scrapeService) {
        this.scrapeService = scrapeService;
    }
    create(createScrapeDto) {
        return this.scrapeService.create(createScrapeDto);
    }
    findAll(eventName, questId) {
        return this.scrapeService.getQuestDetails(eventName, questId);
    }
    findOne(id) {
        return this.scrapeService.findOne(+id);
    }
    update(id, updateScrapeDto) {
        return this.scrapeService.update(+id, updateScrapeDto);
    }
    remove(id) {
        return this.scrapeService.remove(+id);
    }
    async handleWebhook(update) {
        console.log("Incoming update:", update);
        if (update.message) {
            const chatId = update.message.chat.id;
            const username = update.message.from.username;
            const telegramId = update.message.from.id.toString();
            console.log(`New message from ${username}, chat id: ${chatId}`);
        }
        return { ok: true };
    }
};
exports.ScrapeController = ScrapeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scrape_dto_1.CreateScrapeDto]),
    __metadata("design:returntype", void 0)
], ScrapeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':eventName/:questId'),
    __param(0, (0, common_1.Param)('eventName')),
    __param(1, (0, common_1.Param)('questId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ScrapeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScrapeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_scrape_dto_1.UpdateScrapeDto]),
    __metadata("design:returntype", void 0)
], ScrapeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScrapeController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("telegram"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScrapeController.prototype, "handleWebhook", null);
exports.ScrapeController = ScrapeController = __decorate([
    (0, common_1.Controller)("scrape"),
    __metadata("design:paramtypes", [scrape_service_1.ScrapeService])
], ScrapeController);
//# sourceMappingURL=scrape.controller.js.map