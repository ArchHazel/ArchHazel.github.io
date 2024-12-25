import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="flex justify-center divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-start justify-center space-y-2 xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-y-0">
          <div
            className="sticky top-0 flex flex hidden w-full flex-col items-center items-center justify-center pt-8 xl:block"
            style={{ textAlign: 'center' }}
          >
            <Image
              src={avatar}
              alt="avatar"
              width="180px"
              height="270px"
              layout="intrinsic"
              className=" flex justify-center rounded-full"
              unoptimized
            />
            <h3 className="flex items-center justify-center pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="flex justify-center  space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
            </div>
          </div>
          <div className="hazel max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-4">{children}</div>
        </div>
      </div>
    </>
  )
}
