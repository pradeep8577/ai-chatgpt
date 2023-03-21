// import { Layout, Text, Page } from '@vercel/examples-ui'
// import { Chat } from '../components/Chat'

// function Home() {
//   return (
//     // <Page className="container">  
//     // </Page>
//     <>
//       <div className="conatiner p-4">
//       <section className="flex flex-col gap-6 items-center">
//         <Text variant="h1">OpenAI ChatGpt</Text>
//         {/* <Text className="text-zinc-600">
//           In this example, a simple chat bot 
//         </Text> */}
//       </section>

//       <section className="flex flex-col gap-3 items-center">
//         <Text variant="h2">AI Chat Bot:</Text>
//         <div className="container border-solid border-2 border-sky-500 p-6">
//           <Chat />
//         </div>
//       </section>
//       </div>
//     </>
//   )
// }

// Home.Layout = Layout

// export default Home

import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Chat:</Text>
        <div className="">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
