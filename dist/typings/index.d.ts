// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../react
//   ../@ridi/reader.js/web

declare module '@ridi/react-reader' {
    import EpubReader from '@ridi/react-reader/components/EpubReader';
    import ComicReader from '@ridi/react-reader/components/ComicReader';
    export { EpubReader, ComicReader, };
    export * from '@ridi/react-reader/EpubService';
    export * from '@ridi/react-reader/ComicService';
    export * from '@ridi/react-reader/contexts';
    export * from '@ridi/react-reader/ReaderJsHelper';
    export * from '@ridi/react-reader/constants';
    export * from '@ridi/react-reader/utils';
}

declare module '@ridi/react-reader/components/EpubReader' {
    const EpubReader: () => JSX.Element;
    export default EpubReader;
}

declare module '@ridi/react-reader/components/ComicReader' {
    import * as React from 'react';
    const ComicReader: React.FunctionComponent;
    export default ComicReader;
}

declare module '@ridi/react-reader/EpubService' {
    import { EpubCalculationAction, EpubSettingAction, EpubSettingState, SpinePagingState, EpubStatusAction } from '@ridi/react-reader/contexts';
    import * as React from 'react';
    export interface FontData {
        href: string;
        uri?: string;
    }
    export interface EpubParsedData {
        type: 'epub';
        fonts?: Array<FontData>;
        styles?: Array<String>;
        spines?: Array<String>;
        unzipPath: string;
    }
    export class EpubService {
        static dispatchSetting?: React.Dispatch<EpubSettingAction>;
        static dispatchStatus?: React.Dispatch<EpubStatusAction>;
        static dispatchPaging?: React.Dispatch<EpubCalculationAction>;
        static init({ dispatchSetting, dispatchPaging, dispatchStatus }: {
            dispatchSetting: React.Dispatch<EpubSettingAction>;
            dispatchStatus: React.Dispatch<EpubStatusAction>;
            dispatchPaging: React.Dispatch<EpubCalculationAction>;
        }): void;
        static goToPage: ({ page, pageUnit, isScroll, }: {
            page: number;
            pageUnit: number;
            isScroll: boolean;
        }) => Promise<void>;
        static invalidate: ({ currentSpineIndex, currentPosition, isScroll, columnWidth, columnGap, }: {
            currentSpineIndex: number;
            currentPosition: number;
            isScroll: boolean;
            columnWidth: number;
            columnGap: number;
        }) => Promise<void>;
        static load: ({ currentSpineIndex, currentPosition, metadata, isScroll, columnWidth, columnGap, }: {
            currentSpineIndex: number;
            currentPosition: number;
            metadata: EpubParsedData;
            isScroll: boolean;
            columnWidth: number;
            columnGap: number;
        }) => Promise<void>;
        static loadWithParsedData: ({ currentSpineIndex, currentPosition, metadata, isScroll, columnWidth, columnGap, }: {
            currentSpineIndex: number;
            currentPosition: number;
            metadata: EpubParsedData;
            isScroll: boolean;
            columnWidth: number;
            columnGap: number;
        }) => Promise<void>;
        static updateCurrent: ({ pageUnit, isScroll, spines, }: {
            pageUnit: number;
            isScroll: boolean;
            spines: SpinePagingState[];
        }) => Promise<any>;
        static updateSetting: (setting: Partial<EpubSettingState>) => Promise<void>;
    }
}

declare module '@ridi/react-reader/ComicService' {
    import * as React from 'react';
    import { ComicCalculationAction, ComicCalculationState, ComicSettingAction, ComicSettingState, ComicStatusAction } from '@ridi/react-reader/contexts';
    export interface ImageData {
        fileSize: number;
        index: number;
        path: string;
        width?: number;
        height?: number;
    }
    export interface ComicParsedData {
        type: 'comic';
        images?: Array<ImageData>;
        unzipPath: string;
    }
    export class ComicService {
        static dispatchSetting?: React.Dispatch<ComicSettingAction>;
        static dispatchStatus?: React.Dispatch<ComicStatusAction>;
        static dispatchPaging?: React.Dispatch<ComicCalculationAction>;
        static init: ({ dispatchSetting, dispatchPaging, dispatchStatus }: {
            dispatchSetting: React.Dispatch<ComicSettingAction>;
            dispatchStatus: React.Dispatch<ComicStatusAction>;
            dispatchPaging: React.Dispatch<ComicCalculationAction>;
        }) => void;
        static invalidate: ({ pagingState, settingState, }: {
            pagingState: ComicCalculationState;
            settingState: ComicSettingState;
        }) => Promise<void>;
        static load: ({ metadata, pagingState, settingState, }: {
            metadata: ComicParsedData;
            pagingState: ComicCalculationState;
            settingState: ComicSettingState;
        }) => Promise<void>;
        static goToPage: ({ page, settingState, pagingState, }: {
            page: number;
            settingState: ComicSettingState;
            pagingState: ComicCalculationState;
        }) => Promise<void>;
        static updateSetting: (setting: Partial<ComicSettingState>) => Promise<void>;
    }
}

