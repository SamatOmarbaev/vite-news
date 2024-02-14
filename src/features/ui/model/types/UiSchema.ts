// <Адрес строки, позиция скролла>
export type ScrollSchema = Record<string, number>

export interface UiState {
    scroll: ScrollSchema
}