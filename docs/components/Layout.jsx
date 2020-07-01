import Head from 'next/head'

export default ({ meta, children }) => {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="px-6 py-12">{children}</div>
    </div>
  )
}
