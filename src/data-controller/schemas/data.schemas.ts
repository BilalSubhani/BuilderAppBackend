import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class Components {
  @Prop({ type: Object, required: true })
  navbar: {
    listItems: { [key: string]: string[] };
    buttonText: string;
  };

  @Prop({ type: Object, required: true })
  heroSection: {
    heading: string;
    paragraph: string;
    buttonText: string;
  };

  @Prop({ type: Object, required: true })
  features: {
    title: string;
    featureTiles: { [key: string]: string };
  };

  @Prop({ type: Object, required: true })
  providers: {
    title: string;
    body: string;
    listItems: { [key: string]: string };
  };

  @Prop({ type: Object, required: true })
  tabs: { [key: string]: string[] };

  @Prop({ type: Object, required: true })
  integrate: {
    smallHeading: string;
    title: string;
    body: string;
    button: string;
  };

  @Prop({ type: Object, required: true })
  industries: {
    title: string;
    tabContent: { [key: string]: string };
  };

  @Prop({ type: Object, required: true })
  whyBurq: {
    title: string;
    body: string;
    button: string;
  };

  @Prop({ type: Object, required: true })
  sellingPoints: { [key: string]: string };

  @Prop({ type: Object, required: true })
  testimonials: {
    title: string;
    comment: { [key: string]: string };
  };

  @Prop({ type: Object, required: true })
  backing: {
    title: string;
    body: string;
  };

  @Prop({ type: Object, required: true })
  startPowering: {
    body: string;
    button: string;
  };
}

@Schema({ timestamps: true })
export class Data extends Document {
  @Prop({ required: true })
  version: number;

  @Prop({ type: Components, required: true })
  components: Components;
}

export const DataSchema = SchemaFactory.createForClass(Data);
