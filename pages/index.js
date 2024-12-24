import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import NewsletterForm from '@/components/NewsletterForm'
import AuthorLayout from '@/layouts/AuthorLayout'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import publicationsData from '@/data/publicationsData'
import projectsData from '@/data/projectsData'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import { useTheme } from 'next-themes'
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const pubs = publicationsData.filter((x) => x.show == true)
  const projs = projectsData
  return { props: { authorDetails, pubs, projs } }
}

export default function Home({ authorDetails, pubs, projs }) {
  const { theme, resolvedTheme } = useTheme()

  // modify favicon in HEAD based on theme
  const favicon =
    theme === 'dark' || resolvedTheme === 'dark' ? '/favicon/logo_night.jpg' : '/favicon/logo.png'
  // <link rel="icon" href = {theme === 'dark'  || resolvedTheme === "dark" ? '/favicon/logo_night.jpg' : '/favicon/logo.png'} type="image/x-icon" /> </Head>
  // change the favicon based on theme

  const { mdxSource, frontMatter } = authorDetails
  const source = (
    <div>
      <p>
        I am currently pursuing M.S. in Computer Science at Texas A&M University, under the
        supervision of Prof.{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://people.tamu.edu/~xinli/"
        >
          Xin Li
        </Link>{' '}
        and Prof.{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://engineering.tamu.edu/cse/profiles/Wang-Wenping.html"
        >
          Wenping Wang
        </Link>
        . Previously, I was a Research Assistant in{' '}
        <Link
          className=" text-inherit text-emerald-700 no-underline"
          href="https://www.hku.hk"
          target="_blank"
        >
          the University of Hong Kong
        </Link>
        {''}, working with Postdoctoral Fellow{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://cong-yi.github.io/"
        >
          Congyi Zhang
        </Link>{' '}
        and Prof.{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://ins.seu.edu.cn/yk_english/2020/0219/c27542a317780/page.htm"
        >
          Lifeng Zhu
        </Link>
        . I was a graduate with honors, earning my B.Eng. degree from{' '}
        <Link
          className=" text-inherit text-emerald-700 no-underline"
          href="https://ins.seu.edu.cn/yk_english/main.htm"
          target="_blank"
        >
          the School of Instrument Science and Engineering
        </Link>
        ,{' '}
        <Link
          className="text-inherit text-emerald-700 no-underline"
          href="https://www.seu.edu.cn/english/main.htm"
          target="_blank"
        >
          Southeast University
        </Link>
        . During my undergraduate years, I joined the{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://github.com/SEU-LEADS"
        >
          LEADS
        </Link>{' '}
        research group, where I worked under the supervision of Prof.{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://ieeexplore.ieee.org/author/37085417787"
        >
          Chuan Zhang
        </Link>{' '}
        and Postdoctoral Fellow{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://radio.seu.edu.cn/newenglish/txs_en/main.psp"
        >
          Xiaosi Tan
        </Link>{' '}
        .
      </p>
      <p>
        Research interests: <span className="font-medium">Computer Graphics</span>,{' '}
        <span className="font-medium">Robotics</span> and{' '}
        <span className="font-medium">Computer Vision</span>.
      </p>

      <strong>This page is under construction. Please check back later for more updates.</strong>
      <div>
        <p className="hazel-header mb-2 mt-10 text-2xl font-bold dark:text-gray-100">
          Project Spotlights
        </p>
        {projs.map((proj, idx) => {
          const { title, description } = proj
          return (
            <div
              key={idx}
              className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0"
            >
              <div className="xl:col-span-3">
                <h3 className="hazel-title my-0 text-xl font-medium leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {title}
                </h3>
                <div className=" max-w-none text-gray-500 dark:text-gray-400">{description}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <p className="hazel-header mb-2 mt-10 text-2xl font-bold dark:text-gray-100">
          Selected publications
        </p>
        {pubs
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))

          .map((pub, idx) => {
            const { date, title, abstract, author, tags, links, imgSrc } = pub
            const name = 'Huijun Han'
            const regex = new RegExp(`(${name})`, 'gi')
            const parts = author.split(regex)
            return (
              <div
                key={idx}
                className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0"
              >
                <div className="xl:col-span-3">
                  <div>
                    <h3 className="hazel-title my-0 text-xl font-medium leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {title}
                    </h3>
                    {parts.map((part, index) =>
                      part.toLowerCase() === name.toLowerCase() ? (
                        <span key={index} style={{ fontWeight: 'bold' }}>
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                    <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </div>
                  </div>
                  {/* <div className="prose max-w-none text-gray-500 dark:text-gray-400">{abstract}</div> */}
                  <div className="text-gray-500 underline dark:text-gray-400">
                    {links.map(({ name, link }, idx) => (
                      <Link key={idx} href={link} className="pr-6 text-gray-900 dark:text-gray-100">
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
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
