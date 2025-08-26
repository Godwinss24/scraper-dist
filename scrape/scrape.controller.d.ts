import { ScrapeService } from "./scrape.service";
import { CreateScrapeDto } from "./dto/create-scrape.dto";
import { UpdateScrapeDto } from "./dto/update-scrape.dto";
export declare class ScrapeController {
    private readonly scrapeService;
    constructor(scrapeService: ScrapeService);
    create(createScrapeDto: CreateScrapeDto): string;
    findOne(id: string): string;
    update(id: string, updateScrapeDto: UpdateScrapeDto): string;
    remove(id: string): string;
    handleWebhook(update: any): Promise<{
        ok: boolean;
    }>;
}
