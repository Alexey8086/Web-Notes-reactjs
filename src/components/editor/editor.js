import React from 'react'
import styles from './editor.module.css'

import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 

const Editor = (props) => {

  const editor = new EditorJS({

    tools: {
        
      header: {
        class: Header, 
        inlineToolbar: ['link']
      },

      list: {
        class: List,
        inlineToolbar: [
          'link',
          'bold'
        ]
      }
        
    },

    holder: 'editorjs'
  })

  return (
    <div className={styles['editorjs']} id={'editorjs'}>
    </div>
  )
}

export default Editor;
