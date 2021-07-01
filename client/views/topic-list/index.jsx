import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../../store/use-store'

const TopicList = observer(() => {
  const appState = useStores()

  useEffect(() => {
    appState.changeName('hello 12')
  }, [appState])

  return (
    <div>
      <input type="text" onChange={(event) => appState.changeName(event.target.value)} />
      <div>{`${appState.msg}`}</div>
    </div>
  )
})

export default TopicList
