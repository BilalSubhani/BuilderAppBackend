import {
    IsString,
    IsArray,
    IsOptional,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';


class ListItemDto {
    @IsString()
    @IsOptional()
    text?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    dropdown?: string[];
}

class FeatureTileDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    body?: string;
}

class NavbarDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ListItemDto)
    @IsOptional()
    listItems?: ListItemDto[];

    @IsString()
    @IsOptional()
    buttonText?: string;
}

class HeroSectionDto {
    @IsString()
    @IsOptional()
    heading?: string;

    @IsString()
    @IsOptional()
    paragraph?: string;

    @IsString()
    @IsOptional()
    buttonText?: string;
}

class FeaturesDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => FeatureTileDto)
    @IsOptional()
    featureTiles?: FeatureTileDto[];
}

class ProvidersDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    body?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    listItems?: string[];
}

class TabsDto {
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tabs?: string[];
}

class IntegrateDto {
    @IsString()
    @IsOptional()
    smallHeading?: string;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    body?: string;

    @IsString()
    @IsOptional()
    button?: string;
}

class IndustriesDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tabContentHeading?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tabContentBody?: string[];
}

class WhyBurqDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    body?: string;

    @IsString()
    @IsOptional()
    button?: string;
}

class SellingPointsDto {
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tileHeadings?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tileBody?: string[];
}

class TestimonialsDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    comment?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    name?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    desig?: string[];
}

class BackingDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    body?: string;
}

class StartPoweringDto {
    @IsString()
    @IsOptional()
    body?: string;

    @IsString()
    @IsOptional()
    button?: string;
}

class ComponentsDto {
    @ValidateNested()
    @Type(() => NavbarDto)
    @IsOptional()
    navbar?: NavbarDto;

    @ValidateNested()
    @Type(() => HeroSectionDto)
    @IsOptional()
    heroSection?: HeroSectionDto;

    @ValidateNested()
    @Type(() => FeaturesDto)
    @IsOptional()
    features?: FeaturesDto;

    @ValidateNested()
    @Type(() => ProvidersDto)
    @IsOptional()
    providers?: ProvidersDto;

    @ValidateNested()
    @Type(() => TabsDto)
    @IsOptional()
    tabs?: TabsDto;

    @ValidateNested()
    @Type(() => IntegrateDto)
    @IsOptional()
    integrate?: IntegrateDto;

    @ValidateNested()
    @Type(() => IndustriesDto)
    @IsOptional()
    industries?: IndustriesDto;

    @ValidateNested()
    @Type(() => WhyBurqDto)
    @IsOptional()
    whyBurq?: WhyBurqDto;

    @ValidateNested()
    @Type(() => SellingPointsDto)
    @IsOptional()
    sellingPoints?: SellingPointsDto;

    @ValidateNested()
    @Type(() => TestimonialsDto)
    @IsOptional()
    testimonials?: TestimonialsDto;

    @ValidateNested()
    @Type(() => BackingDto)
    @IsOptional()
    backing?: BackingDto;

    @ValidateNested()
    @Type(() => StartPoweringDto)
    @IsOptional()
    startPowering?: StartPoweringDto;
}


class HistoryEntryDto {
    @IsString()
    @IsOptional()
    timestamp?: string;

    @ValidateNested()
    @Type(() => ComponentsDto)
    @IsOptional()
    components?: ComponentsDto;
}


export class UpdateDataDto {
    @ValidateNested()
    @Type(() => ComponentsDto)
    @IsOptional()
    components?: ComponentsDto;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => HistoryEntryDto)
    history?: HistoryEntryDto[];
}
