'use client';

import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetVendorsListQuery } from '../../redux/api/VendorsListApi';
import styles from './styles.module.css';
import Vendor from '@/components/Vendor/Vendor';

export default function InfiniteScrollPage() {
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const { data } = useGetVendorsListQuery(page);

    function getNextPageData() {
        if (data?.data.finalResult.length! < data?.data.count!) {
            setPage((prev) => prev + 1);
        } else {
            setHasMore(false);
        }
    }

    return (
        <div className={styles.restaurantPage}>
            <p className={styles.title}>Restaurants:</p>
            <InfiniteScroll
                dataLength={data?.data.finalResult.length || 0}
                next={getNextPageData}
                hasMore={hasMore}
                loader={<h1 style={{ color: '#242424' }}>LOADING.......</h1>}
                endMessage={<h1 style={{ color: '#242424' }}>END</h1>}>
                {data?.data.finalResult.map((vendor: any, index: number) => (
                    <Vendor key={index} vendor={vendor} />
                ))}
            </InfiniteScroll>
        </div>
    );
}