declare module '@ridi/react-reader/contexts' {
    export * from '@ridi/react-reader/contexts/epub/EpubSettingContext';
    export * from '@ridi/react-reader/contexts/epub/EpubCalculationContext';
    export * from '@ridi/react-reader/contexts/epub/EpubStatusContext';
    export * from '@ridi/react-reader/contexts/epub/EpubProvider';
    export * from '@ridi/react-reader/contexts/comic/ComicSettingContext';
    export * from '@ridi/react-reader/contexts/comic/ComicCalculationContext';
    export * from '@ridi/react-reader/contexts/comic/ComicStatusContext';
    export * from '@ridi/react-reader/contexts/comic/ComicProvider';
}

declare module '@ridi/react-reader/ReaderJsHelper' {
    import { Context, Reader } from '@ridi/reader.js/web';
    class ReaderJsHelper {
        readonly readerJs: Reader | null;
        readonly sel: any;
        readonly content: any;
        readonly context: any;
        _setDebugMode(debugMode?: boolean): void;
        mount(contentRoot: HTMLElement, context: Context): void;
        unmount(): void;
        reviseImages(): Promise<any>;
        getOffsetFromNodeLocation(location: any): number | null;
        getNodeLocationOfCurrentPage(): string | null;
        getRectsFromSerializedRange(serializedRange: string): Array<any> | null;
        getOffsetFromSerializedRange(serializedRange: string): number | null;
        getOffsetFromAnchor(anchor: string): number | null;
    }
    const _default: ReaderJsHelper;
    export default _default;
    export { Context };
}

declare module '@ridi/react-reader/constants' {
    export enum ViewType {
        SCROLL = "scroll",
        PAGE1 = "page1",
        PAGE12 = "page12",
        PAGE23 = "page23"
    }
    export enum BindingType {
        LEFT = "left",
        RIGHT = "right"
    }
}

declare module '@ridi/react-reader/utils' {
    import * as EpubSettingUtil from '@ridi/react-reader/utils/EpubSettingUtil';
    import * as ComicSettingUtil from '@ridi/react-reader/utils/ComicSettingUtil';
    import * as Util from '@ridi/react-reader/utils/Util';
    export const SettingUtil: typeof EpubSettingUtil;
    export { EpubSettingUtil, ComicSettingUtil, Util, };
}

