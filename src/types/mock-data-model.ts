import { AnimationType } from "../layout/models/animationTypes";
import { ShowcaseCardProps } from "../components/types/showcaseCardModels";
 
export interface MockDataModel extends Omit<ShowcaseCardProps, 'isActive'> {
    key?: AnimationType;
  }
  