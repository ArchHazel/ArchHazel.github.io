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
import Image from 'next/image'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const pubs = publicationsData.filter((x) => x.show == true)
  const projs = projectsData
  return { props: { authorDetails, pubs, projs } }
}

export default function Home({ authorDetails, pubs, projs }) {
  const { theme, resolvedTheme } = useTheme()

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
        {''}, working with
        {/* Postdoctoral Fellow{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://cong-yi.github.io/"
        >
          Congyi Zhang
        </Link>{' '} */}{' '}
        Prof.{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://facdent.hku.hk/people/professoriate-staff/profile/drgumin"
        >
          Min Gu
        </Link>{' '}
        and Prof.{' '}
        <Link
          target="_blank"
          className="text-inherit text-emerald-700 no-underline"
          href="https://ins.seu.edu.cn/yk_english/2020/0219/c27542a317780/page.htm"
        >
          Lifeng Zhu
        </Link>
        . I was a graduate with honors, earning my B.Eng. degree in Measurement and Control
        Technology and Instrumentation from{' '}
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

      <div>
        <p className="hazel-header  text-2xl font-bold dark:text-gray-100">Selected publications</p>
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
                className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0"
              >
                {/* <div class = "flex"> */}

                <div className="flex xl:col-span-10">
                  <div className="left mt-5 mr-2">
                    <Image
                      src={imgSrc}
                      alt="avatar"
                      width={width}
                      height={height}
                      className="object-cover object-center"
                      unoptimized
                    />
                  </div>

                  <div className="right">
                    <div>
                      <h3 className="hazel-title my-0 text-xl font-medium leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                        {title}
                      </h3>
                    </div>
                    <div className="hazel-author">
                      {parts.map((part, index) =>
                        part.toLowerCase() === name.toLowerCase() ? (
                          <span key={index} style={{ fontWeight: 'bold' }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                      {/* <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </div> */}
                      <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>{published} </p>
                      </div>
                    </div>

                    <div className="hazel-pub-title text-gray-500 underline dark:text-gray-400">
                      {links.map(({ name, link }, idx) => (
                        <Link
                          key={idx}
                          href={link}
                          className="pr-6 text-gray-900 dark:text-gray-100"
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
        <p className="hazel-header  text-2xl font-bold dark:text-gray-100">Project Spotlights</p>
        {projs.map((proj, idx) => {
          const { title, imgs } = proj
          return (
            <div
              key={idx}
              className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0"
            >
              <div className="xl:col-span-3">
                <div className="mt-5 flex">
                  <div className="left_project mr-5">
                    <Image
                      className="object-cover object-center"
                      src={imgs[0].link}
                      width={imgs[0].width}
                      height={imgs[0].height}
                      unoptimized
                    />
                  </div>

                  <div className="hazel-author">
                    <h3 className="hazel-title my-0 text-xl font-medium leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {title}
                    </h3>
                    <p className="mt-2"> flocking system simulation and obstacle steering</p>
                    <p> platform: OpenGL</p>
                  </div>
                </div>
                {/* <div className=" max-w-none text-gray-500 dark:text-gray-400">{description}</div> */}
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