declare module '@ridi/react-reader/contexts/epub/EpubSettingContext' {
    import { Reducer } from 'react';
    import { ViewType } from '@ridi/react-reader/constants/index';
    export enum EpubSettingActionType {
        UPDATE_SETTING = "update_setting"
    }
    export enum EpubSettingProperties {
        VIEW_TYPE = "viewType",
        FONT = "font",
        FONT_SIZE_IN_EM = "fontSizeInEm",
        LINE_HEIGHT_IN_EM = "lineHeightInEm",
        CONTENT_PADDING_IN_PERCENT = "contentPaddingInPercent",
        COLUMN_GAP_IN_PERCENT = "columnGapInPercent",
        CONTAINER_HORIZONTAL_MARGIN = "containerHorizontalMargin",
        CONTAINER_VERTICAL_MARGIN = "containerVerticalMargin"
    }
    export type EpubSettingAction = {
        type: EpubSettingActionType.UPDATE_SETTING;
        setting: Partial<EpubSettingState>;
    };
    export type EpubSettingState = {
        [EpubSettingProperties.VIEW_TYPE]: ViewType;
        [EpubSettingProperties.FONT]: string;
        [EpubSettingProperties.FONT_SIZE_IN_EM]: number;
        [EpubSettingProperties.LINE_HEIGHT_IN_EM]: number;
        [EpubSettingProperties.CONTENT_PADDING_IN_PERCENT]: number;
        [EpubSettingProperties.COLUMN_GAP_IN_PERCENT]: number;
        [EpubSettingProperties.CONTAINER_HORIZONTAL_MARGIN]: number;
        [EpubSettingProperties.CONTAINER_VERTICAL_MARGIN]: number;
    };
    export const initialEpubSettingState: EpubSettingState;
    export const EpubSettingReducer: Reducer<EpubSettingState, EpubSettingAction>;
    export const EpubSettingDispatchContext: import("react").Context<import("react").Dispatch<EpubSettingAction>>, EpubSettingContext: import("react").Context<EpubSettingState>, EpubSettingContextProvider: import("react").FunctionComponent<{
        children: import("react").ReactNode;
        customInitialState?: Partial<EpubSettingState> | undefined;
    }>;
}

declare module '@ridi/react-reader/contexts/epub/EpubCalculationContext' {
    import * as React from 'react';
    export enum EpubCalculationActionType {
        UPDATE_PAGING = "update_paging"
    }
    export enum EpubCalculationProperties {
        TOTAL_PAGE = "totalPage",
        FULL_HEIGHT = "fullHeight",
        FULL_WIDTH = "fullWidth",
        PAGE_UNIT = "pageUnit",
        CURRENT_PAGE = "currentPage",
        CURRENT_SPINE_INDEX = "currentSpineIndex",
        CURRENT_POSITION = "currentPosition",
        SPINES = "spines"
    }
    export type EpubCalculationAction = {
        type: EpubCalculationActionType.UPDATE_PAGING;
        paging: Partial<EpubCalculationState>;
    };
    export type SpinePagingState = {
        spineIndex: number;
        offset: number;
        total: number;
        startPage: number;
        totalPage: number;
    };
    export type EpubCalculationState = {
        [EpubCalculationProperties.TOTAL_PAGE]: number;
        [EpubCalculationProperties.FULL_HEIGHT]: number;
        [EpubCalculationProperties.FULL_WIDTH]: number;
        [EpubCalculationProperties.PAGE_UNIT]: number;
        [EpubCalculationProperties.CURRENT_PAGE]: number;
        [EpubCalculationProperties.CURRENT_SPINE_INDEX]: number;
        [EpubCalculationProperties.CURRENT_POSITION]: number;
        [EpubCalculationProperties.SPINES]: Array<SpinePagingState>;
    };
    export const initialEpubCalculationState: EpubCalculationState;
    export const EpubCalculationReducer: React.Reducer<EpubCalculationState, EpubCalculationAction>;
    export const EpubCalculationDispatchContext: React.Context<React.Dispatch<EpubCalculationAction>>, EpubCalculationContext: React.Context<EpubCalculationState>, EpubCalculationContextProvider: React.FunctionComponent<{
        children: React.ReactNode;
        customInitialState?: Partial<EpubCalculationState> | undefined;
    }>;
}

declare module '@ridi/react-reader/contexts/epub/EpubStatusContext' {
    import * as React from 'react';
    export enum EpubStatusActionType {
        SET_READY_TO_READ = "set_ready_to_read"
    }
    export enum EpubStatusProperties {
        READY_TO_READ = "readyToRead"
    }
    export type EpubStatusAction = {
        type: EpubStatusActionType.SET_READY_TO_READ;
        readyToRead: boolean;
    };
    export type EpubStatusState = {
        [EpubStatusProperties.READY_TO_READ]: boolean;
    };
    export const initialEpubStatusState: EpubStatusState;
    export const EpubStatusReducer: React.Reducer<EpubStatusState, EpubStatusAction>;
    export const EpubStatusDispatchContext: React.Context<React.Dispatch<EpubStatusAction>>, EpubStatusContext: React.Context<EpubStatusState>, EpubStatusContextProvider: React.FunctionComponent<{
        children: React.ReactNode;
        customInitialState?: Partial<EpubStatusState> | undefined;
    }>;
}

