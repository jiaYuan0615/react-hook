import { Editor } from '@tinymce/tinymce-react';
import { Button } from 'primereact/button';

export default function EditorComponent({ refs }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(refs.current.getContent())
  }

  const imageUploader = async (blob, progress) => {
    console.log(blob);
    return "https://imsc.vghtc.gov.tw/api/image/9d2c157b-6099-4b55-a1fe-2b39b23e2e28"
  }

  const toolbar = 'undo redo | cut copy paste pastetext | ' +
    'blocks bold italic underline superscript subscript backcolor forecolor charmap hr | ' +
    'alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent removeformat | ' +
    'table image media link emoticons anchor | ' +
    'a11ycheck preview help wordcount code'

  return (
    <>
      <Editor
        apiKey={process.env.VITE_TINYMCE_API_KEY}
        onInit={(event, editor) => refs.current = editor}
        initialValue=""
        init={{
          language: 'zh_TW',
          height: '85%',
          width: '85%',
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount', 'image code',
            'a11ychecker', 'emoticons', 'wordcount'
          ],
          toolbar,
          content_style: 'body { font-family:Arial,sans-serif; font-size:14px }',
          images_upload_handler: imageUploader,
          a11ychecker_allow_decorative_images: true,
          a11y_advanced_options: true
        }}
      />
      <div className="mt-3 flex justify-center">
        <Button
          icon="pi pi-check"
          label="送出"
          onClick={(event) => handleSubmit(event)}
        />
      </div>
    </>
  )
}