import { VariableProperties, Variables, Media, only, MediaType, minWidth, px, value, GridContainer, GridItem } from "@artistry/abstract"

export interface IGridMixinProps {
    columns?: number;
    span?: number;
    offset?: number;
}

export const GRID_COLUMNS = 'grid-columns';
export const GRID_SPAN = 'grid-span';
export const GRID_OFFSET = 'grid-offset';

export const GridMixin = ({
    columns = 12,
    span,
    offset
}: IGridMixinProps): VariableProperties => {
    return Variables({
        [GRID_COLUMNS]: columns,
        [GRID_SPAN]: span,
        [GRID_OFFSET]: offset
    });
};

export interface IGridRowMixinProps {

}

export const GridRowMixin = ({

}: IGridRowMixinProps): VariableProperties[] => {
    return [
        GridContainer({
            templateColumns: '1fr'
        }),
        Media(only(MediaType.Screen, minWidth(px(500))),
            GridContainer({
                templateColumns: `repeat(${value(GRID_COLUMNS)}, 1fr)`
            }),
        )
    ];
}

export interface IGridColumnMixinProps {
    span?: number;
    offset?: number;
}

export const GridColumnMixin = ({
    span = 12,
    offset
}: IGridColumnMixinProps): VariableProperties => {
    return GridItem({
        columnStart: typeof offset === 'number' ? offset + 1 : undefined,
        columnEnd: `span ${value(GRID_SPAN)}`,
    })
}