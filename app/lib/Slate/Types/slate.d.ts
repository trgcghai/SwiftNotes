import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type HeadingElement = { type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5', children: CustomText[] }
export type ParagraphElement = { type: 'paragraph'; children: CustomText[] };
export type ImageElement = { type: 'image'; url: string; children: CustomText[] };
export type EmptyText = { text: ''; bold?: boolean; italic?: boolean; underline?: boolean; };
export type CustomText = { text: string; bold?: boolean; italic?: boolean; underline?: boolean; };
export type CustomElement = ParagraphElement | ImageElement | HeadingElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText  | EmptyText;
  }
}
