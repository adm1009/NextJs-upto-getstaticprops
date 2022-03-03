import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
export default function Home() {
  return ( <>
     <Link href="/para">
     <a>para</a>
     </Link>
     <br/>
     <Link href="/product">
     <a>product</a>
     </Link>
     </>
  )
}
