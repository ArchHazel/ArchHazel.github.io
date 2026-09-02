import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import NewsletterForm from '@/components/NewsletterForm'
import AuthorLayout from '@/layouts/AuthorLayout'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import publicationsData from '@/data/publicationsData'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import { useTheme } from 'next-themes'
const DEFAULT_LAYOUT = 'AuthorLayout'
import Image from 'next/image'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const pubs = publicationsData.filter((x) => x.show == true)
  return { props: { authorDetails, pubs } }
}

const EmLink = ({ href, children }) => (
  <Link
    target="_blank"
    className="font-medium text-emerald-700 no-underline transition-colors hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
    href={href}
  >
    {children}
  </Link>
)

const SectionHeader = ({ children }) => (
  <h2 className="mt-12 mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
    <span className="inline-block h-6 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
    {children}
  </h2>
)

export default function Home({ authorDetails, pubs }) {
  const { mdxSource, frontMatter } = authorDetails
  const source = (
    <div>
      <p>
        I am currently pursuing a Ph.D. in{' '}
        <EmLink href="https://www.stonybrook.edu/electrical/">Computer Engineering</EmLink> at{' '}
        <EmLink href="https://www.stonybrook.edu/">Stony Brook University</EmLink>, under the
        supervision of Prof.{' '}
        <EmLink href="https://www.ece.stonybrook.edu/~fanye/index2.html">Fan Ye</EmLink>.
        Previously, I pursued M.S. in Computer Science at Texas A&M University, under the
        supervision of Prof. <EmLink href="https://people.tamu.edu/~xinli/">Xin Li</EmLink> and
        Prof.{' '}
        <EmLink href="https://engineering.tamu.edu/cse/profiles/Wang-Wenping.html">
          Wenping Wang
        </EmLink>
        . Previously, I was a Research Assistant in{' '}
        <EmLink href="https://www.hku.hk">the University of Hong Kong</EmLink>, working with Prof.{' '}
        <EmLink href="https://facdent.hku.hk/people/professoriate-staff/profile/drgumin">
          Min Gu
        </EmLink>{' '}
        and Prof.{' '}
        <EmLink href="https://ins.seu.edu.cn/yk_english/2020/0219/c27542a317780/page.htm">
          Lifeng Zhu
        </EmLink>
        . I was a graduate with honors, earning my B.Eng. degree in Measurement and Control
        Technology and Instrumentation from{' '}
        <EmLink href="https://ins.seu.edu.cn/yk_english/main.htm">
          the School of Instrument Science and Engineering
        </EmLink>
        , <EmLink href="https://www.seu.edu.cn/english/main.htm">Southeast University</EmLink>.
        During my undergraduate years, I joined the{' '}
        <EmLink href="https://github.com/SEU-LEADS">LEADS</EmLink> research group, where I worked
        under the supervision of Prof.{' '}
        <EmLink href="https://ieeexplore.ieee.org/author/37085417787">Chuan Zhang</EmLink> and
        Postdoctoral Fellow{' '}
        <EmLink href="https://radio.seu.edu.cn/newenglish/txs_en/main.psp">Xiaosi Tan</EmLink>.
      </p>
      <p>
        Research interests: <span className="font-medium">Computer Graphics</span>,{' '}
        <span className="font-medium">Robotics</span>,{' '}
        <span className="font-medium">Computer Vision</span> and{' '}
        <span className="font-medium">Health Sensing / Smart Aging</span>.
      </p>

      <div>
        <SectionHeader>Selected publications</SectionHeader>
        {pubs
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))

          .map((pub, idx) => {
            const { date, title, abstract, author, tags, links, imgSrc, published, width, height } =
              pub
            const name = 'Huijun Han'
            const regex = new RegExp(`(${name})`, 'gi')
            const parts = author.split(regex)
            return (
              <div
                key={idx}
                className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800/60 sm:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden rounded-lg sm:w-48">
                    <Image
                      src={imgSrc}
                      alt={title}
                      width={width}
                      height={height}
                      className="mx-auto object-cover object-center"
                      unoptimized
                    />
                  </div>

                  <div className="flex min-w-0 flex-col justify-center">
                    <p className="my-0 mb-1 text-lg font-semibold leading-snug tracking-tight text-gray-900 dark:text-gray-100 xl:text-xl">
                      {title}
                    </p>
                    <p className="my-0 text-sm leading-normal text-gray-700 dark:text-gray-300">
                      {parts.map((part, index) =>
                        part.toLowerCase() === name.toLowerCase() ? (
                          <span key={index} className="font-bold">
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                    <p className="my-0 mt-1 text-sm italic leading-normal text-gray-500 dark:text-gray-400">
                      {published}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {links.map(({ name, link }, idx) => (
                        <Link
                          key={idx}
                          href={link}
                          className="rounded-full border border-emerald-600/40 px-3 py-0.5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-50 dark:border-emerald-400/40 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div>
        <SectionHeader>Academic Service</SectionHeader>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800/60 sm:p-5">
          <p className="my-0 mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Journal Reviewer
          </p>
          <ul className="my-0 mb-4 list-disc space-y-1 pl-5 text-sm leading-normal text-gray-700 dark:text-gray-300">
            <li>Computer Methods and Programs in Biomedicine (CMPB)</li>
            <li>Medical Image Analysis (MedIA)</li>
          </ul>
          <p className="my-0 mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Conference Reviewer
          </p>
          <ul className="my-0 list-disc space-y-1 pl-5 text-sm leading-normal text-gray-700 dark:text-gray-300">
            <li>ACM/IEEE Conference on Connected Health (CHASE) 2026</li>
          </ul>
        </div>
      </div>
      <div>
        <SectionHeader>Talks</SectionHeader>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800/60 sm:p-5">
          <ul className="my-0 list-disc space-y-1 pl-5 text-sm leading-normal text-gray-700 dark:text-gray-300">
            <li>
              Presented{' '}
              <EmLink href="https://dl.acm.org/doi/10.1145/3745756.3809194">ADL-CLIP</EmLink> at{' '}
              <EmLink href="https://www.sigmobile.org/mobisys/2026/">ACM MobiSys 2026</EmLink>,
              Cambridge, UK
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className=" divide-y divide-gray-200 dark:divide-gray-700">
        {/* <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        /> */}
        <AuthorLayout frontMatter={frontMatter}>{source}</AuthorLayout>
      </div>
      {/*siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )*/}
    </>
  )
}
