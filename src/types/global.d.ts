export {};

declare global {
    enum Type {
        Text = 'TEXT',
        Vendor = 'VENDOR',
    }

    interface IVendorsList {
        data: {
            finalResult: IVendor[];
            count?: number;
        };
    }
    interface IVendors {
        type: Type;
        data: IVendor | string;
    }

    interface IVendor {
        id: number;
        vendorCode: string;
        noOrder: boolean;
        title: string;
        description: string;
        rate: number;
        rating: number;
        logo: string;
        defLogo: string;
        taxEnabled: boolean;
        taxIncluded: boolean;
        taxEnabledInProducts: boolean;
        taxEnabledInPackaging: boolean;
        taxEnabledInDeliveryFee: boolean;
        tax: number;
        serviceFee: number;
        deliveryArea: string;
        discount: number;
        isOpen: boolean;
        minDeliveryFee: number;
        maxDeliveryFee: number;
        deliveryTime: number;
        paymentTypes: number[];
        schedules: Schedule[];
        minOrder: number;
        address: string;
        phone: string;
        website: string;
        status: number;
        lat: number;
        lon: number;
        restaurantClass: string;
        foodTypes: any[];
        restaurantTypes: any[];
        isFavorite: boolean;
        priority: number;
        city: string;
        area: string;
        commentCount: number;
        recommendedFor: string;
        establishment: Establishment;
        mostPopularItems: string;
        costsForTwo: number;
        onlineOrder: boolean;
        voteCount: number;
        discountType: null;
        menuUrl: string;
        discountValue: number;
        discountForAll: boolean;
        containerFee: number;
        deliveryGuarantee: boolean;
        badges: Badge[];
        discountStartHour1: string;
        discountStopHour1: string;
        discountStartHour2: string;
        discountStopHour2: string;
        discountValueForView: number;
        coverPath: string;
        cuisinesArray: CuisinesArray[];
        preOrderEnabled: boolean;
        preorderToday: PreorderToday;
        vendorType: ChildType;
        childType: ChildType;
        budgetClass: string;
        vendorTypeTitle: string;
        isZFExpress: boolean;
        deliveryFee: number;
        backgroundImage: string;
        backgroundImageCustom: string;
        has_coupon: boolean;
        coupon_count: number;
        best_coupon: string;
        userImage: UserImage[];
        menuImage: any[];
        countReview: number;
        countOfUserImages: number;
        deliveryFeeDiscount: number;
        trendingScore: number;
        delay: string;
        deliver: boolean;
        eta: number;
        min_eta: number;
        max_eta: number;
        open_at_eta: boolean;
        action: string;
        has_delay: boolean;
        delay_time: number;
        total_time: number;
        bid: boolean;
        superTypeAlias: ChildType;
        is_food_party: boolean;
        is_market_party: boolean;
        click_id: null;
        cpc_campaign_hash: null;
        cpc_spot: null;
        is_ecommerce: boolean;
        is_economical: boolean;
        is_grocery_vip: boolean;
        is_grocery_returnable: boolean;
        is_grocery_economic: boolean;
        status_title: StatusTitle;
        status_text: string;
        status_description: string;
        has_cashback: boolean;
    }
}
