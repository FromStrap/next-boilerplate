import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, Reset } from '../store/ducks/Init/actions'
import tw from 'twin.macro'

const Container = tw.section`flex flex-col items-center justify-center w-full h-screen`
const Button = tw.button`px-6 py-3 bg-gray-100 transition-colors delay-75`

export default function ReduxTester () {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.InitReducer)

  console.log(counter)

  return (
    <Container>
      <Link href="/">Go to home</Link>

      <span>
        <h1 tw="text-2xl">Counter Redux Tester</h1>
        <p tw="text-center">{counter.count}</p>
      </span>
      <div tw="my-2">
        <Button
          tw="hover:bg-green-500 mr-1"
          onClick={() => dispatch(Increment())}
        >
          +
        </Button>
        <Button tw="hover:bg-red-500" onClick={() => dispatch(Decrement())}>
          -
        </Button>
      </div>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </Container>
  )
}
