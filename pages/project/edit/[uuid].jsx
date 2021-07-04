import { useState, useCallback } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import Compressor from 'compressorjs'

import styles from 'styles/pages.module.css'

const Index = () => {
  return(<>
    <h2>Edit by uuid page</h2>
  </>)
}

export default Index