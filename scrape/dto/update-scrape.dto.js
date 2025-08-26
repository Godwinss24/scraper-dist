"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScrapeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_scrape_dto_1 = require("./create-scrape.dto");
class UpdateScrapeDto extends (0, mapped_types_1.PartialType)(create_scrape_dto_1.CreateScrapeDto) {
}
exports.UpdateScrapeDto = UpdateScrapeDto;
//# sourceMappingURL=update-scrape.dto.js.map