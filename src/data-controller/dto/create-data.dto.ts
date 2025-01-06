import {
    IsString,
    IsArray,
    IsOptional,
    ValidateNested,
  } from 'class-validator';
import { Type } from 'class-transformer';

class ListItemDto {
    @IsString()
    text: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    dropdown: string[];
}

class FeatureTileDto {
    @IsString()
    title: string;

    @IsString()
    body: string;
}

class NavbarDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ListItemDto)
    listItems: ListItemDto[];

    @IsString()
    buttonText: string;
}

class HeroSectionDto {
    @IsString()
    heading: string;

    @IsString()
    paragraph: string;

    @IsString()
    buttonText: string;
}

class FeaturesDto {
    @IsString()
    title: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => FeatureTileDto)
    featureTiles: FeatureTileDto[];
}

class ProvidersDto {
    @IsString()
    title: string;

    @IsString()
    body: string;

    @IsArray()
    @IsString({ each: true })
    listItems: string[];
    }

    class TabsDto {
    @IsArray()
    @IsString({ each: true })
    tabs: string[];
}

class IntegrateDto {
    @IsString()
    smallHeading: string;

    @IsString()
    title: string;

    @IsString()
    body: string;

    @IsString()
    button: string;
}

class IndustriesDto {
    @IsString()
    title: string;

    @IsArray()
    @IsString({ each: true })
    tabContentHeading: string[];

    @IsArray()
    @IsString({ each: true })
    tabContentBody: string[];
}

class WhyBurqDto {
    @IsString()
    title: string;

    @IsString()
    body: string;

    @IsString()
    button: string;
}

class SellingPointsDto {
    @IsArray()
    @IsString({ each: true })
    tileHeadings: string[];

    @IsArray()
    @IsString({ each: true })
    tileBody: string[];
}

class TestimonialsDto {
    @IsString()
    title: string;

    @IsArray()
    @IsString({ each: true })
    comment: string[];

    @IsArray()
    @IsString({ each: true })
    name: string[];

    @IsArray()
    @IsString({ each: true })
    desig: string[];
}

class BackingDto {
    @IsString()
    title: string;

    @IsString()
    body: string;
}

class StartPoweringDto {
    @IsString()
    body: string;

    @IsString()
    button: string;
}

class ComponentsDto {
    @ValidateNested()
    @Type(() => NavbarDto)
    navbar: NavbarDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => HeroSectionDto)
    heroSection: HeroSectionDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => FeaturesDto)
    features: FeaturesDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ProvidersDto)
    providers: ProvidersDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => TabsDto)
    tabs: TabsDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => IntegrateDto)
    integrate: IntegrateDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => IndustriesDto)
    industries: IndustriesDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => WhyBurqDto)
    whyBurq: WhyBurqDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => SellingPointsDto)
    sellingPoints: SellingPointsDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => TestimonialsDto)
    testimonials: TestimonialsDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => BackingDto)
    backing: BackingDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => StartPoweringDto)
    startPowering: StartPoweringDto;
}

class HistoryEntryDto {
    @IsString()
    @IsOptional()
    timestamp: string;

    @ValidateNested()
    @Type(() => ComponentsDto)
    components: ComponentsDto;
}

export class CreateDataDto {
    @ValidateNested()
    @Type(() => ComponentsDto)
    components: ComponentsDto;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => HistoryEntryDto)
    history: HistoryEntryDto[];
}
  