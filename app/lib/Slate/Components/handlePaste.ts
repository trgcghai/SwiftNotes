import { Editor } from "slate";
import insertImage from "./insertImage";
import insertLink from "./insertLink";
import isUrl from 'is-url'
import { getImageDimensions } from "../../utils/getImageDimension";

function isImageUrl(url: string) {
    
    if (!isUrl(url)) {
        return false;
    }

    const imageRegex = /\.(jpg|jpeg|png|gif|bmp|tiff|svg|webp)\.*$/i;
    return imageRegex.test(url)
}

const handlePaste = async (editor: Editor, event: React.ClipboardEvent) => {
    event.preventDefault()

    const {files} = event.clipboardData
    for (let i = 0; i  < files.length; i++) {
        const file = files[i]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            const image = new Image()
            image.addEventListener('load', () => {
                insertImage(editor, reader.result as string, image.height, image.width)
            })
            image.src = reader.result as string
        })
        reader.readAsDataURL(file)
    }
    

    if (isUrl(event.clipboardData.getData('text'))) {
        const url = event.clipboardData.getData('text')
        insertLink(editor, url)

        if (isImageUrl(url)) {
            const {width, height} = await getImageDimensions(url)
            insertImage(editor, url, height, width)
        }
    }

}

export default handlePaste