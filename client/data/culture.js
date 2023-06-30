const cultureList = {
    2: {
        name: 'Brahmin/Chhetri',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-k2cTu22DVqg%2FVXIIinDce0I%2FAAAAAAAAALs%2Fy1hpYYqFa44%2Fs1600%2Foncover.jpg&f=1&nofb=1&ipt=1e68bcb14b7da770c9f5cba5fc5716d4e3911e41f2f596e57a45fb42cb113976&ipo=images',
        origin: [
            [83.6987, 28.178], //parbat
            [83.0361, 27.9829], // argakhachi
            [83.8049, 28.0197], //syanga
            [84.3542, 27.5291], //'Chitwan',
            [84.0167, 28.2622], //'Kaski',
            [83.2934, 28.0889], //'Gulmi',
            [87.8942, 26.6398], //'Jhapa',
            [84.0331, 27.6568],
        ],
    },
    0: {
        name: 'Newari',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5l_9_rQVl33CIykiAxuvyQHaFj%26pid%3DApi&f=1&ipt=e82927c232955ceecf5792981c09fe61e4b9061eb135c0c69d03ab2313efaeb5&ipo=images',
        origin: [
            [85.324, 27.7172],
            [85.4298, 27.671],
            [83.6348, 27.8253],
        ],
        description:
            'The Newars are an ethnic group native to the Kathmandu Valley and are known for their elaborate wood carvings, metalwork, and traditional festivals. The Newars have a rich history, dating back to the time of the ancient kingdoms in the Kathmandu Valley, and are known for their distinctive architecture and art. The Newars are also famous for their traditional food, which is a fusion of Nepalese, Tibetan, and Indian cuisine.',
    },
    1: {
        name: 'Tharu',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa2%2F64%2F64%2Fa264642a6a0f0064c691193159eeec01.jpg&f=1&nofb=1&ipt=39387052b9962f667ce94a61111652f5c46e1f8b6ca949df7beca5e6a336f35e&ipo=images',
        origin: [
            [85.0649, 27.1341], //'Bara',
            [85.3136, 27.0487], //'Rautahat',
            [86.3525, 26.7333], //'Siraha',
            [86.7014, 26.6173], //'Saptari',
            [87.1822, 26.6276], //'Sunsari',
            [87.4604, 26.6799], //'Morang',
            [81.4279, 28.3102], //'Bardiya',
            [80.8092, 28.7413], //'Kailali',
            [80.3213, 28.8372], //'Kanchanpur',
            [81.7787, 28.1461], //'Banke',
            [83.0469, 27.5518], //'Kapilvastu',
            [83.4463, 27.5924], //'Rupendahi',
        ],
        description:
            'The Tharu people are an ethnic group indigenous to the Terai in southern Nepal and northern India. They speak Tharu languages. They are recognized as an official nationality by the Government of Nepal. In the Indian Terai',
    },
    3: {
        name: 'Gurung',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F63%2Fc0%2F64%2F63c064ac062d431e7a6bb1f3f573d132.jpg&f=1&nofb=1&ipt=81e25b212ca98613ba3411f9a3501e875b5105e2674d1060cbfc8eb760d61a1a&ipo=images',
        origin: [
            [84.2308, 28.6918], //'Manang',
            [84.3542, 28.2765], //'Lamjung',
            [83.8473, 28.9985], //mustang
            [84.7925, 28.2512], //gorkha
            [84.0167, 28.2622], // kaski
        ],
        description:
            'The Gurungs are an ethnic group native to the western region of Nepal and are known for their hospitality and bravery. They have a rich tradition of music and dance and are famous for the Ghantu dance, which is performed during festivals and celebrations. The Gurungs are also known for their traditional woven textiles and handicrafts, which are popular among tourists visiting Nepal.',
    },
    4: {
        name: 'Magar',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-iMPXxy1m9Ao%2FUaxqxPw4yKI%2FAAAAAAAAACs%2FOcPIDEbKXwE%2Fs1600%2FWindows%2BPhoto%2BViewer%2BWallpaper.jpg&f=1&nofb=1&ipt=2ec49410117f1bb8b0047729019cfcec4f120cf994682c987c236b31418b7592&ipo=images',
        description: `The Magar, also spelled as Mangar, and Mongar, are ethnolinguistic groups indigenous to Western Nepal and Northeast India, representing 7.1% of Nepal's total population according to the 2011 Nepal census. The original home of the Magar people was to the west of Gandaki river and, roughly speaking, consisted of that portion of Nepal which lies between and around about Gulmi, Arghakhanchi, and Palpa`,
        origin: [
            [83.2201, 28.3491], //baglung
            [83.8049, 28.0197], //syanja
            [82.8548, 28.6641], //rukum
            [84.2279, 27.9447], //tanahun
            [83.3362, 28.6029], //myagdi
            [83.2934, 28.0889], //gulmi
            [82.6483, 28.3816], //rolpa
        ],
    },
}

export { cultureList }
