export interface Message {
    id: string;
    text: string;
    createdAt: string;
    isMyMessage: boolean;
}

export interface Chanel {
    id: string;
    from: string;
    date: string;
    img: string;
    msg: string;
    read: boolean;
    unreadCount: number;
}

export const chanels: Chanel[] = [
    {
        id: '1',
        from: 'Intelligence artificel',
        date: 'Yesterday',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Artificial_Intelligence_Concept_Art.webp/640px-Artificial_Intelligence_Concept_Art.webp.png',
        msg: 'I am buying WhatsApp next! 🚀',
        read: false,
        unreadCount: 2,
    },
    {
        id: '2',
        from: 'Marketing digital',
        date: '10:30 AM',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Digital_Marketing_Collaboration_2015-12-29_%28Unsplash%29.jpg/640px-The_Digital_Marketing_Collaboration_2015-12-29_%28Unsplash%29.jpg',
        msg: 'Can you lend me $5?',
        read: true,
        unreadCount: 0,
    },
    {
        id: '3',
        from: 'Big data',
        date: 'Yesterday',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Big_Data.png/640px-Big_Data.png',
        msg: 'I am buying WhatsApp next! 🚀',
        read: true,
        unreadCount: 2,
    },
    {
        id: '4',
        from: 'Developpement mobile',
        date: 'Yesterday',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/MobileApplications.jpg/640px-MobileApplications.jpg',
        msg: 'I am buying WhatsApp next! 🚀',
        read: false,
        unreadCount: 2,
    },
    {
        id: '5',
        from: 'Elon Musk',
        date: 'Yesterday',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        msg: 'I am buying WhatsApp next! 🚀',
        read: false,
        unreadCount: 2,
    },
    {
        id: '6',
        from: 'Real Madrid',
        date: 'Yesterday',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/200px-Real_Madrid_CF.svg.png',
        msg: 'I am buying WhatsApp next! 🚀',
        read: false,
        unreadCount: 2,
    },
    {
        id: '7',
        from: 'Idee de business',
        date: '11:00 AM',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/How_to_start_great_startup.jpg/640px-How_to_start_great_startup.jpg',
        msg: 'Amazon delivery for you',
        read: true,
        unreadCount: 0,
    },
    {
        id: '8',
        from: 'Mark Zuckerberg',
        date: '2:00 PM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
        msg: 'Metaverse is the future!',
        read: false,
        unreadCount: 5,
    },
    {
        id: '9',
        from: 'Paul Graham',
        date: '1:00 PM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg',
        msg: 'React Native is awesome!',
        read: true,
        unreadCount: 0,
    },
];
