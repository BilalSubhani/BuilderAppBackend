import { IsNotEmpty, IsObject, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class ComponentsDto {
  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  navbar?: {
    listItems: { [key: string]: string[] };
    buttonText: string;
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  heroSection?: {
    heading: string;
    paragraph: string;
    buttonText: string;
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  features?: {
    title: string;
    featureTiles: { [key: string]: string[] };
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  providers?: {
    title: string;
    body: string;
    listItems: { [key: string]: string };
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  tabs?: string[];

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  integrate?: {
    smallHeading: string;
    title: string;
    body: string;
    button: string;
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  industries?: {
    title: string;
    tabContent: { [key: string]: string[] };
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  whyBurq?: {
    title: string;
    body: string;
    button: string;
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  sellingPoints?: { [key: string]: string[] };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  testimonials?: {
    title: string;
    comment: { [key: string]: string[] };
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  backing?: {
    title: string;
    body: string;
  };

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  startPowering?: {
    body: string;
    button: string;
  };
}

export class UpdateDataDto {
  @IsObject()
  @IsNotEmpty()
  @Type(() => ComponentsDto)
  components: ComponentsDto;
}
