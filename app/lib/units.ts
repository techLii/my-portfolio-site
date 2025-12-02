import fs from 'fs'
import path from 'path'

type Metadata = {
    title: string
    publishedAt: string
    summary: string
    image?: string
}

function parseFrontmatter(fileContent: string) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    let match = frontmatterRegex.exec(fileContent)

    if (!match) {
        return { metadata: {} as Metadata, content: fileContent }
    }

    let frontMatterBlock = match[1]
    let content = fileContent.replace(frontmatterRegex, '').trim()
    let frontMatterLines = frontMatterBlock.trim().split('\n')
    let metadata: Partial<Metadata> = {}

    frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
        metadata[key.trim() as keyof Metadata] = value
    })

    return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.md')
}

function readMDXFile(filePath: string) {
    let rawContent = fs.readFileSync(filePath, 'utf-8')
    return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
    let mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        let { metadata, content } = readMDXFile(path.join(dir, file))
        let slug = path.basename(file, path.extname(file))

        return {
            metadata,
            slug,
            content,
        }
    })
}

export function getUnits() {
    const unitsDir = path.join(process.cwd(), 'app', 'content', 'units')
    const entries = fs.readdirSync(unitsDir, { withFileTypes: true })

    return entries
        .filter(entry => entry.isDirectory())
        .map(entry => {
            // Try to find an index.md or similar to get metadata, or just use directory name
            // For now, we'll just use the directory name as the slug and title
            return {
                slug: entry.name,
                title: entry.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                description: `Topics for ${entry.name}`
            }
        })
}

export function getUnitTopics(unitSlug: string) {
    const unitDir = path.join(process.cwd(), 'app', 'content', 'units', unitSlug)
    if (!fs.existsSync(unitDir)) {
        return []
    }
    return getMDXData(unitDir)
}

export function getTopic(unitSlug: string, topicSlug: string) {
    const unitDir = path.join(process.cwd(), 'app', 'content', 'units', unitSlug)
    const filePath = path.join(unitDir, `${topicSlug}.md`)

    if (!fs.existsSync(filePath)) {
        return null
    }

    return readMDXFile(filePath)
}
