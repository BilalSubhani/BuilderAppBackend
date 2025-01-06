import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class ListItem {
  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: [String], default: [] })
  dropdown: string[];
}

@Schema()
class FeatureTile {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  body: string;
}

@Schema()
class Components {
  @Prop({
    type: [ListItem],
    required: true,
  })
  navbar: {
    listItems: ListItem[];
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
    featureTiles: FeatureTile[];
  };

  @Prop({ type: Object, required: true })
  providers: {
    title: string;
    body: string;
    listItems: string[];
  };

  @Prop({ type: Object, required: true })
  tabs: {
    tabs: string[];
  };

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
    tabContentHeading: string[];
    tabContentBody: string[];
  };

  @Prop({ type: Object, required: true })
  whyBurq: {
    title: string;
    body: string;
    button: string;
  };

  @Prop({ type: Object, required: true })
  sellingPoints: {
    tileHeadings: string[];
    tileBody: string[];
  };

  @Prop({ type: Object, required: true })
  testimonials: {
    title: string;
    comment: string[];
    name: string[];
    desig: string[];
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

@Schema()
class HistoryEntry {
  @Prop({ type: Date, default: Date.now })
  timestamp: Date;

  @Prop({ type: Object, required: true })
  components: Components;
}

@Schema({ timestamps: true })
export class Data extends Document {
  @Prop({ type: Components, required: true })
  components: Components;

  @Prop({ type: [HistoryEntry], default: [] })
  history: HistoryEntry[];
}

export const DataSchema = SchemaFactory.createForClass(Data);