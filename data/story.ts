export interface Story {
    id: string;
    from: string;
    date: string;
    img: string;
    seen: boolean;
    name: string;
}

export const stories: Story[] = [
    {
        id: '1',
        from: 'Andrew Tate',
        date: 'Today, 10:30 AM',
        img: 'https://ui-avatars.com/api/?name=Andrew+Tate&background=0D8ABC&color=fff&size=200',
        seen: false,
        name: 'Andrew Tate',
    },
    {
        id: '2',
        from: 'Bill Gates',
        date: 'Today, 9:00 AM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/bill-gates.png',
        seen: false,
        name: 'Bill Gates',
    },
    {
        id: '3',
        from: 'Alex Hormozi',
        date: 'Yesterday, 8:45 PM',
        img: 'https://ui-avatars.com/api/?name=Alex+Hormozi&background=FF5722&color=fff&size=200',
        seen: true,
        name: 'Alex Hormozi',
    },
    {
        id: '4',
        from: 'Iman Gadzhi',
        date: 'Yesterday, 6:00 PM',
        img: 'https://ui-avatars.com/api/?name=Iman+Gadzhi&background=2196F3&color=fff&size=200',
        seen: true,
        name: 'Iman Gadzhi',
    },
    {
        id: '5',
        from: 'Elon Musk',
        date: 'Yesterday, 4:20 PM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        seen: true,
        name: 'Elon Musk',
    },
    {
        id: '6',
        from: 'Mike Tyson',
        date: 'Yesterday, 2:00 PM',
        img: 'https://ui-avatars.com/api/?name=Mike+Tyson&background=E91E63&color=fff&size=200',
        seen: true,
        name: 'Mike Tyson',
    },
    {
        id: '7',
        from: 'Jeff Bezos',
        date: 'Yesterday, 11:15 AM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.png',
        seen: true,
        name: 'Jeff Bezos',
    },
    {
        id: '8',
        from: 'Mark Zuckerberg',
        date: 'Yesterday, 9:30 AM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
        seen: true, 
        name: 'Mark Zuckerberg',
    },
    {
        id: '9',
        from: 'Paul Graham',
        date: 'Yesterday, 8:00 AM',
        img: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg',
        seen: true, 
        name: 'Paul Graham',
    },
];
