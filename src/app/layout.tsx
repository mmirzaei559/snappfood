import type { Metadata } from 'next';
import { ReduxProvider } from '../redux/provider/ReduxProvider';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
    icons: {
        icon: '/icon.png',
    },
    title: 'سفارش آنلاین غذا، شیرینی و خرید از کافی شاپ و سوپرمارکت | اسنپ فود',
    description:
        'رستوران های تهران, لازانیا, تیرامیسو, دسر, شله زرد, انواع کباب, انواع ساندویچ, انواع پیتزا, سفارش اینترنتی غذای سنتی, غذای خانگی, غذای ایرانی, کباب, پیتزا, ساندویچ, رستوران, تهران, رستوران های, اینترنت, انلاین, سفارش آنلاین, سفارش غذا در ایران, ایران, غذاهای دریایی, غذا, سنتی, خانگی, ساندویچ های گرم, ساندویچ های سرد, پیتزا ایتالیایی, رستوران ایتالیایی, سفره خانه, رستوران های ایرانی, رستوران ایرانی, رستوران های فرنگی, رستوران فرنگی, خرید آنلاین, پرداخت آنلاین, شبکه رستوران ها, فست فود, فست فود, زود فود و اسنپ، اسنپ فود ، سرویس جدید اسنپ ، اسنپ غذا ، اسنپ سفارش غذا ، سفارش غذا در اسنپ ، ارسال غذا ، زودفود و اسنپ ، اسنپ فود ، اسنپفود،سفارش غذا با اسنپ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={vazirmatn.className}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
