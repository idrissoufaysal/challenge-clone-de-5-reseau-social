    export interface Message {
        id: string;
        text: string;
        createdAt: string;
        isMyMessage: boolean;
    }

    export interface Chat {
        id: string;
        from: string;
        date: string;
        img: string;
        msg: string;
        read: boolean;
        unreadCount: number;
        messages: Message[];
    }

    export const chats: Chat[] = [
        {
            id: '1',
            from: 'Andrew Tate',
            date: 'Yesterday',
            img: 'https://ui-avatars.com/api/?name=Andrew+Tate&background=0D8ABC&color=fff&size=200',
            msg: 'I am buying WhatsApp next! 🚀',
            read: false,
            unreadCount: 2,
            messages: [
                { id: '1', text: 'Hey Andrew, what is up?', createdAt: '10:00 AM', isMyMessage: true },
                { id: '2', text: 'I am buying WhatsApp next! 🚀', createdAt: '10:05 AM', isMyMessage: false },
            ]
        },
        {
            id: '2',
            from: 'Bill Gates',
            date: '10:30 AM',
            img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/bill-gates.png',
            msg: 'Can you lend me $5?',
            read: true,
            unreadCount: 0,
            messages: [
                { id: '1', text: 'Hi Bill', createdAt: '10:00 AM', isMyMessage: true },
                { id: '2', text: 'Can you lend me $5?', createdAt: '10:30 AM', isMyMessage: false },
            ]
        },
        {
            id: '3',
            from: 'Alex Hormozi',
            date: 'Yesterday',
            img: 'https://ui-avatars.com/api/?name=Alex+Hormozi&background=FF5722&color=fff&size=200',
            msg: 'I am buying WhatsApp next! 🚀',
            read: true,
            unreadCount: 2,
            messages: [
                { id: '1', text: 'Gym launch is going great', createdAt: '10:00 AM', isMyMessage: false },
            ]
        },
        {
            id: '4',
            from: 'Iman Gadzhi',
            date: 'Yesterday',
            img: 'https://ui-avatars.com/api/?name=Iman+Gadzhi&background=2196F3&color=fff&size=200',
            msg: 'I am buying WhatsApp next! 🚀',
            read: false,
            unreadCount: 2,
            messages: []
        },
        {
            id: '5',
            from: 'Elon Musk',
            date: 'Yesterday',
            img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            msg: 'I am buying WhatsApp next! 🚀',
            read: false,
            unreadCount: 2,
            messages: []
        },
        {
            id: '6',
            from: 'Mike Tyson',
            date: 'Yesterday',
            img: 'https://ui-avatars.com/api/?name=Mike+Tyson&background=E91E63&color=fff&size=200',
            msg: 'I am buying WhatsApp next! 🚀',
            read: false,
            unreadCount: 2,
            messages: []
        },
        {
            id: '7',
            from: 'Jeff Bezos',
            date: '11:00 AM',
            img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.png',
            msg: 'Amazon delivery for you',
        read: true,
        unreadCount: 0,
        messages: []
    },
    {
        id: '8',
        from: 'Mark Zuckerberg',
        date: '2:00 PM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
        msg: 'Metaverse is the future!',
        read: false,
        unreadCount: 5,
        messages: []
    },
    {
        id: '9',
        from: 'Paul Graham',
        date: '1:00 PM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg',
        msg: 'React Native is awesome!',
        read: true,
        unreadCount: 0,
        messages: []
    },
];
