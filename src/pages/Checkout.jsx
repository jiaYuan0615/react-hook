import EditorComponent from "../components/Editor";
import { useRef } from 'react';

export default function Checkout() {
  const editorRef = useRef(null);
  return (
    <>
      <EditorComponent refs={editorRef} />
    </>
  )
}