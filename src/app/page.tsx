import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Main from './pages'
import CityDetails from './pages/city'
import Custom404 from './pages/404'


export default function Home() {
    return (
      <ul>
        <li>
          <Link href="/"><Main></Main></Link>
        </li>
        <li>
          <Link href="/city-details"><CityDetails></CityDetails></Link>
        </li>
          <Link href="/404"><Custom404></Custom404></Link>
      </ul>
    )
}
