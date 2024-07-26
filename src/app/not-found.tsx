export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <span className="font-bold text-turkuaz">404</span> - Page is not found!
      </h1>
      {// eslint-disable-next-line react/no-unescaped-entities
		}<p className="mb-4">This page doesn't exist yet :(</p>
    </section>
  )
}
