import React, {Component} from 'react'
import styles from './editor-page.module.css'
import Editor from '../../components/editor/editor'

class EditorPage extends Component {

  state = {

  }

  render () {
    


    return (
      <div className={styles['parent_container']}>

        <div className={styles['empty_left_column']}>
        </div>

          <div className={styles['workspace_container']}>
            <Editor />
          </div>

        <div className={styles['empty_right_column']}>
        </div>

      </div>
    )
  }
}

export default EditorPage;