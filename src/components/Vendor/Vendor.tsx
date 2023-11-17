import Image from 'next/image';
import styles from './styles.module.css';

type Props = {
    vendor: IVendors;
};
export default function ({ vendor }: Props) {
    const vendorItem = vendor.data as IVendor;
    const re = /w\.x\.h/;

    function parseImageUrl(vendor: IVendor) {
        if (re.test(vendor.backgroundImageCustom)) {
            const width = 350;
            return vendor.backgroundImageCustom.replace(re, width + 'x' + Math.floor(width / 1.5));
        }
        return vendor.backgroundImage;
    }

    return (
        <div className={styles.vendorCard}>
            {vendor.type === 'TEXT' ? (
                <h2 className={styles.openVendors}>{vendor.data as any}</h2>
            ) : (
                <section className={styles.itemCard}>
                    <header className={styles.header}>
                        <div className={styles.itemImg}>
                            <img
                                className={styles.img}
                                src={parseImageUrl(vendorItem)}
                                alt={vendorItem.title}
                            />
                        </div>
                        <div className={styles.itemLogo}>
                            <img
                                className={styles.img}
                                src={vendorItem.logo}
                                alt={vendorItem.title}
                            />
                        </div>
                    </header>

                    <div className={styles.content}>
                        <div className={styles.headline}>
                            <div>
                                <h3 className={styles.title}>{vendorItem.title}</h3>
                            </div>

                            <div className={styles.rateWrapper}>
                                <div className={styles.voteCount}>
                                    ({vendorItem.voteCount.toLocaleString('fa-IR')})
                                </div>
                                <div className={styles.rating}>
                                    <span className={styles.rate}>
                                        {vendorItem.rate.toLocaleString('fa-IR')}
                                    </span>
                                    <Image
                                        src="/star_rate.svg"
                                        alt="start rate"
                                        width={12}
                                        height={12}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.description}>{vendorItem.description}</div>
                        <div className={styles.delivery}>
                            <span className={styles.fee}>
                                {vendorItem.deliveryFee.toLocaleString()} تومان
                            </span>
                            {vendorItem.isZFExpress ? 'ارسال اکسپرس' : 'پیک فروشنده'}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
