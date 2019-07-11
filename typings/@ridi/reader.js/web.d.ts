declare module '@ridi/reader.js/web' {
  export class Rect {
    isZero: boolean;
    left: number;
    right: number;
    top: number;
    bottom: number;
    x: number;
    minX: number;
    midX: number;
    maxX: number;
    y: number;
    minY: number;
    midY: number;
    maxY: number;
    constructor(rect: DOMRect | ClientRect | Rect | object);
    equals(rect: DOMRect | ClientRect | Rect | object): boolean;
    contains(x: number, y: number): boolean;
    inset(widthOrLeftOrAll: number, heightOrTop?: number, right?: number, bottom?: number): Rect;
    toAbsolute(): Rect;
    toObject(): object;
    toJsonString(): string;
  }
  export class RectList {
    contains(xOrRect: number | DOMRect | ClientRect | Rect | object, y?: number): boolean;
    toAbsolute(): RectList;
    toJsonString(): string;
    trim(): RectList;
    toArray(): Array<object>;
  }
  export class Context {
    width: number;
    height: number;
    gap: number;
    pageGap: number;
    pageUnit: number;
    pageWidthUnit: number;
    pageHeightUnit: number;
    isDoublePageMode: boolean;
    isScrollMode: boolean;
    maxSelectionLength: number;
    systemMajorVersion?: number;
    isSameDomAsUi: boolean;
    shouldViewportInitialize: boolean;
    shouldTwoPageAsOneWhenDoublePageMode: boolean;
    onMessage: (message: string) => void;
    toObject(): object;
    static build(builder: (context: Context) => void): Context;
  }
  interface Link {
    node: Node;
    href: string;
    type?: string;
  }
  interface Image {
    id: string;
    element: HTMLImageElement;
    src: string;
    rect: Rect;
  }
  interface Svg {
    id: string;
    element: SVGElement;
    html: string;
    rect: Rect;
  }
  export class Sel {
    isExpandContinuableIntoNextPage: boolean;
    constructor(content: Content);
    start(x: number, y: number, unit?: string): boolean;
    expandIntoUpper(x: number, y: number, unit?: string): boolean;
    expandIntoLower(x: number, y: number, unit?: string): boolean;
    expandIntoNextPage(): boolean;
    getRange(): Range;
    getSerializedRange(): string;
    getRectList(): RectList;
    getText(): string;
  }
  enum Type { TOP = 'top', BOTTOM = 'bottom' }
  export class NodeLocation {
    nodeIndex: number;
    wordIndex: number;
    type: Type;
    constructor(nodeIndex?: number, wordIndex?: number, type?: Type);
    toString(): string;
    static fromString(string: string, type?: Type): NodeLocation;
  }
  export class Content {
    ref: HTMLElement;
    sel: Sel;
    nodes: Array<Node>;
    images: Array<HTMLImageElement>;
    constructor(element: HTMLElement, reader: Reader);
    setHidden(hidden: boolean, elementOrId: HTMLElement | string): void;
    reviseImages(callback: () => void): void;
    elementFromPoint(x: number, y: number, tag?: string): HTMLElement | null;
    imageFromPoint(x: number, y: number): Image | null;
    svgFromPoint(x: number, y: number): Svg | null;
    linkFromPoint(x: number, y: number): Link | null;
    getPageFromRect(rect: Rect, element?: HTMLElement): number;
    getOffsetFromAnchor(anchor: string): number | null;
    getPageFromAnchor(anchor: string): number | null;
    getOffsetFromSerializedRange(serializedRange: string): number | null;
    getPageFromSerializedRange(serializedRange: string): number | null;
    getRectListFromSerializedRange(serializedRange: string): RectList;
    getOffsetFromNodeLocation(location: string, type?: Type): number | null;
    getPageFromNodeLocation(location: string, type?: Type): number | null;
    getCurrentNodeLocation(): string;
  }
  interface SearchResult {
    serializedString: string;
    rectList: RectList;
    text: string;
    page: number;
  }
  export class Reader {
    contents: Array<Context>;
    context: Context;
    totalWidth: number;
    totalHeight: number;
    totalSize: number;
    pageXOffset: number;
    pageYOffset: number;
    pageOffset: number;
    curPage: number;
    debugNodeLocation: boolean;
    lastNodeLocationRect?: Rect;
    constructor(context: Context);
    setContent(ref: HTMLElement, wrapper?: HTMLElement);
    setContents(refs: Array<HTMLElement>, wrapper?: HTMLElement);
    getContent(key: number | HTMLElement): Content | null;
    searchText(keyword: string): SearchResult | null;
  }
}
