import { useCallback, useRef } from 'react'
import { useDatabaseId } from '@/hooks/useDatabaseId'
import { useToken } from '@/hooks/useToken'
import reactLogo from './assets/react.svg'
import './App.css'

const DatabaseID = '26b6f05a3f83414187d79664ac04c2f1'

function App() {
  const [token, setToken] = useToken()
  const [databaseId, setDatabaseId] = useDatabaseId()
  const inputTokenRef = useRef<HTMLInputElement>(null)
  const inputDatabaseIdRef = useRef<HTMLInputElement>(null)

  console.log(token, databaseId)

  const handleClickTokenSave = useCallback(async () => {
    await setToken(inputTokenRef.current?.value || null)
  }, [inputTokenRef])

  const handleClickDatabaseIdSave = useCallback(async () => {
    await setDatabaseId(inputDatabaseIdRef.current?.value || null)
  }, [inputDatabaseIdRef])

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <div>
          <input type='text' defaultValue={token || ''} ref={inputTokenRef} />
          <button onClick={handleClickTokenSave}>Save</button>
        </div>
        <div>
          <input type='text' defaultValue={databaseId || ''} ref={inputDatabaseIdRef} />
          <button onClick={handleClickDatabaseIdSave}>Save</button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
