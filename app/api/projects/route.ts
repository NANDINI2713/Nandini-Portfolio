import { NextResponse } from 'next/server'

const GITHUB_USER = 'NANDINI2713'
const TOPIC = 'portfolio'

const GRADIENTS = [
  'from-indigo-500/20 to-blue-600/20',
  'from-sky-500/20 to-cyan-600/20',
  'from-amber-500/20 to-orange-600/20',
  'from-emerald-500/20 to-teal-600/20',
  'from-violet-500/20 to-purple-600/20',
  'from-slate-500/20 to-gray-600/20',
  'from-rose-500/20 to-red-600/20',
  'from-pink-500/20 to-rose-600/20',
  'from-cyan-500/20 to-blue-600/20',
  'from-green-500/20 to-emerald-600/20',
  'from-orange-500/20 to-amber-600/20',
  'from-fuchsia-500/20 to-violet-600/20',
]

function deriveCategory(topics: string[]): string {
  const t = topics.map((x) => x.toLowerCase())
  if (t.some((x) => ['ai', 'machine-learning', 'llm', 'langchain', 'openai', 'rag', 'nlp', 'computer-vision'].includes(x))) return 'AI'
  if (t.some((x) => ['cloud', 'aws', 'terraform', 'devops', 'docker', 'kubernetes'].includes(x))) return 'Cloud'
  return 'Web'
}

function formatName(raw: string): string {
  return raw.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function formatTag(raw: string): string {
  return raw.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.mercy-preview+json',
    }
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(
      `https://api.github.com/search/repositories?q=user:${GITHUB_USER}+topic:${TOPIC}&sort=updated&per_page=50`,
      { headers, next: { revalidate: 3600 } }
    )

    if (!res.ok) return NextResponse.json([], { status: 200 })

    const data = await res.json()
    const repos: any[] = data.items ?? []

    const projects = repos.map((repo, i) => {
      const filteredTopics = (repo.topics as string[]).filter(
        (t) => t !== TOPIC && !['portfolio', 'javascript', 'typescript'].includes(t)
      )
      const tags =
        filteredTopics.length > 0
          ? filteredTopics.slice(0, 6).map(formatTag)
          : [repo.language ?? 'Code'].filter(Boolean)

      return {
        name: formatName(repo.name),
        description: repo.description ?? 'No description provided.',
        tags,
        category: deriveCategory(repo.topics ?? []),
        github: repo.html_url,
        live: repo.homepage || null,
        gradient: GRADIENTS[i % GRADIENTS.length],
      }
    })

    return NextResponse.json(projects)
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
