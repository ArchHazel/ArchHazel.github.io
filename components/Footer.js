import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mono-type mb-8 text-sm text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()} ${siteMetadata.author}. All rights reserved.`}
        </div>
      </div>
    </footer>
  )
}
