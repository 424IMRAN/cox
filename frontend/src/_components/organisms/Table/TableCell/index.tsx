const cellRendererSelector = (params) => {
  if (params?.colDef?.field === 'Proposed' && params.rowIndex == 3)
    return { component: 'textField' }
  return undefined
}

export default cellRendererSelector
