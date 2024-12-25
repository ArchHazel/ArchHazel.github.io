import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-y-0">
          <div className="sticky top-0 flex hidden flex-col items-center pt-8 xl:block">
            <Image
              src={avatar}
              alt="avatar"
              width="180px"
              height="270px"
              className="h-48 w-48 rounded-full"
              unoptimized
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
            </div>
          </div>
          <div className="hazel max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-4">{children}</div>
        </div>
      </div>
    </>
  )
}