declare module '@ridi/react-reader/contexts/epub/EpubProvider' {
    import { EpubCalculationState } from '@ridi/react-reader/contexts/epub/EpubCalculationContext';
    import { EpubStatusState } from '@ridi/react-reader/contexts/epub/EpubStatusContext';
    import { EpubSettingState } from '@ridi/react-reader/contexts/epub/EpubSettingContext';
    import * as React from 'react';
    export interface EpubProviderProps {
        children: React.ReactNode;
        settingState?: Partial<EpubSettingState>;
        pagingState?: Partial<EpubCalculationState>;
        statusState?: Partial<EpubStatusState>;
    }
    export const EpubProvider: React.FunctionComponent<EpubProviderProps>;
}

declare module '@ridi/react-reader/contexts/comic/ComicSettingContext' {
    import { Reducer } from "react";
    import { ViewType, BindingType } from '@ridi/react-reader/constants';
    export enum ComicSettingActionType {
        UPDATE_SETTING = "update_setting"
    }
    export enum ComicSettingProperties {
        VIEW_TYPE = "viewType",
        CONTENT_WIDTH_IN_PERCENT = "contentWidthInPercent",
        BINDING_TYPE = "bindingType"
    }
    export type ComicSettingAction = {
        type: ComicSettingActionType.UPDATE_SETTING;
        setting: Partial<ComicSettingState>;
    };
    export type ComicSettingState = {
        [ComicSettingProperties.VIEW_TYPE]: ViewType;
        [ComicSettingProperties.CONTENT_WIDTH_IN_PERCENT]: number;
        [ComicSettingProperties.BINDING_TYPE]: BindingType;
    };
    export const initialComicSettingState: ComicSettingState;
    export const ComicSettingReducer: Reducer<ComicSettingState, ComicSettingAction>;
    export const ComicSettingDispatchContext: import("react").Context<import("react").Dispatch<ComicSettingAction>>, ComicSettingContext: import("react").Context<ComicSettingState>, ComicSettingContextProvider: import("react").FunctionComponent<{
        children: import("react").ReactNode;
        customInitialState?: Partial<ComicSettingState> | undefined;
    }>;
}

declare module '@ridi/react-reader/contexts/comic/ComicCalculationContext' {
    import * as React from 'react';
    export enum ComicCalculationActionType {
            UPDATE_PAGING = "update_paging"
    }
    export enum ComicCalculationProperties {
            TOTAL_PAGE = "totalPage",
            PAGE_UNIT = "pageUnit",
            CURRENT_PAGE = "currentPage",
            IMAGES = "images"
    }
    export type ComicCalculationAction = {
            type: ComicCalculationActionType.UPDATE_PAGING;
            paging: Partial<ComicCalculationState>;
    };
    export type ImagePagingState = {
            imageIndex: number;
            /**
                *  start offset in px on scroll view mode
                *  modified when resizing or changing setting.contentWidth
                */
            offsetTop: number;
            /**
                * height / width
                * immutable value
                */
            ratio: number;
            height: number;
    };
    export type ComicCalculationState = {
            [ComicCalculationProperties.TOTAL_PAGE]: number;
            [ComicCalculationProperties.PAGE_UNIT]: number;
            [ComicCalculationProperties.CURRENT_PAGE]: number;
            [ComicCalculationProperties.IMAGES]: Array<ImagePagingState>;
    };
    export const initialComicCalculationState: ComicCalculationState;
    export const ComicCalculationReducer: React.Reducer<ComicCalculationState, ComicCalculationAction>;
    export const ComicCalculationDispatchContext: React.Context<React.Dispatch<ComicCalculationAction>>, ComicCalculationContext: React.Context<ComicCalculationState>, ComicCalculationContextProvider: React.FunctionComponent<{
            children: React.ReactNode;
            customInitialState?: Partial<ComicCalculationState> | undefined;
    }>;
}

