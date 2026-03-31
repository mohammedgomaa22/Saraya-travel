// data.js
const appData = {
    sections: {
        services: [
            {
                icon: "./assets/images/plane.gif",
                name: 'حجوزات الطيران',
                description: 'تقديم خدمات حجز تذاكر الطيران الداخلية والدولية بأسعار تنافسية مع خيارات مرنة حسب رغبة العميل.',
            },
            {
                icon: "./assets/images/hotel.gif",
                name: 'حجز الفنادق والإقامة',
                description: 'توفير خيارات متعددة للإقامة في فنادق فاخرة ومتوسطة واقتصادية في مختلف الوجهات حول العالم.',
            },
            {
                icon: "./assets/images/hot-air-balloon.gif",
                name: 'تنظيم الرحلات السياحية',
                description: 'تقديم برامج سياحية شاملة تتضمن زيارات لأشهر المعالم السياحية، والأنشطة الترفيهية، والتجارب الثقافية.',
            },
            {
                icon: "./assets/images/nomad-visa.gif",
                name: 'خدمات التأشيرات',
                description: 'مساعدة العملاء في الحصول على التأشيرات السياحية أو تأشيرات الأعمال مع تقديم الاستشارات المتعلقة بها.',
            },
            {
                icon: "./assets/images/calendar.gif",
                name: 'تنظيم المؤتمرات والفعاليات',
                description: 'تنظيم الفعاليات والمؤتمرات للشركات والمؤسسات بما في ذلك حجوزات السفر والإقامة والتنسيق اللوجستي.',
            },
            {
                icon: "./assets/images/heartbeat.gif",
                name: 'السياحة العلاجية',
                description: 'تقديم برامج سياحية مخصصة للراغبين في السفر للعلاج في أفضل المستشفيات والمراكز الطبية حول العالم.',
            },
            {
                icon: "./assets/images/kaaba.png",
                name: 'خدمات الحج والعمرة',
                description: 'تنظيم رحلات الحج والعمرة مع توفير باقات متكاملة تشمل تذاكر الطيران، الإقامة، والمواصلات.',
            },
            {
                icon: "./assets/images/certificate.gif",
                name: 'استخراج الرخص الدولية',
                description: 'تتم العملية بشكل ميسر من خلال تعبئة الطلبات اللازمة وتقديم المستندات المطلوبة، مما يضمن تجربة سفر أكثر مرونة واستقلالية.',
            },
            {
                icon: "./assets/images/cruise-ship.gif",
                name: 'الكروزات البحرية',
                description: 'تتيح تجربة مميزة تجمع بين الراحة، المغامرة، والاستمتاع بأجمل المناظر الطبيعية حول العالم.',
            },
            {
                icon: "./assets/images/train.gif",
                name: 'حجز القطارات والسيارات',
                description: 'لتوفير خيارات تنقل مريحة ومرنة للمسافرين.',
            },
        ],
        destinations: [
            {
            id: "turkiye",
            name: "تركيا",
            image: "https://images.pexels.com/photos/1460792/pexels-photo-1460792.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                id: "bosnia",
                name: "البوسنة",
                image: "https://images.pexels.com/photos/18603377/pexels-photo-18603377/free-photo-of-old-bridge-in-mostar.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                id: "azerbaijan",
                name: "أذربيجان",
                image: "https://images.pexels.com/photos/18855626/pexels-photo-18855626/free-photo-of-tower-of-a-building-in-baku-azerbaijan.jpeg?auto=compress&cs=tinysrgb&w=600", 
            },
            {
                id: "georgia",
                name: "جورجيا",
                image: "https://images.pexels.com/photos/11886696/pexels-photo-11886696.jpeg?auto=compress&cs=tinysrgb&w=600", 
            },
            {
                id: "europe",
                name: "أوروبا",
                image: "https://images.pexels.com/photos/1743364/pexels-photo-1743364.jpeg?auto=compress&cs=tinysrgb&w=600", 
            },
            {
                id: "maldives",
                name: "المالديف",
                image: "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
            id: "indonesia",
            name: "اندونيسيا",
            image: "https://images.pexels.com/photos/18280512/pexels-photo-18280512/free-photo-of-boys-with-indonesian-flag-in-the-field-near-the-waterfall.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                id: "thailand",
                name: "تايلاند",
                image: "https://images.pexels.com/photos/5592363/pexels-photo-5592363.jpeg?auto=compress&cs=tinysrgb&w=600", 
            },
            {
                id: "albania",
                name: "ألبانيا",
                image: "https://images.pexels.com/photos/29201400/pexels-photo-29201400/free-photo-of-shkoder-castle-with-albanian-flag-and-scenic-landscape.jpeg?auto=compress&cs=tinysrgb&w=600", 
            },
            {
            id: "south-africa",
            name: "جنوب افريقيا",
            image: "https://images.pexels.com/photos/5078803/pexels-photo-5078803.jpeg?auto=compress&cs=tinysrgb&w=600", 
            },
            {
                id: "salalah",
                name: "صلالة",
                image: "https://images.pexels.com/photos/11423767/pexels-photo-11423767.jpeg?auto=compress&cs=tinysrgb&w=600", 
            },
        ],
        programs: [
            // تركيا
            {
                id: "برنامج-تركيا-اسطنبول",
                destinationId: "turkiye",
                type: "مميز",
                location: "تركيا",
                title: "برنامج تركيا اسطنبول",
                duration: "7 ايام",
                stars: 5,
                price: 2999,
                image: "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyUcQVeiWR6ieXLBJxxQjHxi81M-QJxw1KAA8VxSAW2vtmzuQ3rzWSq7-7HdbSoy2FD_v_lBYcZx1dQ_nqPoCjaQbBFSpDrJtQsRY8E752uewwZ2SxVYsWTA1Sf642QY2ORorpc-odyOH0wWuItONF9Fm3360DEFYDHn3SzTaBsxw9hU5vaYOsfrciIhSadZTXImpZmGKHYFssUHSBX32XvES86XLqJuHh3_17oIzJe-Bun9yzIjNkLQN01uUhlbctHJZCe2yrtVy6AhoQnH2m2xNpbpt4p3lfAHBPplFugaByjNJO8QnG9sTvSaCI303-TaD5uhoVTxcRb_7sJLaoCwqaZ3hVkY9Hoyw6CZ9AheU9XGS8eYNJZzBwbZVCToapVofwV_Mx59rI-mqXsNFU9l6U740mEnAIOHDH6TSXgx44kWBMVLqrf6QDAy2ecp3pOHxJmHiwa0csVnCVVFaYqXKx4mzwAdXA98ZYk4_CeNlxm_CbIRJEJQN93ck1h5scJqZWeHKwsV28GTwRpka0zjFeQrt2mVZDIVFyhFpKqLJalONy6z3h-eDFfqyS8HfyU7v1iyESYwEBcuv-FIaEJySRSn99h59AoiofDKB8v-wZZUuadZhZWBpRYatCdI-PWK3SWPsA5vjl7UiArtJx33aS3q46L2kUIl3fyiKGtiscmXxyfZ-US7sNIhu7e5HxBGVmhleef00neVKycUmWhE2H0mXuHtDX2-VgkLTeVP5Sj_ivHDdmCAVByd0LioQcAZpVTEqAn0S6HjcFsnuBzDhqSJ5_i356F1Vak2NmgrlNk8Jz5gbg1PvFYLSG0mb5Z4_vmDEpUAomcen6JpKmAg29Z0B3hIJ3hREADbVGh-sATmyzQb17SDdOeLdDS6SdarzVSPER4dvHwmeLo81m9E-TxaEnKnYAOEPi9RSnlwY4knE",
                images: [
                    "https://avatars.mds.yandex.net/i?id=7bc2d65eb97f97e114d3e95f92ed4bbfb0ab13fb-5354201-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=1e275dc2245dafb2ab326aa88bc61225bd5a2a63-3910357-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=6e3b5dd44a87d04fdbf54e40b6966f96b9203dc5-12496730-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=af4b50f2d042a93eaba611ae2c7f6e1c70a5afc0-6883249-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'سافر واستمتع معنا بقضاء إجازة بين أحضان الطبيعة والحضارة في تركيا',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) بين حضارة وثقافة إسطنبول والطبيعة الخلابة',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة الفندقية فنادق 4 نجوم",
                    "إفطار يومي بوفية مفتوح بالفندق",
                    "سيارة خاصه مع سائق",
                    "التنقلات بين المدن",
                    "جولات سياحيه بسيارة خاصة",
                    "خدمة عملاء بالعربي",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي ويمكنكم الحجز لدينا",
                    "تذاكر دخول الأماكن السياحية وجميع ما لم يتم ذكره بالعرض",
                ]
            },
            {
                id: "برنامج-تركيا-(الشمال-التركي)",
                destinationId: "turkiye",
                type: "مميز",
                location: "تركيا",
                title: "برنامج تركيا(الشمال التركي)",
                duration: "6 ايام",
                stars: 5,
                price: 3299,
                image: "https://avatars.mds.yandex.net/i?id=d4b5eb3c161d456c3d905df223cd5d4af296958a-12325159-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=9b54529136f4b5a283f20c7122685179e0c5fdc4-7019444-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyX8wVICvC43LBfBEizgSSwSw-a-ADwwhOVVxFxSNCjfpky7M2q2DG8b-_HdDXryOEEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                    "https://avatars.mds.yandex.net/i?id=383d89924fe153e9233be7ff0ac346eb0a7a7a31-5235306-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=b2230ef35789e8ff08dc23c6d3b4dd3788c56b40-5887690-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'سافر واستمتع معنا بقضاء إجازة بين أحضان الطبيعة والحضارة في تركيا',
                        description: '',
                    },
                    {
                        headTitle: '6 أيام (5 ليالي) بين طرابزون وأوزنجول',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة الفندقية فنادق 4 نجوم",
                    "إفطار يومي بوفية مفتوح بالفندق",
                    "سيارة خاصه مع سائق",
                    "التنقلات بين المدن",
                    "جولات سياحيه بسيارة خاصة",
                    "خدمة عملاء بالعربي",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي ويمكنكم الحجز لدينا",
                    "تذاكر دخول الأماكن السياحية وجميع ما لم يتم ذكره بالعرض",
                ]
            },
            {
                id: "عرض-الصيف-تركيا",
                destinationId: "turkiye",
                type: "مميز",
                location: "تركيا",
                title: "عرض الصيف تركيا",
                duration: "10 ايام",
                stars: 5,
                price: 3599,
                image: "https://avatars.mds.yandex.net/i?id=3223c8e1eb3462aa64e156cac3c0fb24a74d2826-12753086-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=a7b4b0aa67c1e0e0d29957e904331ea057a71b58-8751582-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=f2b2430349d60d32504cdcc2be83cdec05bdd0bf-4055877-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=1f18884014c85b77bd1df5ee90d826d347ea7ca8-10703010-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=fc2f74721ce7aed70590d6cc44ab9eea391bb8d6-10491665-images-thumbs&ref=rim&n=33&w=411&h=250",
                ],
                descriptions: [
                    {
                        headTitle: 'سافر واستمتع معنا بقضاء إجازة فريدة من نوعها في تركيا الساحرة',
                        description: '',
                    },
                    {
                        headTitle: 'لمدة 10 أيام – 9 ليالي في أسطنبول طرابزون واوزنجول',
                        description: '',
                    },
                    {
                        headTitle: 'العرض متاح لفترة محـــدودة خلال شهر يونيو 2024',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع من وإلى المطار",
                    "الإقامة الفندقية 4 نجوم",
                    "جولات سياحية خاصة",
                    "التنقلات بين المدن",
                    "الطيران الداخلي بين طرابزون واسطنبول",
                    "شرائح اتصال وإنترنت مجاناً",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي ويمكنكم الحجز لدينا",
                    "تذاكر دخول الأماكن السياحية وجميع ما لم يتم ذكره بالعرض",
                ]
            },
            // البوسنة
            {
                id: "برنامج-البوسنة-سراييفو",
                destinationId: "bosnia",
                type: "مميز",
                location: "البوسنة",
                title: "برنامج البوسنة سراييفو",
                duration: "6 ايام",
                stars: 5,
                price: 2499,
                image: "https://avatars.mds.yandex.net/i?id=77458dd38e8693a9f68528751e6c6960ae6436dc-9068727-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=e99703867ded336ae04045da279ee3abc0e2999a-12146892-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=92cabd7491b07e1fa286743c4680576920b2e64d0aba3229-12491107-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=88a3c59d53cfb1024048626ba808303b548cfbaa-7450098-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=1f646015b77ad613a370acabe5e8a9b81cc00d4c-4433927-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'استمتع برحلة ساحرة في قلب البلقان واكتشف جمال وتاريخ سراييفو',
                        description: '',
                    },
                    {
                        headTitle: '6 أيام (5 ليالي) في مدينة سراييفو التاريخية',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار سراييفو",
                    "الإقامة في فندق 5 نجوم وسط المدينة",
                    "إفطار يومي بوفية مفتوح",
                    "سيارة خاصة مع سائق",
                    "جولة في المدينة القديمة",
                    "زيارة نفق سراييفو التاريخي",
                    "خدمة عملاء بالعربي على مدار الساعة",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تذاكر دخول المتاحف والمواقع السياحية",
                    "الوجبات الأخرى غير المذكورة",
                ]
            },
            {
                id: "برنامج-البوسنة-موستار",
                destinationId: "bosnia",
                type: "عائلي",
                location: "البوسنة",
                title: "برنامج البوسنة موستار",
                duration: "5 ايام",
                stars: 4,
                price: 1999,
                image: "https://avatars.mds.yandex.net/i?id=a381a751631137bcc71c96d562adb7ea4a8ad491-9233745-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=8452cd819b379dfe3ed39ce407736826c130f0b6-11395806-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=ac83caf32d7af6c5e9d5dfff11030b24-4011753-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=d30e8918d04a09a1e203de87ec155f86a49801f8-4457206-images-thumbs&n=13",
                    "https://i.ytimg.com/vi/5OQZLUzbaHU/maxresdefault.jpg",
                ],
                descriptions: [
                    {
                        headTitle: 'اكتشف سحر مدينة موستار التاريخية وجسرها الشهير',
                        description: '',
                    },
                    {
                        headTitle: '5 أيام (4 ليالي) في مدينة موستار الساحرة',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار سراييفو",
                    "النقل من سراييفو إلى موستار",
                    "الإقامة في فندق 4 نجوم",
                    "إفطار يومي بوفية مفتوح",
                    "جولة في المدينة القديمة",
                    "رحلة إلى شلالات كرافيتسا",
                    "مرشد سياحي باللغة العربية",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "الوجبات غير المذكورة",
                    "التأمين الطبي",
                ]
            },
            {
                id: "برنامج-البوسنة-الشامل",
                destinationId: "bosnia",
                type: "فاخر",
                location: "البوسنة",
                title: "برنامج البوسنة الشامل",
                duration: "8 ايام",
                stars: 5,
                price: 3499,
                image: "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyWc8QLizLvieXKkNzk1PFwHlna-VVwQAYVAwXxyITi_oxy-Uw-jLBob-_HdfWryKDEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                images: [
                    "https://avatars.mds.yandex.net/i?id=18896e2c43ceb107631c878327107e0ec007963c-5385572-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=92cabd7491b07e1fa286743c4680576920b2e64d0aba3229-12491107-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=104e26362f1e2629b131922d30d0297d4a6e2667-8185766-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=e4ac8f70ff39a558ad7f0d74a74958d0cd62bcec-3788438-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'رحلة شاملة تجمع بين أجمل مدن البوسنة والهرسك',
                        description: '',
                    },
                    {
                        headTitle: '8 أيام (7 ليالي) في سراييفو وموستار وترافنيك',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة في فنادق 5 نجوم",
                    "إفطار يومي بوفية مفتوح",
                    "سيارة فاخرة خاصة مع سائق",
                    "التنقلات بين جميع المدن",
                    "جولات سياحية شاملة",
                    "زيارة أشهر المعالم السياحية",
                    "مرشد سياحي باللغة العربية",
                    "خدمة عملاء 24/7",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "المشروبات والوجبات غير المذكورة",
                    "النفقات الشخصية",
                    "تذاكر دخول المواقع السياحية",
                ]
            },
            // أذربيجان
            {
                id: "برنامج-باكو-الكلاسيكي",
                destinationId: "azerbaijan",
                type: "مميز",
                location: "أذربيجان",
                title: "برنامج باكو الكلاسيكي",
                duration: "6 ايام",
                stars: 5,
                price: 2799,
                image: "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyW8tFKivDvimRcRZ0wFLHwCg0P-BWwwkaUQoVwiZG1v1kzeAz_mmQq7-_HdDWqiSKEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                images: [
                    "https://avatars.mds.yandex.net/i?id=99e128275c0fa7a0bdaffe2a03c04a9c85cd4693-2418036-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyUMlGLyqVvCLCexF4lQfFln4wbrQBxVlNAAoYxSMU2vhkybI3rmiUoL-9GNLSryKDEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                    "https://avatars.mds.yandex.net/i?id=092c956df7bf051dc696c0512a173392-4012844-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=3fa8f2ed33bda2006fc66e198c0bbd7b5f9a0864-8312318-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'اكتشف سحر مدينة باكو القديمة وحداثتها المعاصرة',
                        description: '',
                    },
                    {
                        headTitle: '6 أيام (5 ليالي) في عاصمة أذربيجان الساحرة',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار باكو الدولي",
                    "الإقامة في فندق 5 نجوم وسط المدينة",
                    "إفطار يومي بوفية مفتوح",
                    "سيارة خاصة مع سائق",
                    "جولة في المدينة القديمة",
                    "زيارة أبراج اللهب",
                    "رحلة إلى قرية لاهيج التراثية",
                    "خدمة عملاء بالعربي على مدار الساعة",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تذاكر دخول المتاحف والمواقع السياحية",
                    "الوجبات الأخرى غير المذكورة",
                ]
            },
            {
                id: "برنامج-جبال-القوقاز",
                destinationId: "azerbaijan",
                type: "مغامرات",
                location: "أذربيجان",
                title: "برنامج جبال القوقاز",
                duration: "7 ايام",
                stars: 4,
                price: 3299,
                image: "https://avatars.mds.yandex.net/i?id=5438d45e91b8b8f6c473c8b6745e0d4e-5579871-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=cb042e84bf678965bb9305d1e205cab0006f39ff-12525794-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=9254afb29f9e63337ac423ec94262d38bcda22c6-5859283-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyCZ0cLXnA4iPHLUYgxVLHwH0yM-NWylsWBgoUlydB168tyrA5pmCUor_jQoKD_2aeS77jlBUIJA8dR6rxbtPjEDe9ZVtDvIhYtAA9OJZflMcxKGm6XaxnDwdcZbdiS52-TZX0ZtQUyMPr2miFhdNBx1SC-5c9OFALE1TCyiqIpjoYiktdd6KPfLctBiqbYr3wPV5-m1-nSGY7Rle1VEucvna89E3oBOD7weR8sq3QX-Z3sNWKNDx4HAdQ8-s5hLI_MJNpUFeai3q_HwobmFW-6h1Herd_nG9oKFBLg2RwoKVZm-NW-jbg_9fSYpGS9VbeUZvvmC8UcRkkT9X9NaGxBgqpckl5upJ5gjw0Na1fmes5d0KHf75cewhXQqdvUrmnYbrPWu8V18fZy2qCpuNh4lak8LEwLXQJBWTAzz6mhQchjUpOVoO2eLAkODCNcr3qClVim1mjXG0QSUKDWUCCpFGI1WXTJ9P4yudFran8d-VWkN2KPTdUCBV8wtEJkLEhK5doVky8ikCEDR85r3me5CNoZpZeoU1jDHlZq3xBnL9tvOxy0AHs5fjobo-J-WflVrf5iDIBYykUY_nTPoy2Lhy5dUh_n5dGvgY9EZRwv-ciZ32tXrJiezJeZKlFcLavULvtd_g3wNna7kOqoNJC_mu97KsdNVcfFFH16za6uy4Esn5RWKKAXbkoIAyUXaPFJEFokHaBe0gPR2-8b3CLuk6NwknwH9DD1stijr30Q9hzsvCMASNANhhjwvY1k4UZG7lxUEu3nlS5OB0wm3O77TFAX6BaiVpaIFNSvHtgnbJWvcFp0B_08dr5Zbu943T1bYTyrzEDZxsAQdz6EqGJJB-kQm9EgJZThD46CL9XltMHRW2AQat-eg11dptUd6alQbzOVdcYy9TF-WiToclN426i-LEDCGgpNXDYzz23nzksr2w",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyCckWKijF6yXBe0N2wQmRl3sxabRRlQtJWgZDkiFA3f05yLBiqWeUqr--GtLUqCWEEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                ],
                descriptions: [
                    {
                        headTitle: 'مغامرة استثنائية في جبال القوقاز وقابالا الخلابة',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) بين الطبيعة الساحرة والمغامرات',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة في منتجع جبلي 4 نجوم",
                    "إفطار يومي بوفية مفتوح",
                    "النقل من باكو إلى قابالا",
                    "رحلات سفاري في الجبال",
                    "زيارة بحيرة نوها",
                    "جولة في حديقة قابالا للمغامرات",
                    "مرشد سياحي متخصص",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "معدات التسلق والمغامرات",
                    "التأمين الطبي",
                    "الوجبات غير المذكورة",
                ]
            },
            {
                id: "برنامج-اذربيجان-الشامل",
                destinationId: "azerbaijan",
                type: "فاخر",
                location: "أذربيجان",
                title: "برنامج أذربيجان الشامل",
                duration: "9 ايام",
                stars: 5,
                price: 4299,
                image: "https://avatars.mds.yandex.net/i?id=63c37cb6e71e8883a3de3dc7d557707b9b59251b-6630857-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=eea257fcbe9fb07c877afd9b06929e1c7303e174-10877308-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=dc42181a2981ad0061d40377a04bc0c73998cc3558351c38-4230375-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=0b0d33639a2ab6c97e21de6283b7acd8aeb1347c-5116917-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=52048f7737a5d2f837adb458165244c7538150aa-10878209-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'رحلة شاملة تجمع بين حضارة باكو وسحر الطبيعة الأذربيجانية',
                        description: '',
                    },
                    {
                        headTitle: '9 أيام (8 ليالي) في أجمل مدن ومناطق أذربيجان',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة في فنادق 5 نجوم",
                    "إفطار يومي بوفية مفتوح",
                    "سيارة فاخرة خاصة مع سائق",
                    "التنقلات بين جميع المدن",
                    "زيارة باكو القديمة وأبراج اللهب",
                    "رحلة إلى قابالا وشيكي",
                    "جولة في قرية لاهيج التراثية",
                    "زيارة معبد النار في سوراخاني",
                    "مرشد سياحي باللغة العربية",
                    "خدمة عملاء 24/7",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "المشروبات والوجبات غير المذكورة",
                    "النفقات الشخصية",
                    "تذاكر دخول المواقع السياحية",
                    "التأمين الطبي",
                ]
            },
            // جورجيا
            {
                id: "برنامج-تبليسي-الكلاسيكي",
                destinationId: "georgia",
                type: "مميز",
                location: "جورجيا",
                title: "برنامج تبليسي الكلاسيكي",
                duration: "6 ايام",
                stars: 5,
                price: 2599,
                image: "https://avatars.mds.yandex.net/i?id=b46de22d9a36727e56ffb3c364849cabd98596c8-11444350-images-thumbs&n=13", // يفضل استخدام صورة لجسر السلام الزجاجي
                images: [
                    "https://avatars.mds.yandex.net/i?id=c6b904a5ca1e12e1993946c111e731728fb7760d-4662512-images-thumbs&n=13", // صورة للمدينة القديمة
                    "https://avatars.mds.yandex.net/i?id=f2bccd71db0f4e56daf5dc6813fd99725ff0e38a-9741114-images-thumbs&n=13", // صورة لقلعة ناريكالا
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXsoXeiTHuXPKeRJwxQmSkys-bOwCkgtKUg8RxCAV16ozzOAwqTHHqve8FtXc_3PVEuekykBKO1tGGvjyMoW1PEWITGxxkak3kiQDepkMwZEWWUuUcqx3fSt4ab9vRYCvZYaoY_A9_Myy70ymou56wEqb_YsRMEYFIE7B2DWDmRscl3B0crmZQ5YqEBKiSJrUPHZ8unSYaXoPe0SEfUi9hlKK3nTRP_fj29NWlKDYesFKoNSLOgxWLRhk_8wCq5oFPbRCWm-wnWuBPhQjg1uWwDleZZh5uFF-CXN2iExLioVIqsdw_R_MxNXAQIiW6EH9UY_znCEeZC0ccsnSIZS_DAWSaWB9q7VihB0LBZVXs8MAZF-DYJZxZwpOVbZifoCiSY73SM0f7vfG4EeBsuNj5FO30rAtC0caJHzQ2jKgqTs5lVZ_VLSMZ5Q8IBCnXLT3AU97u2e5SEMLfE26Z16thki91WjROfP30PhZgZbVcd9Qh-CqEjd1Hhtv_PUdr7YtPpViUm-5lkeVLDgSuWuCwydFYZl_o3d_M0hknW58pqVGlOhs3D7x5t7kaZq-8HDBS7vUkwU0UyEGXfPeP4-zPT6VRXZttqBwtC0nKbtcnsQock-EYZBUYjVyb79GR6-ERZXnd-c-4snG2k6nvMlB61uG05IAHGUNOn_18xqmmBglqE9jTpmURIItFSWDVKjJKGpEj3i3aXUudUGiW0eCmGeTwWLaFtHQ9edXrKnjQdZOmOW9PhRNHSBz0NI-u74ZA7BAf2mFglOrIScSnleB9x91T4B5pHxrJ3VRn2dIrIBPhsBV6jrZ8efIQ5Gp91HARoDVvh40TTkSf-LVC7upLi6udn1KtaJ0hjkFDJJws_sicVKzRqtLYyBIV7hfbIitcbDFZ8oh-9XH5WW1jthG-1GX1LEiM0oGN2Di2COngxc4rVA", // صورة لشارع روستافيلي
                    "https://avatars.mds.yandex.net/i?id=45450ff86d77c744a983a367869cccc0c6bafc49-8497600-images-thumbs&n=13", // صورة لحمامات أباناتوباني
                ],
                descriptions: [
                    {
                        headTitle: 'اكتشف سحر تبليسي العريقة بين الماضي والحاضر',
                        description: '',
                    },
                    {
                        headTitle: '6 أيام (5 ليالي) في عاصمة جورجيا الساحرة',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار تبليسي",
                    "الإقامة في فندق 5 نجوم وسط المدينة",
                    "إفطار يومي بوفية مفتوح",
                    "سيارة خاصة مع سائق",
                    "جولة في المدينة القديمة",
                    "زيارة قلعة ناريكالا التاريخية",
                    "رحلة إلى مدينة متسخيتا القديمة",
                    "خدمة عملاء بالعربي على مدار الساعة",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تذاكر دخول المتاحف والمواقع السياحية",
                    "الوجبات الأخرى غير المذكورة",
                ]
            },
            {
                id: "برنامج-باتومي-الساحلي",
                destinationId: "georgia",
                type: "عائلي",
                location: "جورجيا",
                title: "برنامج باتومي الساحلي",
                duration: "7 ايام",
                stars: 4,
                price: 2899,
                image: "https://avatars.mds.yandex.net/i?id=69c175d2333302bd5b87ed8938e1c5714423f279-9506109-images-thumbs&n=13", // يفضل استخدام صورة للواجهة البحرية
                images: [
                    "https://avatars.mds.yandex.net/i?id=d4233e73bcacbe0512df075ae2b9ee96d8985cd4-4825035-images-thumbs&n=13", // صورة للبرج الأبجدي
                    "https://avatars.mds.yandex.net/i?id=d314a4ae796f77417c6cd91f38ef34bd69a8eff3-4745534-images-thumbs&n=13", // صورة للشاطئ
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyWc4UKCSSu3OWfhd2wgnCl34zbrdRwFkYUAtFkiUX2ahmnbMx_WeX9r--G9TVrSGBEr_7mBAecUMEX-TyMZH2IVXNF0ZDsptTrAYhCLB4vtsoaG6wSN1bQA9gf9FzR6uNdJH1ddI70fXZzkSzncpS1V6fwo0cL28AOnTD-jCBgxoRllJsbIW1VZgYJiyzVYXJJVVHh0SrTGENa1C4T12Zj0KR9HXpEtHe5d5si7f0RuJ2nNysPx1BHTNw6-0khbI7AppGaUScl1i4ICIqu2eJ-CZiRJ1kskhNLVB3tlxLhblyqshuxjXGxffsbI-hwljBSbnVlBk2ew8oWOLoB5qULQ6_RVB-poxBlgA7KYZEt9YTaGOcQIJwfS1yRKV8TIydeYjRbP4U6sniz1u3r9tQ0n2v4qgeCWQmN2Hn-CaxgR8FuHFRVYK0Rrk5Hyi0XLvTM0VHnXOgUGELb0SzZFKMuU-a6m_OJvD23v1fiLz3f_1ysPSvHj1JHTp7x_k2qYMBMo5Fd1-Yll6jBiMQgHWc2hFOZJNanVRsDG1VvXhil5Fqm_R08hLJ4d3bYJWO-FTfUrXkrx4abR81TfDYN7a4AwWSQnhototAkCU-Frp-vvIqR0WQW5JPVwx-eqVGRaqTU6reZM8VyOT17UyprP55-nuewbQjEHg8GnnE7jeEtDsNpE94cL2AWbcYKQ29UKPvKmpZsl20WmokTWOWe1yhhnmq43HRI-fa_cVcs6DbWN5muMCSOx9kGwZv08c7toMmDo1xT2-2j1ikDTcEvUCe0yVEQZpItW1aCEVChFRInIZtuvV5yRPk-t3FeIGs6V_rZq_3vyUpZjg2T_TqI5SdKim_fXJrq7xnqzo_A4BGuesBYGykfrBfehNnZqR5brihQq3Obt4S68bawkeks-lSw3qFzqkmD2wmBET72BalmR8GqWs", // صورة لحديقة الحب
                    "https://avatars.mds.yandex.net/i?id=89d7b0d5e321c835591c6ccfda4d723c64304e47-12523274-images-thumbs&n=13", // صورة للميناء القديم
                ],
                descriptions: [
                    {
                        headTitle: 'استمتع بالشواطئ الخلابة والأجواء العائلية في باتومي',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) على شواطئ البحر الأسود',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار باتومي",
                    "الإقامة في فندق 4 نجوم على الواجهة البحرية",
                    "إفطار يومي بوفية مفتوح",
                    "جولة في المدينة القديمة",
                    "رحلة إلى شلالات ماخونتسيتي",
                    "زيارة حديقة الحب وبرج الأبجدية",
                    "رحلة بحرية في البحر الأسود",
                    "مرشد سياحي باللغة العربية",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "الوجبات غير المذكورة",
                    "النشاطات المائية",
                    "التأمين الطبي",
                ]
            },
            {
                id: "برنامج-جورجيا-الشامل",
                destinationId: "georgia",
                type: "فاخر",
                location: "جورجيا",
                title: "برنامج جورجيا الشامل",
                duration: "10 ايام",
                stars: 5,
                price: 4599,
                image: "https://avatars.mds.yandex.net/i?id=ab84c38f25e253a0df439dd9b7aa7a35f97a2738-10146555-images-thumbs&n=13", // يفضل استخدام صورة لجبال القوقاز
                images: [
                    "https://avatars.mds.yandex.net/i?id=202dc2a07bed3e3bf2702849d4ddb66e82bb2cc7-10590187-images-thumbs&n=13", // صورة لكنيسة جيرجيتي
                    "https://avatars.mds.yandex.net/i?id=9a4c2740c8f46e340e10adafcde071d142761e1a-4382303-images-thumbs&n=13", // صورة لبحيرة ريتسا
                    "https://avatars.mds.yandex.net/i?id=68b08629ab8d10a7241dc15c06e24aea41ad6bc0-5234281-images-thumbs&n=13", // صورة لمدينة سيغناغي
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXs9CLSTK7SnDfEtxwQfIkHo_bOEGxQwfVwcZx3cXjPk3y7Izr2DB8b-zHtvVrSeDEr_7mBAecUMEX-TyMZH2IVXNF0ZDsptTrAYhCLB4vtsoaG6wSN1bQA9gf9FzR6uNdJH1ddI70fXZzkSzncpS1V6fwo0cL28AOnTD-jCBgxoRllJsbIW1VZgYJiyzVYXJJVVHh0SrTGENa1C4T12Zj0KR9HXpEtHe5d5si7f0RuJ2nNysPx1BHTNw6-0khbI7AppGaUScl1i4ICIqu2eJ-CZiRJ1kskhNLVB3tlxLhblyqshuxjXGxffsbI-hwljBSbnVlBk2ew8oWOLoB5qULQ6_RVB-poxBlgA7KYZEt9YTaGOcQIJwfS1yRKV8TIydeYjRbP4U6sniz1u3r9tQ0n2v4qgeCWQmN2Hn-CaxgR8FuHFRVYK0Rrk5Hyi0XLvTM0VHnXOgUGELb0SzZFKMuU-a6m_OJvD23v1fiLz3f_1ysPSvHj1JHTp7x_k2qYMBMo5Fd1-Yll6jBiMQgHWc2hFOZJNanVRsDG1VvXhil5Fqm_R08hLJ4d3bYJWO-FTfUrXkrx4abR81TfDYN7a4AwWSQnhototAkCU-Frp-vvIqR0WQW5JPVwx-eqVGRaqTU6reZM8VyOT17UyprP55-nuewbQjEHg8GnnE7jeEtDsNpE94cL2AWbcYKQ29UKPvKmpZsl20WmokTWOWe1yhhnmq43HRI-fa_cVcs6DbWN5muMCSOx9kGwZv08c7toMmDo1xT2-2j1ikDTcEvUCe0yVEQZpItW1aCEVChFRInIZtuvV5yRPk-t3FeIGs6V_rZq_3vyUpZjg2T_TqI5SdKim_fXJrq7xnqzo_A4BGuesBYGykfrBfehNnZqR5brihQq3Obt4S68bawkeks-lSw3qFzqkmD2wmBET72BalmR8GqWs", // صورة لقصر تبليسي
                ],
                descriptions: [
                    {
                        headTitle: 'رحلة شاملة تجمع بين أجمل مدن ومناطق جورجيا',
                        description: '',
                    },
                    {
                        headTitle: '10 أيام (9 ليالي) من المغامرات والاستجمام',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة في فنادق 5 نجوم",
                    "إفطار يومي بوفية مفتوح",
                    "سيارة فاخرة خاصة مع سائق",
                    "التنقلات بين جميع المدن",
                    "زيارة تبليسي وباتومي وكازبيجي",
                    "رحلة إلى مدينة سيغناغي التاريخية",
                    "زيارة بحيرة ريتسا",
                    "جولة في كهوف برومته",
                    "رحلة إلى كنيسة جيرجيتي",
                    "مرشد سياحي باللغة العربية",
                    "خدمة عملاء 24/7",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "المشروبات والوجبات غير المذكورة",
                    "النفقات الشخصية",
                    "تذاكر دخول المواقع السياحية",
                    "التأمين الطبي",
                ]
            },
            // اوروبا
            {
                id: "برنامج-باريس-الرومانسي",
                destinationId: "europe",
                type: "رومانسي",
                location: "فرنسا",
                title: "برنامج باريس الرومانسي",
                duration: "7 ايام",
                stars: 5,
                price: 4999,
                image: "https://avatars.mds.yandex.net/i?id=6a49022577f09c22c76387985ca8cceb138c2c0baca9388c-13083210-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=20446b9b2c94d66acec63476e18c34b682656110-5235718-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=5587e9bf5ffb2eb1ba467f366778acdfccb2b4bc-4914134-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=76b1374d9f40ca700fa8b366654396f07c2382d1-5336359-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=0794bd2a63c8bb60f54df90d54517a65af56705c-8185493-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'اكتشف سحر مدينة النور والرومانسية',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) في أجمل مدن العالم',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار شارل ديغول",
                    "الإقامة في فندق 5 نجوم قرب الشانزليزيه",
                    "إفطار يومي فاخر",
                    "تذكرة صعود برج إيفل",
                    "رحلة نهرية على نهر السين",
                    "جولة في قصر فرساي",
                    "زيارة متحف اللوفر مع مرشد",
                    "خدمة عملاء بالعربي",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تأشيرة شنغن",
                    "المشروبات والوجبات غير المذكورة",
                ]
            },
            {
                id: "برنامج-روما-التاريخي",
                destinationId: "europe",
                type: "ثقافي",
                location: "إيطاليا",
                title: "برنامج روما التاريخي",
                duration: "6 ايام",
                stars: 5,
                price: 3999,
                image: "https://avatars.mds.yandex.net/i?id=4003f3c7b178a39922ba36fb7635a123bfa2d874-5161097-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=4b65014f16155bc7d56634f6f478a7a0c501eeda-9107157-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=15863e066339d887e197222987ff6a17e7cfab0895527053-12831946-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXspCLS7D4ifAfxcizlXClnkzPbYAxQsfBAsSwi9G3fszmLJh-2GRpL-8FtLTqyKHEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyC8pAKiSWu3DEexckwVSTwXo-OLRUygoXV15Bw3UT3qotyr8zqmaXq7_jQoKD_2aeS77jlBUIJA8dR6rxbtPjEDe9ZVtDvIhYtAA9OJZflMcxKGm6XaxnDwdcZbdiS52-TZX0ZtQUyMPr2miFhdNBx1SC-5c9OFALE1TCyiqIpjoYiktdd6KPfLctBiqbYr3wPV5-m1-nSGY7Rle1VEucvna89E3oBOD7weR8sq3QX-Z3sNWKNDx4HAdQ8-s5hLI_MJNpUFeai3q_HwobmFW-6h1Herd_nG9oKFBLg2RwoKVZm-NW-jbg_9fSYpGS9VbeUZvvmC8UcRkkT9X9NaGxBgqpckl5upJ5gjw0Na1fmes5d0KHf75cewhXQqdvUrmnYbrPWu8V18fZy2qCpuNh4lak8LEwLXQJBWTAzz6mhQchjUpOVoO2eLAkODCNcr3qClVim1mjXG0QSUKDWUCCpFGI1WXTJ9P4yudFran8d-VWkN2KPTdUCBV8wtEJkLEhK5doVky8ikCEDR85r3me5CNoZpZeoU1jDHlZq3xBnL9tvOxy0AHs5fjobo-J-WflVrf5iDIBYykUY_nTPoy2Lhy5dUh_n5dGvgY9EZRwv-ciZ32tXrJiezJeZKlFcLavULvtd_g3wNna7kOqoNJC_mu97KsdNVcfFFH16za6uy4Esn5RWKKAXbkoIAyUXaPFJEFokHaBe0gPR2-8b3CLuk6NwknwH9DD1stijr30Q9hzsvCMASNANhhjwvY1k4UZG7lxUEu3nlS5OB0wm3O77TFAX6BaiVpaIFNSvHtgnbJWvcFp0B_08dr5Zbu943T1bYTyrzEDZxsAQdz6EqGJJB-kQm9EgJZThD46CL9XltMHRW2AQat-eg11dptUd6alQbzOVdcYy9TF-WiToclN426i-LEDCGgpNXDYzz23nzksr2w",
                ],
                descriptions: [
                    {
                        headTitle: 'رحلة عبر التاريخ في العاصمة الإيطالية الخالدة',
                        description: '',
                    },
                    {
                        headTitle: '6 أيام (5 ليالي) في قلب الحضارة الرومانية',
                        description: '',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة في فندق 5 نجوم وسط روما",
                    "إفطار يومي",
                    "تذاكر دخول الكولوسيوم",
                    "جولة في الفاتيكان",
                    "زيارة نافورة تريفي",
                    "جولة طعام إيطالي تقليدي",
                ],
                notIncluded: [
                    "تذاكر الطيران",
                    "تأشيرة شنغن",
                    "المصروفات الشخصية",
                ]
            },
            {
                id: "برنامج-برشلونة-الممتع",
                destinationId: "europe",
                type: "عائلي",
                location: "إسبانيا",
                title: "برنامج برشلونة الممتع",
                duration: "7 ايام",
                stars: 4,
                price: 3799,
                image: "https://avatars.mds.yandex.net/i?id=c1c35dc5a47b8ad0f05eaa9f3ce0a386731234cd-5471545-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=7dbb6e299a1a6f376cd171bc2de10861217a925f-7012723-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=dd3e822add63632a4817efb4a29b903b35e8a007-9214169-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=8f7452b43115fbf67932aa386a49fdd58a5c6eaf-12805659-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=e4f53f42e69c2fb404464c3d6be7dd51d7c233d5-8237885-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'عش أجواء المتعة والترفيه في برشلونة',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) من المرح العائلي',
                        description: '',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في المطار",
                    "الإقامة في فندق 4 نجوم",
                    "إفطار يومي",
                    "تذاكر حديقة بورت أفنتورا",
                    "جولة في ساغرادا فاميليا",
                    "زيارة حديقة غويل",
                    "جولة في شارع لارامبلا",
                ],
                notIncluded: [
                    "تذاكر الطيران",
                    "تأشيرة شنغن",
                    "الوجبات غير المذكورة",
                ]
            },
            {
                id: "برنامج-سويسرا-الطبيعي",
                destinationId: "europe",
                type: "مغامرات",
                location: "سويسرا",
                title: "برنامج سويسرا الطبيعي",
                duration: "8 ايام",
                stars: 5,
                price: 5999,
                image: "https://avatars.mds.yandex.net/i?id=09232bde4810cfdc6c8fc73389cb2db0677acc17-10851049-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=718e2e6761f65fca37f9793c14bd9376698b711048ddc559-12505840-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyW5oRICjBvyLKKER3xQPCw3w_b7BRwFpMUA1BwHcS3qk4zb5h_TOXob-_F9XdqCCGEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                    "https://avatars.mds.yandex.net/i?id=347688f0a7cfd17e40525180d309aeca756c8648-10236181-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=7671d74c677a3ddd48b347d6ba5d638b42e6c45c-11401793-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'مغامرة في جبال الألب السويسرية',
                        description: '',
                    },
                    {
                        headTitle: '8 أيام (7 ليالي) بين انترلاكن وزيورخ',
                        description: '',
                    },
                ],
                included: [
                    "الاستقبال في مطار زيورخ",
                    "الإقامة في فنادق 5 نجوم",
                    "تذاكر قطار جبل يونغفراو",
                    "رحلة بحيرة لوسيرن",
                    "جولة في شلالات تروملباخ",
                    "رحلة قمة تيتليس",
                    "باس سويسري للقطارات",
                ],
                notIncluded: [
                    "تذاكر الطيران",
                    "تأشيرة شنغن",
                    "معدات التزلج",
                ]
            },
            {
                id: "برنامج-اليونان-الساحلي",
                destinationId: "europe",
                type: "شواطئ",
                location: "اليونان",
                title: "برنامج اليونان الساحلي",
                duration: "9 ايام",
                stars: 5,
                price: 4599,
                image: "https://avatars.mds.yandex.net/i?id=d8b7a776c23fc446d8b9b7086d9b85e7a345d9f6-11483609-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=0c730edb7b9aeb57bdafd6f46780a725324dd442-12518569-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=36eed5264db8aabf868cc5279583a2f7dfc1d74a-10879920-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=298623c28c218356647c2faa6ef9f5d66a2e93a7-11003961-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=9c16a472a8136b8f08ad5eddc2df3553e0f77208-10603993-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'جولة بين أجمل الجزر اليونانية',
                        description: '',
                    },
                    {
                        headTitle: '9 أيام (8 ليالي) في سانتوريني وميكونوس',
                        description: '',
                    },
                ],
                included: [
                    "النقل بين الجزر",
                    "الإقامة في فنادق 5 نجوم",
                    "رحلات بحرية",
                    "جولة غروب في سانتوريني",
                    "زيارة الشواطئ الذهبية",
                    "عشاء يوناني تقليدي",
                    "جولة في أثينا القديمة",
                ],
                notIncluded: [
                    "تذاكر الطيران",
                    "تأشيرة شنغن",
                    "الرياضات المائية",
                ]
            },
            {
                id: "برنامج-النمسا-الكلاسيكي",
                destinationId: "europe",
                type: "ثقافي",
                location: "النمسا",
                title: "برنامج فيينا الكلاسيكي",
                duration: "6 ايام",
                stars: 5,
                price: 3899,
                image: "https://avatars.mds.yandex.net/i?id=ab9ca6d5c0f4d4c042fba08639381db72305dd52-5291460-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=0693abf3abe5e141b2a2ce356393480d350ff83e-8341807-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=2c94d93fecdb4544a480087c6ad74dcbe1f40ac4-5875863-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=b9df395a2973b1f484530f591a1d17a9f39f0610ae05d8af-12532313-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXphFIS-V7neXeBd4wwiRx303OeFRxVxOAQ8YlyQTiPk1zLQ3pjWR8b--HtfUqSaKEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                ],
                descriptions: [
                    {
                        headTitle: 'رحلة في عاصمة الموسيقى الكلاسيكية',
                        description: '',
                    },
                    {
                        headTitle: '6 أيام (5 ليالي) في فيينا الساحرة',
                        description: '',
                    },
                ],
                included: [
                    "الاستقبال في مطار فيينا",
                    "الإقامة في فندق 5 نجوم",
                    "حفل موسيقي كلاسيكي",
                    "زيارة قصر شونبرون",
                    "جولة في المتحف الوطني",
                    "رحلة إلى غابة فيينا",
                    "تذوق الحلويات النمساوية",
                ],
                notIncluded: [
                    "تذاكر الطيران",
                    "تأشيرة شنغن",
                    "المشروبات",
                ]
            },
            {
                id: "برنامج-هولندا-المميز",
                destinationId: "europe",
                type: "مميز",
                location: "هولندا",
                title: "برنامج أمستردام المميز",
                duration: "7 ايام",
                stars: 4,
                price: 3699,
                image: "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXcpHLizA6HfKekZzzlDIw3s0PeVWkFseV14Xwi4T2qgwzrJm_THBova7HtOGryOLEuekzkVCO1tEGvjyMoW1PEWITGxxkak3kiQDepkMwZEWWUuUcqx3fSt4ab9vRYCvZYaoY_A9_Myy70ymou56wEqb_YsRMEYFIE7B2DWDmRscl3B0crmZQ5YqEBKiSJrUPHZ8unSYaXoPe0SEfUi9hlKK3nTRP_fj29NWlKDYesFKoNSLOgxWLRhk_8wCq5oFPbRCWm-wnWuBPhQjg1uWwDleZZh5uFF-CXN2iExLioVIqsdw_R_MxNXAQIiW6EH9UY_znCEeZC0ccsnSIZS_DAWSaWB9q7VihB0LBZVXs8MAZF-DYJZxZwpOVbZifoCiSY73SM0f7vfG4EeBsuNj5FO30rAtC0caJHzQ2jKgqTs5lVZ_VLSMZ5Q8IBCnXLT3AU97u2e5SEMLfE26Z16thki91WjROfP30PhZgZbVcd9Qh-CqEjd1Hhtv_PUdr7YtPpViUm-5lkeVLDgSuWuCwydFYZl_o3d_M0hknW58pqVGlOhs3D7x5t7kaZq-8HDBS7vUkwU0UyEGXfPeP4-zPT6VRXZttqBwtC0nKbtcnsQock-EYZBUYjVyb79GR6-ERZXnd-c-4snG2k6nvMlB61uG05IAHGUNOn_18xqmmBglqE9jTpmURIItFSWDVKjJKGpEj3i3aXUudUGiW0eCmGeTwWLaFtHQ9edXrKnjQdZOmOW9PhRNHSBz0NI-u74ZA7BAf2mFglOrIScSnleB9x91T4B5pHxrJ3VRn2dIrIBPhsBV6jrZ8efIQ5Gp91HARoDVvh40TTkSf-LVC7upLi6udn1KtaJ0hjkFDJJws_sicVKzRqtLYyBIV7hfbIitcbDFZ8oh-9XH5WW1jthG-1GX1LEiM0oGN2Di2COngxc4rVA",
                images: [
                    "https://avatars.mds.yandex.net/i?id=ecbc6ec98f7fea165bdea6cedb3375b5-5523828-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=6f33510c3ee65d68b3b813fa990db9426e6b4395-8326073-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=a4fc0f6c1d79ab7e98da5c42c9e9a25c724df961-8496612-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=2aefc3c1e536a20980cecb22af3b68bc24ae4469-8552056-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'اكتشف سحر المدينة العائمة',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) في أمستردام وضواحيها',
                        description: '',
                    },
                ],
                included: [
                    "الاستقبال في المطار",
                    "الإقامة في فندق 4 نجوم",
                    "رحلة القنوات المائية",
                    "زيارة حقول التوليب",
                    "جولة في قرية زانس سخانس",
                    "متحف فان غوخ",
                    "رحلة دراجات في المدينة",
                ],
                notIncluded: [
                    "تذاكر الطيران",
                    "تأشيرة شنغن",
                    "التأمين الطبي",
                ]
            },
            {
                id: "برنامج-التشيك-السياحي",
                destinationId: "europe",
                type: "سياحي",
                location: "التشيك",
                title: "برنامج براغ السياحي",
                duration: "6 ايام",
                stars: 4,
                price: 3299,
                image: "https://avatars.mds.yandex.net/i?id=27ba28b92a82cf78ea8efd1022e6509b5bf2724b-8486953-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=1ef07e51ecf8abd19592af487d81c69d24a16b8e-10517487-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=0d58867f85fffd2e5fa15466e74cd52140a6d8e3-11944133-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyCp0QLXnAuyLGKhclxlPJkHwwOLNTwVkWU1sXkCUSiqhhybY2-2WWoL-7HdfTryaFBvv_lBYcZx1dQ_nqPoCjaQmRVCJyzusirBYyALVuv_AAQUObSZJWSwdHDpJ5SbGUIJvlRdkkzODnx0SRgtFR2G-vxr4RGks6BFzF8j2okx0Nn0dKSYqwZ4Y5BS6zWqH3JEJuoFufa2IwS3iFWEu6u0mn_3fbEszh5_xtkantQfBXhfiqJjJIJCV_99wgoZc1GotDe2iZvHODERwMvnqZ8yJKXKxqnFxhKmthgXRrgZxHtOlr7SL33fzTSoay_3PwU5POtAUNbS0dWdzmMrq_PB-oXF1-lZlwuismF6dUueohd3-SRKlWRitPUblEa6OvVJTuYskp1cT-62uqvupQx2ud17wWOXsaIV7j-RulhjkPiXdITJ6eRLsAAi-ge4DOIEVnnkGJe2IqfHOZWE2-r0KM8GLtH8f__dtZsIHWYsNUjvuTOTZkDCZe19QgqJwZDplvSlKpqHCdChgNuGG_8hhxTrlIq3BBJFVOnVVKvL5MkMB5xTrG4ebnbYmW1UT8Sbz0uBsWYRwmXvDwIqeqLi-YcHFQnrR3kj02EKZSnO8eS0WbYJB5YCdUQYZuSq-RVK7nRMcD98v22mqIk_1y0HWe8pU-P0o5PWP65QGInhoZmEJ9aJaCepIlPRu_daH4BUxrhn2QVHwFUmeTU2KciGeT_k_SKff248Rcp631WsBvkte0GiJsOBt79fkmlIgNMJRwSnWVq0SlOjYUvma05gxMe7tBn3pkLUdmpGNOlKl1vOpy0j3n4OvcbKSN1VrkXZ7lsy8iew82ZcP7BaSoKh2MUlR5splImD4rJ4Fpg-4LcX2cebteSRNxY5ZDVbaNVZHMVvUS8Nv8y22rsdJd23iB5b4HPlE2IGbl8RuWoyUvuWM",
                    "https://avatars.mds.yandex.net/i?id=aa88fdc4d191486186f70c1e260a1d1d42dd6d7a-8497133-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'رحلة في مدينة الأبراج المئة',
                        description: '',
                    },
                    {
                        headTitle: '6 أيام (5 ليالي) في براغ الساحرة',
                        description: '',
                    },
                ],
                included: [
                    "الاستقبال في المطار",
                    "الإقامة في فندق 4 نجوم",
                    "زيارة قلعة براغ",
                    "جولة في المدينة القديمة",
                    "رحلة إلى كارلوفي فاري",
                    "جولة في جسر تشارلز",
                    "عشاء تشيكي تقليدي",
                ],
                notIncluded: [
                    "تذاكر الطيران",
                    "تأشيرة شنغن",
                    "المشروبات",
                ]
            },
            // المالديف
            {
                id: "برنامج-المالديف-العائلي",
                destinationId: "maldives",
                type: "عائلي",
                location: "المالديف",
                title: "برنامج المالديف العائلي",
                duration: "8 ايام",
                stars: 5,
                price: 9999,
                image: "https://avatars.mds.yandex.net/i?id=b1922f81405a2860453b11126176b406-3577053-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=69d35a1e9dbdb71e2435d4cf3671c568eb56aaef-5887217-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyUckRIC7LuHTFKhZxwVfBwC1gOrMCwgocVFlElHUQ1684xr83rWfBor-7H9bWryaEDPv_lBYcZx1dQ_nqPoCjaQmRVCJyzusirBYyALVuv_AAQUObSZJWSwdHDpJ5SbGUIJvlRdkkzODnx0SRgtFR2G-vxr4RGks6BFzF8j2okx0Nn0dKSYqwZ4Y5BS6zWqH3JEJuoFufa2IwS3iFWEu6u0mn_3fbEszh5_xtkantQfBXhfiqJjJIJCV_99wgoZc1GotDe2iZvHODERwMvnqZ8yJKXKxqnFxhKmthgXRrgZxHtOlr7SL33fzTSoay_3PwU5POtAUNbS0dWdzmMrq_PB-oXF1-lZlwuismF6dUueohd3-SRKlWRitPUblEa6OvVJTuYskp1cT-62uqvupQx2ud17wWOXsaIV7j-RulhjkPiXdITJ6eRLsAAi-ge4DOIEVnnkGJe2IqfHOZWE2-r0KM8GLtH8f__dtZsIHWYsNUjvuTOTZkDCZe19QgqJwZDplvSlKpqHCdChgNuGG_8hhxTrlIq3BBJFVOnVVKvL5MkMB5xTrG4ebnbYmW1UT8Sbz0uBsWYRwmXvDwIqeqLi-YcHFQnrR3kj02EKZSnO8eS0WbYJB5YCdUQYZuSq-RVK7nRMcD98v22mqIk_1y0HWe8pU-P0o5PWP65QGInhoZmEJ9aJaCepIlPRu_daH4BUxrhn2QVHwFUmeTU2KciGeT_k_SKff248Rcp631WsBvkte0GiJsOBt79fkmlIgNMJRwSnWVq0SlOjYUvma05gxMe7tBn3pkLUdmpGNOlKl1vOpy0j3n4OvcbKSN1VrkXZ7lsy8iew82ZcP7BaSoKh2MUlR5splImD4rJ4Fpg-4LcX2cebteSRNxY5ZDVbaNVZHMVvUS8Nv8y22rsdJd23iB5b4HPlE2IGbl8RuWoyUvuWM",
                    "https://avatars.mds.yandex.net/i?id=fc5e83b5f0f6ab1c3906c65198015a1472efcaf2-4210718-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=6e22f80dbdca351aed37813f32425b4da22ce81d-4500670-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'عطلة عائلية مميزة في جزر المالديف الساحرة',
                        description: '',
                    },
                    {
                        headTitle: '8 أيام (7 ليالي) من المتعة العائلية في جنة المحيط الهندي',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الفيلا العائلية',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال VIP في مطار ماليه",
                    "النقل بالطائرة المائية للمنتجع",
                    "إقامة في فيلا شاطئية عائلية",
                    "وجبات كاملة للعائلة",
                    "نادي ترفيهي للأطفال",
                    "رحلات عائلية يومية",
                    "ألعاب مائية وأنشطة ترفيهية",
                    "خدمة غرف 24 ساعة",
                    "جلسة تصوير عائلية مجانية",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "المشروبات الكحولية",
                    "النشاطات المائية الإضافية خارج البرنامج",
                    "جليسة أطفال",
                    "التأمين الطبي",
                ]
            },
            // إندونيسيا
            {
                id: "برنامج-بالي-الساحر",
                destinationId: "indonesia",
                type: "شهر-عسل",
                location: "إندونيسيا",
                title: "برنامج بالي الساحر",
                duration: "8 ايام",
                stars: 5,
                price: 5999,
                image: "https://avatars.mds.yandex.net/i?id=7655ddb43bc0c18dbac316a937ca3bcb7d667681-12752514-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=658f2efd9a97c56434ec379b3f051ef2bbc618cd-10414886-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=25b641ee4eaf1a849db5184d554c5a5bd604a40b-8497672-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=1e77bb9b329006213be3ac1cef5e8381ded5b60c-12884984-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=658f2efd9a97c56434ec379b3f051ef2bbc618cd-10414886-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'رحلة رومانسية في جزيرة الآلهة',
                        description: '',
                    },
                    {
                        headTitle: '8 أيام (7 ليالي) من السحر والجمال في بالي',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الجناح الرومانسي',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال في مطار دنباسار",
                    "إقامة في منتجع فاخر 5 نجوم",
                    "إفطار وعشاء يومي",
                    "زيارة معابد بالي الشهيرة",
                    "جلسات سبا للزوجين",
                    "رحلة إلى شلالات تيجينونجان",
                    "جولة في حقول الأرز في تيجالالانج",
                    "عشاء رومانسي على الشاطئ",
                    "رحلة بحرية لمشاهدة الغروب",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تأشيرة إندونيسيا",
                    "المشروبات الكحولية",
                    "النشاطات الإضافية غير المذكورة",
                    "التأمين الطبي",
                ]
            },
            {
                id: "برنامج-جاكرتا-وبالي",
                destinationId: "indonesia",
                type: "سياحي",
                location: "إندونيسيا",
                title: "برنامج جاكرتا وبالي",
                duration: "10 ايام",
                stars: 4,
                price: 4999,
                image: "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXslHISTG4ibGeRd2kwKSwC03aOQGwQ0aUA9CySMciv5myOUypzbBpL-_HdbTqieBEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                images: [
                    "https://avatars.mds.yandex.net/i?id=06a75b2571d80fd8dde3d9ddc64ed864cf8d0f81-8370529-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=f61a0657fb79d61aca96ebaf3ef3ce7c20f82657-6917174-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=34d0d9b2f2701e33b168863b344780b8df84fae7-4334445-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXcwWISWX6nKXeUp4lATFwSs2bOJTkQgeA1lEwnQS3a05x-BlrjaQoL-7H9rVrySDCPv_lBYcZx1dQ_nqPoCjaQmRVCJyzusirBYyALVuv_AAQUObSZJWSwdHDpJ5SbGUIJvlRdkkzODnx0SRgtFR2G-vxr4RGks6BFzF8j2okx0Nn0dKSYqwZ4Y5BS6zWqH3JEJuoFufa2IwS3iFWEu6u0mn_3fbEszh5_xtkantQfBXhfiqJjJIJCV_99wgoZc1GotDe2iZvHODERwMvnqZ8yJKXKxqnFxhKmthgXRrgZxHtOlr7SL33fzTSoay_3PwU5POtAUNbS0dWdzmMrq_PB-oXF1-lZlwuismF6dUueohd3-SRKlWRitPUblEa6OvVJTuYskp1cT-62uqvupQx2ud17wWOXsaIV7j-RulhjkPiXdITJ6eRLsAAi-ge4DOIEVnnkGJe2IqfHOZWE2-r0KM8GLtH8f__dtZsIHWYsNUjvuTOTZkDCZe19QgqJwZDplvSlKpqHCdChgNuGG_8hhxTrlIq3BBJFVOnVVKvL5MkMB5xTrG4ebnbYmW1UT8Sbz0uBsWYRwmXvDwIqeqLi-YcHFQnrR3kj02EKZSnO8eS0WbYJB5YCdUQYZuSq-RVK7nRMcD98v22mqIk_1y0HWe8pU-P0o5PWP65QGInhoZmEJ9aJaCepIlPRu_daH4BUxrhn2QVHwFUmeTU2KciGeT_k_SKff248Rcp631WsBvkte0GiJsOBt79fkmlIgNMJRwSnWVq0SlOjYUvma05gxMe7tBn3pkLUdmpGNOlKl1vOpy0j3n4OvcbKSN1VrkXZ7lsy8iew82ZcP7BaSoKh2MUlR5splImD4rJ4Fpg-4LcX2cebteSRNxY5ZDVbaNVZHMVvUS8Nv8y22rsdJd23iB5b4HPlE2IGbl8RuWoyUvuWM",
                ],
                descriptions: [
                    {
                        headTitle: 'اكتشف سحر إندونيسيا بين العاصمة وجزيرة الآلهة',
                        description: '',
                    },
                    {
                        headTitle: '10 أيام (9 ليالي) في أجمل مدن إندونيسيا',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال في مطار جاكرتا",
                    "الإقامة في فنادق 4 نجوم",
                    "التنقلات الداخلية بين المدن",
                    "إفطار يومي",
                    "جولة في جاكرتا القديمة",
                    "زيارة معبد بوروبودور",
                    "رحلة إلى بركان جبل باتور",
                    "جولة في شواطئ بالي",
                    "زيارة حديقة الحيوانات في بالي",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تأشيرة إندونيسيا",
                    "الوجبات غير المذكورة",
                    "النشاطات الإضافية",
                    "التأمين الطبي",
                ]
            },
            // تايلاند
            {
                id: "برنامج-بوكيت-الترفيهي",
                destinationId: "thailand",
                type: "ترفيهي",
                location: "تايلاند",
                title: "برنامج بوكيت الترفيهي",
                duration: "7 ايام",
                stars: 4,
                price: 3999,
                image: "https://avatars.mds.yandex.net/i?id=7c3ba6a2c0776b67c5bd505a6fa78c187caa382f-4885303-images-thumbs&n=13",
                images: [
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyDMgceC7G6yTFKkMiwlLHwHsza7RTlwAWAw4VxCMQi6g4ybY5qGTGor-7H9vTrSaKDPv_lBYcZx1dQ_nqPoCjaQmRVCJyzusirBYyALVuv_AAQUObSZJWSwdHDpJ5SbGUIJvlRdkkzODnx0SRgtFR2G-vxr4RGks6BFzF8j2okx0Nn0dKSYqwZ4Y5BS6zWqH3JEJuoFufa2IwS3iFWEu6u0mn_3fbEszh5_xtkantQfBXhfiqJjJIJCV_99wgoZc1GotDe2iZvHODERwMvnqZ8yJKXKxqnFxhKmthgXRrgZxHtOlr7SL33fzTSoay_3PwU5POtAUNbS0dWdzmMrq_PB-oXF1-lZlwuismF6dUueohd3-SRKlWRitPUblEa6OvVJTuYskp1cT-62uqvupQx2ud17wWOXsaIV7j-RulhjkPiXdITJ6eRLsAAi-ge4DOIEVnnkGJe2IqfHOZWE2-r0KM8GLtH8f__dtZsIHWYsNUjvuTOTZkDCZe19QgqJwZDplvSlKpqHCdChgNuGG_8hhxTrlIq3BBJFVOnVVKvL5MkMB5xTrG4ebnbYmW1UT8Sbz0uBsWYRwmXvDwIqeqLi-YcHFQnrR3kj02EKZSnO8eS0WbYJB5YCdUQYZuSq-RVK7nRMcD98v22mqIk_1y0HWe8pU-P0o5PWP65QGInhoZmEJ9aJaCepIlPRu_daH4BUxrhn2QVHwFUmeTU2KciGeT_k_SKff248Rcp631WsBvkte0GiJsOBt79fkmlIgNMJRwSnWVq0SlOjYUvma05gxMe7tBn3pkLUdmpGNOlKl1vOpy0j3n4OvcbKSN1VrkXZ7lsy8iew82ZcP7BaSoKh2MUlR5splImD4rJ4Fpg-4LcX2cebteSRNxY5ZDVbaNVZHMVvUS8Nv8y22rsdJd23iB5b4HPlE2IGbl8RuWoyUvuWM",
                    "https://avatars.mds.yandex.net/i?id=8f8c86e7f1cd9bfdd9ca2128bab9070e09d1a2b9-3410853-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=093f36e0a7d9f5801b379939cd36f3623ea2b3db15467bc8-12645552-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=e6e14b7086ad38d237dd11c2cf1040c556163aa5-5859290-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'متعة لا تنتهي في جزيرة بوكيت الساحرة',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) من المرح والترفيه',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال في مطار بوكيت",
                    "إقامة في منتجع شاطئي 4 نجوم",
                    "إفطار يومي",
                    "رحلة إلى جزيرة في في",
                    "سفاري في الغابة",
                    "عروض ترفيهية مسائية",
                    "رحلة تسوق في بوكيت",
                    "جولة في معالم المدينة",
                    "رحلة بحرية لمشاهدة الغروب",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تأشيرة تايلاند",
                    "الوجبات غير المذكورة",
                    "النشاطات المائية الإضافية",
                    "المشروبات الكحولية",
                ]
            },
            {
                id: "برنامج-بانكوك-وبتايا",
                destinationId: "thailand",
                type: "سياحي",
                location: "تايلاند",
                title: "برنامج بانكوك وبتايا",
                duration: "8 ايام",
                stars: 4,
                price: 3599,
                image: "https://avatars.mds.yandex.net/i?id=66b5d4f33105ba979fd6ee47a5e2c2d56286734b-4818367-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=7e0a239812ad698617432776f94325ca3d028352-3536087-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=98431badc45fe21eb0e248ef65409f2c2ef1f88b-4842773-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyUMgQfC7EvCDAKkZ4lFXAx302P-QHxgoaWwtBwi8W3fg3m7Y1_GiS9b-7H9vSoiKFC_v_lBYcZx1dQ_nqPoCjaQmRVCJyzusirBYyALVuv_AAQUObSZJWSwdHDpJ5SbGUIJvlRdkkzODnx0SRgtFR2G-vxr4RGks6BFzF8j2okx0Nn0dKSYqwZ4Y5BS6zWqH3JEJuoFufa2IwS3iFWEu6u0mn_3fbEszh5_xtkantQfBXhfiqJjJIJCV_99wgoZc1GotDe2iZvHODERwMvnqZ8yJKXKxqnFxhKmthgXRrgZxHtOlr7SL33fzTSoay_3PwU5POtAUNbS0dWdzmMrq_PB-oXF1-lZlwuismF6dUueohd3-SRKlWRitPUblEa6OvVJTuYskp1cT-62uqvupQx2ud17wWOXsaIV7j-RulhjkPiXdITJ6eRLsAAi-ge4DOIEVnnkGJe2IqfHOZWE2-r0KM8GLtH8f__dtZsIHWYsNUjvuTOTZkDCZe19QgqJwZDplvSlKpqHCdChgNuGG_8hhxTrlIq3BBJFVOnVVKvL5MkMB5xTrG4ebnbYmW1UT8Sbz0uBsWYRwmXvDwIqeqLi-YcHFQnrR3kj02EKZSnO8eS0WbYJB5YCdUQYZuSq-RVK7nRMcD98v22mqIk_1y0HWe8pU-P0o5PWP65QGInhoZmEJ9aJaCepIlPRu_daH4BUxrhn2QVHwFUmeTU2KciGeT_k_SKff248Rcp631WsBvkte0GiJsOBt79fkmlIgNMJRwSnWVq0SlOjYUvma05gxMe7tBn3pkLUdmpGNOlKl1vOpy0j3n4OvcbKSN1VrkXZ7lsy8iew82ZcP7BaSoKh2MUlR5splImD4rJ4Fpg-4LcX2cebteSRNxY5ZDVbaNVZHMVvUS8Nv8y22rsdJd23iB5b4HPlE2IGbl8RuWoyUvuWM",
                    "https://avatars.mds.yandex.net/i?id=8e2fc818fec087f6399bde74483667a4b268b7e3-5234693-images-thumbs&n=13",
                ],
                descriptions: [
                    {
                        headTitle: 'تجربة مميزة بين صخب بانكوك وشواطئ بتايا',
                        description: '',
                    },
                    {
                        headTitle: '8 أيام (7 ليالي) في أشهر مدن تايلاند',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والاحكام',
                    },
                ],
                included: [
                    "الاستقبال في مطار بانكوك",
                    "الإقامة في فنادق 4 نجوم",
                    "التنقل بين بانكوك وبتايا",
                    "إفطار يومي",
                    "جولة في معابد بانكوك",
                    "رحلة تسوق في الأسواق العائمة",
                    "زيارة القصر الملكي",
                    "رحلة إلى جزر بتايا",
                    "عشاء على البحر في بتايا",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي",
                    "تأشيرة تايلاند",
                    "الوجبات غير المذكورة",
                    "النشاطات الإضافية",
                    "التأمين الطبي",
                ]
            },
            // ألبانيا
            {
                id: "برنامج-البانيا-تيرانا",
                destinationId: "albania",
                type: "مميز",
                location: "ألبانيا",
                title: "برنامج ألبانيا تيرانا",
                duration: "7 أيام",
                stars: 5,
                price: 2599,
                image: "https://avatars.mds.yandex.net/i?id=f7872595879e2ac2101a7d5cb5cdcd585fb818d9-10250482-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=b50bb188b23c8f78eb32520cd9a13b8e4d1c81c5-10114046-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXJhFKCSW7yGVfkF4wgGWx3pnbOBRkgEeU10XxHUSiv1jn-Bhr2fB8L--G9rVrSaHEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                    "https://avatars.mds.yandex.net/i?id=1871cfc3b21b483796bad38cf9b2e6066dfbb8c6-12155438-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyXJhFKCSW7yGVfkF4wgGWx3pnbOBRkgEeU10XxHUSiv1jn-Bhr2fB8L--G9rVrSaHEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                ],
                descriptions: [
                    {
                        headTitle: 'سافر واستمتع معنا بقضاء إجازة رائعة في ألبانيا بين الطبيعة الخلابة والثقافة الفريدة',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) في ألبانيا بين جمال العاصمة تيرانا وسحر الريفيرا الألبانية',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والأحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار تيرانا الدولي",
                    "الإقامة الفندقية فنادق 4 نجوم",
                    "إفطار يومي بوفية مفتوح بالفندق",
                    "سيارة خاصة مع سائق محترف",
                    "التنقلات بين المدن الرئيسية",
                    "جولات سياحية لأهم المعالم في تيرانا، بيرات، وساراندا",
                    "خدمة عملاء بالعربية",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي (يمكنكم الحجز لدينا)",
                    "تذاكر دخول الأماكن السياحية وجميع ما لم يتم ذكره في العرض",
                ]
            },
            // جنوب افريقيا
            {
                id: "برنامج-جنوب-افريقيا-كيب-تاون",
                destinationId: "south-africa",
                type: "مميز",
                location: "جنوب إفريقيا",
                title: "برنامج جنوب إفريقيا كيب تاون",
                duration: "7 أيام",
                stars: 5,
                price: 3999,
                image: "https://avatars.mds.yandex.net/i?id=cb71a6f199a08c90b5302637a94a83dcaea72a29-9066604-images-thumbs&n=13",
                images: [
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyC8gXLS_BvnLEcEt4w1OUlHBgObAIwV1OUgxExCEW1q0tyr8wr2mRor_jQoKD_2aeS77jlBUIJA8dR6rxbtPjEDe9ZVtDvIhYtAA9OJZflMcxKGm6XaxnDwdcZbdiS52-TZX0ZtQUyMPr2miFhdNBx1SC-5c9OFALE1TCyiqIpjoYiktdd6KPfLctBiqbYr3wPV5-m1-nSGY7Rle1VEucvna89E3oBOD7weR8sq3QX-Z3sNWKNDx4HAdQ8-s5hLI_MJNpUFeai3q_HwobmFW-6h1Herd_nG9oKFBLg2RwoKVZm-NW-jbg_9fSYpGS9VbeUZvvmC8UcRkkT9X9NaGxBgqpckl5upJ5gjw0Na1fmes5d0KHf75cewhXQqdvUrmnYbrPWu8V18fZy2qCpuNh4lak8LEwLXQJBWTAzz6mhQchjUpOVoO2eLAkODCNcr3qClVim1mjXG0QSUKDWUCCpFGI1WXTJ9P4yudFran8d-VWkN2KPTdUCBV8wtEJkLEhK5doVky8ikCEDR85r3me5CNoZpZeoU1jDHlZq3xBnL9tvOxy0AHs5fjobo-J-WflVrf5iDIBYykUY_nTPoy2Lhy5dUh_n5dGvgY9EZRwv-ciZ32tXrJiezJeZKlFcLavULvtd_g3wNna7kOqoNJC_mu97KsdNVcfFFH16za6uy4Esn5RWKKAXbkoIAyUXaPFJEFokHaBe0gPR2-8b3CLuk6NwknwH9DD1stijr30Q9hzsvCMASNANhhjwvY1k4UZG7lxUEu3nlS5OB0wm3O77TFAX6BaiVpaIFNSvHtgnbJWvcFp0B_08dr5Zbu943T1bYTyrzEDZxsAQdz6EqGJJB-kQm9EgJZThD46CL9XltMHRW2AQat-eg11dptUd6alQbzOVdcYy9TF-WiToclN426i-LEDCGgpNXDYzz23nzksr2w",
                    "https://avatars.mds.yandex.net/i?id=16f0ceed8dc65bc9caef0d1959f04939-5288655-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyWM0WLX3L4yXEfEFzxQLEmygxOOYDywxLVwwRyHQT365lnedk-mLBo7-zF9fToyeEEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyUZ5CLCuVvCHDexZ3xgDHkyswOO0GlwobWwoUyCMc1_s5muRkpzPAoL--G9bRryOEEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                ],
                descriptions: [
                    {
                        headTitle: 'اكتشف جمال الطبيعة والحياة البرية في كيب تاون بجنوب إفريقيا',
                        description: '',
                    },
                    {
                        headTitle: '7 أيام (6 ليالي) بين المناظر الطبيعية الخلابة والشواطئ الذهبية',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والأحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار كيب تاون",
                    "الإقامة الفندقية فنادق 4 نجوم",
                    "إفطار يومي بوفية مفتوح بالفندق",
                    "سيارة خاصة مع سائق محترف",
                    "زيارة جبل الطاولة والشاطئ البوتيكي",
                    "رحلة إلى محمية الحياة البرية",
                    "خدمة عملاء بالعربية",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي (يمكنكم الحجز لدينا)",
                    "تذاكر دخول الأماكن السياحية وجميع ما لم يتم ذكره في العرض",
                ]
            },
            // صلالة
            {
                id: "برنامج-سلطنة-عمان-صلالة",
                destinationId: "salalah",
                type: "مميز",
                location: "سلطنة عمان",
                title: "برنامج سلطنة عمان صلالة",
                duration: "5 أيام",
                stars: 4,
                price: 1999,
                image: "https://avatars.mds.yandex.net/i?id=2f99a1c7e7c47e364743d87c2fc22ce972d38c4f-10767006-images-thumbs&n=13",
                images: [
                    "https://avatars.mds.yandex.net/i?id=7f4aa7a50c70c69883835c640e45eabcfe73ba34-5543432-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyWJpGKCTKv3CQfhdwk1LDlnpiPrMCxVkXAw5ExHUUi_44yL44-jaUpL-_HdTUqyGCEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                    "https://avatars.mds.yandex.net/i?id=db7a9af9f117cef86b8fba35ff8f486c2a1cef83-5362393-images-thumbs&n=13",
                    "https://yandex-images.clstorage.net/FE51c1e68/41cad4qS/_-JsLn8_hczYn-Zp1Gt_idEgMsABVDvvZsi7RyX81CeiTG7XPHK0N4lFWTkXo3PbMBkF4cAwYQySAX1qk4m-JhqTOV97--HNLQqy2CEr_7mBAecUMEX-TyMZH2LgWMH3chwulOrAgyA6h-ousOT0SsUZ1cShoRQ557e7HrZZ3DRus_0Obf4V2Fr95-40aG0Z8WMlYaG2P88RmhgioLn3dMZZmsZIM_HAWcYKXPDWJ_vlygdX0WZ1S_eXCeglmH8UTdP9Hm5MhdrpPOVttsuMWoPjFIOzhR0uwQpao9H5tGbXaVuGGrJj4IvFihyQVQc49fl3ZnNn5Qk1lLuYxKke1y7QTt_cvvSrWB_Fbfeo7biwEUQQMeeuj-C42jODyEYHt6sLtYkRwlEZJ4uMo4c02hap1RZhJOaKNZaYqfapbkVuYm9P_zzma5lN9h53SX05g1AnY_GUX31xS0pigdr3VJcbePWbo4HRa9QZzLCmtBpEqwdWchbEi_f3SKiXKI5HLQNM_8w_x8hqjtZdhnu_y3Oh1gOBlx2uwZroYpDbd3V0aBu3-wIj8Op36g8z5CZq1ou1ZpCFFMsnh2m4duuP9a9TXR5__IRZGry1rFVbTXlRoYcDgZVv7uFpixCAyoTFVxnbxwhwwiEJRdvfUESUSFU7J3agleV4l4ZbSfUJ_CWMwE-_fCz0SUg_12-Xey-rAzM1UjJFzrzTmshT4MmkBteauxcJ8HKQmzYKruA2dZmFOfa0gPeEK0UFatrG2GyU3mBMbi3PlrqovVZuN7l9uULhVUBTxT9-olupIXAKh3cHqCj0eADCYIoHW05wN3ZKRcsXNgGnl1hHxejL5CkvRN8hTQ6sTJaIqr1ULRd6XcoS4CYygiZfXJFZq1OhiKaXxdsIN6hBEVN69CvOA-cUOceJVeXix8R6RnfKieb7TQat0D6_3TyGe2rNJ99Gil0YkyKFo-IUP_1yeRuggtu20",
                ],
                descriptions: [
                    {
                        headTitle: 'استمتع بجمال الطبيعة الخضراء في صلالة خلال موسم الخريف',
                        description: '',
                    },
                    {
                        headTitle: '5 أيام (4 ليالي) من الراحة والاستجمام بين الجبال والشلالات',
                        description: '',
                    },
                    {
                        headTitle: 'السعر للشخص الواحد في الغرفة المزدوجة',
                        description: '',
                    },
                    {
                        headTitle: '',
                        description: '*البرنامج صالح للحجز لحين اكتمال الحجوزات',
                    },
                    {
                        headTitle: '',
                        description: '*تطبق الشروط والأحكام',
                    },
                ],
                included: [
                    "الاستقبال والتوديع في مطار صلالة",
                    "الإقامة الفندقية فنادق 4 نجوم",
                    "إفطار يومي بوفية مفتوح بالفندق",
                    "زيارة أبرز معالم صلالة: وادي دربات وشاطئ المغسيل",
                    "سيارة خاصة مع سائق",
                    "خدمة عملاء بالعربية",
                ],
                notIncluded: [
                    "تذاكر الطيران الدولي (يمكنكم الحجز لدينا)",
                    "تذاكر دخول الأماكن السياحية وجميع ما لم يتم ذكره في العرض",
                ]
            },
        ],
        testimonials: {
            title: "آراء العملاء",
            data: [
                {
                    gender: 'male',
                    name: "عبد العزيز سالم غنمى",
                    stars: 5,
                    comment: "شركة راقية ومحترمة مواعيدهم مظبوطة يعتنون بالعميل انا تعاملت مع السيد احمد حجاج مباشرة اؤجه له الشكر بشكل خاص لانه تعامل معي كأخ واختار اجمل الاماكن الجميلة وجدول كان مرتب وكل الشباب الي بالمكتب قمة بالرقي وخدومين والشباب الي اسبتقلونا بكل مدينة فعلاً يمثلون شركة راقية شكراً وكالة ةسرايا وشكرا استاذ احمد على خدماتك الي زي الفل تشبه اخلاقك الحلوة ❤️💐،"
                },
                {
                    gender: 'female',
                    name: "فاطمه ربيع",
                    stars: 5,
                    comment: "شكرا جدا سرايا علي حسن الاستقبال والتعامل والتعاون الجميل استخرجت الرخصة الدولية في اقل من ٥ دقائق وأخص بالشكر الأستاذ احمد حجاج"
                },
                {
                    gender: 'male',
                    name: "faysol amin faysol",
                    stars: 5,
                    comment: "ليس بالغريب على مكتب سرايا للسفر والسيباحة 👍سافرت معهم اكثر من مرة خدمة ممتازة وشفافيه وفنادق مميزه وسعة صدر كما يسرو لي مترجم لتسوق في البازار  🛒 بارك الله فيكم .... انتظر باذن الله تجهزون لنا برامج مميزه في بالي او تايلند "
                },
                {
                    gender: 'male',
                    name: "Omar Salim",
                    stars: 5,
                    comment: "أعطيناهم الميزانية المناسبة لنا، و رتبوا لنا رحلة لجورجيا على حسب الميزانية المطلوبة و الفنادق والاستقبال  كان مناسب لاحتياجاتنا. الفندق ممتاز و نظيف و خدمتهم رائعة و الأنشطة في الرحلة كانت مناسبة جدا للعائلة والأصدقاء . شكر استاذ احمد حجاج"
                },
                {
                    gender: 'female',
                    name: "latifah 77",
                    stars: 5,
                    comment: "اسعار وخدمة فوق الممتازة كانوا الاقل مقارنة بباقة الشركات وللامانه التنسيق معهم رائع جدا وانصح مره بتجربه السفر معهم ثقه فوق ما تتصورون وتم تنسيق رحلتي معاهم لدبي اسعارهم خياااااااااااال"
                },
                {
                    gender: 'male',
                    name: "Faruk",
                    stars: 5,
                    comment: "خدمة ممتازة واحترافيه ، تعامل راقي جدا 💛💛💚 ، احب اشكر الاستاذ والاخ احمد حجاج والاخ عبد القادر على ترتيبه لرحلتي لدولة النمسا ما قصر الله يعطيه العافيه من حجز فنادق وطيران وايجار سيارة رتب لي الرحلة كاملة بدون اي تقصير ف شكرا لوكالة سرايا  والاخ احمد حجاج💚"
                },
                {
                    gender: 'male',
                    name: "Abdul Razzaq",
                    stars: 5,
                    comment: "صراحة استمتعنا وكانت كل الرحلات ممتعة وجميلة والى لقاء آخر برحلة جديدة ان شاء الله ونحن في أتم الصحة والعافية 🙏🏻🌺👍🥇🏆"
                },
                {
                    gender: 'male',
                    name: "Mohamed Abd elzeem",
                    stars: 5,
                    comment: "واخص بالشكر للأستاذ/احمد حجاج والاستاذ عبالقادر على عمله الممتاز والدقة في العمل وسرعة الانجاز واستخرجت من عندهم رخصة قيادة دولية في اقل من 10 دقائق وسابقاً تم استخراج تأشيرة سفر في وقت قياسي. وحجوزات الفنادق مرتبة من كل شىء شكرا وكالة سرايا"
                },
                {
                    gender: 'male',
                    name: "محمود توفيق",
                    stars: 5,
                    comment: "سافرت النمسا مع شركة سرايا ، بصراحه بالرغم ان الوقت كان ضيق الا انهم رتبو كل شئ بكل احترافيه، فنادق وبرامج  الرحله الحمدلله كانت 10 ايام  ممتعة  جدا  🌹🌹 شكرا جزيلا لهم وبالاخص الاخ  احمد حجاج - على الاحترافيه العاليه، والتواصل المستمر للتاكد على سير الرحله اثناء تواجدنا بالنمسا ، سرعه فى الاستجابة  ومصداقيه عاليه شكرا لكم. 💙❣️"
                },
                {
                    gender: 'male',
                    name: "Ahmed Haseb",
                    stars: 5,
                    comment: "بتكلم بكل صراحة تواصلت مع استاذ احمد عن طريق الواتساب بلغته إني ابغي رحلة لجورجيا لمدة ٧ ليالي 💚😘 ضبط هو لي الجدول كاملا، نزلت من المطار السايق لقيته منتظرنى معه ورقة باسم زوجتي ومستقبلنا بالورد تمت الرحلة بأحلى  أحلى مما كنت  أتوقع، يعطيهم ألف عافية، ماقصروا بكل شي 💛😘💚"
                },
                {
                    gender: 'male',
                    name: "Hossain Hossain",
                    stars: 5,
                    comment: "تجربتي معاهم ممتازة جدا  ولله الحمد استخرجو لي التاشيره النمساويه في اسبوعين.. وايضا الاخ عبد القادر مو اول مره اتعامل معه.. . وانا شاكر له بصراحه"
                },
            ]
        },
        blogs: [
            {
                id: 'افضل-وجهات-السفر-في-يناير',
                title: 'أفضل وجهات السفر في يناير ٢٠٢٥',
                excerpt: 'تعرف على أفضل وجهات السفر في يناير ٢٠٢٥',
                image: './assets/images/4.webp',
                date: '13/12/2024',
                descriptions: [
                    {
                        headTitle: 'أفضل وجهات السفر في يناير 2025: هروبك الشتوي المنتظر!',
                        description: 'قالت بعض الروح الحكيمة ذات مرة: “الشتاء ليس موسمًا ؛ إنه احتفال”. قد تكون السماء أكثر رمادية قليلاً ، لكن العالم لا يزال يقدم العديد من الألوان. بالنسبة لأولئك الذين يبحثون عن المغامرة والدفء ، يبقى السؤال: ما أفضل وجهات السفر التي يجب زيارتها في شهر يناير؟ يقول المثل القائل “لا تكن سائحًا ، بل كن مسافرًا”. ومع ذلك ، في اللحظة التي نخرج فيها من مناطق الراحة لدينا ، ألا نتوق جميعًا للسياحة لالتقاط سحر كل وجهة؟ احزموا أحزمة الأمان ، أيها المغامرون الأعزاء ، لدينا وجهات استثنائية لبدء 2025 بأسلوب أنيق.',
                    },
                    {
                        headTitle: 'أفضل وجهات السفر في يناير 2025: هروبك الشتوي المنتظر!',
                        description: 'تبحث عن وجهات السفر الدافئة هربًا من برد الشتاء القارس، أم أنك تفضل تجربة أجواء احتفالية فريدة؟ مهما كانت تفضيلاتك، فإن شهر يناير يقدم لك مجموعة متنوعة من الخيارات التي تناسب جميع الأذواق والميزانيات.',
                    },
                    {
                        headTitle: 'جزر المالديف',
                        description: 'لماذا المالديف؟ إذا كنت تبحث عن الاسترخاء التام والخصوصية، فإن جزر المالديف هى احدى وجهات السفر المناسبة لك. استمتع بالشواطئ البيضاء الرملية والمياه الفيروزية الصافية، وقم بالغطس أو الغوص واكتشف عالمًا تحت الماء ساحرًا. ماذا تفعل؟ الاسترخاء على الشاطئ، الغوص والغطس، زيارة الجزر المحلية، الاستمتاع بوجبات العشاء الرومانسية على ضوء الشموع.',
                    },
                    {
                        headTitle: 'تایلاند',
                        description: 'لماذا تايلاند؟ تتميز تايلاند بثقافتها الغنية وتنوعها، وتقدم تجربة سفر لا تُنسى. استمتع بزيارة المعابد القديمة، وتذوق الأطعمة الشهيّة، واستكشف الأسواق المحلية. ماذا تفعل؟ زيارة بانكوك، استكشاف الجزر، زيارة المعابد، التسوق، الاستمتاع بالحياة الليلية',
                    },
                    {
                        headTitle: 'دبي',
                        description: '  لماذا دبي؟ دبي هي وجهة عالمية تجمع بين الترفيه والتسوق والفخامة. استمتع بزيارة الأبراج الشاهقة، والحدائق المائية، والتسوق في أكبر مراكز التسوق في العالم. ماذا تفعل؟ زيارة برج خليفة، التسوق في دبي مول، الاستمتاع بالأنشطة المائية، زيارة متحف المستقبل.',
                    },
                    {
                        headTitle: 'سويسرا (وجهة للتزلج)',
                        description: 'لماذا سويسرا؟ سويسرا هي وجهة مثالية لمحبي التزلج، حيث تتميز بمنتجعاتها الشتوية الفاخرة ومنحدراتها المغطاة بالثلوج.',
                    },
                    {
                        headTitle: 'بالي، إندونيسيا',
                        description: 'لماذا بالي؟ جزيرة بالي هي ملاذ مثالي للاسترخاء واليوجا والتأمل. يمكنك الاستمتاع بالشواطئ الخلابة، والمعابد القديمة، والحياة الليلية الصاخبة.',
                    },
                    {
                        headTitle: 'فيتنام',
                        description: 'لماذا فيتنام؟ تتميز فيتنام بتاريخها الغني وثقافتها الفريدة. يمكنك استكشاف هانوي وهوشي منه وساحل دانانج، والاستمتاع بالمأكولات اللذيذة.',
                    },
                    {
                        headTitle: 'نصائح إضافية لمساعدتك في اختيار وجهات السفر المناسبة لك',
                        description: 'فكر في نوع الإجازة التي تريدها هل تبحث عن الاسترخاء، المغامرة، الثقافة، أو مزيج من كل هذه العناصر؟',
                    },
                    {
                        headTitle: 'حدد ميزانيتك  تختلف تكاليف السفر من وجهة إلى أخرى.',
                        description: '',
                    },
                    {
                        headTitle: 'ابحث عن افضل وقت للسفر قد تختلف أسعار الفنادق وتكاليف الرحلات الجوية حسب الموسم',
                        description: '',
                    },
                    {
                        headTitle: 'تحقق من متطلبات التأشيرة تأكد من أن لديك جميع المستندات اللازمة للسفر إلى وجهتك المختارة.',
                        description: '',
                    },
                ],
            },
            {
                id: 'افضل-5-اماكن-لشهر-العسل-في-اوروبا',
                title: 'أفضل 5 أماكن لقضاء شهر العسل في أوروبا',
                excerpt: 'اكتشف أجمل الوجهات الرومانسية في أوروبا لقضاء شهر عسل لا يُنسى',
                image: './assets/images/6.webp',
                date: '17/12/2024',
                descriptions: [
                    {
                        headTitle: 'رحلة رومانسية في قلب أوروبا',
                        description: 'تعد أوروبا وجهة مثالية لقضاء شهر العسل، حيث تجمع بين السحر التاريخي والرومانسية والفخامة. سنأخذكم في جولة لاكتشاف أجمل 5 وجهات أوروبية تضمن لكم شهر عسل لا يُنسى.'
                    },
                    {
                        headTitle: 'سانتوريني، اليونان: جوهرة البحر المتوسط',
                        description: 'تُعد سانتوريني من أجمل الجزر اليونانية وأكثرها رومانسية. استمتع بالإقامة في فنادق بوتيك مع مسابح لا متناهية تطل على البحر، وشاهد أجمل غروب شمس في العالم. تجول في الشوارع المرصوفة بالحصى البيضاء، واستمتع بتذوق النبيذ المحلي في مزارع الكروم العريقة.'
                    },
                    {
                        headTitle: 'باريس، فرنسا: مدينة الحب والأنوار',
                        description: 'لا تكتمل قائمة الوجهات الرومانسية بدون باريس. زر برج إيفل ليلاً، استمتع بجولة بحرية رومانسية في نهر السين، تناول العشاء في مطعم ميشلان، وتجول في حدائق قصر فرساي التاريخية. اختر الإقامة في فنادق بوتيك في الحي اللاتيني أو قرب الشانزليزيه.'
                    },
                    {
                        headTitle: 'البندقية، إيطاليا: مدينة القنوات والرومانسية',
                        description: 'استمتع برحلة في القوارب الخشبية التقليدية (الغندول) عبر القنوات المائية، زر ساحة سان ماركو التاريخية، واستمتع بالمطبخ الإيطالي الأصيل. اختر الإقامة في قصور تاريخية تم تحويلها إلى فنادق فاخرة تطل على القنال الكبير.'
                    },
                    {
                        headTitle: 'إنترلاكن، سويسرا: رومانسية بين الجبال',
                        description: 'مدينة ساحرة تقع بين بحيرتين وتحيط بها جبال الألب. استمتع برحلات التلفريك إلى قمة يونغفراو، تنزه في المروج الخضراء، وجرب رياضات المغامرات معاً. الإقامة في شاليهات جبلية تقليدية تضيف سحراً خاصاً لتجربتكم.'
                    },
                    {
                        headTitle: 'مايوركا، إسبانيا: جنة البحر المتوسط',
                        description: 'جزيرة ساحرة تجمع بين الشواطئ الخلابة والجبال والقرى التقليدية. استمتع بالإقامة في منتجعات فاخرة، اكتشف القرى الجبلية الصغيرة، وجرب رحلات اليخوت الخاصة حول الجزيرة.'
                    }
                ]
            },
            {
                id: 'اهم-الاماكن-السياحية-في-موستار',
                title: 'أهم الأماكن السياحية التي تستحق زيارتك في موستار',
                excerpt: 'اكتشف سحر مدينة موستار التاريخية وأهم معالمها السياحية',
                image: 'https://avatars.mds.yandex.net/i?id=f6694db41c9f812263fb9b92b79d96c444f17913-5879172-images-thumbs&n=13',
                date: '18/12/2024',
                descriptions: [
                    {
                        headTitle: 'موستار: لؤلؤة البوسنة والهرسك',
                        description: 'تعد مدينة موستار من أجمل مدن البوسنة والهرسك، حيث تجمع بين التاريخ العريق والثقافة الغنية. تشتهر المدينة بجسرها التاريخي الشهير وتراثها العثماني الفريد.'
                    },
                    {
                        headTitle: 'جسر موستار القديم: أيقونة المدينة',
                        description: 'يعد جسر موستار القديم (ستاري موست) رمزاً للمدينة وأحد مواقع التراث العالمي لليونسكو. بُني الجسر في القرن السادس عشر، وتم إعادة بنائه بعد الحرب. شاهد القفزات التقليدية من الجسر واستمتع بالمناظر الخلابة لنهر نيريتفا.'
                    },
                    {
                        headTitle: 'البلدة القديمة وسوق كوجونجيلوك',
                        description: 'تجول في أزقة البلدة القديمة المرصوفة بالحجارة، واكتشف السوق التقليدي كوجونجيلوك. استمتع بالتسوق للحرف اليدوية والتذكارات التقليدية، وجرب المأكولات البوسنية الأصيلة في المطاعم المحلية.'
                    },
                    {
                        headTitle: 'جامع قوسقي مهمد باشا',
                        description: 'يعد من أجمل المساجد العثمانية في البوسنة والهرسك، بُني في القرن السابع عشر. استمتع بمشاهدة العمارة العثمانية الفريدة والزخارف الإسلامية الجميلة.'
                    },
                    {
                        headTitle: 'متحف الهرسك',
                        description: 'يوثق المتحف تاريخ المنطقة وثقافتها، مع معروضات تغطي الفترات التاريخية المختلفة. شاهد المجموعات الأثرية والفنية التي تحكي قصة المدينة.'
                    }
                ]
            },
            {
                id: 'افضل-وجهات-للسفر-في-موسم-الخريف',
                title: 'أفضل وجهات للسفر في موسم الخريف',
                excerpt: 'اكتشف أجمل الوجهات السياحية خلال موسم الخريف',
                image: 'https://avatars.mds.yandex.net/i?id=0ad6b9615d4886803b137d1921938ff4473dd5da-4078138-images-thumbs&n=13',
                date: '19/12/2024',
                descriptions: [
                    {
                        headTitle: 'سحر الخريف حول العالم',
                        description: 'يعد موسم الخريف من أجمل أوقات السنة للسفر، حيث تتزين الطبيعة بألوان ذهبية وحمراء ساحرة، ويكون الطقس معتدلاً في معظم الوجهات.'
                    },
                    {
                        headTitle: 'كيوتو، اليابان',
                        description: 'تتحول كيوتو في الخريف إلى لوحة فنية مع أشجار القيقب الحمراء. زر معابد كينكاكوجي وريوانجي، واستمتع بحدائق الزن التقليدية. شاهد عروض الشاي التقليدية واحتفالات الخريف اليابانية.'
                    },
                    {
                        headTitle: 'إسطنبول، تركيا',
                        description: 'يعد الخريف وقتاً مثالياً لزيارة إسطنبول، حيث يكون الطقس معتدلاً والمدينة أقل ازدحاماً. استكشف آيا صوفيا والمسجد الأزرق، واستمتع بجولة بحرية في مضيق البوسفور.'
                    },
                    {
                        headTitle: 'بافاريا، ألمانيا',
                        description: 'شاهد قلعة نويشفانشتاين وسط غابات الخريف الملونة، واستمتع بمهرجان أكتوبرفست الشهير. زر القرى البافارية التقليدية واستمتع بالمأكولات الألمانية الشتوية.'
                    },
                    {
                        headTitle: 'نصائح للسفر في الخريف',
                        description: 'احرص على حجز رحلاتك مبكراً، وخاصة خلال مواسم المهرجانات. اختر ملابس مناسبة للطقس المتقلب، واحمل معك مظلة. استفد من أسعار السفر المنخفضة خارج موسم الذروة.'
                    }
                ]
            },
            {
                id: 'السياحة-في-بيهاتش',
                title: 'السياحة في بيهاتش، البوسنة والهرسك',
                excerpt: 'دليلك الشامل لاكتشاف مدينة بيهاتش التاريخية',
                image: 'https://avatars.mds.yandex.net/i?id=63a73947d0db92a27d32147b0b0709b010bec932cae5fe94-4569757-images-thumbs&n=13',
                date: '20/12/2024',
                descriptions: [
                    {
                        headTitle: 'بيهاتش: جوهرة البوسنة الخفية',
                        description: 'تقع مدينة بيهاتش على ضفاف نهر أونا، وتتميز بتاريخها العريق وطبيعتها الخلابة. تجمع المدينة بين التراث العثماني والطبيعة الساحرة.'
                    },
                    {
                        headTitle: 'قلعة بيهاتش القديمة',
                        description: 'تعد القلعة من أهم المعالم التاريخية في المدينة، بُنيت في العصور الوسطى وتوفر إطلالات رائعة على المدينة ونهر أونا. استكشف أسوار القلعة وتعرف على تاريخها العريق.'
                    },
                    {
                        headTitle: 'شلالات نهر أونا',
                        description: 'يضم نهر أونا مجموعة من الشلالات الرائعة، أشهرها شلال شتربački بوك. يمكنك ممارسة رياضة التجديف والرافتينج، أو الاستمتاع بنزهة على ضفاف النهر.'
                    },
                    {
                        headTitle: 'المتحف الإقليمي',
                        description: 'يعرض المتحف تاريخ المنطقة وثقافتها، مع مجموعة من القطع الأثرية والتاريخية. تعرف على تاريخ بيهاتش عبر العصور المختلفة.'
                    },
                    {
                        headTitle: 'حديقة أونا الوطنية',
                        description: 'تقع الحديقة بالقرب من بيهاتش وتضم مناظر طبيعية خلابة وشلالات متعددة. استمتع بالمشي لمسافات طويلة وركوب الدراجات واستكشاف الطبيعة البكر.'
                    }
                ]
            }
        ],
    },
};

export default appData;