"use client"

import type { Snippet } from "@prisma/client"

interface SnippetEditForm {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditForm) {
  return <div>Client component has snippet with title: {snippet.title}</div>
}