declare module '@ridi/react-reader/contexts/comic/ComicStatusContext' {
    import * as React from 'react';
    export enum ComicStatusActionType {
        SET_READY_TO_READ = "set_ready_to_read"
    }
    export enum ComicStatusProperties {
        READY_TO_READ = "readyToRead"
    }
    export type ComicStatusAction = {
        type: ComicStatusActionType.SET_READY_TO_READ;
        readyToRead: boolean;
    };
    export type ComicStatusState = {
        [ComicStatusProperties.READY_TO_READ]: boolean;
    };
    export const initialComicStatusState: ComicStatusState;
    export const ComicStatusReducer: React.Reducer<ComicStatusState, ComicStatusAction>;
    export const ComicStatusDispatchContext: React.Context<React.Dispatch<ComicStatusAction>>, ComicStatusContext: React.Context<ComicStatusState>, ComicStatusContextProvider: React.FunctionComponent<{
        children: React.ReactNode;
        customInitialState?: Partial<ComicStatusState> | undefined;
    }>;
}

declare module '@ridi/react-reader/contexts/comic/ComicProvider' {
    import { ComicCalculationState } from '@ridi/react-reader/contexts/comic/ComicCalculationContext';
    import { ComicStatusState } from '@ridi/react-reader/contexts/comic/ComicStatusContext';
    import { ComicSettingState } from '@ridi/react-reader/contexts/comic/ComicSettingContext';
    import * as React from 'react';
    export interface ComicProviderProps {
        children: React.ReactNode;
        settingState?: Partial<ComicSettingState>;
        pagingState?: Partial<ComicCalculationState>;
        statusState?: Partial<ComicStatusState>;
    }
    export const ComicProvider: React.FunctionComponent<ComicProviderProps>;
}

declare module '@ridi/react-reader/utils/EpubSettingUtil' {
    import { EpubSettingState } from '@ridi/react-reader/contexts/index';
    export const isScroll: ({ viewType }: EpubSettingState) => boolean;
    export const isDoublePage: ({ viewType }: EpubSettingState) => boolean;
    export const columnsInPage: ({ viewType }: EpubSettingState) => number;
    export const columnWidth: (setting: EpubSettingState) => number;
    export const columnGap: ({ columnGapInPercent }: EpubSettingState) => number;
    export const contentPadding: ({ contentPaddingInPercent }: EpubSettingState) => number;
    export const containerWidth: (setting: EpubSettingState) => number;
    export const containerHeight: ({ containerVerticalMargin }: EpubSettingState) => number;
}

declare module '@ridi/react-reader/utils/ComicSettingUtil' {
    import { ComicSettingState } from '@ridi/react-reader/contexts/index';
    export const isScroll: ({ viewType }: ComicSettingState) => boolean;
    export const isDoublePage: ({ viewType }: ComicSettingState) => boolean;
    export const columnsInPage: ({ viewType }: ComicSettingState) => number;
    export const contentWidth: ({ contentWidthInPercent }: ComicSettingState) => number;
}

declare module '@ridi/react-reader/utils/Util' {
    export function measure(run: () => Promise<any> | any, message: string, ...optionalParams: Array<any>): Promise<any>;
    export const getRootElement: () => Element | null;
    export const getContentRootElement: () => HTMLElement | null;
    export const getScrollWidth: () => number;
    export const getScrollHeight: () => number;
    export const getScrollLeft: () => number;
    export const getScrollTop: () => number;
    export const setScrollLeft: (scrollLeft: number) => void;
    export const setScrollTop: (scrollTop: number) => void;
    export const getClientWidth: () => number;
    export const getClientHeight: () => number;
}

declare module '@ridi/react-reader/constants/index' {
    export enum ViewType {
        SCROLL = "scroll",
        PAGE1 = "page1",
        PAGE12 = "page12",
        PAGE23 = "page23"
    }
    export enum BindingType {
        LEFT = "left",
        RIGHT = "right"
    }
}

declare module '@ridi/react-reader/contexts/index' {
    export * from '@ridi/react-reader/contexts/epub/EpubSettingContext';
    export * from '@ridi/react-reader/contexts/epub/EpubCalculationContext';
    export * from '@ridi/react-reader/contexts/epub/EpubStatusContext';
    export * from '@ridi/react-reader/contexts/epub/EpubProvider';
    export * from '@ridi/react-reader/contexts/comic/ComicSettingContext';
    export * from '@ridi/react-reader/contexts/comic/ComicCalculationContext';
    export * from '@ridi/react-reader/contexts/comic/ComicStatusContext';
    export * from '@ridi/react-reader/contexts/comic/ComicProvider';
}

