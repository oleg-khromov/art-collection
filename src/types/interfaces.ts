export interface IArtObject {
  id: string;
  objectNumber: string;
  title: string;
  links: {
    self: string;
    web: string;
  };
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
  };
  headerImage: {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
  };
  productionPlaces: string[];
}

export interface IArtCollection {
  [key: string]: any;
  artObjects: IArtObject[];
}
