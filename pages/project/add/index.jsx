import { useState, useCallback } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import Compressor from 'compressorjs'

import styles from 'styles/pages.module.css'

const Index = () => {
  const [uuid, set_uuid] = useState('')
  const [title, set_title] = useState('')
  const [date, set_date] = useState('')
  const [content, set_content] = useState([])


  return(<>
    <h2>Add page</h2>
  </>)
}

export default Index