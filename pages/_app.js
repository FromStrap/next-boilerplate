import GlobalStyles from '../styles/globalStyles'
import { Provider } from 'react-redux'
import { useStore } from '../store'

function MyApp ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
