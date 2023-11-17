import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div>
            <section>
                <header>
                    <h1>SnappFood</h1>
                </header>
                <hgroup>
                    <Link href="/restaurant">
                        <h4 className={styles.title}>
                            Discover The Best Restaurants Near Your Location...
                        </h4>
                        <p className={styles.extensionWarning}>please disable browser extensions</p>
                    </Link>
                </hgroup>
            </section>
        </div>
    );
}
