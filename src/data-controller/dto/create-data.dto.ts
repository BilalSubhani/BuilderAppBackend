import { IsNotEmpty, IsObject, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class ComponentsDto {
  @IsObject()
  @IsNotEmpty()
  navbar: {
    listItems: { key: string; values: string[] }[];
    buttonText: string[];
  };

  @IsObject()
  @IsNotEmpty()
  heroSection: {
    heading: string;
    paragraph: string;
    buttonText: string[];
  };

  @IsObject()
  @IsNotEmpty()
  features: {
    title: string;
    featureTiles: { [key: string]: string[] };
  };

  @IsObject()
  @IsNotEmpty()
  providers: {
    title: string;
    body: string;
    listItems: { [key: string]: string };
    counterItems: { [key: string]: string[] }[];
  };

  @IsObject()
  @IsNotEmpty()
  tabs: string[];

  @IsObject()
  @IsNotEmpty()
  integrate: {
    smallHeading: string;
    title: string;
    body: string;
    button: string[];
  };

  @IsObject()
  @IsNotEmpty()
  industries: {
    title: string;
    tabContent: { [key: string]: string[] };
  };

  @IsObject()
  @IsNotEmpty()
  whyBurq: {
    title: string;
    body: string;
    button: string[];
  };

  @IsObject()
  @IsNotEmpty()
  sellingPoints: { [key: string]: string[] };

  @IsObject()
  @IsNotEmpty()
  testimonials: {
    title: string;
    comment: { [key: string]: string[] };
  };

  @IsObject()
  @IsNotEmpty()
  backing: {
    title: string;
    body: string;
  };

  @IsObject()
  @IsNotEmpty()
  startPowering: {
    body: string;
    button: string[];
  };

  @IsObject()
  @IsNotEmpty()
  footer: {
    listItems: { 
      key: string;
      values: string[];
    }[];
    socialLinks: string[];
  };
}

export class CreateDataDto {
  @IsNumber()
  @IsOptional()
  version: number;

  @IsObject()
  @IsNotEmpty()
  @Type(() => ComponentsDto)
  components: ComponentsDto;
}
