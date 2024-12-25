import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'

export default function ListLayout({ pubs, title, initialDisplayPubs = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredPubs = pubs.filter((pub) => {
    const searchContent = pub.title + pub.abstract + pub.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPubs exist, display it if no searchValue is specified
  const displayPubs =
    initialDisplayPubs.length > 0 && !searchValue ? initialDisplayPubs : filteredPubs

  return (
    <>
      <div className="mono-type divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search publications"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search publications"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredPubs.length && 'No publication found.'}
          {displayPubs
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((pub, idx) => {
              const {
                date,
                title,
                author,
                abstract,
                tags,
                links,
                imgSrc,
                width,
                height,
                hrefer,
                published,
              } = pub
              const name = 'Huijun Han'
              const regex = new RegExp(`(${name})`, 'gi')
              const parts = author.split(regex)

              return (
                <li key={idx} className="py-4">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl className="flex flex-col space-y-4">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                      <div className="relative h-36 w-full">
                        <a href={hrefer}>
                          <Image
                            className="object-cover object-center "
                            alt={title}
                            src={imgSrc}
                            layout="intrinsic" // Ensure the aspect ratio is maintained
                            width={width}
                            height={height}
                          />
                        </a>
                      </div>
                    </dl>

                    <div className="space-y-2 px-8 xl:col-span-3">
                      <div>
                        <h3 className="hazel-pub-title text-2xl font-bold leading-8 tracking-tight">
                          <p className="text-gray-900 dark:text-gray-100">{title}</p>
                        </h3>
                      </div>
                      <div className="hazel-pub-title text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>{published} </p>
                      </div>

                      <div className="hazel-pub-author flex flex-wrap">
                        <p>
                          {parts.map((part, index) =>
                            part.toLowerCase() === name.toLowerCase() ? (
                              <span key={index} style={{ fontWeight: 'bold' }}>
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}{' '}
                        </p>
                      </div>

                      <div>
                        <div className="hazel-pub-title flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className=" hazel-single prose max-w-none text-gray-500 dark:text-gray-400">
                        {abstract}
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
                  </article>
                </li>
              )
            })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
