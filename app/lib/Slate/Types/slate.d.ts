import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomText = { text: string; bold?: boolean; italic?: boolean; underline?: boolean };
export type ParagraphElement = { type: 'paragraph'; children: CustomText[] };
export type CodeElement = { type: 'code'; children: CustomText[] };
export type ImageElement = { type: 'image'; url: string; children: CustomText[] };
export type EmptyText = { text: '' };
export type CustomElement = ParagraphElement | CodeElement | ImageElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText  | EmptyText;
  }
}
