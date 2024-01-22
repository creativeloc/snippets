import { notFound } from "next/navigation"
import { db } from "@/db"

interface SnippetShowPageProps {
  params: {
    id: string
  }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000))

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  })

  if (!snippet) {
    return notFound()
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <button className="p-2 border rounded bg-gray-300">Edit</button>
          <button className="p-2 border rounded bg-red-300">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-grey-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}
